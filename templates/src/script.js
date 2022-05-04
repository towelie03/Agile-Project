
// // .toggle
// let darkTheme = () => {
//     let switchDarkThemeButton = document.getElementById("theme");
//     // switchDarkTheme.classList.toggle("dark-theme");
//     switchDarkThemeButton.addEventListener('click', () => {
//         let mainCon = document.querySelector(".main-container");

//         mainCon.classList.toggle("dark-theme");
//     })
// }

// darkTheme()

// // const lightTheme = () => {
// //   let switchLightTheme = document.querySelector(".main-container");
// //   switchLightTheme.classList.replace("dark-theme", "light-theme");
// // }

// function darkMode() {
//     if (isLightModeOn == false) {
//         darkTheme()
//         isLightModeOn = true
//     } else {
//         lightTheme()
//         isLightModeOn = false
//     }
// }

let check = false
function createCheck() {

    var clickBox = document.querySelector('.theme-toggle')
    clickBox.addEventListener('click', () => {
        const dark = document.querySelector("body")
        if (check == false) {
            dark.classList.replace('white', 'black')
            check = true
        } else if (check == true) {
            dark.classList.replace('black', 'white')
            check = false
        }
    })
    console.log("hello")
}

// const LDmode = () => {
//     const dark = document.querySelector("body")
//     if (check == false) {
//         dark.classList.replace('white', 'black')
//         check = true
//     } else if (check == true) {
//         dark.classList.replace('black', 'white')
//         check = false
//     }
// }
createCheck()