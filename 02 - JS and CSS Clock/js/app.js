(function(){
    const hour = document.querySelector('.hour-hand');
    const minute = document.querySelector('.min-hand');
    const second = document.querySelector('.second-hand');

    function getHourHandDegrees(hours){ // 30 degrees per hour
        const hourHand = hours * (360 / 12) + 90; // adding 90 degrees to the calculation since 0 degrees refers to the clock hand in its 12 o'clock position
        hour.style.transform = `rotate(${hourHand}deg)`;
    }

    function getMinHandDegrees(minutes){ // 6 degrees per minute
        const minHand = minutes * (360 / 60) + 90; // adding 90 degrees to the calculation since 0 degrees refers to the clock hand in its 12 o'clock position
        minute.style.transform = `rotate(${minHand}deg)`;
    }

    function getSecondHandDegrees(seconds) { // 6 degrees per second
        const secondHand = seconds * (360 / 60) + 90; // adding 90 degrees to the calculation since 0 degrees refers to the clock hand in its 12 o'clock position
        second.style.transform = `rotate(${secondHand}deg)`;
    }

    function setClock() {
        const current = new Date();
        getHourHandDegrees(current.getHours());
        getMinHandDegrees(current.getMinutes());
        getSecondHandDegrees(current.getSeconds());
    }

    setInterval(setClock, 1000); // refresh every second

    setClock(); // set clock on page load
}())