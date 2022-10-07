let randomNumber = Math.random() * 45;
let randomNumber2 = Math.random() * 30;
let randomNumber3 = Math.random() * 45;
let randomNumber4 = Math.random() * 45;
let randomNumber5 = Math.random() * 45;
let randomNumber6 = Math.random() * 90;
let randomNumber7 = Math.random() * 45;
let randomNumber8 = Math.random() * 90;
let randomRotate = Math.random() * 90;
let randomRotate2 = Math.random() * -70;
let randomRotate3 = Math.random() * 45;
let randomRotate4 = Math.random() * -180;

function randomPlace() {
    var chaosItem = document.getElementById('chaosItem');
    chaosItem.style.position = 'fixed';
    chaosItem.style.left = randomNumber + '%';
    chaosItem.style.top = randomNumber2 + '%';
    chaosItem.style.transform = 'rotate' + '(' + randomRotate + 'deg' + ')';
    chaosItem.style.transition = 1 + 's' + ' ease-in-out';
}



function randomPlace2() {
    var chaosItem = document.getElementById('chaosItem2');
    chaosItem.style.position = 'fixed';
    chaosItem.style.left = randomNumber3 + '%';
    chaosItem.style.top = randomNumber4 + '%';
    chaosItem.style.transform = 'rotate' + '(' + randomRotate2 + 'deg' + ')';
    chaosItem.style.transition = 1 + 's' + ' ease-in-out';
}
function randomPlace3() {
    var chaosItem = document.getElementById('chaosItem3');
    chaosItem.style.position = 'fixed';
    chaosItem.style.left = randomNumber5 + '%';
    chaosItem.style.top = randomNumber6 + '%';
    chaosItem.style.transform = 'rotate' + '(' + randomRotate3 + 'deg' + ')';
    chaosItem.style.transition = 1 + 's' + ' ease-in-out';
}
function randomPlace4() {
    var chaosItem = document.getElementById('chaosItem4');
    chaosItem.style.position = 'fixed';
    chaosItem.style.left = randomNumber7 + '%';
    chaosItem.style.top = randomNumber8 + '%';
    chaosItem.style.transform = 'rotate' + '(' + randomRotate4 + 'deg' + ')';
    chaosItem.style.transition = 1 + 's' + ' ease-in-out';
}

function randomRemove() {
    var chaosItem = document.getElementById('chaosItem');
    chaosItem.style.position = '';
    chaosItem.style.left = '';
    chaosItem.style.top = '';
    chaosItem.style.transform = '';
    chaosItem.style.transition = 1 + 's' + ' ease-in-out';
}
function randomRemove2() {
    var chaosItem = document.getElementById('chaosItem2');
    chaosItem.style.position = '';
    chaosItem.style.left = '';
    chaosItem.style.top = '';
    chaosItem.style.transform = '';
    chaosItem.style.transition = 1 + 's' + ' ease-in-out';
}
function randomRemove3() {
    var chaosItem = document.getElementById('chaosItem3');
    chaosItem.style.position = '';
    chaosItem.style.left = '';
    chaosItem.style.top = '';
    chaosItem.style.transform = '';
    chaosItem.style.transition = 1 + 's' + ' ease-in-out';
}
function randomRemove4() {
    var chaosItem = document.getElementById('chaosItem4');
    chaosItem.style.position = '';
    chaosItem.style.left = '';
    chaosItem.style.top = '';
    chaosItem.style.transform = '';
    chaosItem.style.transition = 1 + 's' + ' ease-in-out';
}


const chaosToggle = document.getElementById('chaosToggle');

chaosToggle.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    randomPlace()
randomPlace2()
randomPlace3()
randomPlace4();
  } else {
    randomRemove();
    randomRemove2();
    randomRemove3();
    randomRemove4();
  }
})
/*

*/

const flash = document.getElementById('flashToggle');
let chaosItem = document.getElementById('chaosItem');
let chaosItem2 = document.getElementById('chaosItem2');
let chaosItem3 = document.getElementById('chaosItem3');
let chaosItem4 = document.getElementById('chaosItem4');


flash.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
 chaosItem.classList.add('blinking');
 chaosItem2.classList.add('blinking2');
 chaosItem3.classList.add('blinking3');
 chaosItem4.classList.add('blinking4');
    } else {
        chaosItem.classList.remove('blinking');
        chaosItem2.classList.remove('blinking2');
        chaosItem3.classList.remove('blinking3');
        chaosItem4.classList.remove('blinking4');
    }
  })

const audioPlay = document.getElementById('audioToggle');
var audioTest = new Audio('controversy.mp3');
audioPlay.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
audioTest.play();
    } else {
        audioTest.pause();
       
    }
  })
