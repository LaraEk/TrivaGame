// --- THE TIMER --- //
// --- Timer copied from class; will specify timer to activities once I've figured out my questions more -- //

var number = 20;
var intervalId;
//$("#stop").on("click", stop);

//$("#resume").on("click", run);

function runclock() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 2000);
}

function decrement() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");

  if (number === 0) {
    stop();
    alert("Time Up!");
//    loseapoint++;
  }
}

function stop() {
  clearInterval(intervalId);
}


// --- THE TIMER --- //
// --- Timer adapted from class version; will specify once I've figured out my questions more -- //
// -------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------- //



var questionone = {
    question: "1. Which of these is not one of the Valar?", 
    answers: ["(1) Manwe ", "(2) Varda ", "(3) Orome ", "(4) Eru "],
    answerindex: 3,
  };

var questiontwo = {
    question: "2. How many Silmarils are there?", 
    answers: ["thousands", 9, 3, 14],
    answerindex: 2,
  };
  
var questions = [questionone, questiontwo];

var currentquestion = 0; 

var winapoint = 0;
var loseapoint = 0;

var getquestionright = false;

// ------------------------------------------------------------------------

function newGame() {
  currentquestion = 0;
  correctanswer = 0;
  askasillyquestion();
}

$("#starteasy").on("click", function() {
  $(this).hide();
  askasillyquestion();
});

$("#starthard").on("click", function() {
  $(this).hide();
  runclock();
  askasillyquestion();
});

// ------------------------------------------------------------------------



function askasillyquestion() {
  currentquestion = questions[Math.floor(Math.random() * questions.length)];
  console.log(currentquestion.question);
  console.log(currentquestion.answers);
  console.log(currentquestion.answerindex);

  $("#questionslot").html(currentquestion.question);
  $("#answerslotuno").html(currentquestion.answers[0]);
  $("#answerslotdos").html(currentquestion.answers[1]);
  $("#answerslottres").html(currentquestion.answers[2]);
  $("#answerslotquatro").html(currentquestion.answers[3]);
  
  $(".zeeanswers").on("click", function (){
    console.log("boing boing");
  });
  // if (getquestionright == true) {
  
  //   $("correctquestions").html()
  // } else {}
  

}



function getasillyanswer() {
  //this is where the answer choosing goes
}
