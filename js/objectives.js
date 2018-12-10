/*Pseudocode

1. Link JS file in index.html.
Test to check JS file is linked correctly
$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });
});

2. store Q and A in Array.
var jsTrivia = [];

3. call on function to display questions and options
var displayTrivia = function();

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

var jsTrivia = [
// Q - 1
{
  question: "Which of the following is correct about features of JavaScript?",
  options: {
    A: "JavaScript is a lightweight, interpreted programming language.",
    B: "JavaScript is designed for creating network-centric applications.",
    C: "JavaScript is complementary to and integrated with Java.",
    D: "All of the above."
  },
  correctAnswer: "D"
},

// Q - 2
{
  question: "Which of the following is the correct syntax to print a page using JavaScript?",
  options: {
    A: "window.print();",
    B: "browser.print();",
    C: "navigator.print();",
    D: "document.print();"
  },
  correctAnswer: "A"
},

// Q - 3
{
  question: "Which built-in method calls a function for each element in the array?",
  options: {
    A: "while()",
    B: "loop()",
    C: "forEach()",
    D: "None of the above."
  },
  correctAnswer: "C"
},

// Q - 4
{
  question: "Which built-in method calls a function for each element in the array?",
  options: {
    A: "toUpperCase()",
    B: "toUpper()",
    C: "changeCase(case)",
    D: "None of the above."
  },
  correctAnswer: "A"
},

// Q - 5
{
  question: " Which of the following function of String object combines the text of two strings and returns a new string?",
  options: {
    A: "add()",
    B: "merge()",
    C: "concat()",
    D: "append()"
  },
  correctAnswer: "C"
},

// Q - 6
{
  question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
  options: {
    A: "slice()",
    B: "merge()",
    C: "replace()",
    D: "search()"
  },
  correctAnswer: "B"
},

// Q - 7
{
  question: "Which of the following function of String object returns the primitive value of the specified object.",
  options: {
    A: "toLocaleUpperCase()",
    B: "toUpperCase()",
    C: "toString()",
    D: "valueOf()"
  },
  correctAnswer: "D"
},

// Q - 8
{
  question: "Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?",
  options: {
    A: "fixed()",
    B: "big()",
    C: "blink()",
    D: "bold()"
  },
  correctAnswer: "A"
},

// Q - 9
{
  question: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
  options: {
    A: "push()",
    B: "join()",
    C: "pop()",
    D: "map()"
  },
  correctAnswer: "D"
},

// Q - 10
{
  question: "Which of the following function of Array object sorts the elements of an array?",
  options: {
    A: "toSource()",
    B: "sort()",
    C: "toString()",
    D: "unshift()"
  },
  correctAnswer: "B"
}
];

var triviaContainer = document.getElementById('trivia').;
var resultsContainer = document.getElementById('submit').;
var submitButton = document.getElementById('results').;

function displayTrivia() {
  //store html display in Array
  var output = [];
  //for each question.
  jsTrivia.forEach((currentQuestion, questionNumber) =>
{
  //store options in an Array.
  var options = [];

  //store options in radio buttons.
      options.push(

        `<label class="radio-inline">
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.options[letter]}
        </label>`
      );
    }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="options"> ${options.join("")} </div>`
      );

    });

    //combine list and display on HTML.
    triviaContainer.innerHTML = output.join("");
  };

  //call on function to display on HTML.
  displayTrivia();



  //End Function for displaying Trivia on html.

  $(document).ready(function() {
    $("h1").click(function() {
      alert("This is a header.");
    });
  });

  //variables for retrieving and storing id's: trivia, submit and results.




  // <div id="trivia" class="hs-line-8 no-transp font-alt mb-40 mb-xs-20">
  //   <p></p>
  // </div>
