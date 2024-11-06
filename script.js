// CSS dosyasının yüklendiğini kontrol et
window.onload = function() {
  if (document.styleSheets) {
    console.log("CSS dosyası yüklendi.");
  } else {
    console.error("CSS dosyası yüklenemedi!");
  }
}

// Versiyon listelerini al
const version0list = [
  { version: "v0.92", android: "exist", icon: "icon0.png", appName: "App 1", extraInfo: "Info 1" },
  { version: "v0.93", android: "exist", icon: "icon1.png", appName: "App 2", extraInfo: "Info 2" }
];

const version1list = [
  { version: "v1.00", android: "exist", ios: "exist", icon: "icon2.png", appName: "App 3", extraInfo: "Info 3" }
];

// Diğer version listelerini buraya ekleyin (version2list, version3list, version4list)

// Tabloyu doldur
function populateTable(versionList) {
  const tableBody = document.querySelector("#mediaTable tbody");
  tableBody.innerHTML = ""; // Tablodaki mevcut veriyi temizle

  // Tabloyu doldur
  versionList.forEach(item => {
    const row = document.createElement("tr");

    // Versiyon hücresini ekle
    const versionCell = document.createElement("td");
    versionCell.textContent = item.version;
    row.appendChild(versionCell);

    // Android hücresini ekle
    const androidCell = document.createElement("td");
    androidCell.textContent = item.android || "Not Available";
    row.appendChild(androidCell);

    // iOS hücresini ekle (varsa)
    const iosCell = document.createElement("td");
    iosCell.textContent = item.ios || "Not Available";
    row.appendChild(iosCell);

    // Diğer hücreleri ekle...
    row.appendChild(createInfoCell(item.icon, item.appName, item.extraInfo));

    // Satırı tabloya ekle
    tableBody.appendChild(row);
  });

  // Başlıkları güncelle
  updateTableHeaders();
}

// Hücre oluşturma
function createInfoCell(icon, appName, extraInfo) {
  const cell = document.createElement("td");
  if (icon) {
    const img = document.createElement("img");
    img.src = icon;
    img.alt = appName;
    cell.appendChild(img);
  }
  const appNameText = document.createElement("strong");
  appNameText.textContent = appName || "Unknown";
  cell.appendChild(appNameText);
  const extraInfoText = document.createElement("span");
  extraInfoText.textContent = extraInfo || "No extra info.";
  cell.appendChild(extraInfoText);

  return cell;
}

// Başlıkları güncelle
function updateTableHeaders() {
  const tableHeaders = document.querySelector("#mediaTable thead");
  tableHeaders.innerHTML = ""; // Mevcut başlıkları temizle

  const headers = ["Version", "Android", "iOS", "Windows", "MacOS", "WebOS", "Nintendo", "Playstation", "Xbox", "Ubisoft Connect", "Steam"];
  const headerRow = document.createElement("tr");

  headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  tableHeaders.appendChild(headerRow);
}
