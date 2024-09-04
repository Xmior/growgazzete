<?php
session_start();

// Belirlediğiniz şifre
$correct_password = "adminpassword";

// Kullanıcı login oldu mu kontrol et
if (isset($_POST['password'])) {
    if ($_POST['password'] == $correct_password) {
        $_SESSION['loggedin'] = true;
    } else {
        $error = "Incorrect password. Please try again.";
    }
}

// Eğer login olmadıysa login formunu göster
if (!isset($_SESSION['loggedin'])) {
?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="editor.css">
        <title>Login</title>
    </head>
    <body>
        <h1>LOGIN FOR ACCESS GAZETTE EDITING (ADMIN ONLY)</h1>
        <form method="post" action="">
            <input type="password" name="password" placeholder="Enter Password">
            <button type="submit">Login</button>
        </form>
        <?php if (isset($error)) echo "<p>$error</p>"; ?>
    </body>
    </html>

    <?php
    // Eğer login olduysa editör sayfasını göster
    } else {
    ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="editor.css">
        <title>Growtopia Gazette Editor</title>
    </head>
    <body>
        <div class="wide-box">
            Growtopia Gazette Editor!
        </div>

        <div class="fullscreenbox">
            <label for="date">Enter Date:</label>
            <input type="date" id="date" name="date" min="2012-11-30" required><br><br>
            
            <label for="gazetteImage">News Banner:</label>
            <input type="file" id="gazetteImage" name="gazetteImage" accept=".jpg, .png" required>
            <img id="bannerPreview" alt="Banner Preview" style="display:none; max-width: 100%; height: auto;">

            
            <label for="gazetteTitle">Gazette Title:</label>
            <input type="text" id="gazetteTitle" name="gazetteTitle" required><br><br>
            
            <label for="gazetteText">Gazette Text:</label><br>
            <textarea id="gazetteText" placeholder="Enter Gazette Text..." style="width: 890px; height: 190px;" required></textarea><br><br>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="checkboxWOTD" name="checkboxWOTD">
            <label for="checkboxWOTD">WOTD</label>

            <input type="checkbox" id="checkboxVOTW" name="checkboxVOTW">
            <label for="checkboxVOTW">VOTW</label>
        </div>

        <div class="wotd-box" id="extraInfoBoxWOTD" style="display: none;">
            <label for="wotdName" style="margin-top: 20px;">WOTD NAME</label><br>
            <textarea id="wotdLink" placeholder="Enter the WOTD Name, system will get the picture." style="width: 245px; height: 100px;"></textarea>
            
            <label for="wotdInfo">WOTD INFO</label><br>
            <textarea id="wotdInfo" placeholder="Enter the WOTD Info, write the same thing on gazette's button. Like this :
        ''WOTD By GrowID''." style="width: 245px; height: 100px;"></textarea>
            <label>The input boxes are broken. Use tab "⇥" for fill WOTD</label>
        </div>

        <div class="votw-box" id="extraInfoBoxVOTW" style="display: none;">
            <label for="votwLink" style="margin-top: 20px;">VOTW LINK</label><br>
            <textarea id="votwLink" placeholder="Enter the VOTW Youtube Video Link..." style="width: 245px; height: 100px;"></textarea>
            
            <label for="votwInfo">VOTW INFO</label><br>
            <textarea id="votwInfo" placeholder="Enter the VOTW Info, write the same thing on gazette's button. Like this :
        ''VOTW By Channel Name''." style="width: 245px; height: 100px;"></textarea>
            <label>The input boxes are broken. Use tab "⇥" for fill VOTW</label>
        </div>

        
        <div id="toolbox" class="tool-box">
            <label for="toolbox" style="margin-top: 20px;">Tool Box</label><br>
            <img src="./images/Forum-Announcement.png" id="FORUMLINKBUTTON" class="brand-image img-circle elevation-3 tool-button" style="width: 170px;" link="LINK_FORUM"><br>
            <img src="./images/Guard-Survey.png" id="GUARDLINKBUTTON" class="brand-image img-circle elevation-3 tool-button" style="width: 170px;" link="LINK_GUARD"><br>
            <img src="./images/CC-Prog.png" id="CCPROGRAM" class="brand-image img-circle elevation-3 tool-button" style="width: 170px;" link="LINK_CCPROGRAM"><br>
            <img src="./images/Tiktok-Application.png" id="TIKTOKAPP" class="brand-image img-circle elevation-3 tool-button" style="width: 170px;" link="LINK_TIKTOK"><br>
            <img src="./images/Discord-Announcement.png" id="DISCORDANN" class="brand-image img-circle elevation-3 tool-button" style="width: 170px;" link="LINK_DISCORD"><br>
        </div>

        <div class="color-tool-box" id="colorToolBox">
            <label for="colorToolBox" style="margin-top: 20px;">Color Tool Box</label><br>
            <!-- Color squares will be inserted here -->
            <div class="color-grid">
                <div class="color-square" data-color="#ffffff" style="background-color: #ffffff;" title="Default">
                    <span class="color-code">0</span>
                </div>
                <div class="color-square" data-color="#adf4ff" style="background-color: #adf4ff;" title="Light cyan">
                    <span class="color-code">1</span>
                </div>
                <div class="color-square" data-color="#49fc00" style="background-color: #49fc00;" title="Green">
                    <span class="color-code">2</span>
                </div>
                <div class="color-square" data-color="#bfdaff" style="background-color: #bfdaff;" title="Light blue">
                    <span class="color-code">3</span>
                </div>
                <div class="color-square" data-color="#ff271d" style="background-color: #ff271d;" title="Crazy red">
                    <span class="color-code">4</span>
                </div>
                <div class="color-square" data-color="#ebb7ff" style="background-color: #ebb7ff;" title="Pinky purple">
                    <span class="color-code">5</span>
                </div>
                <div class="color-square" data-color="#ffca6f" style="background-color: #ffca6f;" title="Brown">
                    <span class="color-code">6</span>
                </div>
                <div class="color-square" data-color="#e6e6e6" style="background-color: #e6e6e6;" title="Light gray">
                    <span class="color-code">7</span>
                </div>
                <div class="color-square" data-color="#ff9445" style="background-color: #ff9445;" title="Crazy orange">
                    <span class="color-code">8</span>
                </div>
                <div class="color-square" data-color="#ffee7d" style="background-color: #ffee7d;" title="Yellow">
                    <span class="color-code">9</span>
                </div>
                <div class="color-square" data-color="#d1fff9" style="background-color: #d1fff9;" title="Bright cyan">
                    <span class="color-code">!</span>
                </div>
                <div class="color-square" data-color="#ffcdc9" style="background-color: #ffcdc9;" title="Bright red/pink">
                    <span class="color-code">@</span>
                </div>
                <div class="color-square" data-color="#ff8ff3" style="background-color: #ff8ff3;" title="Bright purple">
                    <span class="color-code">#</span>
                </div>
                <div class="color-square" data-color="#fffcc5" style="background-color: #fffcc5;" title="Pale yellow">
                    <span class="color-code">$</span>
                </div>
                <div class="color-square" data-color="#b5ff97" style="background-color: #b5ff97;" title="Light green">
                    <span class="color-code">^</span>
                </div>
                <div class="color-square" data-color="#feebff" style="background-color: #feebff;" title="Very pale pink">
                    <span class="color-code">&</span>
                </div>
                <div class="color-square" data-color="#fce6ba" style="background-color: #fce6ba;" title="Dreamsicle">
                    <span class="color-code">o</span>
                </div>
                <div class="color-square" data-color="#ffdff1" style="background-color: #ffdff1;" title="Pink">
                    <span class="color-code">p</span>
                </div>
                <div class="color-square" data-color="#000000" style="background-color: #000000;" title="Black">
                    <span class="color-code">b</span>
                </div>
                <div class="color-square" data-color="#0c60a4" style="background-color: #0c60a4;" title="Dark blue">
                    <span class="color-code">q</span>
                </div>
                <div class="color-square" data-color="#19b9ff" style="background-color: #19b9ff;" title="Medium blue">
                    <span class="color-code">e</span>
                </div>
                <div class="color-square" data-color="#6fd357" style="background-color: #6fd357;" title="Pale green">
                    <span class="color-code">r</span>
                </div>
                <div class="color-square" data-color="#2f830d" style="background-color: #2f830d;" title="Medium green">
                    <span class="color-code">t</span>
                </div>
                <div class="color-square" data-color="#515151" style="background-color: #515151;" title="Dark grey">
                    <span class="color-code">a</span>
                </div>
                <div class="color-square" data-color="#9e9e9e" style="background-color: #9e9e9e;" title="Med grey">
                    <span class="color-code">s</span>
                </div>
                <div class="color-square" data-color="#50ffff" style="background-color: #50ffff;" title="Vibrant cyan">
                    <span class="color-code">c</span>
                </div>
                <div class="color-square" data-color="#ffe119" style="background-color: #ffe119;" title="Bright yellow">
                    <span class="color-code">ì</span>
                </div>
            </div>
        </div>
        
        <button id="saveButton">Save</button>
        
        <div class="dark-mode-button" onclick="toggleDarkMode()"></div>
        <script>
            document.querySelectorAll('.color-square').forEach(square => {
                square.addEventListener('click', function() {
                    // Renk kodunu al
                    const colorCode = this.getAttribute('data-color');
                    
                    // Seçili metin alanlarını al
                    const selectedTextAreas = document.querySelectorAll('#gazetteText, #gazetteTitle');
                    
                    // Seçili renk kodunu her bir metin alanına uygula
                    selectedTextAreas.forEach(area => {
                        // Seçili metni al
                        const selectedText = area.value.substring(area.selectionStart, area.selectionEnd);

                        if (selectedText) {
                            // Metni renkli span ile sar
                            const coloredText = `<span style="color: ${colorCode};">${selectedText}</span>`;
                            
                            // Metin alanının içeriğini güncelle
                            area.value = area.value.slice(0, area.selectionStart) + coloredText + area.value.slice(area.selectionEnd);
                        }
                    });
                });
            });

            document.getElementById('checkboxWOTD').addEventListener('change', function() {
                const extraInfoBoxWOTD = document.getElementById('extraInfoBoxWOTD');
                if (this.checked) {
                    extraInfoBoxWOTD.style.display = 'block'; // WOTD kutusunu göster
                } else {
                    extraInfoBoxWOTD.style.display = 'none'; // WOTD kutusunu gizle
                }
            });

            document.getElementById('checkboxVOTW').addEventListener('change', function() {
                const extraInfoBoxVOTW = document.getElementById('extraInfoBoxVOTW');
                if (this.checked) {
                    extraInfoBoxVOTW.style.display = 'block'; // VOTW kutusunu göster
                } else {
                    extraInfoBoxVOTW.style.display = 'none'; // VOTW kutusunu gizle
                }
            });

            document.getElementById('uploadButton').addEventListener('click', function() {
                const fileInput = document.getElementById('gazetteImage');
                const file = fileInput.files[0];

                if (file) {
                    const reader = new FileReader();

                    reader.onload = function(e) {
                        const img = document.getElementById('bannerPreview');
                        img.src = e.target.result;
                        img.style.display = 'block'; // Banner önizlemesini göster
                    }

                    reader.readAsDataURL(file); // Dosyayı okur ve veri URL'sine dönüştürür
                } else {
                    alert('Please select a file first.');
                }
            });

            document.querySelectorAll('.color-square').forEach(square => {
                square.addEventListener('click', function() {
                    const color = this.getAttribute('data-color');
                    const code = this.querySelector('.color-code').innerText;
                    const textArea = document.getElementById('gazetteText');
                    const selectedText = window.getSelection().toString();
                    
                    if (selectedText) {
                        const newText = `<span style="color:${color}">${selectedText}</span>`;
                        const newContent = textArea.value.replace(selectedText, newText);
                        textArea.value = newContent;
                    }
                });
            });
            
            function toggleDarkMode() {
                const body = document.body;
                body.classList.toggle('dark-mode');
                const darkModeButton = document.querySelector('.dark-mode-button');
                if (body.classList.contains('dark-mode')) {
                    darkModeButton.style.backgroundImage = "url('images/light_icon.png')";
                } else {
                    darkModeButton.style.backgroundImage = "url('images/dark_icon.png')";
                }
            }
        </script>
        <script>
            function setMaxDate() {
                const dateInput = document.getElementById('date');
                const today = new Date();
                const day = String(today.getDate()).padStart(2, '0');
                const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
                const year = today.getFullYear();
                const maxDate = `${year}-${month}-${day}`;
                dateInput.max = maxDate;
            }

            setMaxDate();

            function goToArticle() {
                const date = document.getElementById('date').value;
                const minDate = '2012-01-01';
                const today = new Date().toISOString().split('T')[0];
                
                if (date < minDate || date > today) {
                    alert('Please select a date between November 30, 2012 and today.');
                } else {
                    const [year, month, day] = date.split('-');
                    const articlePath = `${year}_${month}_${day}.html`;
                    window.location.href = articlePath;
                }
            }
            
            function upload() {
                let input = document.createElement("input");
                input.type = "file";
                input.multiple = true;
                input.accept = ".jpg,.png/*";
                input.addEventListener("change", function() {
                    for (let i=0; i<input.files.length; i++) {
                        processFile(input.files[i]);
                    }
                });
                input.click();
            }
            
        </script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const colorSquares = document.querySelectorAll('.color-square');
                const textarea = document.getElementById('gazetteText');
                const titleInput = document.getElementById('gazetteTitle');

                colorSquares.forEach(square => {
                    square.addEventListener('click', function() {
                        const color = this.dataset.color; // Seçilen rengin kodunu al
                        const target = textarea; // Varsayılan olarak gazetteText

                        if (textarea === document.activeElement) {
                            target = textarea;
                        } else if (titleInput === document.activeElement) {
                            target = titleInput;
                        }

                        // Seçili metni renk ile sarmala
                        wrapSelectedText(target, `<span style="color: ${color};">`, '</span>');
                    });
                });

                function wrapSelectedText(element, openTag, closeTag) {
                    const start = element.selectionStart;
                    const end = element.selectionEnd;

                    if (start !== end) {
                        const text = element.value;
                        const selectedText = text.substring(start, end);
                        const beforeText = text.substring(0, start);
                        const afterText = text.substring(end);

                        element.value = `${beforeText}${openTag}${selectedText}${closeTag}${afterText}`;

                        // Seçili metni yeniden seçme
                        element.setSelectionRange(start, end + openTag.length + closeTag.length);
                    }
                }
            });

            document.addEventListener('DOMContentLoaded', function() {
                document.querySelectorAll('#toolbox .tool-button').forEach(button => {
                    button.addEventListener('click', function() {
                        // Konsolda buton ID'sini ve eklenmiş öğeyi kontrol edin
                        console.log('Button clicked:', this.id);
                        
                        const imgSrc = this.src;
                        const imgLink = this.getAttribute('link');
                        const imgHTML = `<img src="${imgSrc}" link="${imgLink}" class="brand-image img-circle elevation-3 tool-button" style="width: 170px;"><br>`;
                        
                        // GazetteText elementini bul ve içeriği güncelle
                        const gazetteText = document.getElementById('gazetteText');
                        if (gazetteText) {
                            // Textarea'ya HTML kodunu metin olarak ekleyin
                            gazetteText.value += imgHTML;
                            console.log('Image added to gazetteText');
                        } else {
                            console.error('Element with id "gazetteText" not found.');
                        }
                    });
                });
            });
            function makeDraggable(el) {
                let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

                el.onmousedown = function(e) {
                    e.preventDefault(); // Prevent default actions like text selection
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    document.onmousemove = elementDrag;
                };

                function elementDrag(e) {
                    e.preventDefault();
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    el.style.top = (el.offsetTop - pos2) + "px";
                    el.style.left = (el.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }

            // Initialize draggable boxes
            document.querySelectorAll('.tool-box, .votw-box, .wotd-box, .color-tool-box').forEach(el => makeDraggable(el));

    </script>
        <script>
            document.getElementById('saveButton').addEventListener('click', function() {
                // Seçilen tarihi al
                const selectedDate = document.getElementById('date').value;
                const formattedDate = selectedDate.replace(/-/g, '_');
                const fileName = `${formattedDate}.html`;

                // Diğer verileri al
                const gazetteImage = document.getElementById('gazetteImage').files[0] ? document.getElementById('gazetteImage').files[0].name : 'default.png';
                const gazetteTitle = document.getElementById('gazetteTitle').value;
                const gazetteText = document.getElementById('gazetteText').value;
                const wotdInfo = document.getElementById('wotdInfo').value;
                const votwInfo = document.getElementById('votwInfo').value;

                // WOTD ve VOTW Checkbox durumunu kontrol et
                const isWOTDChecked = document.getElementById('checkboxWOTD').checked;
                const isVOTWChecked = document.getElementById('checkboxVOTW').checked;

                // WOTD ve VOTW butonlarını dinamik olarak oluştur
                let wotdButton = '';
                let votwButton = '';

                if (isWOTDChecked) {
                    wotdButton = `<button link="wotdLink"><span style="color: #adf4ff;">WOTD: </span>${wotdInfo}</button><br>`;
                }

                if (isVOTWChecked) {
                    votwButton = `<button link="votwLink"><span style="color: #adf4ff;">VOTW: </span>${votwInfo}</button>`;
                }

                // Şablon dosyasını oluştur
                const template = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" type="text/css" href="gazettemp.css">
                <link rel="icon" type="image/x-icon" href="favicon.ico">
                <title>${formattedDate}'s Gazette</title>
            </head>
            <body>
                <div class="wide-box"></div>
                
                <div class="info-bar">
                    <a href="index.html">GrowArchive</a> - <a href="help.html">Contribution Guide</a> - <a href="aboutus.html">About Us</a> - <a href="growgazedit.html">Edit</a> - <a href="https://discord.gg/uMdwwThZzn">Our Discord Server</a>
                </div>

                <div class="fullscreenbox">
                    <text style="font-size: 40px">🗞 The Growtopian Gazette</text>
                    <img src="${gazetteImage}" alt="Uploaded Banner" class="brand-image img-circle elevation-3" style="width: 910px;">
                    <h2>${gazetteTitle}</h2>
                    --------------------------------
                    <h2>${gazetteText}</h2>
                    ${wotdButton}
                    ${votwButton}
                </div>
                
                <!--Add Next & Previous Page (Later)-->
                
            </body>
            </html>`;

                // HTML içeriğini Blob olarak oluştur
                const blob = new Blob([template], { type: 'text/html' });
                const url = URL.createObjectURL(blob);

                // İndirme linkini oluştur ve tıkla
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                // URL'yi serbest bırak
                URL.revokeObjectURL(url);
            });

    </script>
        <script src="js/toggleDarkMode.js"></script>
    </body>
    </html>

<?php
}
?>
