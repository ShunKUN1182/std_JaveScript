const buttons = document.querySelectorAll('button');
const keisan = document.querySelector('keisan')

let gangan="";
function buttonPresseed(event) {
    const text = event.target.textContent;
    gangan = gangan+text;
    console.log(gangan);
}
buttons.forEach(button => button.addEventListener('click',buttonPresseed))
