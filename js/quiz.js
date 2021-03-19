// Getting all required elements

const startButton = document.getElementById('startBtn');
const info = document.getElementById('info');
const startQuiz = document.getElementById('startQuiz');
const exitQuiz = document.getElementById('exitQuiz');
const quizQuestion = document.getElementById('questionBox');
const nextBtn = document.getElementById('next')

// Add event listener to the start button

startButton.addEventListener('click', quizStart);

// Start Button function

function quizStart(e){
    startButton.classList.add('d-none');
    info.classList.remove('d-none');
}

// Add event listener to start quiz.

startQuiz.addEventListener('click', nextQuiz);

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

// Add event listener to next button

nextBtn.addEventListener('click', moreQuiz)

// Next quiz function

function moreQuiz(e){
    if(questCount < questions.length - 1){
        questCount++;
        questionNumb++;
        showQuestions(questCount);
        questCounter(questionNumb);
    }else{
        console.log('completed')
    }
    
}

// Get questions and options from array

function showQuestions(index){
    let questionText = document.getElementById('questionText')
    let questionTag = `<h3>${questions[index].number}. ${questions[index].question}</h3>`;
    questionText.innerHTML = questionTag;
    let optionList = document.getElementById('options');
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

    //  const listOption = optionList.querySelectorAll('.alert alert-secondary')
    //  for(let i=0; i <listOption.length; i++){
    //      console.log(listOption[i])
    // //     option[i].setAttribute('onclick', 'optionSelected(this)')
    // // }
}


function questCounter(index){
    let questionCountTag = ` <div id="questionCounter"><span>Question <p>${index} </p> out of <p>${questions.length}</p></span></div>`
    let questionCountdiv = document.getElementById('questionCounter').innerHTML = questionCountTag;
}

// function optionSelected(answer){
//     let userAns = answer.textcontent;
//     let correctAns = questions[questCount].answer;
//     if(userAns === correctAns){
//         answer.classList.add('alert alert-success')
//     }else{
//         answer.classList.add('alert alert-danger')
//     }
// }