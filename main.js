const dino = document.querySelector(".dino"); //variavel que nao sera sobrescrita
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

    let upInterval = setinterval(() => {
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


document.addEventListener('keyup', tKeyUp);