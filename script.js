const questions = [
    {
        question: "which is the largest animal in the world ? ",
        answers: [

            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
        ]
    },
    {
        question: "Which Indian state recently became the first to implement a ‘Green Energy’ policy in 2024? ",
        answers: [

            { text: "Gujarat", correct: false },
            { text: "Kerala", correct: true },
            { text: "Tamil Nadu", correct: false },
            { text: "Punjab", correct: false },
        ]
    },
    {
        question: "Which Indian company achieved a market capitalization of over $1 trillion in 2024? ",
        answers: [

            { text: "Tata Consultancy Services (TCS)", correct: false },
            { text: "Infosys", correct: false },
            { text: "HDFC Bank", correct: false },
            { text: "Reliance Industries", correct: true },
        ]
    },
    {
        question: "Which Indian university was ranked as the top university in the QS World University Rankings for 2024? ",
        answers: [

            { text: "Indian Institute of Technology (IIT) Bombay", correct: false },
            { text: "Jawaharlal Nehru University (JNU)", correct: false },
            { text: "Indian Institute of Science (IISc) Bangalore", correct: true },
            { text: "Delhi University", correct: false },
        ]

    },
    {
        question: "What was the theme of India's Republic Day celebrations in 2024? ",
        answers: [

            { text: "A New India", correct: false },
            { text: "Unity in Diversity", correct: false },
            { text: "India's Heritage and Future", correct: true },
            { text: "Digital Transformation", correct: false },
        ]
    },
    {
        question: "What was the theme of India's Republic Day celebrations in 2024? ",
        answers: [

            { text: "A New India", correct: false },
            { text: "Unity in Diversity", correct: false },
            { text: "India's Heritage and Future", correct: true },
            { text: "Digital Transformation", correct: false },
        ]
    },
    {
        question: "What was the theme of India's Republic Day celebrations in 2024? ",
        answers: [

            { text: "A New India", correct: false },
            { text: "Unity in Diversity", correct: false },
            { text: "India's Heritage and Future", correct: true },
            { text: "Digital Transformation", correct: false },
        ]
    },
    {
        question: "What was the theme of India's Republic Day celebrations in 2024? ",
        answers: [

            { text: "A New India", correct: false },
            { text: "Unity in Diversity", correct: false },
            { text: "India's Heritage and Future", correct: true },
            { text: "Digital Transformation", correct: false },
        ]
    },
    {
        question: "Who was the winner of the 2024 Indian National Chess Championship?",
        answers: [

            { text: "Viswanathan Anand", correct: false },
            { text: "Pentala Harikrishna", correct: true },
            { text: "Rameshbabu Praggnanandhaa", correct: false },
            { text: "Arjun Erigaisi", correct: false },
        ]
    }

]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuize() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `your scored ${score} out of ${questions.length}! `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}



nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuize();
    }
})
startQuize();