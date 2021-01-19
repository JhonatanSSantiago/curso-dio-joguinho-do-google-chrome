const dino = document.querySelector(".dino"); //variavel que nao sera sobrescrita
const background = document.querySelector(".background");

let isJumping = false;

function tKeyUp(event){
    if (event.keyCode === 32) {
        if (!isJumping){
            pular();
        }

    }
}

function pular(){
    let posicao = 0;

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
    let radomTime = Math.radom() * 6000;

    cactos.classList.add('cactos');
    cactos.style.left = 1000 + 'px';
    background.appendChild(cactos);

    let leftInterval = setInterval(() => {
        
        
        if (posicaoCactos < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactos);
        } else if (posicaoCactos > 0 &){
            posicaoCactos -= 10;
            cactos.style.left = posicaoCactos + 'px';
        }

    }, 20);

    setTimeout(criarCactos, randomTime);
}

criarCactos();
document.addEventListener('keyup', tKeyUp);