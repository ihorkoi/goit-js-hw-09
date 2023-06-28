import Notiflix from "notiflix";

const firstDelayRef = document.querySelector('[name = delay]');
const delayStepRef = document.querySelector('[name = step]');
const promisesAmountRef = document.querySelector('[name = amount]');
const buttonRef = document.querySelector('button');


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return position, new Promise(resolve => {
      resolve({position, delay}) 
    });
    // Fulfill
  } else {
    return new Promise((resolve, reject) => {
      reject({position, delay})
    })
    // Reject
  }
}

buttonRef.addEventListener('click', (evt) => {
  evt.preventDefault()

  const firstDelay = firstDelayRef.value;
  const delayStep = delayStepRef.value;
  const promisesAmount = promisesAmountRef.value;

  for (let i = 0; i < promisesAmount; i += 1) {
    let delay = Number(firstDelay) + (Number(delayStep) * i)

    setTimeout(() => {
      createPromise(i, delay)
        .then(({ position, delay }) => {Notiflix.Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`) })
        .catch(({ position, delay }) => {Notiflix.Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`) });
    }, delay)
  }
})
