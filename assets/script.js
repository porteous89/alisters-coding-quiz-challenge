// 1. define variables for quiz container, timer, questions, final screen, highscore list, qestion index, time left.
//2. add event listeners
//3. define function to start quiz when start  button pressed
//4. start timer, use setInterval to updateTimer
//5. function to start first question

const quitBtn = document.querySelector('#quit-btn');
var index = 0
var questionArr = [{
    prompt: "What's my name?",
    choices: ["Alister", "Alex", "Al", "ister"],
    answer: "Alister"
}, {
    prompt: "What's my name?",
    choices: ["Alister", "Alex", "Al", "ister"],
    answer: "Alister"
}]

function showQuestion(){
    console.log("Showing question!")
    var currentPrompt = questionArr[index].prompt
    document.getElementById("question-title").innerHTML = currentPrompt
    console.log(currentPrompt)
    var currentChoices = questionArr[index].choices
    var currentAnswer = questionArr[index].answer
    //as you show the buttons, maybe do something to let you know which one is correct?
    //iff???

}

function checkAnswer(event){
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    var currentAnswer = questionArr[index].answer

}

function startQuiz(event){
    event.preventDefault()
    console.log("starting")
    // get rid of intro paragraph?
    document.querySelector('.quiz-intro').classList.toggle("hide");
    // switch display none to 
    document.querySelector('#quiz-section').classList.toggle('hide')
    //implement a time

    showQuestion()
}

document.querySelector('#start-btn').addEventListener("click", startQuiz)