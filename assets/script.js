// 1. define variables for quiz container, timer, questions, final screen, highscore list, qestion index, time left.
//2. add event listeners
//3. define function to start quiz when start  button pressed
//4. start timer, use setInterval to updateTimer
//5. function to start first question

const startBtn = document.querySelector("#start-btn");
questionSection = document.getElementById('#question-section');
quizIntro = document.getElementById('quiz-into');


var index = 0
let questionArr = [
    {
        numb: 1,
        question: "JavaScript is which type of language?",
        answer: "Object-Based",
        options: [
            "Object-Oriented",
            "Object-Based",
            "Assembly-language",
            "High-level"
        ]
    },
    {
        numb: 2,
        question: "When interpreter encounters an empty statement, what will it do?",
        answer: "Ignore the statement",
        options: [
            "Show a warning",
            "Prompt to complete the statement",
            "Throw an error",
            "Ignore the statement",
        ]
    },
    {
        numb: 3,
        question: "JavaScript is interpreted by _________",
        answer: "Client",
        options: [
            "Client",
            "Server",
            "Object",
            "None of the above",
        ]
    },
    {
        numb: 4,
        question: "Which of the following is not a valid JavaScript variable name?",
        answer: "2names",
        options: [
            "2names",
            "_first_and_last_names",
            "FirstAndLast",
            "None of the above",
        ]
    },
    {
        numb: 5,
        question : "The _______ method of an Array object adds and/or removes elements from an array.",
        answer: "Slice",
        options: [
            "Reverse",
            "Shift",
            "Slice",
            "Splice",
        ]
    },
    {
        numb: 6,
        question : "Using _______ statement is how you test for a specific condition.",
        answer: "If",
        options: [
            "Select",
            "If",
            "Switch",
            "For",
        ]
    },
    {
        numb: 7,
        question : "Which of the following is not considered a JavaScript operator?",
        answer: "delete",
        options: [
            "new",
            "this",
            "delete",
            "typeof",
        ]
    },
    {
        numb: 8,
        question : "Which of the following is true about variable naming conventions in JavaScript?",
        answer: "Both of the above.",
        options: [
            "You should not use any of the JavaScript reserved keyword as variable name.",
            "JavaScript variable names should not start with a numeral (0-9).",
            "Both of the above.",
            "None of the above.",
        ]
    },
    {
        numb: 9,
        question : "Which of the following type of variable is visible only within a function where it is defined?",
        answer: "local variable",
        options: [
            "global variable",
            "local variable",
            "Both of the above.",
            "None of the above.",
        ]
    },
    {
        numb: 10,
        question : "Which of the following is the correct syntax to redirect a url using JavaScript?",
        answer: "window.location='http://www.newlocation.com';",
        options: [
            "document.location='http://www.newlocation.com';",
            "browser.location='http://www.newlocation.com';",
            "navigator.location='http://www.newlocation.com';",
            "window.location='http://www.newlocation.com';",
        ]
    }
];

const quitBtn = document.querySelector('#quit-btn');

quitBtn.onclick = ()=>{
    questionSection.classList.add('hide');
    quizIntro.classList.remove('hide');
};



function showQuestion(){
    console.log("Showing question!")
    var currentPrompt = questionArr[index].prompt
    document.getElementById("question-title").innerHTML = currentPrompt
    console.log(currentPrompt)
    var currentChoices = questionArr[index].choices
    document.getElementById("choice-button").innerHTML = currentChoices
    console.log(currentPrompt)
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

document.querySelector('#start-btn').addEventListener("click", startQuiz);

function startQuiz(event){
    event.preventDefault()
    console.log("starting")
    // get rid of intro paragraph?
    document.querySelector('.quiz-intro').classList.toggle("hide");
    // switch display none to 
    document.querySelector('#question-section').classList.toggle('hide');
    //implement a time

    showQuestion()
};

startBtn.onclick = () => {
    function countdown(){
        counter--;
            if (counter === 0){
                clearInterval(startCountdown)
                quizEnd()
            };
    let timer = document.querySelector("#timer");
    let timeTag = "<p>Time Left: "+ counter +"</p>"
    timeRem.innerHTML = timeTag;
    };
    var startCountdown = setInterval('#countdown', 1000);
    quizIntro.classList.add("hide");
    questionSection.classList.remove("hide");
    showQuestions(queCount)
};