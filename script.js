//we need end date(when New Year Eve is)
//we need the current date
//Then we just need to subtract the current date with the end date to get the difference


//const monthsElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

//console.log(monthsEl);

const newYears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    //const months = Math.floor(totalSeconds / 2628002.88);
    const days = Math.floor(totalSeconds / 3600 / 24);
    //const days = Math.floor(totalSeconds / 86400) % 30;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //monthsElement.innerHTML = months;
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);

    //console.log(newYearsDate - currentDate);
    //console.log(months, days, hours, minutes, seconds);
}

//to add a 0 before `seconds and minutes
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call 
countdown();

//setting interval of every milisecond since we want the timer to be updating quite frequently.
setInterval(countdown, 1000);