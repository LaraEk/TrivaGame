// --- THE TIMER --- //
// --- Timer copied from class; will specify timer to activities once I've figured out my questions more -- //

var number = 20;
var intervalId;
$("#stop").on("click", stop);

$("#resume").on("click", run);

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 200);
}

function decrement() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");

  if (number === 0) {
    stop();
    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}
run();

// --- THE TIMER --- //
// --- Timer copied from class; will specify timer to activities once I've figured out my questions more -- //


var questions = [ 
    "1. Which of these is not one of the Valar?", 
    "2. How many Silmarils are there?",
    "3. How old was Bilbo when he left the Shire in Fellowship?",
    "4. How many members of the Fellowship are there?",
    "5. Which of these is not one of Gandalf's names?",
];

var questionone = ["(1) Manwe ", "(2) Varda ", "(3) Orome ", "(4) Eru "];
var questiontwo = ["thousands", 9, 3, 14];
var questionthree = [33, 52, 111, 249];
var questionfour = [9,9,9,"Why are you even asking me this question?"];
var questionfive = ["Mithrandir", "Elbereth", "Olorin", "Greyhame"];

var currentquestion = questions[Math.floor(Math.random() * questions.length)];

function askasillyquestion() {
    console.log(currentquestion);
    $("#questionslot").html(currentquestion);
    $("#answerslot").html(questionone);
}

askasillyquestion();
