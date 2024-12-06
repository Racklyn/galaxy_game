const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

const GAME_HEIGHT = 650
const GAME_WIDTH = 400
const N_BLOCK = 5
const BLOCK_W = GAME_WIDTH/N_BLOCK

// Nave
const SHIP_WIDTH = BLOCK_W
const SHIP_HEIGHT = BLOCK_W
let SHIP_BLOCK = 2


function limparTela() {
    ctx.fillStyle = '#30F';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
}

function desenharNave() {
    ctx.fillStyle = '#567';
    ctx.fillRect(BLOCK_W*SHIP_BLOCK,GAME_HEIGHT-SHIP_HEIGHT-20, SHIP_WIDTH, SHIP_HEIGHT);
    
}


//rodando o jogo
limparTela()
desenharNave() 
