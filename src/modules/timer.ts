const timerDisplay = document.getElementById('timerDisplay') as HTMLElement;

let timerInterval: number | null = null;
export let timeTaken = 0;

/**
 * Starts the timer
 * Begins counting from 0
 */
export function startTimer(): void {
    const startTime = Date.now();

    timerInterval = setInterval(() => {
        timeTaken = Math.floor((Date.now() - startTime) / 1000); // Calculate time passed in seconds
        updateTimerDisplay(timeTaken);
    }, 1000);
}

/**
 * Updates the timer on the page
 * @param Time passed in seconds
 */
function updateTimerDisplay(seconds: number): void {
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

/**
 * If there's an active timer
 * Stop the timer using its id (timerInterval)
 * Reset the variable to null
 */
export function stopTimer(): void {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}