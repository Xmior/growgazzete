// script.js (defol)

const itemTable = document.getElementById('itemTable');
const itemDetails = document.getElementById('itemDetails');
const detailsContent = document.getElementById('detailsContent');
const closeModal = document.querySelector('.close');

// tablo kodu
items.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${item['Item Texture']}" alt="${item.Name}" width="50"></td>
        <td class="${item.isSuggested === 0 ? 'name-green' : item.isSuggested === 1 ? 'name-blue' : 'name-orange'}">${item.Name}</td>
        <td>${item['Release Date']}</td>
        <td><a href="/events/${item.Event}">${item.Event}</a></td>
    `;
    row.addEventListener('click', () => showDetails(item));
    closeModalWithAnimation();
    itemTable.appendChild(row);
});

// Detay kutusu içeriği vb
function showDetails(item) {
    let content = `
    <div class="item-detail-header">
        <img src="${item["Item Texture"]}" alt="${item.Name}" width="100">
        <h2 class="item-name">${item.Name}</h2>
    </div>
    <p>${item["Item Desc"] || 'No Info.'}</p>
    <p>Release Date: ${item["Release Date"]}</p>
    <p>Event: ${item.Event}</p>
    <p>Type: ${item["Item Type"] || 'N/A'}</p>
    <p>Topics:</p>
    `;

    // Id ile buton ve link bağlama (sigma rizz)
    if (item["Growtopia Forums Link"]) {
        const ids = item["Growtopia Forums Link"].split(',').map(id => id.trim());
        content += '<div class="forum-buttons">';
        ids.forEach(id => {
            const topic = topics.find(t => t.ID === id);
            if (topic) {
                content += `
                    <button onclick="window.open('${topic.Link}', '_blank')"
                            style="background-image: url('${topic.Button}');">
                        ${topic["Topic Name"]}
                    </button>
                `;
            } else {
                content += `<button disabled>Topic ${id} not found</button>`;
            }
        });
        content += '</div>';
    }

    content += `
        ${item["Gameplay Photos"].length ? `<p>Gameplay Photos: <img src="${item["Gameplay Photos"][0]}" alt="Gameplay"></p>` : ''}
        ${item["Gameplay Photo Desc"] ? `<p>${item["Gameplay Photo Desc"]}</p>` : ''}
        <p>${item.isSuggested === 0 ? 'This item suggested on Growtopia Forums.'
            : item.isSuggested === 1 ? `This item got added into Growtopia. <br><br> Official Texture: <img src="${item["Officially Added Item Texture"]}" alt="Official Texture" width="50">`
            : 'This item didn\'t get suggested or not gonna get suggested.'}</p>
    `;

    detailsContent.innerHTML = content;
    itemDetails.style.display = 'flex';
}

// ESC tuşu ile modal kapatma
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModalWithAnimation();
    }
});

// x'e basınca kapa
closeModal.addEventListener('click', () => {
    closeModalWithAnimation();
});

// ekran dışına basınca kapa
document.addEventListener('click', (event) => {
    if (event.target.id === 'modalBackground') {
        closeModalWithAnimation();
    }
});

// kapatma anim
function closeModalWithAnimation() {
    itemDetails.classList.add('fade-out'); // Animasyonu başlat
    setTimeout(() => {
        itemDetails.style.display = 'none'; // Animasyon tamamlandıktan sonra kapat
        itemDetails.classList.remove('fade-out'); // Gelecek açılma için animasyonu kaldır
    }, 300); // Animasyon süresiyle uyumlu
}

// açılma anim
function openModalWithAnimation() {
    itemDetails.classList.add('fade-in');
    setTimeout(() => {
        itemDetails.style.display = 'none';
        itemDetails.classList.remove('fade-in');
    }, 300); // Kodu kapanma anim'den kopyaladım çaktırma
}
