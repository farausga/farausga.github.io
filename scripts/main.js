let myImage = document.getElementById('keanu');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myHeading.textContent = 'UCHIHA ITACHI!';
let Itachi = 'victoria';
if(Itachi === 'derrota') {
  alert('Si, Itachi siempre gana!');
} else {
  alert('No, pero Itachi no puede perder...');
}

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}
const myHeading2 = document.querySelector('h2');
let julian = multiply(10, 10);
myHeading2.textContent = julian;

document.querySelector('h1').onclick = function() {
    alert('ITACHI'); myHeading.textContent = 'ITACHI!';
}

//codigo keanu
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/itachi2.jpg') {
      myImage.setAttribute('src','images/itachi3.jpg');
    } else if(mySrc === 'images/itachi3.jpg') {
		myImage.setAttribute('src','images/itachi4.jpg');
    } else {
	myImage.setAttribute('src','images/itachi2.jpg');
    } 
}
myButton.onclick = function() {
  setUserName();
}
//Relacion Ninja-Aldea
function setUserName() {
  let myName = prompt('Aldea');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'UCHIHA ITACHI, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'UCHIHA ITACHI, ' + storedName;
}

