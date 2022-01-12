
today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getUTCDate());
var upgradeTime = days_between(new Date(today.getFullYear(), parseInt(today.getMonth()) + 1, today.getUTCDate()).toLocaleDateString(), new Date(2022, 1, 30).toLocaleDateString()) * 86400;


var seconds = upgradeTime;
function timer() {
    var days = Math.floor(seconds / 24 / 60 / 60);
    var hoursLeft = Math.floor((seconds) - (days * 86400));
    var hours = Math.floor(hoursLeft / 3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
    var minutes = Math.floor(minutesLeft / 60);
    var remainingSeconds = seconds % 60;
    function pad(n) {
        return (n < 10 ? "0" + n : n);
    }
    document.getElementById('days').innerHTML = pad(days);
    document.getElementById('hours').innerHTML = pad(hours);
    document.getElementById('minutes').innerHTML = pad(minutes);
    document.getElementById('seconds').innerHTML = pad(remainingSeconds);
    // document.getElementById('countdown').innerHTML = pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('timer()', 1000);

function days_between(date1, date2) {

    date1 = new Date(date1)
    date2 = new Date(date2)
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);

}