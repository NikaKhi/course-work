// Код для первой игры 
function startGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1; 
    let guess;
    alert('Угадай число');
    
    while (true) {
        const input = prompt('Попробуй угадать число от 1 до 100:');
        
        if (input === null) {
            alert('Игра отменена!');
            return;
        }
        
        guess = parseInt(input);
        
        if (isNaN(guess)) {
            alert('Пожалуйста, введите корректное число!');
            continue;
        }
        
        if (guess === secretNumber) {
            alert(`Вы угадали число ${secretNumber}!`); 
            break;
        } else if (guess < secretNumber) {
            alert('Загаданное число больше!');
        } else {
            alert('Загаданное число меньше!');
        }
    }
}

// Код для второй игры 
let currentTask = '';
    let correctAnswer = 0;

    function generateTask() {
        const operations = ['+', '-', '*', '/'];
        const num1 = Math.floor(Math.random() * 10) + 1; // Случайное число от 1 до 10
        const num2 = Math.floor(Math.random() * 10) + 1; // Случайное число от 1 до 10
        const operation = operations[Math.floor(Math.random() * operations.length)];

        currentTask = `${num1} ${operation} ${num2}`;
        
       
        switch (operation) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
            case '/':
                correctAnswer = (num1 / num2).toFixed(2); // Ограничиваем до 2 знаков после запятой
                break;
        }

        
        const userAnswer = prompt(`Решите задачу: ${currentTask}`);
        
        
        if (parseFloat(userAnswer) === correctAnswer) {
            alert('Верно!');
        } else {
            alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
        }
    }

    // Код для третьей игры
    function reverseText() {
        
        const input = prompt("Введите текст для переворота:");
        if (input !== null) { 
        
            const reversed = input.split('').reverse().join('');
            
            alert('Перевернутый текст: ' + reversed);
        }
    }
// Код для четвертой игры

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2,
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2,
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2,
    },
];

function startQuiz() {
    let correctAnswers = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        let userAnswer;

        while (true) {
            userAnswer = prompt(
                currentQuestion.question + "\n" + currentQuestion.options.join("\n")
            );

            if (userAnswer === null) {
                alert("Игра отменена");
                return;
            }

           const userAnswerNumber = parseInt(userAnswer);
           if(isNaN(userAnswerNumber)) {
                 alert("Введите пожалуйста номер ответа");
                  continue;
           }

             if(userAnswerNumber < 1 || userAnswerNumber > currentQuestion.options.length ) {
                 alert("Введите номер ответа от 1 до " + currentQuestion.options.length );
                   continue;
             }
             break;
        }


        if (parseInt(userAnswer) === currentQuestion.correctAnswer) {
            correctAnswers++;
        }
    }

    alert("Количество правильных ответов: " + correctAnswers + " из " + quiz.length);
}

// Задание 1
let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr);
// Задание 2
function filterByPrefix(array, prefix) {

    const lowerCasePrefix = prefix.toLowerCase();
    
    return array.filter(item => item.toLowerCase().startsWith(lowerCasePrefix));
}
// Задание 3
const number = 32.58884;

const roundedDown = Math.floor(number);
console.log(`Округление до меньшего целого: ${roundedDown}`); // Вывод: 32

const roundedUp = Math.ceil(number);
console.log(`Округление до большего целого: ${roundedUp}`); // Вывод: 33

const roundedNearest = Math.round(number);
console.log(`Округление до ближайшего целого: ${roundedNearest}`); // Вывод: 33

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
console.log(`Минимальное значение: ${minValue}`); // Вывод: Минимальное значение: 21

const maxValue = Math.max(...numbers);
console.log(`Максимальное значение: ${maxValue}`); // Вывод: Максимальное значение: 77

// Задание 5
function printRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

// Задание 6
function generateRandomArray(n) {
    
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error("Пожалуйста, введите положительное целое число.");
    }

    const length = Math.floor(n / 2); 
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        
        const randomNumber = Math.floor(Math.random() * n);
        randomArray.push(randomNumber);
    }

    return randomArray;
}

const number1 = 10;
const result = generateRandomArray(number1);
console.log(result);

// Задание 7
function getRandomInRange(min, max) {
   
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error("Оба значения должны быть целыми числами.");
    }

    if (min > max) {
        throw new Error("Минимальное значение должно быть меньше или равно максимальному значению.");
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const min = 5;
const max = 15;
const randomNum = getRandomInRange(min, max);
console.log(`Случайное число в диапазоне от ${min} до ${max}: ${randomNum}`);

// Задание 8
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

console.log(formattedDate);

// Задание 9
const currentDate2 = new Date();

const futureDate = new Date(currentDate2);
futureDate.setDate(currentDate2.getDate() + 73);

console.log(`Текущая дата: ${currentDate2.toLocaleDateString()}`);
console.log(`Дата через 73 дня: ${futureDate.toLocaleDateString()}`);

// Задание 10
function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    
    const daysOfWeek = [
        "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formattedDate}\n${formattedTime}`;
}

const currentDate3 = new Date();
const result2 = formatDate(currentDate);
console.log(result2);

