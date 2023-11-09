// 1. Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

// let inputNum = prompt("Введите значение")
// result = (inputNum*0,1)
// console.log("Результат: " + result + "%")



// 2. Написать программу, которая получает два числа и выводит наименьшее

// let firstNum = prompt("Введите первое число")
// firstNum = Number(firstNum)
// let secondNum = prompt("Введите второе число")
// secondNum = Number(secondNum)
// if (firstNum < secondNum) {
//     console.log("Меньшее число: " + firstNum)
//     }  else if (firstNum > secondNum) {
//         console.log("Меньшее число: " + secondNum)
//     }  else if (firstNum = secondNum) {
//         console.log ("Числа равны")
//     } 



// 3. Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

// let inputNum = prompt("Введите число")
// inputNum = Number(inputNum) 
// if (inputNum < 100) {
//     console.log("Число меньше 100")
// } else if (inputNum > 100) {
//     console.log("Число больше 100")
// } else {
//     console.log("Число равно 100")
// }

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

let userName = prompt("Введите Ваше имя")
let userAge = prompt("Введите Ваш возраст")
userAge = Number(userAge)
if (userAge >= 18) {
    console.log("Hello, " + userName)
} else {
    console.log("Hi, " + userName)
}