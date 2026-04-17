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
const imageQuestions = [
  {
    image: "image copy 2.png",
    answers: [
      { text: "Rose", correct: true },
      { text: "Tulip", correct: false },
      { text: "Daisy", correct: false },
      { text: "Lily", correct: false }
    ]
  },
  {
    image: "sunflower.png",
    answers: [
      { text: "Sunflower", correct: true },
      { text: "Marigold", correct: false },
      { text: "Daisy", correct: false },
      { text: "Lotus", correct: false }
    ]
  },
  {
    image: "Images/Lotus.webp",
    answers: [
      { text: "Lotus", correct: true },
      { text: "Rose", correct: false },
      { text: "Orchid", correct: false },
      { text: "Tulip", correct: false }
    ]
  },
  {
    image: "Images/Tulips.webp",
    answers: [
      { text: "Tulip", correct: true },
      { text: "Rose", correct: false },
      { text: "Lavender", correct: false },
      { text: "Daisy", correct: false }
    ]
  },
 
  {
    image: "Images/Daisy.webp",
    answers: [
      { text: "Daisy", correct: true },
      { text: "Sunflower", correct: false },
      { text: "Tulip", correct: false },
      { text: "Peony", correct: false }
    ]
  },
  {
    image: "Images/Lily.webp",
    answers: [
      { text: "Lily", correct: true },
      { text: "Rose", correct: false },
      { text: "Lotus", correct: false },
      { text: "Daffodil", correct: false }
    ]
  },
  {
    image: "Images/Marigold.webp",
    answers: [
      { text: "Marigold", correct: true },
      { text: "Sunflower", correct: false },
      { text: "Daisy", correct: false },
      { text: "Tulip", correct: false }
    ]
  },
  {
    image: "Images/Jasmine.webp",
    answers: [
      { text: "Jasmine", correct: true },
      { text: "Lavender", correct: false },
      { text: "Gardenia", correct: false },
      { text: "Rose", correct: false }
    ]
  }
];
const imageQuestionElement = document.getElementById("image-question");
const imageAnswerButtons = document.getElementById("image-answer-buttons");
const imageNextButton = document.getElementById("image-next-btn");
const flowerImage = document.getElementById("flower-image");
const imageStartScreen = document.getElementById("image-start-screen");
const imageQuizContainer = document.getElementById("image-quiz-container");
const imageStartBtn = document.getElementById("image-start-btn");

imageStartBtn.addEventListener("click", () => {
  imageStartScreen.style.display = "none";
  imageQuizContainer.style.display = "block";
  startImageQuiz();
});

let imageCurrentIndex = 0;
let imageScore = 0;

function startImageQuiz() {
  imageCurrentIndex = 0;
  imageScore = 0;
  showImageQuestion();
}

function showImageQuestion() {
  resetImageState();
  let current = imageQuestions[imageCurrentIndex];

  flowerImage.src = current.image;
  imageQuestionElement.innerHTML = "What flower is this?";

  current.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = true;
    }

    button.addEventListener("click", selectImageAnswer);
    imageAnswerButtons.appendChild(button);
  });
}

function resetImageState() {
  imageNextButton.style.display = "none";
  while (imageAnswerButtons.firstChild) {
    imageAnswerButtons.removeChild(imageAnswerButtons.firstChild);
  }
}

function selectImageAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    imageScore++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(imageAnswerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  imageNextButton.style.display = "block";
}

function showImageScore() {
  resetImageState();
  imageQuestionElement.innerHTML = `You scored ${imageScore} out of ${imageQuestions.length}!`;
  imageNextButton.innerHTML = "Play Again";
  imageNextButton.style.display = "block";
}

imageNextButton.addEventListener("click", () => {
  imageCurrentIndex++;
  if (imageCurrentIndex < imageQuestions.length) {
    showImageQuestion();
  } else {
    showImageScore();
  }
});

// Start image quiz automatically
startImageQuiz();