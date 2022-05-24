var startBtn = document.querySelector("#startBtn");
var welcome = document.querySelector("#welcome");
var questions = document.querySelector("#questions");
var score = document.querySelector("#score");
var scoreCount = 0;

var controlNumber = 0;

var questionsArray = [
    {
        text: "Inside which HTML element do we put the JavaScript?",
        option1: "<javascript>",
        option2: "<js>",
        option3: "<script>",
        option4: "<scripting>",
        correct: "<script>"
    },
    {
        text: "How do you create a function?",
        option1: "function:myFunction()",
        option2: "function=myFunction()",
        option3: "function myFunction()",
        option4: "myFunction():function",
        correct: "function myFunction()"
    },
    {
        text: "How many looping statements are there in JavaScript?",
        option1: "2. The for loop, and the while loop",
        option2: "4. The for loop, the while loop, the do...while loop, and the loop...until loop",
        option3: "3. The for loop, the while loop, and the do...while loop",
        option4: "1. The for loop",
        correct: "3. The for loop, the while loop, and the do...while loop"
    },
    {
        text: "How can you add a comment in JavaScript?",
        option1: "//This is a comment",
        option2: "'This is a comment",
        option3: "<!--This is a comment-->",
        option4: "#This is a comment",
        correct: "//This is a comment"
    },
    {
        text: "How do you round the number 7.25, to the nearest whole number?",
        option1: "Math.rnd(7.25)",
        option2: "round(7.25)",
        option3: "rnd(7.25)",
        option4: "Math.round(7.25)",
        correct: "Math.round(7.25)"
    },
    {
        text: "In HTML, use the _____ property/attribute to set a default value that displays in an input box when the form is initially displayed.",
        option1: "Default",
        option2: "Value",
        option3: "Form",
        option4: "None of the above.",
        correct: "Value"
    },
    {
        text: "In JavaScript, the following loop will execute ________ times. for (x=1; x<11; x++)",
        option1: "10",
        option2: "9",
        option3: "11",
        option4: "cannot tell from this portion of the script",
        correct: "10"
    },
    {
        text: "The majority of a typical Web document will be found in:",
        option1: "the head tag",
        option2: "the title tag",
        option3: "the body tag",
        option4: "a comment tag",
        correct: "the body tag"
    },
    {
        text: "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
        option1: "method",
        option2: "assignment operator",
        option3: "variable",
        option4: "string",
        correct: "variable"
    },
    {
        text: "In JavaScript, which of the following is a logical operator?",
        option1: "|",
        option2: "&&",
        option3: "%",
        option4: "/",
        correct: "&&"
    },
]



const checkAnswer = (event) => {

    // checking if what they clicked is correct
    console.log(event.target.textContent);

    if (event.target.textContent == questionsArray[controlNumber].correct) {
        alert("Correct!")
        scoreCount++;
    } else {
        alert("Incorrect!")
    }

    controlNumber++;
    changeQuestion();
}

const changeQuestion = () => {
    if (controlNumber < questionsArray.length) {
        var questionText = document.querySelector("#question-text");
        var option1 = document.querySelector("#option-1");
        var option2 = document.querySelector("#option-2");
        var option3 = document.querySelector("#option-3");
        var option4 = document.querySelector("#option-4");

        questionText.textContent = questionsArray[controlNumber].text;
        option1.textContent = questionsArray[controlNumber].option1;
        option2.textContent = questionsArray[controlNumber].option2;
        option3.textContent = questionsArray[controlNumber].option3;
        option4.textContent = questionsArray[controlNumber].option4;

        option1.addEventListener("click", checkAnswer)
        option2.addEventListener("click", checkAnswer)
        option3.addEventListener("click", checkAnswer)
        option4.addEventListener("click", checkAnswer)

    } else {
        endQuiz();
    }
}

function endQuiz(){
    alert("You finished the quiz!")
    questions.style.display = "none";
    score.style.display = "block";
    quizEnding();
    document.querySelector("#scoreCount").textContent = scoreCount;
}

// // let timeTest = 10

// // let time = 5
// const startingMinutes = 2;
// let time = startingMinutes //* 60;
// // let time = 5;
// let countdownEl = document.getElementById('countdown');

// var globalInterval;

// function startBtnEventListener() {
//     globalInterval = setInterval(1000)
// }


// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? `0` + seconds : seconds;

//     countdownEl.innerHTML =
//         `${minutes}:${seconds}`;
//     time--;

//     if (time < 0) { //stop the setInterval when time = 0 to avoid negative time
//         countdownEl.innerHTML = 0;
//     }
// };



// function countdownTimer() {
//     timeTest--;
//     countdownEl.textContent = timeTest

// }


// function updateCountdown() {setInterval(countdownTimer(), 1000)
// }

const displayQuestion = () => {

    welcome.style.display = "none"
    questions.style.display = "block";
    changeQuestion()
    startBtnEventListener()
}

// // document.querySelector('.btn').addEventListener("click",()=>{
// //     updateCountdown();
// // })

// // startBtn.addEventListener("click", ()=>{

// // updateCountdown();

// // })

// // could also be an if statement in different function if not its own function
// function quizEnding() {
//     clearinterval(globalInterval)
// }

startBtn.addEventListener("click", displayQuestion)
// startBtn.addEventListener("click", updateCountdown)
