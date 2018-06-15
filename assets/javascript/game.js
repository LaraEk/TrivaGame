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
      question: "Which of these is not one of the Valar?", 
      answers: ["(1) Manwe ", "(2) Varda ", "(3) Orome ", "(4) Eru "],
      answerindex: 3,
    };

  var questiontwo = {
      question: "How many Silmarils are there?", 
      answers: ["thousands", 9, 3, 14],
      answerindex: 2,
    };

    var questionthree = {
      question: "How old was Bilbo when he left the Shire in Fellowship?", 
      answers: [33, 50, 111, 249],
      answerindex: 1,
    };

    var questionfour = {
      question: "How many members of the Fellowship are there?", 
      answers: [9,9,9,"Why are you even asking me this question?"],
      answerindex: 3,
    };

    var questionfive = {
      question: "Which of these is not one of Gandalf's names?", 
      answers: ["Mithrandir", "Elbereth", "Olorin", "Greyhame"],
      answerindex: 1,
    };

    var questionsix = {
      question: "Why was it special that Gimli received three hairs from Galadriel?", 
      answers: ["because she thought he was cute", "it was an antedote against Shelob's venom, which could cut through mithril", "it made him an elf-friend, which no dwarf has ever acheived","it was hot"],
      answerindex: 2,
    };

    var questionseven = {
      question: "What tribe of men was Aragorn from?", 
      answers: ["Rohirrim", "Easterling", "Haradrim", "Dunedain"],
      answerindex: 3,
    };

    var questioneight = {
      question: "Which dwarf from the Hobbit reestablished a foothold in Moria?", 
      answers: ["Thorin", "Balin", "Gloin", "Kili"],
      answerindex: 1,
    };

    var questionnine = {
      question: "Who could use the palantiri?", 
      answers: ["wizards only", "Sarumon and Aragorn", "only Sauron", "anyone"],
      answerindex: 3,
    };

    var questionten = {
      question: "Where is the War of the Ring documented?", 
      answers: ["The Red Book of Westmarch", "The Book of Mazarbul", "There And Back Again", "The Silmarillion"],
      answerindex: 0,
    };

    var questioneleven = {
      question: "Who was not at the Council of Elrond?", 
      answers: ["Thranduil", "Legolas", "Gloin", "Glorfindel"],
      answerindex: 0,
    };

    var questiontwelve = {
      question: "Whom do Sam and Frodo tell when they leave the Fellowship?", 
      answers: ["everyone", "Gandalf", "Aragorn", "no one"],
      answerindex: 3,
    };

    var questionthirteen = {
      question: "5. When does the Fellowship first notice Gollum following?", 
      answers: ["in the Shire", "in the mines of Moria", "along the Great River", "at Shelob's Lair"],
      answerindex: 2,
    };

    var questionfourteen = {
      question: "When does Boromir die?", 
      answers: ["at the end of the first movie", "at the end of the first book", "at the beginning of the second movie", "at the beginning of the second book"],
      answerindex: 3,
    };

    var questionfifteen = {
      question: "Tell me, Legolas! What do your elf-eyes see?", 
      answers: ["They're taking the hobbits to Isengard!", "I see trees of green, and clouds of white...", "(Legolas does not answer, but stares forlornly into the distance)", "I seent it!"],
      answerindex: 0,
    };

    var questionsixteen = {
      question: "What happens to the Shire after the War of the Ring?", 
      answers: ["Sam becomes King of the Shire", "Saruman and Grima move in and lay waste", "The Hobbits have a lot of parties and eat a lot", "Nothing at all, it's pretty boring"],
      answerindex: 1,
    };

    var questionseventeen = {
      question: "Tell me, where is Gandalf, for I much desire to speak with him.", 
      answers: ["He has fallen into shadow.", "They're taking the Hobbits to Isengard!", "The Power Of Mordor", "What did you say?"],
      answerindex: 0,
    };

    var questioneighteen = {
      question: "How did Frodo fight off Shelob?", 
      answers: ["using Sting, he stabbed her", "he used three hairs of Galadriel to bind her", "he used the Ring to hide himself and rang from her", "none of these, he got bitten and died temporarily"],
      answerindex: 3,
    };

    var questionnineteen = {
      question: "Which of the Hobbits went to the Grey Havens and passed out of Middle-Earth?", 
      answers: ["Sam", "Pippin", "Frodo", "Merry"],
      answerindex: 2,
    };

    var questiontwenty = {
      question: "Which of these is not a forest on Middle-Earth?",
      answers: ["Fangorn", "Lothlorien", "Mirkwood", "Eriador"],
      answerindex: 3,
    };

    var questiontwentyone = {
      question: "Who were the tree people?", 
      answers: ["Ents", "Tree-wives", "the Withywindle", "the wood-elves of Mirkwood"],
      answerindex: 0,
    };

    var questiontwentytwo = {
      question: "What is the title of the fouth chapter of Fellowship?", 
      answers: ["The Battle of Cirith Ungol" , "There And Back Again" ,"Three is Company", "A Shortcut To Mushrooms"],
      answerindex: 3,
    };

    var questiontwentythree = {
      question: "What does Tom Bombadil do with the Ring?",
      answers: ["turn invisible", "build an empire", "divest his stocks", "nothing"],
      answerindex: 3,
    };

    var questiontwentyfour = {
      question: "Where do the Hobbits get their weapons?",
      answers: ["The Shire", "The Barrow-Downs", "Rivendell", "As gifts from Bilbo"],
      answerindex: 1,
    };

    var questiontwentyfive = {
      question: "Which of these is not one of Aragorn's names?",
      answers: ["Arathorn", "Elessar", "Estel" , "Strider"],
      answerindex: 0,
    };

    
    
  var questions = [questionone, questiontwo, questionthree, questionfour, questionfive, questionsix, questionseven, questioneight, questionnine, questionten, questioneleven, questiontwelve, questionthirteen, questionfourteen, questionfifteen, questionsixteen, questionseventeen, questioneighteen, questionnineteen, questiontwenty, questiontwentyone, questiontwentytwo, questiontwentythree, questiontwentyfour, questiontwentyfive];

  var currentquestion = 0;
  var numberofquestions = 19;   // so that it increments to 20 instead of to 21
  var questionssofar = 0;

  var correctanswers = 0;
  var incorrectanswers = 0;

  $("#starteasy").show();
  $("#starthard").show();
  $("#startanewgame").hide();

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
    $("#startanewgame").hide();
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
      $("#startanewgame").show();
    } 
    
    if (incorrectanswers > correctanswers)  {
      $("#questionslot").hide();
      $("#show-time").empty();
      clearInterval(intervalId);
      $("#itslosingtime").show();
      $("#lossgif").show();  
      $("#startanewgame").show();
    } 

  }

  // $("#startanewgame").on("click," function() {
  //   $(this).hide();
  //   newGame();
  // });


});