const startingMinutes = 2;
let time = startingMinutes * 60;
// let time = 5;
const countdownEl = document.getElementById('countdown');

var globalInterval;

function startBtnEventListener() {
globalInterval = setInterval(updateCountdown,1000)
}


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` + seconds : seconds;

    countdownEl.innerHTML = 
    `${minutes}:${seconds}`;
    time--;

    if (time < 0) { //stop the setInterval when time = 0 to avoid negative time
        countdownEl.innerHTML = 0;
        endQuiz();
    }
};

// document.querySelector('.btn').addEventListener("click",()=>{
//     updateCountdown();
// })

// startBtn.addEventListener("click", ()=>{

// updateCountdown();

// })

// could also be an if statement in different function if not its own function
function quizEnding() {
    clearInterval(globalInterval)
    }