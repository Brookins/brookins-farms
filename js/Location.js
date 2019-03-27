
var myQuestions = [
    {
        question: "If Mark Planted 60 acres of corn, how many bushels should he expect to have a harvest?",
            answers: {
                a: '120',
                b: '13,000',
                c: '16,540'
            },
            correctAnswer: 'b'
    },
    {
        question: "How many chickens will Mark have throughout a year if he has 3 barns and 7 groups?",
            answers: {
                a: '945,000',
                b: '630,000',
                c: '720,000'
            },
            correctAnswer: 'a'
    },
 
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){

            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }
    function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'purple';
            }
            else{
                answerContainers[i].style.color = 'blue';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    showQuestions(questions, quizContainer);
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}


const links = document.getElementsByTagName ('li');
/*Mouseover functionality*/
for (let i = 0; i <links.length; i += 1) {

    links[i].addEventListener ('mouseover', () => {
        links[i].textContent = links[i].textContent.toUpperCase();
    })

    links[i].addEventListener ('mouseout', () => {
        links[i].textContent = links[i].textContent.toLowerCase();
    })
}