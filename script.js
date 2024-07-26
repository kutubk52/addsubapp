document.addEventListener('DOMContentLoaded', () => {
    const num1Image = document.getElementById('num1-image');
    const num2Image = document.getElementById('num2-image');
    const resultSpan = document.getElementById('result');
    const operatorSpan = document.getElementById('operator');

    const newProblemButton = document.getElementById('new-problem');
    const showAnswerButton = document.getElementById('show-answer');

    const maxFingers = 10;

    function getRandomNumber() {
        return Math.floor(Math.random() * maxFingers) + 1;
    }

    function updateProblem() {
        const num1 = getRandomNumber();
        const num2 = getRandomNumber();
        const isAddition = Math.random() > 0.5;

        num1Image.src = `images/fingers-${num1}.jpg`;
        num2Image.src = `images/fingers-${num2}.jpg`;

        operatorSpan.textContent = isAddition ? '+' : '-';

        if (isAddition) {
            resultSpan.textContent = '?';
            resultSpan.dataset.answer = num1 + num2;
        } else {
            resultSpan.textContent = '?';
            resultSpan.dataset.answer = num1 - num2;
        }
    }

    newProblemButton.addEventListener('click', updateProblem);
    showAnswerButton.addEventListener('click', () => {
        resultSpan.textContent = resultSpan.dataset.answer;
    });

    updateProblem();
});