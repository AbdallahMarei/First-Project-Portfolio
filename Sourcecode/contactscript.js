const toggleButton = document.querySelector('.toggle-button')
const navbarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})

const darkMode = document.querySelector("#toggle-darkmode");

darkMode.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
})

const contactForm = document.getElementById("contact-form");
let nameInput = document.querySelector(".name-input");
let emailInput = document.querySelector(".email-input");
let textInput = document.querySelector(".text-input");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    let message = {user: nameInput.value, email: emailInput.value, userMessage: textInput.value};
    let history = JSON.parse(localStorage.getItem("user-message")) || [];
    history.push(message);
    localStorage.setItem("user-message", JSON.stringify(history));
    contactForm.reset()
})