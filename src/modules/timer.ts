const timerDisplay = document.getElementById('timerDisplay') as HTMLElement;

let timerInterval: NodeJS.Timeout | null = null;
let timePassed = 0; // In seconds

/**
 * Starts the timer
 * Begins counting from 0
 */
export default function startTimer(): void {
    const startTime = Date.now();

    timerInterval = setInterval(() => {
        timePassed = Math.floor((Date.now() - startTime) / 1000); // Calculate time passed in seconds
        updateTimerDisplay(timePassed);
    }, 1000);
}

/**
 * Updates the timer on the page
 * @param Time passed in seconds
 */
function  updateTimerDisplay(seconds: number): void {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${addZero(mins)}:${addZero(secs)}`
}

/**
 * Helper to add 0 for single-digit numbers
 * @param Current time value
 * @return String with the added 0, if needed
 */
function addZero(value: number): string {
    return value.toString().padStart(2, '0');
}