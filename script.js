function openPopup() {
    document.getElementById('popup').style.display = 'block';
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


const music = document.getElementById('background-music');
const button = document.getElementById('toggle-music');

let isPlaying = false; 

button.addEventListener('click', () => {
    if (isPlaying) {
        music.pause(); 
       
         icone.style.color = "gray"
         situacao.innerHTML= "desligado"
         
    } else {
        music.play(); 
         
          icone.style.color = "black"
          situacao.innerHTML= "ligado"
    }
    isPlaying = !isPlaying; 
});

function confirma() {
    var cor = document.getElementById('cor').value; 
    document.body.style.background = cor;
}

function confirma2() {
    var cor = document.getElementById('cor2').value; 
    var links = document.querySelectorAll('.links a'); 
    links.forEach(link => {
        link.style.backgroundColor = cor; 
    });
}

const botao = document.getElementById('play-sound');
const sound = document.getElementById('sound-effect');


botao.addEventListener('click', () => {
    sound.currentTime = 0; 
    sound.play(); 
});


const botao2 = document.getElementById('play-sound2');
const sound2 = document.getElementById('sound-effect2');


botao2.addEventListener('click', () => {
    sound.currentTime = 0; 
    sound.play(); 
});

const botao3 = document.getElementById('play-sound3');



botao3.addEventListener('click', () => {
   sound2.currentTime = 0; 
    sound2.play(); 
});


const botao4 = document.getElementById('play-sound4');
botao4.addEventListener('click', () => {
    sound.currentTime = 0;
     sound.play(); 
 });