'use strict';

setInterval(digitalClock, 1000);

function digitalClock() {
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = (hours >= 12) ? 'PM' : 'AM';

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let clock = `${weekDays[day]} ${hours}:${minutes}:${seconds} ${ampm}`;

    document.querySelector('.clock').innerHTML = clock;
}