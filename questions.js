// As a coding bootcamp student
// I want to take a timed quiz on JavaScript fundamentals that stores high scores
// so that I can gauge my progress compared to my peers//
    ///etc.

   var controls = document.querySelector('.controls');
   var startButton = document.getElementById("#btn-start");
   var questionBox = document.querySelector(".container-fluid");
   var timeLeft = document.querySelector(".time-remaining");
   var highScoreEl = document.querySelector(".high-score");
   var highScoreButton =document.getElementById ("#btn-viewhighscore");
   var questionindex = 0;
   var correct = 0;
   var wrong = 0;
   var result = document.getElementById("#answer-result");
 
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
      choices: ["javascript", "scripted", "script", "js"],
      answer: "script"
    },
    {
      title: "Which of the following is the correct syntax to display a message in an alert box using JavaScript?",
      choices: ["alertbox();", "msg();", "msgbox();","alert();"],
      answer: "alert();"
    }

  ];

  var viewScoreScreen= [ "Your score is:  "

  ];
  
  var timeRemaining = 60;

 function startQuiz(){
    console.log("Quiz Started");
    controls.classList.add('hide');
    questionBox.classList.remove('hide');
    displayQuestion();
   
    setInterval(function(){
      timeRemaining--;
      if (timeRemaining >= 0){
        var timeSpan = document.createElement('span');
        timeSpan.innerHTML=timeRemaining;
        timeLeft.innerHTML="Time Remaining: " + timeRemaining;

      }
      if (timeRemaining === 0){
        alert("Time's Up!");
        clearInterval();
      }

      
    },1000);



};
  
  function displayQuestion(){
   var title = document.createElement('span');
    title.innerHTML = questions[questionindex].title;
 
   document.querySelector('#question-box').appendChild(title);
   for(var i = 0; i < questions[questionindex].choices.length; i++){
     var choice = document.createElement('button');
   title.classList += 'card-text card-body';
   choice.innerHTML= questions[questionindex].choices[i];
   choice.classList += 'btn btn-warning btn-grid choice';
   document.querySelector('#question-box').appendChild(choice);
   }

   var button = document.querySelectorAll('.choice');
   for(var i = 0; i < button.length; i++){
  
    button[i].addEventListener('click', selectAnswer);
   }
  }


  function selectAnswer(){
    if(this.innerHTML === questions[questionindex].answer){
        correct++;
        highScoreEl.innerHTML="High Score: " + correct;
        
      
   } 

    document.querySelector("#question-box").innerHTML = '';
    questionindex++;
    if(questionindex === questions.length){
      alert("Thanks for playing!");
      
      viewScore();

  

    } else displayQuestion();
    

  }



  function viewScore(){
    //
    
    console.log("Hey, look at your score!");
    var highScoreTitle = document.createElement('h3');
    highScoreTitle.innerHTML =viewScoreScreen[0];
    highScoreTitle.classList += 'card-body card-text';
    document.querySelector('#question-box').appendChild(highScoreTitle);
    //
    var highScoreInput = document.createElement('span');
    highScoreInput.innerHTML = timeRemaining;
    highScoreTitle.appendChild(highScoreInput);
    //
    var initialInput = document.createElement ('span');
    var initialTextArea= document.createElement('input');
    initialInput.innerHTML = "Your initials: " ;
    initialInput.classList += ('card-text card-body initial-input');
    document.querySelector("#question-box").appendChild(initialInput);
    initialInput.appendChild(initialTextArea);
    //
    var saveButton = document.createElement('button');
    saveButton.innerHTML = "Save Results";
    saveButton.classList += ('btn btn-warning btn-grid btn-save');
    document.querySelector('#question-box').appendChild(saveButton);

    saveButton.onclick = (saveFunction);



  function saveFunction(){
    document.querySelector("#question-box").innerHTML = "";
    var highScoreText= document.createElement('h3');
    highScoreText.classList += ('card-body card-text');
    highScoreText.innerHTML= "HIGHSCORES:";
    document.querySelector('#question-box').appendChild(highScoreText);
    var highScoreList = document.createElement('h4');
    highScoreList.innerHTML= "1) "  + timeRemaining + "  " + initialTextArea.value;          

    highScoreList.classList += ('card-body card-text highscore-text');
    highScoreText.appendChild(highScoreList);



    
    

  }
}
  startButton.addEventListener('click', startQuiz);
  highScoreButton.addEventListener('click', viewScore);
  saveButton.addEventLister('click',saveFunction);

//startQuiz()


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
// Correct and Incorrect Pop-ups
