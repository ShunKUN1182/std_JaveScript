const eyeIcon = document.querySelector("#eyeIcon");
const passwordBox = document.querySelector("#password");
let count = 1;

eyeIcon.addEventListener("click", () => {
    eyeIcon.classList.toggle("active");
    passwordBox.type = count ? "text" : "password";
    count = count ? 0 : 1;
});
