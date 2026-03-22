// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const timeSpan = document.getElementById("time");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const clickSound = new Audio("click.m4a");
const correctSound = new Audio("correct.m4a");
const wrongSound = new Audio("wrong.m4a");
const tickSound = new Audio("tick.m4a");
const toggleBtn = document.getElementById("theme-toggle");
const reviewBtn = document.getElementById("review-btn");
const reviewPopup = document.getElementById("review-popup");
const closeReview = document.getElementById("close-review");

reviewBtn.addEventListener("click", ()=>{
    reviewPopup.classList.add("active");
});

closeReview.addEventListener("click", ()=>{
    reviewPopup.classList.remove("active");
});

toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");
});
 
const allQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
    correctAnswer:"Pacific Ocean"
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
    correctAnswer: "Banana"
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
    correctAnswer:"Au"
  },
{
  question: "What is the capital of India?",
  answers: [
    { text: "Mumbai", correct: false },
    { text: "Delhi", correct: true },
    { text: "Kolkata", correct: false },
    { text: "Chennai", correct: false },
  ],
  correctAnswer: "Delhi"
},

{
  question: "Which animal is known as the King of the Jungle?",
  answers: [
    { text: "Tiger", correct: false },
    { text: "Lion", correct: true },
    { text: "Elephant", correct: false },
    { text: "Leopard", correct: false },
  ],
  correctAnswer: "Lion"
},

{
  question: "Which language is used for web development?",
  answers: [
    { text: "Python", correct: false },
    { text: "Java", correct: false },
    { text: "JavaScript", correct: true },
    { text: "C++", correct: false },
  ],
  correctAnswer: "JavaScript"
},

{
  question: "What is the largest continent in the world?",
  answers: [
    { text: "Africa", correct: false },
    { text: "Europe", correct: false },
    { text: "Asia", correct: true },
    { text: "Australia", correct: false },
  ],
  correctAnswer: "Asia"
},
{
  question: "Which country is known as the Land of the Rising Sun?",
  answers: [
    { text: "China", correct: false },
    { text: "Japan", correct: true },
    { text: "Thailand", correct: false },
    { text: "Korea", correct: false },
  ],
  correctAnswer: "Japan"
},

{
  question: "Who invented the telephone?",
  answers: [
    { text: "Thomas Edison", correct: false },
    { text: "Alexander Graham Bell", correct: true },
    { text: "Newton", correct: false },
    { text: "Tesla", correct: false },
  ],
  correctAnswer: "Alexander Graham Bell"
},

{
  question: "Which gas do plants absorb from the atmosphere?",
  answers: [
    { text: "Oxygen", correct: false },
    { text: "Carbon Dioxide", correct: true },
    { text: "Nitrogen", correct: false },
    { text: "Hydrogen", correct: false },
  ],
  correctAnswer: "Carbon Dioxide"
},

{
  question: "What is the fastest land animal?",
  answers: [
    { text: "Lion", correct: false },
    { text: "Tiger", correct: false },
    { text: "Cheetah", correct: true },
    { text: "Leopard", correct: false },
  ],
  correctAnswer: "Cheetah"
},

{
  question: "Which is the smallest planet in our solar system?",
  answers: [
    { text: "Mars", correct: false },
    { text: "Mercury", correct: true },
    { text: "Venus", correct: false },
    { text: "Earth", correct: false },
  ],
  correctAnswer: "Mercury"
},

{
  question: "Who wrote 'Romeo and Juliet'?",
  answers: [
    { text: "Shakespeare", correct: true },
    { text: "Charles Dickens", correct: false },
    { text: "Rabindranath Tagore", correct: false },
    { text: "Tolstoy", correct: false },
  ],
  correctAnswer: "Shakespeare"
},

{
  question: "What is the boiling point of water?",
  answers: [
    { text: "90°C", correct: false },
    { text: "100°C", correct: true },
    { text: "80°C", correct: false },
    { text: "120°C", correct: false },
  ],
  correctAnswer: "100°C"
},

{
  question: "Which festival is known as the Festival of Lights?",
  answers: [
    { text: "Holi", correct: false },
    { text: "Diwali", correct: true },
    { text: "Eid", correct: false },
    { text: "Christmas", correct: false },
  ],
  correctAnswer: "Diwali"
},

{
  question: "Which organ pumps blood in the human body?",
  answers: [
    { text: "Lungs", correct: false },
    { text: "Brain", correct: false },
    { text: "Heart", correct: true },
    { text: "Kidney", correct: false },
  ],
  correctAnswer: "Heart"
},

{
  question: "Which is the tallest mountain in the world?",
  answers: [
    { text: "K2", correct: false },
    { text: "Mount Everest", correct: true },
    { text: "Kangchenjunga", correct: false },
    { text: "Lhotse", correct: false },
  ],
  correctAnswer: "Mount Everest"
}
];

function getRandomQuestions(arr, num) {
    let shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

let timeLeft = 10;
let timer;
let quizQuestions = [];    
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled=false;


//event listeners

startButton.addEventListener("click",startQuiz);
restartButton.addEventListener("click",restartQuiz);
 

function startQuiz() {

    quizQuestions = getRandomQuestions(allQuestions, 5); // 🔥 now correct

    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;
    userAnswers = [];

    totalQuestionsSpan.textContent = quizQuestions.length;
    maxScoreSpan.textContent = quizQuestions.length;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}
 
function startTimer() {

    timeLeft = 15;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {

        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if(timeLeft <= 5 && timeLeft > 0){
            tickSound.currentTime = 0; // reset sound
            tickSound.play().catch(()=>{});
        }
        if (timeLeft <= 7) {
          document.getElementById("time").classList.add("red");
        }

        if (timeLeft === 0) {
            clearInterval(timer);
            autoNextQuestion();
        }

    }, 1000);
}

function autoNextQuestion() {

    answerDisabled = true;

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showQuestion(){

    clearInterval(timer); // 🔥 old timer stop
    document.getElementById("time").classList.remove("red");
    startTimer();         // 🔥 new timer start


    //resate state
    answerDisabled=false
    const currentQuestion=quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent=currentQuestionIndex+1

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width=progressPercent+"%"
    questionText.innerHTML = `<span class="q-number">${currentQuestionIndex + 1}.</span> ${currentQuestion.question}`;

    //todo:explain this in asecond
    answersContainer.innerHTML="";
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click",selectAnswer);
        answersContainer.appendChild(button);
    })
}

function selectAnswer(event){
    if(answerDisabled) return
    clearInterval(timer); // 🔥 timer stop when click
    answerDisabled=true
    const selectedButton=event.target;
    const isCorrect=selectedButton.dataset.correct=="true"
   
    clickSound.play(); // button click

    if(isCorrect){
        correctSound.play();
    } else {
        wrongSound.play();
    }
    ///todo:explain this in a sec
    Array.from(answersContainer.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }else if(button===selectedButton){
            button.classList.add("incorrect");
        }
    });
     
    if(isCorrect){
        score++;
        scoreSpan.textContent=score
        }

    userAnswers.push({
    question: quizQuestions[currentQuestionIndex].question,
    correct: isCorrect,
    selected: selectedButton.textContent,
    correctAnswer: quizQuestions[currentQuestionIndex].correctAnswer
      });

    setTimeout(()=>{
        currentQuestionIndex++;
        //check if there are more questions or if over
        if(currentQuestionIndex<quizQuestions.length){
            showQuestion()
        }else{
            showResults()
        }
        
    },1000);
}


function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")
    confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
    });

    finalScoreSpan.textContent=score;
    //hight score set
    let highScore = sessionStorage.getItem("highScore") || 0;
    if(score > highScore){
        highScore = score;
        sessionStorage.setItem("highScore", highScore);
    }
    document.getElementById("high-score").textContent = highScore;

     
    const percentage=(score/quizQuestions.length)*100

    if(percentage==100){
       resultMessage.textContent="Perfact!you're gratest men";
    } 
    else if(percentage==80){
       resultMessage.textContent="Good job!you're genious";
    }
    else if(percentage==60){
       resultMessage.textContent=" good effort";
    }
    else if(percentage==40){
       resultMessage.textContent=" not bad";
    }
    else{
       resultMessage.textContent=" good next try";
    }
    
    
}
reviewBtn.addEventListener("click", ()=>{

    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";

    userAnswers.forEach((item, index)=>{
    const div = document.createElement("div");

    div.classList.add(item.correct ? "correct-box" : "wrong-box");

    div.innerHTML = `
        <p><strong>${index + 1}. ${item.question}</strong></p>

        ${
            item.correct
            ? ` <p class="correct-text">✔Correct</p>
                <p class="correct-text">Answer: ${item.correctAnswer}</p>`
            : `
                <p class="wrong-text">❌ Wrong</p>
                <p class="your-answer">Your Answer: ${item.selected}</p>
                <p class="right-answer">Correct Answer: ${item.correctAnswer}</p>
              `
        }
    `;

    reviewContainer.appendChild(div);
    });

    reviewPopup.classList.add("active");
});

function restartQuiz(){
     resultScreen.classList.remove("active");
     startQuiz();
}

 