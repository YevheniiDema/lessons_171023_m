// 1. Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function compare(a, b) {
//     if (a < b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }
// compare(15, -0.5)

// 2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function numbers(x, y) {
//     let arrNumbers = []
//     if (x > y) {
//         for (i = x; i >= y; i--) {
//             if (i % 2 === 0) {
//                 arrNumbers.push(i)
                
//             }
//         }
//         console.log (arrNumbers)
//     } else {
//         for (i = y; i >= x; i--) {
//             if (i % 2 === 0) {
//                 arrNumbers.push(i)
                
//             }
//         }
//         console.log (arrNumbers)
//     }
// }
// numbers (55, 25)

// 3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function power (a, b) {
//     let c = a ** b
//    console.log(c);
// }
// power (9, 2)

// 4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function num(n) {
//     let sum = 0
//     for (i = 1; i <= n; i++) {
//         sum += i 
//     }
//     console.log(sum)
// }
// num (10)

// 5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function sum(n, m) {
//     let evenSum = 0
//     let oddSum = 0
//     if (n < m) {
//         for (i = n; i <= m; i++) {
//             if (i % 2 === 0) {
//                 evenSum += i
//             } else {
//                 oddSum += i
//             } 
//         }
//     } else {
//         for (i = m; i <= n; i++) {
//             if (i % 2 === 0) {
//                 evenSum += i
//             } else {
//                 oddSum += i
//             }
//             }
//         }
//         console.log(evenSum);
//         console.log(oddSum);   
//     }
    

// sum(10, 5)

// 5. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

function longestWord(array) {
    let longestWord = array[0]
    if (array.length === 0) {
        console.log (null)
    } else {
        for (let i = 0; i < array.length; i++) {
            if (longestWord.length < array[i].length) {
                longestWord = array[i]
            }
        }
        console.log(longestWord)
    }
    
}

let array = [ 'one', 'two', 'three', 'seven' ]
longestWord(array)






