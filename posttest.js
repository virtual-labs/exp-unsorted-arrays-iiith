/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
function buildQuiz() {
// we'll need a place to store the HTML output
const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");
}

function showResults() {
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
answerContainers.forEach(e => e.style.color = "black");

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
numCorrect++;

// color the answers green
//answerContainers[questionNumber].style.color = "lightgreen";
} else {
// if answer is wrong or blank
// color the answers red
answerContainers[questionNumber].style.color = "red";
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


const myQuestions = [{
question: "1. Which of the following is correct recurrence for worst case of Binary Search?", ///// Write the question inside double quotes
answers: {
a: " T(n) = 2T(n/2) + O(1) and T(1) = T(0) = O(1)", ///// Write the option 1 inside double quotes
b: "T(n) = T(n-1) + O(1) and T(1) = T(0) = O(1) ", ///// Write the option 2 inside double quotes
c: "T(n) = T(n/2) + O(1) and T(1) = T(0) = O(1) ", ///// Write the option 3 inside double quotes
d: " T(n) = T(n-2) + O(1) and T(1) = T(0) = O(1) ", ///// Write the option 4 inside double quotes
},
correctAnswer: "c" ///// Write the correct option inside double quotes
},

{
question: "2. Given a sorted array of integers, what can be the minimum worst case time complexity to find ceiling of a number x in given array? Ceiling of an element x is the smallest element present in array which is greater than or equal to x. Ceiling is not present if x is greater than the maximum element present in array. For example, if the given array is {12, 67, 90, 100, 300, 399} and x = 95, then output should be 100. ",  ///// Write the question inside double quotes
answers: {
a: "O(LogLogn) ",                  ///// Write the option 1 inside double quotes
b: "O(n)",                  ///// Write the option 2 inside double quotes
c: "O(Logn) ", ///// Write the option 3 inside double quotes
d: "O(Logn * Logn) ", ///// Write the option 4 inside double quotes
},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "3. Consider a sorted array of n numbers. What would be the time complexity of the best known algorithm to find a pair a and b such that |a-b| = k , k being a positive integer.",  ///// Write the question inside double quotes
answers: {
a: "O(n)",                  ///// Write the option 1 inside double quotes
b: "O(nlogn) ",                  ///// Write the option 2 inside double quotes
c: " O(n<sup>2</sup>>) ", ///// Write the option 3 inside double quotes
d: "O(n)", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "4. Like linear search and binary search, ternary search is a searching technique that is used to determine the position of a specific value in an array. In binary search, the sorted array is divided into two parts while in ternary search, it is divided into 3 parts and then you determine in which part the element exists.<br>Ternary search, like binary search, is a divide-and-conquer algorithm. It is mandatory for the array (in which you will search for an element) to be sorted before you begin the search.<br>Is the following statement correct?'Ternary Search is better than Binary Search' ",  ///// Write the question inside double quotes
answers: {
a: "True ",                  ///// Write the option 1 inside double quotes
b: "False ",                  ///// Write the option 2 inside double quotes

},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},



];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
