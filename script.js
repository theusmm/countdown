const daysText = document.querySelector("#days")
const hoursText = document.querySelector("#hours")
const minutesText = document.querySelector("#minutes")
const secondsText = document.querySelector("#seconds")

const countdownLimitDate = new Date('28 Sep 2023')

countdown()

setInterval(countdown, 1000)

function countdown() {
    const { days, hours, minutes, seconds } = calculateCountdownValues()
    renderCountdown({ days, hours, minutes, seconds })
}

function padWithLeadingZeros(value) {
    return value < 10 ? `0${value}` : value;
}

function calculateCountdownValues() {
    const currentDate = new Date()
    const totalSeconds = (countdownLimitDate - currentDate) / 1000

    const days = Math.floor((totalSeconds / 3600) / 24)
    const hours = Math.floor((totalSeconds / 3600) % 24)
    const minutes = Math.floor((totalSeconds / 60) % 60)
    const seconds = Math.floor(totalSeconds % 60)

    return { days, hours, minutes, seconds }

}

function renderCountdown({ days, hours, minutes, seconds }) {
    daysText.innerText = padWithLeadingZeros(days)
    hoursText.innerText = padWithLeadingZeros(hours)
    minutesText.innerText = padWithLeadingZeros(minutes)
    secondsText.innerText = padWithLeadingZeros(seconds)
}
// -------------------------------------------------------

const button = document.querySelector("#button-sign-up")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("#button-close")

button.onclick = function() {
    modal.showModal()
}

buttonClose.onclick = function() {
    modal.close()
}