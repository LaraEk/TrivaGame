 $(document).ready(function() {

  // --- THE TIMER  [from Interval] --- //

    var number = 20;
    var intervalId;

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


  // --- THE TIMER  [from Interval] --- //
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
  var numberofquestions = 20;
  var questionssofar = 0;

  var correctanswers = 0;
  var incorrectanswers = 0;

  var getquestionright = false;

  $("#starteasy").show();
  $("#starthard").show();

  $("#shownumber").hide();
  $("#questionslot").hide();
  $("#itswinningtime").hide();
  $("#wingif").hide();  
  $("#itslosingtime").hide();
  $("#lossgif").hide();  

  // ------------------------------------------------------------------------

  function newGame() {
    $("#questionslot").hide();
    $("#itswinningtime").hide();
    $("#wingif").hide();  
    $("#itslosingtime").hide();
    $("#lossgif").hide();  
    $("#starteasy").show();
    $("#starthard").show();
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
    $("#shownumber").show();
    runclock();
    askasillyquestion();
  });

  // ------------------------------------------------------------------------


  function askasillyquestion() {

    $("#questionslot").show();
    $("#correctanswersbox").show();
    $("#incorrectanswersbox").show();

    currentquestion = questions[Math.floor(Math.random() * questions.length)];
    console.log(currentquestion.question);
    console.log(currentquestion.answers);
    console.log(currentquestion.answerindex);

    $("#questionslot").html(currentquestion.question);
      for(var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(currentquestion.answers[i]);
        choices.attr({'data-index': i });
        choices.addClass('thisChoice');
        $('#answerslot').append(choices);
      }

//      runclock();

      $('.thisChoice').on('click', function() {
        userSelect = $(this).data('index');
//        clearInterval(intervalId);
        getasillyanswer();
      });
    
  }



  function getasillyanswer() {
    $(".thisChoice").empty();
    var thatstherightanswer = currentquestion.answerindex;

    if(userSelect == thatstherightanswer) {
      console.log("yeah, you're right!");
      correctanswers++;
      $("#correctanswersbox").html(correctanswers);
    } else {
      console.log("no u r rong boo");
      incorrectanswers++;
      $("#incorrectanswersbox").html(incorrectanswers);
    }

    if(questionssofar == numberofquestions){
      setTimeout(bigWin, 200)
    } else {
//      currentquestion++;
      setTimeout(askasillyquestion, 200)
      questionssofar++;
      console.log("there have been " + questionssofar + " Qs so far")
    }

//    askasillyquestion();
  }



  function bigWin() { console.log("endgame");

    if (correctanswers > incorrectanswers) {
      $("#show-time").empty();
      clearInterval(intervalId);
      $("#itswinningtime").show();
      $("#wingif").show();  
    } else {
      $("#show-time").empty();
      clearInterval(intervalId);
      $("#itslosingtime").show();
      $("#lossgif").show();  
  
    }

  }



});