const questions = [

  {

    question: "Where is the Protea flower native to?",

    answers: [

      { text: "South Africa", correct: true },

      { text: "Brazil", correct: false },

      { text: "India", correct: false },

      { text: "Australia", correct: false }

    ]

  },



  {

    question: "Where do Sunflowers originally come from?",

    answers: [

      { text: "North America", correct: true },

      { text: "South Africa", correct: false },

      { text: "China", correct: false },

      { text: "Spain", correct: false }

    ]

  },



  {

    question: "Where are Tulips originally native to?",

    answers: [

      { text: "Central Asia and Turkey", correct: true },

      { text: "Italy", correct: false },

      { text: "Canada", correct: false },

      { text: "Egypt", correct: false }

    ]

  },



  {

    question: "Where do Roses originally come from (most species)?",

    answers: [

      { text: "Asia", correct: true },

      { text: "South America", correct: false },

      { text: "Africa", correct: false },

      { text: "Australia", correct: false }

    ]

  },



  {

    question: "Where is Lavender native to?",

    answers: [

      { text: "Mediterranean region", correct: true },

      { text: "Russia", correct: false },

      { text: "Canada", correct: false },

      { text: "Japan", correct: false }

    ]

  },



  {

    question: "Where do Orchids grow naturally in the wild?",

    answers: [

      { text: "Worldwide (mainly tropical regions)", correct: true },

      { text: "Only Europe", correct: false },

      { text: "Only Antarctica", correct: false },

      { text: "Only deserts", correct: false }

    ]

  },



  {

    question: "Where are Daffodils native to?",

    answers: [

      { text: "Europe and North Africa", correct: true },

      { text: "South America", correct: false },

      { text: "India", correct: false },

      { text: "New Zealand", correct: false }

    ]

  },



  {

    question: "Where do Cherry Blossoms originate from?",

    answers: [

      { text: "East Asia (Japan, China, Korea)", correct: true },

      { text: "South Africa", correct: false },

      { text: "USA", correct: false },

      { text: "France", correct: false }

    ]

  },



  {

    question: "Where is Jasmine originally from?",

    answers: [

      { text: "Tropical and subtropical Eurasia and Australasia", correct: true },

      { text: "Canada", correct: false },

      { text: "Iceland", correct: false },

      { text: "Peru", correct: false }

    ]

  },



  {

    question: "Where is the Lotus flower native to?",

    answers: [

      { text: "Central and Southeast Asia", correct: true },

      { text: "Europe", correct: false },

      { text: "South America", correct: false },

      { text: "North Africa only", correct: false }

    ]

  }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const startButton = document.getElementById("start-btn");

let currentQuestionIndex = 0;
let score = 0;

// Initialize Start Button
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";
  startQuiz();
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  // Show correct answer and disable buttons
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
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});