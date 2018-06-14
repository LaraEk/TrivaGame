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

    var questionthree = {
      question: "3. How old was Bilbo when he left the Shire in Fellowship?", 
      answers: [33, 50, 111, 249],
      answerindex: 1,
    };

    var questionfour = {
      question: "4. How many members of the Fellowship are there?", 
      answers: [9,9,9,"Why are you even asking me this question?"],
      answerindex: 3,
    };

    var questionfive = {
      question: "5. Which of these is not one of Gandalf's names?", 
      answers: ["Mithrandir", "Elbereth", "Olorin", "Greyhame"],
      answerindex: 1,
    };

    var questionsix = {
      question: "6. Why was it special that Gimli received three hairs from Galadriel?", 
      answers: ["because she thought he was cute", "it was an antedote against Shelob's venom, which could cut through mithril", "it made him an elf-friend, which no dwarf has ever acheived","it was hot"],
      answerindex: 2,
    };

    var questionseven = {
      question: "7. What tribe of men was Aragorn from?", 
      answers: ["Rohirrim", "Easterling", "Haradrim", "Dunedain"],
      answerindex: 1,
    };

    var questioneight = {
      question: "8. Which dwarf from the Hobbit reestablished a foothold in Moria?", 
      answers: ["Thorin", "Balin", "Gloin", "Kili"],
      answerindex: 1,
    };

    var questionnine = {
      question: "9. Who could use the palantiri?", 
      answers: ["wizards only", "Sarumon and Aragorn", "only Sauron", "anyone"],
      answerindex: 1,
    };

    var questionten = {
      question: "10. Where is the War of the Ring documented?", 
      answers: ["The Red Book of Westmarch", "The Book of Mazarbul", "There And Back Again", "The Silmarillion"],
      answerindex: 1,
    };

    
  var questions = [questionone, questiontwo, questionthree, questionfour, questionfive, questionsix, questionseven, questioneight, questionnine, questionten];

  var currentquestion = 0;
  var numberofquestions = 19;   // so that it increments to 20 instead of to 21
  var questionssofar = 0;

  var correctanswers = 0;
  var incorrectanswers = 0;

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

      $('.thisChoice').on('click', function() {
        userSelect = $(this).data('index');
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
      bigWin();
    } else {
      setTimeout(askasillyquestion, 50)
      questionssofar++;
      console.log("there have been " + questionssofar + " Qs so far")
    }

  }



  function bigWin() { console.log("there are " + correctanswers + " correct and " + incorrectanswers + " incorrect");

    if (correctanswers > incorrectanswers) {
      $("#questionslot").hide();
      $("#show-time").empty();
      clearInterval(intervalId);
      $("#itswinningtime").show();
      $("#wingif").show();  
    } 
    
    if (incorrectanswers > correctanswers)  {
      $("#questionslot").hide();
      $("#show-time").empty();
      clearInterval(intervalId);
      $("#itslosingtime").show();
      $("#lossgif").show();  
    } 

  }



});