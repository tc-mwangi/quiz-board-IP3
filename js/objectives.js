/*Pseudocode

1. Link JS file in index.html.
Test to check JS file is linked correctly
$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });
});- passed

2. Define Master Function to execute program
(fuction() {

})();


2. store Q and Options and correct answers in a variable
var questions = [{question, choices,correctAnswer}];

3. call on function to display questions and options
var storeTrivia = function();

3. Gather input from user and store in an Array.
var userInput = [];

3. Check user input against answer sheet.

3. Display Score.
-show Score
function showScore();

-on click, show Score
submitButton.addEventListener("click", showScore);

------------------------------------------------------------------------------------------*/
// STEP 2: store Questions and Options in an Array.
//var pyTrivia: for Python and var triviaRuby: for Ruby --- for future extended features.


(function() {
  var questions = [{
    question: "Which of the following is correct about features of JavaScript?",
    choices: [
      "JavaScript is a lightweight, interpreted programming language.",
      "JavaScript is designed for creating network-centric applications.",
      "JavaScript is complementary to and integrated with Java.",
      "All of the above."
    ],
    correctAnswer: 10
  }, {
    question: "Which of the following is the correct syntax to print a page using JavaScript?",
    choices: [
      "window.print();",
      "browser.print();",
      "navigator.print();",
      "document.print();"
    ],
    correctAnswer: 18
  }, {
    question: "Which built-in method calls a function for each element in the array?",
    choices: [
      "while()",
      "loop()",
      "forEach()",
      "None of the above."
    ],
    correctAnswer: 72
  }, {
    question: "Which built-in method calls a function for each element in the array?",
    choices: [
      "toUpperCase()",
      "toUpper()",
      "changeCase(case)",
      "None of the above."
    ],
    correctAnswer: 7
  }, {
    question: "Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: [
      "add()",
      "merge()",
      "concat()",
      "append()"
    ],
    correctAnswer: 64
  }];

  var questionCounter = 0; //Count question number
  var selections = []; //Array to store user Input
  var quiz = $('#quiz'); //jQuery selector

  // display question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Display Score abd
  function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append('score ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();
