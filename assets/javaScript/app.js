var quiz = [
    {
      question: "What plant is genuine tequila made from?",
      choices: [
        "Agave deserti", "Agave filifera", "Agave azul","Agave salmiana"],
      answer: "Agave azul"
    },
    {
      question: "What state is the largest producer of tequila?",
      choices: ["Jalisco", "Michoacan", "Guanajuato", "Tamaulipas"],
      answer: "Jalisco"
    },
    {
      question: "What is the purest form of tequila called?",
      choices: ["Reposado", "Joven", "Blanco", "Añejo"],
      answer: "Blanco"
    },
    {
      question: "Which was the first company to be licensed to manufacture tequila?",
      choices: ["Don Julio", "José Cuervo", "Herradura", "Patrón"],
      answer: "José Cuervo"
    }
  ];
  
  var currentQuestion = 0;
  var correctAns = 0;
  var incorrectAns = 0;
  var unanswered = 0;
  var number = 10;
  var intervalId;
  
  $("button").click(function(event) {
    answer(event.currentTarget.innerText);
  });
  
  function startGame() {
    $(".timer").css("display", "initial");
    $(".trivia").css("display", "initial");
    run();
  }
  
  function run() {
    if (currentQuestion < quiz.length) {
      $("#btnStart").css("display", "none");
      number = 15;
      $(".timer").html(number);
      intervalId = setInterval(decrement, 1000);
    } else {
      stop();
    }
  }
  
  function decrement() {
    number--;
    $(".timer").html(number);
  
    if (number === 0) {
      showMessage("Time Out!");
      unanswered++;
    }
  }
  
  function showMessage(message) {
    stop();
    $("#message")
      .show(
        setTimeout(function() {
          nextQuestion();
        }, 2000)
      )
      .text(message);
  }
  
  function answer(answerString) {
    if (quiz[currentQuestion].answer === answerString) {
      showMessage("Cierto!");
      correctAns++;
    } else {
      showMessage("falso!");
      incorrectAns++;
      $();
    }
    console.log(correctAns);
  }
  
  function stop() {
    clearInterval(intervalId);
  }
  
  stop();
  
  function showQuestions() {
    if (currentQuestion < quiz.length) {
    
      $("#question").text(quiz[currentQuestion].question);
      $("#ans1").text(quiz[currentQuestion].choices[0]);
      $("#ans2").text(quiz[currentQuestion].choices[1]);
      $("#ans3").text(quiz[currentQuestion].choices[2]);
      $("#ans4").text(quiz[currentQuestion].choices[3]);
    } else {
      endScreen();
      stop();
    }
  }
  
  showQuestions();
  
  function endScreen() {
    $("#btnOver").css("display", "initial");
    $(".trivia").css("display", "none");
    $("#correct").text("Correct Answers: " + correctAns);
    $("#incorrect").text("Incorrect Answers: " + incorrectAns);
    $("#unanswered").text("Timed-Out: " + unanswered);
    $(".score").css("display", "initial");
    $(".timer").css("display", "none");
    stop();
  }
  
  function resetGame() {
    currentQuestion = 0;
    correctAns = 0;
    incorrectAns = 0;
    unanswered = 0;
    number = 10;
    intervalId;
    $(".timer").css("display", "initial");
    $(".score").css("display", "none");
    $(".trivia").css("display", "initial");
    $("#btnOver").css("display", "none");
    startGame();
  }
