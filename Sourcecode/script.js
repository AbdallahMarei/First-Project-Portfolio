const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const darkMode = document.querySelector("#toggle-darkmode");

darkMode.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
})



