var startBtn = $("#startBtn");
var answer = $(".answer");
var optionA = $("#optionA")
var optionB = $("#optionB")
var optionC = $("#optionC")
var optionD = $("#optionD")
var a = "";
var b = "";
var c = "";
var d = "";
var question = $(".question");
var options = [a, b, c, d]

// activate the functions start the game entailds
function startTest() {
    questionsEl()
    // timerEl()

};

function questionsEl() {
    a = "Whatever?"
    b = "Wherever?"
    c = "Whenever?"
    d = "Whoever?"
};

// get the darn thing to start when i click
startBtn.on('click', function () {
    console.log("syntax")
    startTest()

    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
});

