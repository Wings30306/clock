const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".minute-hand")
const hourHand = document.querySelector(".hour-hand")
const dayBox = document.querySelector(".day")
const monthBox = document.querySelector(".month")
const yearBox = document.querySelector(".year")
const weekdayBox = document.querySelector(".weekday")

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = minutes * 6 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + ( minutesDegrees - 90 ) / 12 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    weekdayNum = now.getDay();
    week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    weekdayBox.innerHTML = week[weekdayNum];
    dayBox.innerHTML = now.getDate();
    monthBox.innerHTML = now.getMonth() + 1;
    yearBox.innerHTML = now.getFullYear()

}


setInterval(setDate, 1000)
