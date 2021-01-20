const dino = document.querySelector(".dino"); //variavel que nao sera sobrescrita
const background = document.querySelector(".background");
let posicao = 0;
let isJumping = false;
let isGameOver = false;


function tKeyUp(event){
    if (event.keyCode === 32) {
        if (!isJumping){
            pular();
        }

    }
}

function pular(){
    

    isJumping = true;

    let upInterval = setInterval(() => {
        if ( posicao >= 150){ //parar de subir
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                if (posicao <= 0){ //parar de descer
                    clearInterval(downInterval)
                    isJumping = false;
                }else{
                    posicao -= 20;
                dino.style.bottom = posicao + 'px';
                }
                
            }, 20);
        }else{
            //subindo
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }
        
    }, 20);
}

function criarCactos(){
    const cactos = document.createElement('div');
    let posicaoCactos = 1000;
    let randomTime = Math.random() * 6000;
    
    if (isGameOver) return;

    cactos.classList.add('cactos');
    background.appendChild(cactos);
    cactos.style.left = 1000 + 'px';

    let leftInterval = setInterval(() => {   
        if (posicaoCactos < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactos);
        } else if (posicaoCactos > 0 && posicaoCactos < 60 && posicao < 60){//Game over
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over"> Fim de Jogo </h1> '
        }else{
            posicaoCactos -= 10;
            cactos.style.left = posicaoCactos + 'px';
        }

    }, 15);

    setTimeout(criarCactos, randomTime);
}

criarCactos();
document.addEventListener('keydown', tKeyUp);