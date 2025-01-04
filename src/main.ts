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
let currentScore = 0; 


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
    currentScore = 0;

    //select first 10 or last 10 questions
    currentRound = isFirstRound ? 2 : 1;
    
    playGameBtnContainer!.classList.toggle('hidden');
    questionContainer!.classList.toggle('hidden');

    currentQuestions.sort(() => Math.random() - 0.5);

    displayQuestion()
    startTimer()
}

// -----------------------------------------------------------------------------
// ----------------------------- DISPLAY QUESTION ------------------------------
// -----------------------------------------------------------------------------

const questionBox = document.querySelector('#questionBox');
const answerBox = document.querySelector('#answerBox');
let currentQuestionIndex = 0;


function displayQuestion(){
    const question = currentQuestions[currentQuestionIndex];
    const answers = [...question.incorrectAnswers];

    answers.push(question.correctAnswer);
    answers.sort(() => Math.random() - 0.5);

    //Update the question number
    const questionIndexElement = document.querySelector('#questionIndex')!;
    questionIndexElement.textContent = `Question ${currentQuestionIndex + 1}`;


    questionBox!.innerHTML = `
        <div class="img-container">
         <img src=${question.image?.src} alt=${question.image?.alt}>
        </div>
        <h3 class="question">${question.question}</h3>
    
    `;

    answerBox!.innerHTML = answers.map(answer => `
        <li class="answers">
            <label>
                <span>${answer}</span>
                <input type="radio" name="answers" value="${answer}">
            </label>
        </li>
    `).join('');

    const answerInputs = document.querySelectorAll('input[name="answers"]');
    answerInputs.forEach(input => {
        input.addEventListener('change', handleAnswer);
    });


}

// -----------------------------------------------------------------------------
// ----------------------------- HANDLE ANSWER ---------------------------------
// -----------------------------------------------------------------------------

function handleAnswer(event: Event){
    const selectedAnswer = (event.target as HTMLInputElement).value;
    const selectedAnswerElement = (event.target as HTMLInputElement);
    const parentLi = selectedAnswerElement.closest<HTMLLIElement>('li'); 
    const correctAnswer = currentQuestions[currentQuestionIndex].correctAnswer;

    if(selectedAnswer === correctAnswer){
        currentScore += 5;
        parentLi!.classList.add('correct-color');
    } else {
        currentScore -= 3;
        parentLi!.classList.add('incorrect-color');
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < currentQuestions.length){
            displayQuestion();
        } else {
            console.log('endQuiz');
        }
    }, 700);

    
}