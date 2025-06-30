//Задание 1
let password = 'skypro';
let userPassword = prompt('введите пароль');
if (userPassword === password) {
    alert ('Пароль введен верно');
} 
else {alert('Пароль введен неправильно');}
//Задание 2
let c = 6;
if ( c >0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// Задание 3
let d = 5;
let e = 10;
if (d >100 || e > 100) {console.log('Верно');
    
} else { console.log('Неверно');
   
}
//Задание 4 
let a = '2';
let b = '3';

alert(Number(a) +  Number(b));
//Задание 5
let monthNumber = 12;
if (monthNumber < 1 || monthNumber > 12) {
    console.log('Номер месяца должен быть от 1 до 12');
}
else {
    switch (monthNumber) {
        case 1: // Январь
        case 2: // Февраль
        case 12: // Декабрь
            console.log('Зима');
            break;
        case 3: // Март
        case 4: // Апрель
        case 5: // Май
            console.log('Весна');
            break;
        case 6: // Июнь
        case 7: // Июль
        case 8: // Август
            console.log('Лето');
            break;
        case 9: // Сентябрь
        case 10: // Октябрь
        case 11: // Ноябрь
            console.log('Осень');
            break;
        default:
            console.log('Неверный номер месяца');
    }
}