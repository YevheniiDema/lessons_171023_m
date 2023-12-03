function changeSquareColorAndSize() {
    var square = document.getElementById("square");
    square.style.backgroundColor = "green";
    square.style.width = "100px";
    square.style.height = "100px";
  }

  const square = document.querySelector('.square2');

function changeColor() {
    square.style.backgroundColor = 'blue';
    console.log('Обновленный цвет квадрата: ' + square.style.backgroundColor);
}

function increaseSize() {
    const square3 = document.getElementById("square3");
    const currentWidth = square3.offsetWidth;
    const currentHeight = square3.offsetHeight;
    square3.style.width = (currentWidth + 20) + "px";
    square3.style.height = (currentHeight + 20) + "px";
  }

function createParagraph() {
    var div = document.querySelector('.root');
    var paragraph = document.createElement('p');
    paragraph.className = 'blue-text';
    paragraph.textContent = 'Какой-то текст';
    div.appendChild(paragraph);
}

let colors = ["blue", "green"];
let currentIndex = 0;

function createParagraph2() {
    let div = document.querySelector(".root2");
    let paragraph = document.createElement("p");
    paragraph.classList.add(colors[currentIndex % colors.length]);
    currentIndex++;
    div.appendChild(paragraph);
}
