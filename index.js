const countdown = () => {
    const goalDate = new Date("January 1, 2024 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const gap = goalDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const currentDay = Math.floor(gap / day);
    const currentHour = Math.floor((gap % day) / hour);
    const currentMin = Math.floor((gap % hour) / minute);
    const currentSec = Math.floor((gap % minute) / second);

    document.getElementById("days").innerHTML = currentDay;
    document.getElementById("hours").innerHTML = currentHour;
    document.getElementById("mins").innerHTML = currentMin;
    document.getElementById("secs").innerHTML = currentSec;
}

setInterval(countdown, 1000);
