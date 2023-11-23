// 1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

const newParagraph = document.querySelector(".numbers")
for (let i = 100; i >= 50; i--) {
    console.log(i);
    if (i % 10 ==0 ){
    const pNum = document.createElement("p")
    pNum.innerText = i
    newParagraph.append(pNum)
    }
}
// 2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const myArr = ["Profile", "Timetable", "Elective", "Homework", "My homework", "Lessons"]
const rootDiv = document.querySelector(".strings_container")
for (let i = 0; i < myArr.length; i++) {
    console.log(i)
    const myPar = document.createElement("p")
    myPar.innerText = myArr[i]
    rootDiv.append(myPar)
}

// 3. Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
    {
        first_name: 'Ivan',
        last_name: 'Ivanov',
        age:23
    },
    {
        first_name: 'Marina',
        last_name: 'Stepanova',
        age: 17
    },
    {
        first_name: 'Grigory',
        last_name: 'Petrov',
        age:14
    },
    {
        first_name: 'Leonid',
        last_name: 'Jakubovich',
        age:75
    }
]


const users_container = document.querySelector(".users_container")

for (let i = 0; i <= users.length; i++) {
    const user = users[i]
    if (user.age >= 18) {
        
        const card = document.createElement("div")
        card.classList.add('card')

        const name = document.createElement("p")
        name.textContent = `Name: ${user.first_name} ${user.last_name}`
        const age = document.createElement("p")
        age.textContent = `Age: ${user.age}`

        card.appendChild(name)
        card.appendChild(age)
       
        users_container.appendChild(card)
}
}