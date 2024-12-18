
// Select elements
const startButton = document.getElementById('startTimer');
const timeInput = document.getElementById('timeInput');
const display = document.getElementById('display');
const completionMessage = document.getElementById('completionMessage');

let countdown; // Variable to store the timer interval

function startTimer() {
    // Clear any previous timer
    clearInterval(countdown);
    completionMessage.textContent = "";

    // Get time input and convert to seconds
    const inputMinutes = parseInt(timeInput.value);
    if (isNaN(inputMinutes) || inputMinutes <= 0) {
        alert("Please enter a valid positive number for minutes.");
        return;
    }

    let timeInSeconds = inputMinutes * 60;

    // Function to update the display every second
    function updateTimer() {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
    
        display.textContent = 
            String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
    
        if (timeInSeconds === 0) {
            clearInterval(countdown); // Stop the timer
            completionMessage.textContent = "Time's up! Relax and take a deep breath.";
        }
        timeInSeconds--;
    }
    updateTimer(); // Display immediately
    countdown = setInterval(updateTimer, 1000); // Update every second
}

// Event listener
startButton.addEventListener('click', startTimer);
