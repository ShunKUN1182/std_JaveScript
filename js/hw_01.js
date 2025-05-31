const buttons = document.querySelectorAll('button');
const keisan = document.querySelector('keisan')

function buttonPresseed(event) {
    const text = event.target.textContent;
    alert(text);
}
buttons.forEach(button => button.addEventListener('click',buttonPresseed))