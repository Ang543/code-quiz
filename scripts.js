var startBtn = document.querySelector("#startBtn");
var welcome = document.querySelector("#welcome");
var questions = document.querySelector("#questions");
var score = document.querySelector("#score");


var controlNumber = 0;

var questionsArray = [
    {
        text: "1+1=?",
        option1: "4",
        option2: "2",
        option3: "0",
        option4: "5",
        correct: "2"
    },
    {
        text: "1+3=?",
        option1: "2",
        option2: "0",
        option3: "5",
        option4: "4",
        correct: "4"
    },
    {
        text: "2+3=?",
        option1: "5",
        option2: "3",
        option3: "2",
        option4: "1",
        correct: "5"
    }
]

const displayQuestion = () => {
    welcome.style.display = "none"
    questions.style.display = "block";
    changeQuestion()
}

const checkAnswer = (event) => {

    // checking if what they clicked is correct
    console.log(event.target.textContent);

    if(event.target.textContent == questionsArray[controlNumber].correct) {
        alert("Correct!")
    } else {
        alert("Incorrect!")
    }

    controlNumber++;
    changeQuestion();
}

const changeQuestion = () => {
    if(controlNumber < questionsArray.length) {
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
        alert("You finished the quiz!")
        questions.style.display = "none";
        score.style.display = "block";
    }
}



startBtn.addEventListener("click", displayQuestion)

