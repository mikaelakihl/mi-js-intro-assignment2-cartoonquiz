import './style.scss';
import questions from './modules/questions';
import { startTimer, stopTimer } from './modules/timer';


// -----------------------------------------------------------------------------
// --------------------------------- VARIABLES ---------------------------------
// -----------------------------------------------------------------------------

const playGameBtn  = document.querySelector('#playGameBtn');

playGameBtn!.addEventListener('click', playGame);

console.log(playGameBtn);

function playGame(){
    alert('knappen klickas');
    
}

// prepared variables for future use, they are currently commented out until they are used
// let currentScore = 0; 
// let currentTimeInTimer = 0; 

// temporary solution to error for not using variable
console.log(questions);