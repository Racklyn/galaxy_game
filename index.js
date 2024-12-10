const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

const GAME_HEIGHT = 650
const GAME_WIDTH = 400
const MARGIN_BOTTOM = 50
const N_BLOCK = 5
const BLOCK_W = GAME_WIDTH/N_BLOCK

// Nave
const SHIP_WIDTH = BLOCK_W
const SHIP_HEIGHT = BLOCK_W
let shipBlock = 2


function limparTela() {
    ctx.fillStyle = '#30F';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
}

function desenharNave() {
    ctx.fillStyle = '#567';
    ctx.fillRect(BLOCK_W*shipBlock,GAME_HEIGHT-SHIP_HEIGHT-MARGIN_BOTTOM, SHIP_WIDTH, SHIP_HEIGHT);
    
}
function desenhar() {
    limparTela()
    desenharNave()
}



// movendo a nave
document.addEventListener('keydown',(event)=>{
    console.log(event.key)

    if(event.key === 'ArrowLeft' && shipBlock > 0){
        shipBlock -= 1
    }else if(event.key === 'ArrowRight' && shipBlock < N_BLOCK-1){
        shipBlock += 1
    }
    desenhar()

})



//rodando o jogo
desenhar()