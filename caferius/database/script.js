const topicsContainer = document.getElementById('topicsContainer');
const itemsContainer = document.getElementById('itemsContainer');
const totalItemsCount = document.getElementById('totalItemsCount');

let topics;
let items;

async function get_topics() {
	return topics ??= await fetch('./topics.json').then(resposne => resposne.json());
}

async function get_items() {
	return items ??= await fetch('./items.json').then(resposne => resposne.json());
}

// Ana sayfayı doldur - Topics
async function populateTopics() {
	for (const topic of topics) {
		const button = document.createElement('button');
		button.innerHTML = `<span>${topic["Topic Name"]}</span>`;
		button.style.backgroundImage = `url('${topic.Button}')`;
		button.classList.add('topic-button');
		button.addEventListener('click', () => showItemsByTopic(topic.ID));
		topicsContainer.appendChild(button);
	}
}

// Event sayfalarını doldur
async function populateEvents() {
	const items = await get_items();

	const eventsSet = new Set(items.map(item => item.Event));

	for (const event of eventsSet) {
		const button = document.createElement('button');

		button.innerText = event;
		button.addEventListener('click', () => showItemsByEvent(event));
		itemsContainer.appendChild(button);
	}
}

// Bir topic'e göre item'ları göster
function showItemsByTopic(topicId) {
	const filteredItems = items.filter(item =>
		item["Growtopia Forums Link"] &&
		item["Growtopia Forums Link"].split(',').map(id => id.trim()).includes(topicId)
	);
	displayItems(filteredItems);
}

// Bir event'e göre item'ları göster
function showItemsByEvent(eventName) {
	const filteredItems = items.filter(item => item.Event === eventName);
	displayItems(filteredItems);
}

// Filtrelenmiş item'ları tablo olarak göster
function displayItems(filteredItems) {
	const itemList = document.getElementById('itemList');
	itemList.innerHTML = ''; // Önceki içerikleri temizle

	for (const item of filteredItems) {
		const row = document.createElement('div');

		row.classList.add('item-row');
		row.innerHTML = `
            <img src="${item['Item Texture']}" alt="${item.Name}" width="50">
            <div>
                <h4 class="${item.isSuggested === 0 ? 'name-green' : item.isSuggested === 1 ? 'name-blue' : 'name-orange'}">${item.Name}</h4>
                <p>Release Date: ${item['Release Date']}</p>
                <p>Event: ${item.Event}</p>
            </div>
        `;
		row.addEventListener('click', () => showItemDetails(item));
		itemList.appendChild(row);
	}
}

function showItemDetails(item) {
	const detailsContent = document.getElementById('detailsContent');

	let content = `
    <div class="item-detail-header">
        <img src="${item["Item Texture"]}" alt="${item.Name}" width="100">
        <h2 class="item-name">${item.Name}</h2>
    </div>
    <p>${item["Item Desc"] || 'No Info.'}</p>
    <p><strong>Release Date:</strong> ${item["Release Date"]}</p>
    <p><strong>Event:</strong> ${item.Event}</p>
    <p><strong>Type:</strong> ${item["Item Type"] || 'N/A'}</p>
    <p><strong>Topics:</strong></p>
    `;

	// Growtopia Forums Link ile ilgili butonları ekle
	if (item["Growtopia Forums Link"]) {
		const ids = item["Growtopia Forums Link"].split(',').map(id => id.trim());
		content += '<div class="forum-buttons">';

		for (const id of ids) {
			const topic = topics.find(t => t.ID === id);

			if (topic) {
				content += `
                    <button onclick="window.open('${topic.Link}', '_blank')"
                            style="background-image: url('${topic.Button}');">
                        ${topic["Topic Name"]}
                    </button>
                `;
			}
			else {
				content += `<button disabled>Topic ${id} not found</button>`;
			}
		}

		content += '</div>';
	}

	// Gameplay Photos ve Description
	if (item["Gameplay Photos"] && item["Gameplay Photos"].length) {
		content += `<p><strong>Gameplay Photos:</strong></p>`;
		item["Gameplay Photos"].forEach(photo => {
			content += `<img src="${photo}" alt="Gameplay" style="width: 100px; margin: 5px;">`;
		});
	}
	if (item["Gameplay Photo Desc"]) {
		content += `<p>${item["Gameplay Photo Desc"]}</p>`;
	}

	// Duruma göre özel mesajlar
	if (item.isSuggested === 0) {
		content += `<p>This item was suggested on Growtopia Forums.</p>`;
	} else if (item.isSuggested === 1) {
		content += `
            <p>This item got added into Growtopia.</p>
            <p>Official Texture:</p>
            <img src="${item["Officially Added Item Texture"]}" alt="Official Texture" width="50">
        `;
	} else {
		content += `<p>This item didn't get suggested or is not planned to be suggested.</p>`;
	}

	// Detay içeriğini güncelle ve modal'ı göster
	detailsContent.innerHTML = content;
	document.getElementById('itemDetails').style.display = 'flex';
}


// ESC tuşu ile modal kapatma
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeItemDetailsWithAnimation();
	}
});

// x'e basınca kapa
const closeItemDetails = document.querySelector('.close');
if (closeItemDetails) {
	closeItemDetails.addEventListener('click', () => {
		closeItemDetailsWithAnimation();
	});
}

// Ekran dışına basınca kapa
document.addEventListener('click', (event) => {
	const itemDetails = document.getElementById('modalBackground');
	if (event.target.id === 'modalBackground') {
		closeItemDetailsWithAnimation();
	}
});

// Modal kapatma animasyonu
function closeItemDetailsWithAnimation() {
	const itemDetails = document.getElementById('itemDetails');
	itemDetails.classList.add('fade-out'); // Kapanma animasyonu başlat

	setTimeout(() => {
		itemDetails.style.display = 'none'; // Animasyon tamamlandıktan sonra kapat
		itemDetails.classList.remove('fade-out'); // Gelecek açılma için animasyonu kaldır
	}, 300); // Animasyon süresiyle uyumlu
}

// Modal açma animasyonu
function openItemDetailsWithAnimation() {
	const itemDetails = document.getElementById('itemDetails');

	if (!itemDetails) return; // Eğer modal bulunamazsa işlemi durdur

	itemDetails.style.display = 'flex'; // Modal görünür yap
	itemDetails.classList.add('fade-in'); // Açılma animasyonu başlat

	setTimeout(() => {
		itemDetails.classList.remove('fade-in'); // Animasyon sınıfını kaldır
	}, 300); // 300ms animasyon süresi
}

// Başlangıçta topics ve events'i yükle
window.onload = async () => {
	await get_topics();
	await get_items();

	totalItemsCount.innerText = `Total items in database: ${items.length}`;

	populateTopics();
	populateEvents();
}