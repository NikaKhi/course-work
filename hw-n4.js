// Задание 1
let hi = 0;
while (hi < 2) {
    console.log("Привет");
    hi++;
}
// Задание 2
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}
// Задание 3
let b = 7;
while (b <=22) {
    console.log(b);
    b++;
}
// Задание 4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}
// Задание 5
let n = 1000; 
let num = 0;  

while (n >= 50) {
    n /= 2;  
    num++;    
}

console.log("Результат:", n); 
console.log("Количество итераций:", num);   
// Задание 6
const firstFriday = 3; 
const daysInMonth = 31; 

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

