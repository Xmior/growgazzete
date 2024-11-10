function populateTable(tableId, data, platforms) {
  const tableBody = document.getElementById(tableId).querySelector('tbody');
  data.forEach(entry => {
    const row = document.createElement('tr');
    
    // Versiyon tablo columnu
    const versionCell = document.createElement('td');
    versionCell.textContent = entry.version;
    row.appendChild(versionCell);
    
    // Platform tablo columnu
    platforms.forEach(platform => {
      const cell = document.createElement('td');
      const platformData = entry[platform];
      
      if (platformData) {
        const existText = platformData.exist === 1 ? "Exists" : platformData.exist === 0 ? "Does not exist/No proof of existence" : "Exists but lost/Not archived yet";
        const releaseDate = platformData.releaseDate !== 'N/A' ? `Release Date: ${platformData.releaseDate}` : "Release Date: N/A";
        
        cell.innerHTML = `
          <div class="platform-cell">
            <img src="${platformData.icon}" alt="${platform} icon">
            <div class="platform-info">
              <div>${existText} - ${platformData.extraInfo}</div>
              <div>${releaseDate}</div>
            </div>
          </div>
        `;
        
        if (platformData.whatsNew) {
          cell.innerHTML += `
            <div class="whats-new-container">
              <h4>What's New</h4>
              <div class="whats-new-inner">
                ${platformData.whatsNew}
              </div>
            </div>
          `;
        }
        
        cell.className = platformData.exist === 0 ? 'does-not-exist' : platformData.exist === 2 ? 'lost' : 'exists';
      } else {
        cell.textContent = "N/A";
        cell.className = 'not-applicable';
      }
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
}

// tablo giriş şeyleri işte, burda data ile table'i bağlıyo
populateTable('version0Table', version0Data, ['android']);
populateTable('version1Table', version1Data, ['android', 'ios', 'windows', 'macos']);
populateTable('version2Table', version2Data, ['android', 'ios', 'windows', 'macos', 'nintendo', 'xbox', 'ps4-up', 'ps4-ep', 'ps4-jp']);
populateTable('version3Table', version3Data, ['android', 'ios', 'windows', 'macos']);
populateTable('version4Table', version4Data, ['android', 'ios', 'windows', 'macos', 'ubisoft', 'steam']);
populateTable('version12Table', version12Data, ['android','windows']);
