var check = false

function LDmode() {
    const dark = document.querySelector(".login-page")
    if (check == false) {
        dark.classList.replace('light-theme', 'dark-theme')
        check = true
    } else if (check == true) {
        dark.classList.replace('dark-theme', 'light-theme')
        check = false
    }
}