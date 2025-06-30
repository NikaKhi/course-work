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

    // Задание 1
    const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]); 
    if (array[i] === 10) {
        break; 
    }
}

// Задание 2
const array2 = [1, 5, 4, 10, 0, 3];
const valueToFind = 4;

const index = array2.indexOf(valueToFind);

if (index !== -1) {
    console.log(`Индекс значения ${valueToFind} в массиве: ${index}`);
} else {
    console.log(`Значение ${valueToFind} не найдено в массиве.`);
}
// Задание 3 
const array3 = [1, 3, 5, 10, 20];

const result = array3.join(' ');

console.log(result);

// Задание 4 
const rows = 3; 
const cols = 3; 
const multiArray = []; 

for (let i = 0; i < rows; i++) {
    const row = []; 
    
    for (let j = 0; j < cols; j++) {
        row.push(1); 
    }
    multiArray.push(row);
}

// Задание 5
console.log(multiArray);

const array4 = [1, 1, 1];

array4.push(2, 2, 2);

console.log(array4);

// Задание 6
const array5 = [9, 8, 7, 'a', 6, 5];

const filteredArray = array5.filter(item => item !== 'a');

filteredArray.sort((a, b) => a - b); 

console.log(filteredArray);

// Задание 7
const array6 = [9, 8, 7, 6, 5];

const userGuess = prompt("Угадайте число из массива [9, 8, 7, 6, 5]:");
const guessedNumber = Number(userGuess);

if (array6.includes(guessedNumber)) {
    alert("Угадал!");
} else {
    alert("Не угадал.");
}
// Задание 8
const str = 'abcdef';

const reversedStr = str.split('').reverse().join('');

console.log(reversedStr); 

// Задание 9
const multiArray2 = [[1, 2, 3], [4, 5, 6]];
const flatArray = [];

multiArray2.forEach(subArray => {
    subArray.forEach(item => {
        flatArray.push(item);
    });
});

console.log(flatArray); 

    // Задание 10
const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length - 1; i++) {
    const sum = array7[i] + array7[i + 1]; 
    console.log(sum); 
}

// Задание 11
function squareArray(numbers) {
    return numbers.map(num => num * num);
}
const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(inputArray);
console.log(squaredArray);

// Задание 12
function getStringLengths(strings) {
    return strings.map(str => str.length);
}

const inputArray2 = ["hello", "world", "JavaScript", "function"];
const lengthsArray = getStringLengths(inputArray2);

// Выводим результат в консоль
console.log(lengthsArray); // Вывод: [5, 5, 10, 8]


// Задание 13
function getNegativeNumbers(numbers) {
   
    return numbers.filter(num => num < 0);
}

const inputArray3 = [1, -2, 3, -4, 5, -6, 0];
const negativeNumbersArray = getNegativeNumbers(inputArray3);

console.log(negativeNumbersArray); 
// Задание 14 
const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbersArray = randomArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", randomArray);
console.log("Массив с четными значениями:", evenNumbersArray);

// Задание 15

const randomArray2 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const sum = randomArray2.reduce((accumulator, current) => accumulator + current, 0);
const average = sum / randomArray2.length;


console.log("Сгенерированный массив:", randomArray2);
console.log("Среднее арифметическое:", average);
