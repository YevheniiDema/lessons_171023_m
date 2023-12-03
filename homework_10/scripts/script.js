// 1. Создать в html форму с тремя инпутами (имя, фамилия, возраст). 
// Написать скрипт, который при отправке формы выводит собранные данные в консоль.

// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта. 

// 3. Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.

//

var users = [];

    
    function rerender() {
        var userCardsContainer = document.getElementById("userCardsContainer");
        
        
        userCardsContainer.innerHTML = '';

        
        users.forEach(function(user) {
            var card = document.createElement('div');
            card.innerHTML = '<p>Имя: ' + user.firstName + '</p>' +
                             '<p>Фамилия: ' + user.lastName + '</p>' +
                             '<p>Возраст: ' + user.age + '</p>';
            userCardsContainer.appendChild(card);
        });
    }

function submitForm() {
   
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    
    let user = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    
    users.push(user);

   
    console.log("Имя: " + user.firstName);
    console.log("Фамилия: " + user.lastName);
    console.log("Возраст: " + user.age);

   
    document.getElementById("myForm").reset();

    rerender();
}
function deleteUser(index) {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
        rerender(); // Вызываем rerender после удаления пользователя
    }
}

