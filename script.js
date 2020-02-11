const secondHand = document.querySelector(".second-hand")

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const secondsDegrees = seconds * 6 + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    console.log(secondsDegrees);
}


setInterval(setDate, 1000)
