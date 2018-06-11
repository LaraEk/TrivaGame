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


var questions = [ 
    "1. Which of these is not one of the Valar?", 
    "2. How many Silmarils are there?",
    "3. How old was Bilbo when he left the Shire in Fellowship?",
    "4. How many members of the Fellowship are there?",
    "5. Which of these is not one of Gandalf's names?",
];

var questionone = ["(1) Manwe ", "(2) Varda ", "(3) Orome ", "(4) Eru "];
var q1index = 3;
var questiontwo = ["thousands", 9, 3, 14];
var q2index = 2;
var questionthree = [33, 50, 111, 249];
var q3index = 1;
var questionfour = [9,9,9,"Why are you even asking me this question?"];
var questionfive = ["Mithrandir", "Elbereth", "Olorin", "Greyhame"];
var q5index= 1;

var currentquestion = questions[Math.floor(Math.random() * questions.length)];

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
  }
});

// ------------------------------------------------------------------------



function askasillyquestion() {
  console.log(currentquestion);
  $("#questionslot").html(currentquestion);
  $("#answerslot").html(questionone);
}

if (getquestionright == true) {
  
  $("correctquestions").html()
} else {

}
function getasillyanswer() {
  //this is where the answer choosing goes
}
