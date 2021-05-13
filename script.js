$(document).ready(function () {
    var startBtn = $("#startBtn");
    var answer = $(".answer");
    var optionA = $("#optionA")
    var optionB = $("#optionB")
    var optionC = $("#optionC")
    var optionD = $("#optionD")
    var timeleft = $("#timeText")
    var secondsLeft = 60;
    var questions = $(".question");
    var questionContainer = $("#questionContainer")
    var seconds = 60;
    var points = 0;
    var questions = [
        {
            questionText: "Something?",
            options: ["butt", "soup", "here", "dude"],
            correctAnswer: "soup"
        },
        {
            questionText: "Nothing?",
            options: ["a", "b", "c", "d"],
            correctAnswer: "a"
        },
        {
            questionText: "Swampthing?",
            options: ["6", "0", "5", "1"],
            correctAnswer: "0"
        },
        {
            questionText: "Humping?",
            options: ["l", "p", "q", "y"],
            correctAnswer: "y"
        },
        {
            questionText: "Something?",
            options: ["&", "%", "@", "#"],
            correctAnswer: "@"
        },
    ];

    // activate the functions start the game entailds
    function startTest() {
        startBtn.attr('style', 'display: none');
        question.remove('hide')
        questionsEl()
       

    };
    var index = 0
    function questionsEl() {
        questionContainer.empty()
        var questionText = $("<h2>")
        questionText.text(questions[index].questionText)
        questionContainer.append(questionText)
        optionA.text(questions[index].options[0])
        optionB.text(questions[index].options[1])
        optionC.text(questions[index].options[2])
        optionD.text(questions[index].options[3])

        optionB.on("click", checkAnswer)
        optionC.on("click", checkAnswer)
        optionD.on("click", checkAnswer)
        optionA.on("click", checkAnswer)
    };

    function checkAnswer() {

        var selectedAnswer = $(this).text()
        var correctAnswer = questions[index].correctAnswer
        if (selectedAnswer === correctAnswer) {
            points = points + 1;
            timeleft += 10;
            index++
            questionsEl()
        }
        else {
            timeleft -= 10;
            index++
            questionsEl()
        }

    };

    function timerEl() {

        var timerCount = setInterval(function () {
            secondsLeft--;
            timeleft.text(secondsLeft);

            if (secondsLeft === 0) {
                clearInterval(timerCount);
                // finalScore();
            }
            if (questions.length > questions[index]) {
                clearInterval(timerCount);
                // finalScore();
            }
        }, 1000);

    }
    // get the darn thing to start when i click
    startBtn.on('click', function () {
        console.log("syntax")
        startTest()
         timerEl()

        // var newPassword = passwordGenerator(15);
        // passwordDisplayEl.text(newPassword);
    });




});

