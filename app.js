function clock() {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    if (hours > 12) {
        hours = "0" + (hours - 12);
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = " : " + minutes;
}

setInterval(clock, 100);