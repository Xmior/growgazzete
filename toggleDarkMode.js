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
