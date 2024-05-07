let currTime = 0;
let currInt;

document.querySelector('.js-start-button').addEventListener('click', () => {
  currInt = setInterval(function() {
    currTime++;
    let timeString = '';
    hours = Math.floor(currTime / (60 * 60));
    if (hours < 10) {
      timeString += '0' + hours;
    } else {
      timeString += hours;
    }
    timeString += ':';
    minutes = Math.floor(currTime / 60);
    if (minutes < 10) {
      timeString += '0' + minutes;
    } else {
      timeString += minutes;
    }
    timeString += ':';
    seconds = Math.floor(currTime % 60);
    if (seconds < 10) {
      timeString += '0' + seconds;
    } else {
      timeString += seconds;
    }
    const time = document.querySelector('.js-time');
    time.innerHTML = timeString;
  }, 1000)
})

document.querySelector('.js-stop-button').addEventListener('click', () => {
  clearInterval(currInt);
})

document.querySelector('.js-reset-button').addEventListener('click', () => {
  const time = document.querySelector('.js-time');
  time.innerHTML = '00:00:00';
  currTime = 0;
})