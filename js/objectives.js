/*Pseudocode

1. Link JS file in index.html.
Test to check JS file is linked correctly
$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });
});- passed

//Questions and Options in an Array.
//var pyTrivia: for Python and var triviaRuby: for Ruby --- for future extended features.
-----------------------------------------------------------------
2. Define Master Function to execute program
(fuction() {

})();

3. store Q and Options and correct answers in a variable
var questions = [{question, choices,correctAnswer}];

4. call on function to display the next set
var showNext();

5. Gather input from user and store in an Array.
var userInput = [];

6. Check user input against answer sheet.

7. Display Score.
-show Score
function showScore();

-on click, show Score
submitButton.addEventListener("click", showScore);

------------------------------------------------------------------------------------------*/

(function() {
  var questions = [{
    //question 01
    question: "Which of the following is correct about features of JavaScript?",
    choices: [
      "JavaScript is a lightweight, interpreted programming language.",
      "JavaScript is designed for creating network-centric applications.",
      "JavaScript is complementary to and integrated with Java.",
      "All of the above."
    ],
    correctAnswer: 3
    // Explanation
    // All of the above options are correct.
  }, {
    //question 02
    question: "Which of the following is the correct syntax to print a page using JavaScript?",
    choices: [
      "window.print();",
      "browser.print();",
      "navigator.print();",
      "document.print();"
    ],
    correctAnswer: 0
    // Explanation
    // window.print(); is the correct option.
  }, {
    //question 03
    question: "Which built-in method calls a function for each element in the array?",
    choices: [
      "while()",
      "loop()",
      "forEach()",
      "None of the above."
    ],
    correctAnswer: 2
    // Explanation
    // forEach() method calls a function for each element in the array.
  }, {
    //question 04
    question: "Which built-in method returns the calling string value converted to upper case?",
    choices: [
      "toUpperCase()",
      "toUpper()",
      "changeCase(case)",
      "None of the above."
    ],
    correctAnswer: 0
    // Explanation
    // toUpperCase() method returns the calling string value converted to upper case.
  }, {
    //question 05
    question: "Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: [
      "add()",
      "merge()",
      "concat()",
      "append()"
    ],
    correctAnswer: 2
    // Explanation
    // concat() − Combines the text of two strings and returns a new string.
  }];

  var quizCount = 0; //Count question number
  var userInput = []; //Array to store user Input
  var quiz = $('#quiz'); //jQuery selector

  // display q and a
  showNext();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    // Evaluate user's answers

    // If the user doen't pick an answer:
    if (isNaN(userInput[quizCount])) {
      alert('Please pick an option!');
    } else {
      quizCount++;
      showNext();
    }
  });

  // Previous button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    quizCount--;
    showNext();
  });

  // submit button
  $('#submit').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    quizCount++;
    showNext();
  });

  // Start Button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    quizCount = 0;
    userInput = [];
    showNext();
    showAll();

    $('#start').hide();
  });

  // Creates and returns the div that contains the questions and
  // the answer userInput
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

  // List of options in raio buttons
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

  // Read the user selection and pushes the value to an array
  function choose() {
    userInput[quizCount] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function showNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(quizCount < questions.length){
        var nextQuestion = createQuestionElement(quizCount);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(userInput[quizCount]))) {
          $('input[value='+userInput[quizCount]+']').prop('checked', true);
        }

        // show and hide buttons
        if(quizCount === 1){
          $('#prev').show();
        } else if(quizCount === 0){

          $('#prev').hide();
          $('#start').hide();
          $('#submit').hide()
          $('#reveal').hide()
          $('#next').show();

        } else if(quizCount === 4){

          $('#prev').show();
          $('#next').hide();
          $('#reveal').hide();
          $('#submit').show()

        }
        else if(quizCount === 5){

          $('#prev').show();
          $('#next').hide();
          $('#reveal').hide();
          $('#start').hide();
          $('#submit').hide()

        }


      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#submit').hide();
        $('#start').show();
        $('#reveal').show();
      }
    });
  }

  // Display Score
  function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    for (var i = 0; i < userInput.length; i++) {
      if (userInput[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    var percentScore = ((numCorrect/questions.length)*100)

    if (percentScore === 100) {
      score.append('Perfect Score!!! : ' + numCorrect + '/' +
                   questions.length + '<br>' +' Percentage: '  + percentScore
                   +'%');
      return score;

  } else if (percentScore === 0) {
    score.append('Poor Score: ' + numCorrect + '/' +
                 questions.length + '<br>' +' Percentage: '  + percentScore
                 +'%');
    return score;
  } else {
    score.append('Score : ' + numCorrect + '/' +
                 questions.length + '<br>' +' Percentage: '  + percentScore
                 +'%');
    return score;
  }

  }
})();
