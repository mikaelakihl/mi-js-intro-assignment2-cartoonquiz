import './style.scss';
import questions from './modules/questions';


// -----------------------------------------------------------------------------
// --------------------------------- VARIABLES ---------------------------------
// -----------------------------------------------------------------------------

const playGameBtn  = document.querySelector('#playGameBtn');
const logoInHeader = document.querySelector('#logoInHeader');
// const homePage = document.querySelector('#homePage');

// -----------------------------------------------------------------------------
// --------------------------------- PLAY GAME ---------------------------------
// -----------------------------------------------------------------------------

playGameBtn!.addEventListener('click', playGame);

function playGame(){
    alert('knappen klickas');
    
}

logoInHeader!.addEventListener('click', goBackToStartPage);

function goBackToStartPage(){
    window.location.href = '/';
}

// -----------------------------------------------------------------------------
// --------------------------------- HANDLE ANSWER -----------------------------
// -----------------------------------------------------------------------------

// function handleAnswer(){
//     if (selectedValue === questions.correctAnswer){
//         correctAnswer.classlist.add('correct-color');
//     } else (selectedValue === incorrectAnswers){
//         incorrectAnswers.classlist.add('incorrect-color');
//     }

// }

questions.forEach((question) => {
    console.log(question.correctAnswer);
});

questions.forEach((question) => {
    console.log(question.incorrectAnswers);
});


//display questions rutan .

console.log(handleAnswer);

// prepared variables for future use, they are currently commented out until they are used
// let currentScore = 0; 
// let currentTimeInTimer = 0; 

// temporary solution to error for not using variable
console.log(questions);
