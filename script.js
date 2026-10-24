
let questions = [
    {
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Abuja", "Kano", "Enugu"],
        answer: 1
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: 2
    },
    {
        question: "Which of these is a JavaScript data type?",
        options: ["Number", "Website", "Browser", "Keyboard"],
        answer: 0
    },
    {
        question: "How many days are in a normal year?",
        options: ["360", "364", "365", "366"],
        answer: 2
    },
    {
        question: "Which HTML tag is used to create a link?",
        options: ["<p>", "<a>", "<h1>", "<img>"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

let questionNumber = document.getElementById("questionNumber");
let questionText = document.getElementById("question");
let optionsContainer = document.getElementById("options");
let nextButton = document.getElementById("nextButton");
let errorMessage = document.getElementById("errorMessage");

let quizContainer = document.getElementById("quizContainer");
let resultContainer = document.getElementById("resultContainer");


function displayQuestion() {

    let current = questions[currentQuestion];

    questionNumber.textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionText.textContent = current.question;

    optionsContainer.innerHTML = "";

    for (let i = 0; i < current.options.length; i++) {

        optionsContainer.innerHTML += `
            <label class="option">
                <input type="radio" name="answer" value="${i}">
                ${current.options[i]}
            </label>
        `;
    }

    errorMessage.textContent = "";

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Submit Quiz";
    } else {
        nextButton.textContent = "Next Question";
    }

}


nextButton.addEventListener("click", function() {

    let selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (selectedAnswer === null) {

        errorMessage.textContent = "Please select an answer.";

    } else {

        if (Number(selectedAnswer.value) === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {

            displayQuestion();

        } else {

            displayResult();

        }
    }

});


function displayResult() {

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    document.getElementById("finalScore").textContent =
        "Your Score: " + score + " / " + questions.length;

    if (score >= 4) {

        document.getElementById("resultMessage").textContent =
            "Excellent work! You did very well.";

    } else if (score >= 3) {

        document.getElementById("resultMessage").textContent =
            "Good effort! Keep practising.";

    } else {

        document.getElementById("resultMessage").textContent =
            "Keep learning and try again. You can improve!";

    }

}


document.getElementById("restartButton").addEventListener("click", function() {

    currentQuestion = 0;
    score = 0;

    resultContainer.style.display = "none";
    quizContainer.style.display = "block";

    displayQuestion();

});


displayQuestion();
