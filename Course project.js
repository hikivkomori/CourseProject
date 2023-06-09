let questions = [
    {
        question: "What's the biggest lake on earth?",
        answers: {
            a: "Caspian Sea",
            b: "Victoria Lake",
            c: "Superior Lake"
        },
        correctAnswer: "a"
    },
    {
        question: "What's the biggest mountain on earth?",
        answers: {
            a: "Mount Aconcagua",
            b: "Mount Kilimanjaro",
            c: "Mount Everest"
        },
        correctAnswer: "c"
    },
    {
        question: "What's the largest continent in the world?",
        answers: {
            a: "Africa",
            b: "Asia",
            c: "Europe"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is the author of the book '1984'?",
        answers: {
            a: "George Orwell",
            b: "F. Scott Fitzgerald",
            c: "J.R.R. Tolkien"
        },
        correctAnswer: "a"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: {
            a: "Venus",
            b: "Mars",
            c: "Jupiter"
        },
        correctAnswer: "b"
    },
    {
        question: "Which scientist developed the theory of general relativity?",
        answers: {
            a: "Albert Einstein",
            b: "Isaac Newton",
            c: "Stephen Hawking"
        },
        correctAnswer: "a"
    },
    {
        question: "What's the chemical symbol for gold?",
        answers: {
            a: "Fe",
            b: "Ag",
            c: "Au"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is home to the kangaroo?",
        answers: {
            a: "Australia",
            b: "Brazil",
            c: "Canada"
        },
        correctAnswer: "a"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "Leonardo da Vinci",
            b: "Pablo Picasso",
            c: "Vincent van Gogh"
        },
        correctAnswer: "a"
    },
    {
        question: "What's the capital city of Japan?",
        answers: {
            a: "Tokyo",
            b: "Beijing",
            c: "Seoul"
        },
        correctAnswer: "a"
    },
    {
        question: "Which playwright wrote the famous play 'Romeo and Juliet'?",
        answers: {
            a: "Arthur Miller",
            b: "William Shakespeare",
            c: "Tennessee Williams"
        },
        correctAnswer: "b"
    }

    function generateQuiz() {
        let quizContainer = document.getElementById("quiz");
        let output = [];

        questions.forEach(function (currentQuestion, questionNumber) {
            let answers = [];

            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} : ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            output.push(
                `<div class="question">
          <h3>${currentQuestion.question}</h3>
          <div class="answers">${answers.join("")}</div>
        </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }
    function submitQuiz() {
        let quizContainer = document.getElementById("quiz");
        let answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;
        let audio = document.getElementById("audio");
        audio.play();
        questions.forEach(function (currentQuestion, questionNumber) {
            let answerContainer = answerContainers[questionNumber];
            let selector = `input[name=question${questionNumber}]:checked`;
            let userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].className = "correct";
            } else {
                answerContainers[questionNumber].className = "incorrect";
            }
        });