// As a coding bootcamp student
// I want to take a timed quiz on JavaScript fundamentals that stores high scores
// so that I can gauge my progress compared to my peers//
    ///etc.

   var controls = document.querySelector('.controls');
   var startButton = document.getElementById("#btn-start");
   var questionBox = document.querySelector(".container-fluid");
   var timeSpan = document.getElementById("#time-left");
   var questionElement = document.getElementById('#title');
   var choicesElement = document.getElementById("#choices");
   
   var shuffleQuestions, currenQuestionIndex;
 

   startButton.addEventListener('click', startQuiz);

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },

    {
      title: "What is the HTML tag under which one can write the JavaScript code?",
      choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
      answer: "<script>"
    },
    {
      title: "Which of the following is the correct syntax to display a message in an alert box using JavaScript?",
      choices: ["alertbox();", "msg();", "msgbox();","alert();"],
      answer: "alert();"
    }

  ];
  

 function startQuiz(){
    console.log("Quiz Started");
    controls.classList.add('hide');
    questionBox.classList.remove('hide');
    nextQuestion();
  
};
  

  function nextQuestion(){
    showQuestion(shuffleQuestions[currenQuestionIndex]);

  }

  function showQuestion(question){
    questionElement.innerHTML = title.question;
  }

  function selectAnswer(){

  }



  









startQuiz()

// Play proceeds as follows:


// The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.


// Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.


// Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


// When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.




// start quiz call-to-action
// after start quiz is clicked, a series of questions follows
// when questions begin, a countdown timer starts
// Incorrect answers result in time-penalty
// when time is out, or quiz finished, user will see their final score and enter their initials
// Store their score and Initials in localStorage.
// Correct and Incorecct Pop-ups

