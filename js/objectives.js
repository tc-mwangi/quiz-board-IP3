/*Pseudocode

1. Link JS file in index.html.
Test to check JS file is linked correctly
$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });
});- passed

2. store Q and A in Array.
var jsTrivia = [];

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

var storeTrivia = document.getElementById('quiz');
var storeResults = document.getElementById('results');
var resultsButton = document.getElementById('submit');

generateQuiz(jsTrivia, storeTrivia, storeResults, resultsButton);

function generateQuiz(questions, storeTrivia, storeResults, resultsButton){

	function showQuestions(questions, storeTrivia){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var options;

		// for each question...
		for(var i=0; i<questions.length; i++){

			// first reset the list of options
			options = [];

			// for each available answer...
			for(letter in questions[i].options){

				// ...add an html radio button
				options.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].options[letter]
					+ '</label>'
				);
			}

			// add this question and its options to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="options">' + options.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		storeTrivia.innerHTML = output.join('');
	}


	function showResults(questions, storeTrivia, storeResults){

		// gather answer containers from our quiz
		var answerContainers = storeTrivia.querySelectorAll('.options');

		// keep track of user's options
		var userAnswer = '';
		var numCorrect = 0;

		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct options
				numCorrect++;

				// color the options green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the options red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct options out of total
		storeResults.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, storeTrivia);

	// on submit, show results
	resultsButton.onclick = function(){
		showResults(questions, storeTrivia, storeResults);
	}

}
