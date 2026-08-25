

const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },

    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },

    {
        question: "What is the capital of India?",
        answer: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Chennai", correct: false }
        ]
    },

    {
        question: "Which is the largest ocean in the world?",
        answer: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },

    {
        question: "How many days are there in a leap year?",
        answer: [
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "364", correct: false },
            { text: "367", correct: false }
        ]
    },

    {
        question: "Which language is used to create web pages?",
        answer: [
            { text: "HTML", correct: true },
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "C++", correct: false }
        ]
    },

    {
        question: "Which is the fastest land animal?",
        answer: [
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Tiger", correct: false },
            { text: "Horse", correct: false }
        ]
    },

    {
        question: "How many continents are there in the world?",
        answer: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },

    {
        question: "Which gas do humans need to breathe?",
        answer: [
            { text: "Carbon Dioxide", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },

    {
        question: "Who is known as the Father of the Nation in India?",
        answer: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhash Chandra Bose", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Bhagat Singh", correct: false }
        ]
    }
];

const question_element = document.getElementById("question");
const answer_element = document.getElementById("option");
const next_button = document.getElementById("next_btn");



let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next_button.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question_element.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answer_element.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetstate() {
    next_button.style.display = "none";
    while (answer_element.firstChild) {
        answer_element.removeChild(answer_element.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answer_element.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    next_button.style.display="block";
}

function showScore(){
    resetstate();
    question_element.innerHTML=`You scored ${score} out of ${questions.length}.`;
    next_button.innerHTML="Play Again";
    next_button.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

next_button.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();