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
        {
          question: "Which player has scored the most Premier League own goals?",
          choices: ["Virgil Van Dijk", "Gary Neville", "Richard Dunne", "Jamie Carragher"],
          correct: 2
        },
        {
          question: "Which team won the first Premier League title?",
          choices: ["Manchester United", "Liverpool", "Leeds United", "Arsenal"],
          correct: 0
        },
        {
          question: "The top transfer fee received by a Premier League club is £106m – who was the player?",
          choices: ["Cristiano Ronaldo", "Luis Suarez", "Moises Caicedo", "Gareth Bale"],
          correct: 2
        },
        {
          question: "Who holds the record for most Premier League assists? ",
          choices: ["Kevin De Bruyne", "Ryan Giggs", "David Beckham", "Mezut Ozil"],
          correct: 1
        },
        {
          question: "Who won the Premier League in 1994-95?",
          choices: ["Manchester United", "Liverpool", "Leeds United", "Blackburn"],
          correct: 3
        },
        {
          question: "Who holds the record for most Premier League games without a loss?",
          choices: ["Chelsea", "Liverpool", "Manchester City", "Arsenal"],
          correct: 0
        },
        {
          question: "What is the nickname of Aston Villa?",
          choices: ["The Clarets", "The Toffees", "The Cherries", "The Villans"],
          correct: 3
        },
        {
          question: "What is the nickname of Bournemouth?",
          choices: ["The Clarets", "The Cherries", "The Saints", "The Gunners"],
          correct: 1
        },
        {
          question: "Lee Bowyer and which other teammate were sent off for fighting each other during a match?",
          choices: ["Alan Shearer", "Nicky Butt", "Kieron Dyer", "Jamie O'Hara"],
          correct: 2
        },
        {
          question: " Which player has scored the most free-kicks?",
          choices: ["David Beckham", "Xabi Alonso", "Trent Alexander Arnold", "James Ward-Prowse"],
          correct: 0
        },
        {
          question: "How many teams have never been relegated from the Premier League?",
          choices: ["4", "5", "6", "7"],
          correct: 2
        },
        {
          question: "What year did the Premier League start?",
          choices: ["1991", "1992", "1993", "1994"],
          correct: 1
        },
        {
          question: "Who scored the goal that won Manchester City the title in 2011—12?",
          choices: ["Mario Balotelli", "Carlos Tevez", "David Silva", "Sergio Aguero"],
          correct: 3
        },
        {
          question: "How old was Wayne Rooney when he first played in the Premier League??",
          choices: ["14", "15", "16", "17"],
          correct: 2
        },
        {
          question: "How many clubs competed in the Premier League’s first season?",
          choices: ["18", "20", "22", "24"],
          correct: 2
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

}

// Shuffle function to randomize the order of elements in an array
function shuffleArray(questions) {
  console.log(questions);
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    
    return questions.splice(0, 10);
}

// Shuffle the questions array
shuffleArray(questions);

// Variable to keep track of the current question index
let currentQuestionIndex = 0;
const totalQuestions = 10; // Change this to the number of questions you want to display

// Function to show the next question
function showNextQuestion() {
    // Check if there are still questions left to display
    if (currentQuestionIndex < totalQuestions) {
        // Get the current question
        const currentQuestion = questions[currentQuestionIndex];

        // Display the current question (implement this according to your UI)

        // Increment the question index for the next time
        currentQuestionIndex++;
    } else {
        // All questions have been displayed
        console.log("Quiz finished");
    }
}

// Call the function to show the first question
showNextQuestion();

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


        } else {
            const quizContainer = document.querySelector(".quiz-container");
            quizContainer.innerHTML = `<h1>You got ${correctAnswers} out of ${questions.length} questions.</h1>`;
            
            const newButton = document.createElement('button');
            newButton.textContent = 'Restart';
            quizContainer.appendChild(newButton);
            newButton.id = "restart-function";
            newButton.addEventListener("click", restartQuiz);
        }
    }, 500);
}

function restartQuiz() {
    window.location.reload();
}

showQuestion();