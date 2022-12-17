const quizData=[
    {
        question:"What is the most used programming language in 2022?",
        a: "C++",
        b: "Java",
        c: "Javascript",
        d: "Python",
        correct: "c",
    },
    {
        question: "What is JavaScript?",
        a:" JavaScript is a scripting language used to make the website interactive.",
        b:"JavaScript is an assembly language used to make the website interactive.",
        c: "JavaScript is a compiled language used to make the website interactive.",
        d: "None of the mentioned.",
        correct: "a",

    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        a:"It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: "It is an ordered list of string",
        d: "It is an ordered list of functions",
        correct: "a",

    },
    {
        question: "Which of the following is not javascript data types?",
        a:"Null type",
        b: "Undefined type",
        c: "Number type",
        d: "All of the mentioned",
        correct: "d",

    },
];
const quiz=document.getElementById('quiz');
const answers=document.querySelectorAll('.answer');//return array of answers or document.getElementsByclassNames
const questions=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let score=0;
let currentQuiz=0; //iterator which runs four questions
loadQuiz();
function loadQuiz()//for loading the quiz everytime
{ 
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];//quizData[0] here quizData is array of objects and 0 index is first question
    questions.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}
function getSelectedAnswers()
{
    let ans=undefined; //in starting there is no ans marked
    //answers is a arrays of ans like a,b,c,d so for each element of answers function is called which take answers as a parameter and check for the checked answers id ans ans stores in ans variable 
    answers.forEach((answerEl)=>{
        if(answerEl.checked){ //.checked method is predefined for blue dot in radio buttons for marking
            ans=answerEl.id;
        }
    });
    return ans;
}
function deselectAnswers()
{
    answers.forEach((answerEl)=>
    {
        answerEl.checked=false;
    }
    );
}
submitBtn.addEventListener("click",()=>{
    const answer=getSelectedAnswers();

            if(answer && answer===quizData[currentQuiz].correct)
            {
                score++;
            }
        currentQuiz++;
        if(currentQuiz<quizData.length)
        {
            loadQuiz();
        }
        else{
            //you answered 3/4 questions! and on clicking button the location of the website reloads on clicking the button
            quiz.innerHTML=`<h2> You answered correctly at ${score}/${quizData.length} questions. </h2>
            <button onclick='location.reload()'> Reload button`;
        }

})


