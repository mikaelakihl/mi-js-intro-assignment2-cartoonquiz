import './style.scss';
import questions from './modules/questions';
import { startTimer, stopTimer } from './modules/timer';


// -----------------------------------------------------------------------------
// --------------------------------- VARIABLES ---------------------------------
// -----------------------------------------------------------------------------

const playGameBtn  = document.querySelector('#playGameBtn');
const logoInHeader = document.querySelector('#logoInHeader');
// const homePage = document.querySelector('#homePage');

// prepared variables for future use, they are currently commented out until they are used
// let currentScore = 0; 


// temporary solution to error for not using variable
console.log(questions);


// -----------------------------------------------------------------------------
// --------------------------------- FIRST PAGE --------------------------------
// -----------------------------------------------------------------------------


playGameBtn!.addEventListener('click', playGame);

logoInHeader!.addEventListener('click', goBackToStartPage);

function goBackToStartPage(){
    window.location.href = '/';
}


// -----------------------------------------------------------------------------
// --------------------------------- PLAY GAME ---------------------------------
// -----------------------------------------------------------------------------

const playGameBtnContainer = document.querySelector('#playGameBtnContainer');
const questionContainer = document.querySelector('section');
const firstRoundQuestions = questions.slice(0, 10);
const secondRoundQuestions = questions.slice(10, 20);
let currentRound = 1;
const isFirstRound = currentRound === 1; 
const currentQuestions = isFirstRound ? firstRoundQuestions : secondRoundQuestions;

function playGame() {
    // currentScore = 0;
    console.log(currentRound);

    //select first 10 or last 10 questions
    currentRound = isFirstRound ? 2 : 1;
    
    console.log(currentQuestions);
    console.log(currentRound);
    
    
    playGameBtnContainer!.classList.toggle('hidden');
    questionContainer!.classList.toggle('hidden');

    //call on function displayQuestion()
    startTimer()
    console.log('playGame function run');
}

// -----------------------------------------------------------------------------
// ----------------------------- DISPLAY QUESTION ------------------------------
// -----------------------------------------------------------------------------

function displayQuestion(currentQuestions){


}