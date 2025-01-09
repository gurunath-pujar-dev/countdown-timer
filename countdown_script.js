// countdown_script.js
document.getElementById('start-btn').addEventListener('click', startCountdown);

function startCountdown() {
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;
    const message = document.getElementById('message');

    if (!dateInput || !timeInput) {
        message.textContent = 'Please select both date and time.';
        return;
    }

    const targetDateTime = new Date(`${dateInput}T${timeInput}`);
    const timerDisplay = document.getElementById('timer-display');

    message.textContent = '';

    const interval = setInterval(() => {
        const now = new Date();
        const timeDiff = targetDateTime - now;

        if (timeDiff <= 0) {
            clearInterval(interval);
            message.textContent = 'Countdown finished!';
            timerDisplay.innerHTML = `
                <span id="days">00</span> Days
                <span id="hours">00</span> Hours
                <span id="minutes">00</span> Minutes
                <span id="seconds">00</span> Seconds
            `;
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}
