
# Pseudokod

## Define a list of 20 questions 
> Create questions file
> Create interface for question
> create array of questions 
> Export array of questions 
> Import questionsfile into main.ts

## DEFINE a variable for:
> Score (set to 0)
> Timer (set to 0)
> Current question index (set to 0)

## Function: Start Quiz
> Reset the score
> Reset timer 
> Reset current question index
> Select first 10 or last 10 questions 
> Start timer (call on function starting timer)
> Display first question calls on function (display question) 
> Remove class hidden from question box
> Hide play button

## Function: Start timer
> Start timer (set time out?)
> Display timer in div 'time'

## Function: Display question
> Parameter active question 
> Display active question (innerHTML)
> Display option of questions (radiobutton, button?)

## Function: Handle answer 
> Check if the answer is correct
> If the selected answer is correct, increment the score and display green color 
> Else display red color
> Set timeout for 3 seconds before moving on
> Check if it's the last question
> If not, call function: Display question
> If last question, call on function: End quiz

## Function: End quiz 
> Call on function: Stop timer
> Display result box with correct answers, total time, score + restartbutton
> Hide quiz/answer box
> Restart - Call on function: Start Quiz

## Function: Stop timer
> Save time (in a variable)





# If we have time
> Fix order of correct answer at option of question





