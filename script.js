const questions = [
    // This is where my questions are for the question class//
    { 
         question : "What is an array?" ,
         answers: [
          { text: 'A list of objects' , correct: true },
          { text: 'A list of methods' , correct: false },
        ]
    } ,  {
        question : "Can you use CSS to start a function?" ,
        answers: [
         { text: 'No' , correct: true },
         { text: 'Yes' , correct: false },
       ]
   } , {
         question : "What is a ReadMe?" ,
         answers: [
          { text: 'It is when you judge your coding partner' , correct: false },
          { text: 'It is a desciption file on a repository' , correct: true },
       ]
    }
  
    
];

// Identifying the start and next button
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById
('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById
('answer-buttons');

let shuffledQuestions; 
let currentQuestionIndex = 0;

// Event listener to run the start and next button//
startButton.addEventListener('click', () => startGame());
nextButton.addEventListener('click', () =>  {
    currentQuestionIndex++;
    setNextQuestion(); }

);

// Function to run the start button//
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

// Function to run the next question and reset it //
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
// Tells us what to do if function is run and answer is correct//
function showQuestion(question) {
    questionElement.innerText = question.question;
    questions.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerTexr = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);

    });

}
// Function to reset the answer button//
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.remove.firstChild
        (answerButtonsElement.firstChild);
    }
}
// Function to shuffle quetions//
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(buton => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}
// Function that disputes what will happen if answer is wrong or correct//
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
element.classList.remove('correct');
element.classList.remove('wrong');
}