'use strict'

let questionNumber = 0
let score = 0;

function startQuiz() {
    //creates a functional start button on the home page that removes that page
    //console.log('startQuiz function test');
    $('.quiz-start').on('click', '.start-button', function (event) {
        $('.quiz-start').remove();
        $('.questionAnswerForm').css('display', 'block');
    });
};

function generateQuestion() {
    //creates a question in an HTML form format
    //console.log('generate question function test');
    if (questionNumber < STORE.length) {
        return `
            <div class="question-${questionNumber}">
                <h2>${STORE[questionNumber].question}</h2>
                <form>
                    <fieldset>
                    <label class="answerChoice">
                    <input type='radio' name="answer" value="${STORE[questionNumber].answers[0]}">
                    <span>${STORE[questionNumber].answers[0]}</span>;
                    </label>

                    <label class="answerChoice">
                    <input type='radio' name="answer" value="${STORE[questionNumber].answers[1]}">
                    <span>${STORE[questionNumber].answers[1]}</span>;
                    </label>
                    
                    <button type="submit" class="submitButton">Initiate</button>
                    </fieldset>
                </form>
            </div>`;
    } else {
        //When the loop runs out of iterations it needs to display results and the option to restart
        renderResults();
        restartQuiz();
        $('.questionNumber').text(6);
    }
};

function renderQuestion () {
    //renders the generated question in the DOM
    //console.log('render question function test');
    $('.questionAnswerForm').html(generateQuestion());
};

function updateQuestionNumber() {
    //increment question number
};

function changeScore() {
    //increment score
};

function userSelectAnswer() {
    //user selects answer on submit run user feedback
    console.log('userSelectAnswer test');
    $('form').on('submit', function(event) {
        event.preventDefault();
        let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
        let selected = $('input:checked');
        let answer = selected.val();
        if(answer === correctAnswer) {
            selected.parent().addClass('correct');
            ifRightAnswer();
        } else {
            selected.parent().addClass('wrong');
            ifWrongAnswer();
        }
    });
};

function ifWrongAnswer() {
    //user feedback for correct answer
    console.log('ifWrongAnswer function test');
};

function ifRightAnswer() {
    //user feedback for wrong answer
    console.log('ifRightAsnwer function test');
};

function renderNextQuestion() {
    //what happens when the user clicks next
    console.log('renderNextQuestion function test');
};

function renderResults() {
    //when quiz is over this is the html for the page
};

function restartQuiz() {
    //user can click to restart the quiz
};

function createQuiz () {
    startQuiz();
    renderQuestion();
    userSelectAnswer();
    renderNextQuestion();
  }
  
  $(createQuiz);





