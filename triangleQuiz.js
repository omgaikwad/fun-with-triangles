const quizForm = document.querySelector(".quiz-form");
const submitAnswersBtn = document.querySelector("#submit-answers-btn");
const outputDiv = document.querySelector("#output-div");

const correctAnswers = ["90°", "right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    outputDiv.innerText = "Your score is: " + score;
}

submitAnswersBtn.addEventListener("click", calculateScore);