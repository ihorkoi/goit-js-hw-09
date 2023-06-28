import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const startButtonRef = document.querySelector('[data-start');
const daySpanRef = document.querySelector('[data-days');
const hoursSpanRef = document.querySelector('[data-hours');
const minutesSpanRef = document.querySelector('[data-minutes');
const secondsSpanRef = document.querySelector('[data-seconds');

startButtonRef.setAttribute('disabled', '');
let selectedTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
          Notiflix.Notify.failure("Please choose a date in the future");
          startButtonRef.setAttribute('disabled', '');
        } else {
            startButtonRef.removeAttribute('disabled');
            selectedTime = selectedDates[0].getTime();


      }
        // console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

let countdownIntervalId;

startButtonRef.addEventListener('click', () => {
  clearInterval(countdownIntervalId);
  startButtonRef.setAttribute('disabled', '');

  let countdownTime = selectedTime - new Date().getTime();

  countdownIntervalId = setInterval(() => {  

    const currentTime = convertMs(countdownTime);

    daySpanRef.textContent = addLeadingZero(currentTime.days);
    hoursSpanRef.textContent = addLeadingZero(currentTime.hours);
    minutesSpanRef.textContent = addLeadingZero(currentTime.minutes);
    secondsSpanRef.textContent = addLeadingZero(currentTime.seconds);

    if (countdownTime < 1000) {
      clearInterval(countdownIntervalId);
    }
    countdownTime -= 1000;
  }, 1000)

})
