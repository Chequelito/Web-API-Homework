var score = 0;
var secondsLeft = 69;
var timeLeft = document.getElementById("timeText");
var startBtnEl = document.querySelector("#startBtn");
var scoreTrackEl = document.getElementById("scoreTrack");
var rightWrong = document.getElementById("feedback");
var start = document.querySelector(".main");
var test = document.getElementById("questionSec");
var question = document.getElementById("question");
var tsubAnsEl = document.getElementById("subAns");
var answA = document.getElementById("optionA");
var answB = document.getElementById("optionB");
var answC = document.getElementById("optionC");
var answD = document.getElementById("optionD");
var answEl = document.getElementById("answer");
var finTally = document.getElementById("timeText");
var finalAnsw = "";
var q = 0;
var preScoreDis = document.getElementById("preScore");



startBtnEl.$("click", function () {
    timer();
    runTest();
    questionPrompt();
    preScoreDis.innerhtml = localStorage.getItem(preScore);


});

function timer() {
    var timerCount = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerCount);
            finalScore();
        }
        if (questionArr.length > questionArr[q]) {
            clearInterval(timerCount);
            finalScore();
        }
    }, 1000);
}

function runTest() {
    start.setAttribute("style", "display:none;");
    test.setAttribute("style", "display:block;");
}

var clickCheck = function () {
    finalAnsw = this.getAttribute("value");
    questionArr[q].answerCheck();
    q++;
    if (q > questionArr.length - 1) {
        finTally();
    } else {
        question();
    }
}

for (var i = 0; i < answEl.length; i++) {
    answEl[i].$("click", clickCheck);
}

console.log(answEl.length);

questionArr = [
    {
        question: "What number is higher than 4?",
        answer: ["1", "2", "3", "5"],
        answerCheck: function () {
            if (finalAnsw == "d") {
                score++;
                rightWrong.textContent = "You got it!";
            } else {
                timeLeft = timeLeft - 10;
                rightWrong.textContent = "Suck it loser!";
            }
        },
    },
    {
        question: "Where am I?",
        answer: ["Drunk", "Home", "Asleep", "All of the above"],
        answerCheck: function () {
            if (finalAnsw == "d") {
                score++;
                rightWrong.textContent = "Yes!";
            } else {
                timeLeft = timeLeft - 10;
                rightWrong.textContent = "No?";
            }
        },
    },
    {
        question: "What's my favorite food",
        answer: ["Trick question", "candy", "lasagna", "wings"],
        answerCheck: function () {
            if (finalAnsw == "c") {
                score++;
                rightWrong.textContent = "Lucky Guess!";
            } else {
                timeLeft = timeLeft - 10;
                rightWrong.textContent = "Wrong!";
            }
        },
    },
    {
        question: "How long do sharks live?",
        answer: ["Really long", "Really short", "Somewhere in the middle", "Sharks aren't real"],
        answerCheck: function () {
            if (finalAnsw == "c") {
                score++;
                rightWrong.textContent = "Probably";
            } else {
                timeLeft = timeLeft - 10;
                rightWrong.textContent = "Probably Not";
            }
        },
    },
];

function questionPrompt() {
    question.innerHTML = questionArr[q].question;
    answA.innerHTML = questionArr[q].answers[0];
    answB.innerHTML = questionArr[q].answers[1];
    answC.innerHTML = questionArr[q].answers[2];
    answD.innerHTML = questionArr[q].answers[3];

    scoreTrackEl.textContent = "UR score is " + score;
}

function finTally() {
    document.getElementById("finTally").setAttribute("style", "display:block;");
    endScoreEl.textContent = "UR score is " + score;
    testDis.setAttribute("style", "display:none;");

    document.getElementById("highButton").addEventListener("click", function () {

        localStorage.setItem("preScore", score);
    });
}