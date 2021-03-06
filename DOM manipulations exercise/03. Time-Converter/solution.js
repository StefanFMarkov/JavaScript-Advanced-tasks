function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');


    document.getElementById('secondsBtn').addEventListener('click', () => convert(seconds.value));
    document.getElementById('hoursBtn').addEventListener('click', () => convert(hours.value * 3600));
    document.getElementById('minutesBtn').addEventListener('click', () => convert(minutes.value * 60));
    document.getElementById('daysBtn').addEventListener('click', () => convert(days.value * 86400));

    function convert(sec = 0) {
        let day = sec / 86400;
        let hour = sec / 3600;
        let min = sec / 60;

        days.value = day;
        hours.value = hour;
        minutes.value = min;
        seconds.value = sec;
    }
}