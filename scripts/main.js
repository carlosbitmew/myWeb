// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = () => {
    var mySrc = myImage.getAttribute('src');
    if(mySrc==='images/cat.jpg'){
        myImage.setAttribute('src','images/cat2.jpg');
    }else{
        myImage.setAttribute('src','images/cat.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi,' + myName; 
}

if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi,' + storedName;
}

myButton.onclick = () => {
    setUserName();
}