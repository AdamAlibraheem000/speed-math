const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const answer = document.getElementById('correct-answer');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
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

const checkUserInput = () => {
    let input = parseInt(userInput.value);
    
    if(input === correctAnswer){
        displaySuccess();
    }else{
        displayFailure();
    }


     
}

btn.addEventListener('click', checkUserInput);

generateRandomNums();
