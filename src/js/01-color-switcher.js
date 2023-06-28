function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');

let colorChangeId;


stopButtonRef.setAttribute('disabled', '');

startButtonRef.addEventListener('click', (evt) => {
    startButtonRef.setAttribute('disabled', '');
    stopButtonRef.removeAttribute('disabled');
    colorChangeId = setInterval(() => {
        document.querySelector('body').style.backgroundColor = getRandomHexColor();
    }, 1000);
})
stopButtonRef.addEventListener('click', () => {
    startButtonRef.removeAttribute('disabled');
    stopButtonRef.setAttribute('disabled', '');
    clearInterval(colorChangeId);
})
