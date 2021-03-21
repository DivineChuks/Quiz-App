
// Getting all required elements

const startButton = document.getElementById('startBtn');
const info = document.getElementById('info');
const startQuiz = document.getElementById('startQuiz');
const exitQuiz = document.getElementById('exitQuiz');
const quizQuestion = document.getElementById('questionBox');
const nextBtn = document.getElementById('next');
const optionList = document.getElementById('options');
const resultBox = document.getElementById('resultContainer');
const restart = document.getElementById('restartBtn');
const exit =  document.getElementById('exitBtn');

// Add event listener to the start button

startButton.addEventListener('click', quizStart);

// Start Button function

function quizStart(e){
    startButton.classList.add('d-none');
    info.classList.remove('d-none');
}

// Add event listener to start quiz.

startQuiz.addEventListener('click', nextQuiz);

// Add event listener to exit quiz

exit.addEventListener('click', endQuiz)

// Add event listener to restart quiz

restart.addEventListener('click', restartQuiz)

// Start quiz function

function nextQuiz(e){
    info.classList.add('d-none');
    quizQuestion.classList.remove('d-none');
    showQuestions(0);
    questCounter(1);
}

// Add event listener to exit quiz

exitQuiz.addEventListener('click', quizExit);

// exit quiz function

function quizExit(e){
    info.classList.add('d-none');
    startButton.classList.remove('d-none')
}

let questCount = 0;
let questionNumb = 1;
let userScore = 0;

// Add event listener to next button

nextBtn.addEventListener('click', moreQuiz)

// Quiz section function

function moreQuiz(e){
    if(questCount < questions.length - 1){
        questCount++;
        questionNumb++;
        showQuestions(questCount);
        questCounter(questionNumb);
    }else{
        console.log('completed')
        showResultBox();
    }
    
}

// Get questions and options from array function.

function showQuestions(index){
    let questionText = document.getElementById('questionText')
    let questionTag = `<h3>${questions[index].number}. ${questions[index].question}</h3>`;
    questionText.innerHTML = questionTag;
    let optionTag = `<div class="options">
    <div class="alert alert-secondary">
      <button type="button" class="close"></button>
      ${questions[index].options[0]}
    </div>
    <div class="options">
    <div class="alert alert-secondary">
      <button type="button" class="close"></button>
      ${questions[index].options[1]}
    </div>
    <div class="options">
    <div class="alert alert-secondary">
      <button type="button" class="close"></button>
      ${questions[index].options[2]}
    </div>
    <div class="options">
    <div class="alert alert-secondary">
      <button type="button" class="close"></button>
      ${questions[index].options[3]}
    </div>
    `
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll('.alert')
     for(let i=0; i <option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

// Question counter function

function questCounter(index){
    let questionCountTag = ` <div id="questionCounter"><span>Question <p>${index} </p> out of <p>${questions.length}</p></span></div>`
    let questionCountdiv = document.getElementById('questionCounter').innerHTML = questionCountTag;
}

// Answer function

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[questCount].answer;
    let allOptions = optionList.children.length;

    if(userAns.trim() == correctAns.trim()){
        answer.classList.add('alert-success')
        userScore += 1;
    }else{
        answer.classList.add('alert-danger')
    }
}

// Result Section function

  function showResultBox(){
    quizQuestion.classList.add('d-none');
    resultBox.classList.remove('d-none');
    const scoreText = resultBox.querySelector('.test-score');
    if(userScore >= 7){
        let scoreTag = `<span> Congrats! you scored  <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
        scoreText.innerHTML = scoreTag;
    }else if(userScore >= 5){
        let scoreTag = `<span> Nice! you scored  <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = `<span> Sorry! you scored  <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
        scoreText.innerHTML = scoreTag;
    }

  }

  // End Quiz Section

  function endQuiz(){
      window.location.reload();
  }

  // Restart function

    function restartQuiz(){
        resultBox.classList.add('d-none');
        info.classList.remove('d-none')
    }
