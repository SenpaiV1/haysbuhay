const button = document.getElementById('nButton');
var audio = document.getElementById('background-music');
var audio2 = document.getElementById('background-music2');

let pressCount = 0;

function moveButton(){ 
      
    const button = document.getElementById("nButton");

    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;

      
} 

button.addEventListener('click', function() {
    pressCount++;
    
    moveButton();

if (pressCount == 5 ) {
    if (!audio2.paused) {
        audio2.pause();
    }
    audio.play();
     alert('awit diyan sir ;((');  
 
} else if (pressCount == 8) {
    alert('wala naba talaga? :((');
} else if (pressCount == 10){
    alert('hanggang bff nalang ba talaga sir? hahahaaha ;(')    
}

});

function yesButton(){

    if (!audio.paused) {
        audio.pause();
    }
    audio2.play();

    document.getElementById('para').innerText = 'tyl, love you';
    document.getElementById('para').style.fontSize = '100px';

    
}