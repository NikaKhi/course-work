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
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
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
            correctAnswer = Math.round((num1 / num2) * 100) / 100; // Округление до 2 знаков
            break;
    }

    askQuestion();
}

function askQuestion() {
    while (true) {
        const userInput = prompt(`Решите задачу: ${currentTask}`);
        
        // Обработка отмены
        if (userInput === null) {
            alert("Игра отменена");
            return;
        }
        
        // Проверка на пустую строку
        if (userInput.trim() === '') {
            alert("Пожалуйста, введите ответ!");
            continue;
        }
        
        const userAnswer = parseFloat(userInput.replace(',', '.')); // Замена запятой на точку
        
        // Проверка ответа
        if (userAnswer === correctAnswer) {
            alert('Верно!');
            return;
        } else {
            alert('Ответ неверный! Попробуйте еще раз.');
            // Цикл продолжается для новой попытки
        }
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
            if (isNaN(userAnswerNumber)) {
                alert("Введите пожалуйста номер ответа");
                continue;
            }

            if (userAnswerNumber < 1 || userAnswerNumber > currentQuestion.options.length) {
                alert("Введите номер ответа от 1 до " + currentQuestion.options.length);
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

// Код для пятой игры
function playGame() {
    // Получаем выбор пользователя
    const userInput = prompt("Введите ваш выбор: камень, ножницы или бумага");

    // Обрабатываем случай отмены
    if (userInput === null) {
        alert("Игра отменена");
        return;
    }

    // Приводим к нижнему регистру и обрезаем пробелы
    const userChoice = userInput.toLowerCase().trim();

    // Проверяем валидность выбора
    if (!["камень", "ножницы", "бумага"].includes(userChoice)) {
        alert("Неверный выбор! Пожалуйста, выберите камень, ножницы или бумагу.");
        return;
    }

    // Логика игры
    const options = ["камень", "ножницы", "бумага"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    // Вывод результата
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}



//Код для шестой игры 
const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    const gamesSection = document.getElementById('game');
    const miniGameBox = document.querySelector('.mini-game-box');

    gamesSection.style.backgroundColor = randomColor;
    miniGameBox.style.backgroundColor = randomColor;
}

changeBackgroundBtn.addEventListener('click', changeBackgroundColor);


//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);

//Задание 2
function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filter([3, -4, 1, 9], isPositive));

const people1 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people1, isMale));

//Задание 3
function logCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate.toLocaleString());
}

const intervalId = setInterval(logCurrentDate, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, 30000);

//Задание 4
function delayForSecond(callback) {

    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

// Проверка ширины в консоли
console.log('Ширина body:', document.body.clientWidth);