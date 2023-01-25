// Quiz data
const questions = [
    {
      question: "What is the keyword used to create a variable?",
      answers: {
        a: "var",
        b: "let",
        c: "const",
        d: "define"
      },
      correctAnswer: "b"
    },{
        question: "JavaScript is interpreted by _________",
        answers: {
          a:"Client",
          b:"Server",
          c:"Object",
          d: "None of the above",
        },
        correctAnswer: "a"
    },{
        question: "Which of the following is not a valid JavaScript variable name?",
        answers:{
          a:"2names",
          b:"_first_and_last_names",
          c:"FirstAndLast",
          d:"None of the above",
        },
        correctAnswer: "a"
    },{
        question : "The _______ method of an Array object adds and/or removes elements from an array.",
        answers:{
            a:"Reverse",
            b:"Shift",
            c:"Slice",
            d:"Splice",
        },
        correctAnswer: "c"
    },{
        question : "Using an _______ statement is how you test for a specific condition.",
        answers:{
            a:"Select",
            b:"If",
            c:"Switch",
            d:"For",
        },
        correctAnswer: "b"
    },{
        question : "Which of the following is not considered a JavaScript operator?",
        answers:{
            a:"new",
            b:"this",
            c:"delete",
            d:"typeof",
        },
        correctAnswer: "c"
    },
  ];
  
  // Select elements from DOM
  const startButton = document.getElementById("start-btn");
  const questionSection = document.getElementById("question-section");
  const questionTitle = document.getElementById("question-title");
  const answerButtons = document.querySelectorAll(".choice-button");
  const finishedSection = document.getElementById("finished");
  const timer = document.getElementById("countdown");
  quizIntro =document.getElementById('quiz-intro');
  // Global variables
  let currentQuestion = 0;
  let timeLeft = 74;
  
    // Start quiz
    startButton.addEventListener("click", startQuiz);
  
    function startQuiz() {
        // Hide intro section and show question section
        questionSection.classList.remove("hide");
        finishedSection.classList.add("hide");
        // Hide intro
        document.querySelector(".quiz-intro").classList.add("hide");
        // Start timer
        setInterval(countdown, 1000);
        // Display first question
        displayQuestion();
    }
  
  // Display the current question
  function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionTitle.innerText = currentQuestionData.question;
    // Display the answers
    for (let i = 0; i < answerButtons.length; i++) {
      const letter = answerButtons[i].value;
      answerButtons[i].innerText = currentQuestionData.answers[letter];
    }
  }
  
  // Handle clicks on the answer buttons
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", checkAnswer);
  }
  
  let answered = false;

function checkAnswer(event) {
  // Check if the player has already answered
  if (answered) {
    return;
  }
  answered = true;

  // Disable all the answer buttons
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
  }

  // Check if the answer is correct
  const correctAnswer = questions[currentQuestion].correctAnswer;
  if (event.target.value === correctAnswer) {
    event.target.classList.add("correct");
    // Move on to the next question
    currentQuestion++;
    if (currentQuestion === questions.length) {
      // If there are no more questions, end the quiz
      endQuiz();
    } else {
      setTimeout(() => {
        // Display the next question
        displayQuestion();
        // Enable all the answer buttons
        for (let i = 0; i < answerButtons.length; i++) {
          answerButtons[i].disabled = false;
          answerButtons[i].classList.remove("correct");
        }
        answered = false;
      }, 1000);
    }
  } else {
    event.target.classList.add("incorrect");
    // Subtract time for an incorrect answer
    timeLeft -= 10;
    setTimeout(() => {
        // Display the next question
        displayQuestion();
        // Enable all the answer buttons
        for (let i = 0; i < answerButtons.length; i++) {
          answerButtons[i].disabled = false;
          answerButtons[i].classList.remove("incorrect");
        }
        answered = false;
      }, 1000);
  }
}
  
  // Update the timer
  function countdown() {
    timer.innerText = timeLeft;
    if (timeLeft === 0) {
      endQuiz();
    }
    timeLeft--;
  }
  
  // End the quiz
  function endQuiz() {
    questionSection.classList.add("hide");
    finishedSection.classList.remove("hide");
  }