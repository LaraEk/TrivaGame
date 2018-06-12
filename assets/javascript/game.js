$(document).ready(function() {

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
      alert("Time's Up!");
      incorrectanswers++;
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

  var correctanswers = 0;
  var incorrectanswers = 0;

  var getquestionright = false;

  $("#questionslot").hide();
  $("#answerslotuno").hide();
  $("#answerslotdos").hide();
  $("#answerslottres").hide();
  $("#answerslotquatro").hide();

  // ------------------------------------------------------------------------

  function newGame() {
    $("#questionslot").hide();
    $("#answerslotuno").hide();
    $("#answerslotdos").hide();
    $("#answerslottres").hide();
    $("#answerslotquatro").hide();
    currentquestion = 0;
    correctanswers = 0;
    incorrectanswers = 0;
    askasillyquestion();
  }

  $("#starteasy").on("click", function() {
    $(this).hide();
    $("#starteasy").hide();
    $("#starthard").hide();
    askasillyquestion();
  });

  $("#starthard").on("click", function() {
    $(this).hide();
    $("#starteasy").hide();
    $("#starthard").hide();
//    runclock();
    askasillyquestion();
  });

  // ------------------------------------------------------------------------



  function askasillyquestion() {

    $("#questionslot").show();
    $("#answerslotuno").show();
    $("#answerslotdos").show();
    $("#answerslottres").show();
    $("#answerslotquatro").show();

    $("#correctanswersbox").show();
    $("#incorrectanswersbox").show();

    currentquestion = questions[Math.floor(Math.random() * questions.length)];
    console.log(currentquestion.question);
    console.log(currentquestion.answers);
    console.log(currentquestion.answerindex);

    // $("#questionslot").html(currentquestion.question);
    // $("#answerslotuno").html(currentquestion.answers[0]);
    // $("#answerslotdos").html(currentquestion.answers[1]);
    // $("#answerslottres").html(currentquestion.answers[2]);
    // $("#answerslotquatro").html(currentquestion.answers[3]);
    
    // $(".zeeanswers").on("click", function (){

    //   console.log("an answer was clicked; an attempt was made");
    //   var clickedindex = $(".zeeanswers").index(this);     // if this where the issue is?
    //   var thatstherightanswer = currentquestion.answerindex;
    //   console.log(clickedindex);

    //   getasillyanswer();

    // });
    
    $("#questionslot").html(currentquestion.question);
      for(var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(currentquestion.answers[i]);
        choices.attr({'data-index': i });
        choices.addClass('thisChoice');
        $('#answerslot').append(choices);
      }

      runclock();

      $('.thisChoice').on('click', function() {
        userSelect = $(this).data('index');
        clearInterval(intervalId);
        getasillyanswer();
      });

    

  }



  function getasillyanswer() {

    var thatstherightanswer = currentquestion.answerindex;

    if(userSelect == thatstherightanswer) {
      console.log("yeah, you're right!");
      correctanswers++;
      $("#correctanswersbox").html(correctanswers);
    } else {
      console.log("no u r rong boo");
      incorrectanswers++;
    }

    // if (clickedindex == thatstherightanswer) {    // this never comes out as correct
    //   getquestionright = true;
    //   console.log("yeah, you're right!");
    //   correctanswers++;
    //   $("#correctanswersbox").html(correctanswers);
    // } else {
    //   getquestionright = false;
    //   incorrectanswers++;
    //   console.log("no u r rong boo")
    //   $("#incorrectanswersbox").html(incorrectanswers);
    // }

    askasillyquestion();
  }


      if ((correctanswers + incorrectanswers) == 2) {
        bigWin();
      }

  function bigWin() {
    $(this).hide();
    $("#itswinningtime").show();
    $("#itswinningtime").show();  
  }



});