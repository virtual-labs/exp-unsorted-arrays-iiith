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
            question: "1. What is the pre-requisite to Binary Search?", ///// Write the question inside double quotes
            answers: {
                a: "Nothing really ", ///// Write the option 1 inside double quotes
                b: "Array must be sorted either in ascending or descending order", ///// Write the option 2 inside double quotes
                c: "The number of values in the array are limited", ///// Write the option 2 inside double quotes
                d: " The values in the array have a maximum bound value they can take ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Binary Search can be categorized into which of the following?",  ///// Write the question inside double quotes
      answers: {
        a: "Brute Force technique ",                  ///// Write the option 1 inside double quotes
        b: "Divide and conquer ",                  ///// Write the option 2 inside double quotes
	c: "Greedy algorithm ", ///// Write the option 3 inside double quotes
        d: "Dynamic programming", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Given an array arr = {5,6,77,88,99} and key = 88; How many iterations are done until the element is found? ",  ///// Write the question inside double quotes
      answers: {
        a: "1",                  ///// Write the option 1 inside double quotes
        b: "2",                  ///// Write the option 2 inside double quotes
	c: "3", ///// Write the option 3 inside double quotes
        d: "4", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
{
      question: "4. Given an array arr = {45,77,89,90,94,99,100} and key = 100; What are the mid values(corresponding array elements) generated in the first and second iterations? ",  ///// Write the question inside double quotes
      answers: {
        a: " 90 and 99 ",                  ///// Write the option 1 inside double quotes
        b: "90 and 100 ",                  ///// Write the option 2 inside double quotes
	c: "89 and 94", ///// Write the option 3 inside double quotes
        d: "94 and 99", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
{
      question: "5. What is the time complexity of binary search with iteration?",  ///// Write the question inside double quotes
      answers: {
        a: "O(nlogn)",                  ///// Write the option 1 inside double quotes
        b: "O(logn) ",                  ///// Write the option 2 inside double quotes
	c: "O(n)", ///// Write the option 3 inside double quotes
        d: "O(n<sup>2</sup>>) ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
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
