const questions = [
    {
        question: "Which player scored the fastest hat-trick in the Premier League?",
        choices: ["Sadio Mane", "Wayne Rooney", "Ruud Van Nistlerooy", "Alan Shearer"],
        correct: 0
    },
    {
        question: "Which player, with 653 games, has made the most Premier League appearances?",
        choices: ["Gareth barry", "James Milner", "Ryan Giggs", "Steven Gerrard"],
        correct: 0
    },
    {
        question: "With 260 goals, who is the Premier League's all-time top scorer?",
        choices: ["Wayne Rooney", "Alan Shearer", "Sergio Aguero", "Robbie Fowler"],
        correct: 1
    },
    {
        question: "With 202 clean sheets, which goalkeeper has the best record in the Premier League?",
        choices: ["Peter Schemichael", "Joe Hart", "David Seaman", "Petr Cech"],
        correct: 3
    },
    {
        question: "The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",
        choices: ["Robbie Keane", "Shane Long", "Peter Crouch", "Didier Drogba"],
        correct: 1
    },
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
    document.getElementsByClassName(".choice").style.display = "none";

}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        correctAnswers++;
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
    }

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
            $( "button" ).remove( ".choice" );


        } else {
            const quizContainer = document.querySelector(".quiz-container");
            quizContainer.innerHTML += `<h1>You got ${correctAnswers} out of ${questions.length} questions.</h1>`;
            document.getElementById("restart-button").style.display = "block";
            document.getElementById("feedback").style.display = "none";
            document.getElementById("question-text").style.display = "none";
            
        }
    }, 500);
}

function restartQuiz() {
    window.location.reload(); // Refresh the webpage
}

showQuestion();