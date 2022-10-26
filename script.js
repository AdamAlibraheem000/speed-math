const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const answer = document.getElementById('correct-answer');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const userInput = document.getElementById('user-input')

let firstNum = 0;
let secondNum = 0;
let correctAnswer = 0;


const generateRandomNums = () => {
    firstNum = Math.floor(Math.random() * 100);
    secondNum = Math.floor(Math.random() * 100);

    numOne.textContent = firstNum;
    numTwo.textContent = secondNum;

    correctAnswer = firstNum + secondNum;

}

const displaySuccess = () => {
    message.classList.toggle("message");
}

const displayFailure = () => {
    message.classList.toggle("message");
    message.textContent = "Incorrect";
}

const toggleBtns = () => {
    btn.style.display = 'none';
    btn2.style.display = "inline-block";
}

const toggleBtnsAgain = () => {
    btn.style.display = 'inline-block';
    btn2.style.display = 'none';
}



const checkUserInput = () => {
    let input = parseInt(userInput.value);
    
    if(input === correctAnswer){
        displaySuccess();
    }else{
        displayFailure();
    }

    answer.textContent = correctAnswer;


     
}

btn.addEventListener('click', toggleBtns);
btn2.addEventListener('click', toggleBtnsAgain)

generateRandomNums();
