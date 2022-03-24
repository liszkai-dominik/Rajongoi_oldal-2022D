const qiuzDB = [
    {
        question : 'Question1: Mikor volt a holdraszállás ?',
        a : '1964. január 4',
        b : '1961. május 25',
        c : '1960. április 14',
        d : '1969. július 20',
        ans : 'ans4'
    },
    {
        question : 'Question2: Ki volt az első ember aki a Hold felszínére lépett ?',
        a : 'Thomas Stafford',
        b : 'Neil Armstrong',
        c : 'Jurij Alekszejevics Gagarin',
        d : 'John Young',
        ans : 'ans2'
    },
    {
        question : 'Question3: Hogy hívják a NASA marsjáróját ?',
        a : 'STS-41-D',
        b : 'Apollo-11',
        c : 'Perseverance',
        d : 'Tienven-1',
        ans : 'ans3'
    },
    {
        question : 'Question4: What is the full form of JS ?',
        a : 'JavaScript',
        b : 'JavaShell',
        c : 'JavaServer',
        d : 'JavaShop',
        ans : 'ans1'
    },
]

const question = document.querySelector('.question');
const Option1 = document.querySelector('#option1');
const Option2 = document.querySelector('#option2');
const Option3 = document.querySelector('#option3');
const Option4 = document.querySelector('#option4');
const Submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const totalScore = document.querySelector('#showScore');
let score= 0;

let questionCount = 0;
const loadQuetions = () => {
   const questionList = qiuzDB[questionCount];
   question.innerText =  questionList.question;
   Option1.innerText = questionList.a;
   Option2.innerText = questionList.b;
   Option3.innerText = questionList.c;
   Option4.innerText = questionList.d;
}
loadQuetions();

const getCheckAnswer = () => {
    let answer;
    answers.forEach(currenAns => {
        if(currenAns.checked){
            answer = currenAns.id;
        }
    });
    return answer;
};

const deSelectAll = () => {
    answers.forEach((currenAns)=>{
        currenAns.checked = false;
    })
}

Submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    
    if(checkAnswer === qiuzDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deSelectAll();
    if(questionCount < qiuzDB.length){
        loadQuetions();
    }
    else{
        
        totalScore.classList.remove('scoreArea');
        totalScore.innerHTML = `<h3>Your total score is :<span id='score'>${score}</span></h3>
        <button class = 'btn' onclick='location.reload()' >Try again?</button>`;
    }
});
