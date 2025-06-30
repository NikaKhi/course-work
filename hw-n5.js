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
// Задание 1
function min(a, b) {
    if (a < b) {
        return a; 
    } else {
        return b; }
}
// Задание 2 
function checkEvenOdd(n) {
    if (n % 2 === 0) {
        return 'Число четное'; 
    } else {
        return 'Число нечетное'; 
    }
}
// Задание 3
function printSquare(n) {
    const square = n * n; 
    console.log(square); 
}

function getSquare(n) {
    return n * n; }
const result = getSquare(4); 
console.log(result); 
// Задание 4
function checkAge() {
    const age = prompt('Сколько вам лет?'); 

  
    const ageNumber = parseInt(age);

    
    if (isNaN(ageNumber)) {
        alert('Вы ввели неправильное значение');}
         else if (ageNumber < 0) {
        alert('Вы ввели неправильное значение');}
         else if (ageNumber >= 0 && ageNumber <= 12) {
        alert('Привет, друг!');}
         else {
        alert('Добро пожаловать!'); 
}
}
// Задание 5 
function multiplyNumbers(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом'; 
    }

    return num1 * num2;
}
// Задание 6

function cubeNumber() {
    const input = prompt('Введите число:'); 

  
    if (input === null) {
        console.log('Вы отменили ввод.'); 
        return; 
    }

    const number = Number(input);

   
    if (isNaN(number)) {
        console.log('Переданный параметр не является числом'); 
        return; 
    }

    const cubedValue = Math.pow(number, 3);
    console.log(`${number} в кубе равняется ${cubedValue}`);
}
cubeNumber();

// Задание 7
function createCircle(radius) {
    return {
        radius: radius,
        getArea: function() {
            return Math.PI * Math.pow(this.radius, 2); 
        },
        getPerimeter: function() {
            return 2 * Math.PI * this.radius; 
        }
    };
}


const circle1 = createCircle(5); 
const circle2 = createCircle(10); 