var enemySymbol = 'O',playerSymbol = 'X';
var win;
var turn = 0;
var row, column;
var cpuEnabled = true;


// For restarting the game
const restart = document.getElementById('restart');

restart.addEventListener('click', function(){
    restartGame();
})

// On clicking the cell
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', function(item){
        if(!win && this.innerHTML == ''){
            if(turn%2 === 0){
                insertSymbol(this, playerSymbol);
            }else{
                insertSymbol(this, enemySymbol);
            }
        }
    });
})

function insertSymbol(element, symbol){
    element.innerHTML = symbol;
    if(symbol == enemySymbol){
        document.getElementById(element.id).classList.add('player-two');
        document.getElementById(element.id).classList.add('cannotuse');
    }
    checkWinConditions(element);
    turn++;
    if(win || turn>8){
        document.getElementById('restart').classList.add('btn-green');

    }else if(cpuEnabled && turn%2 !== 0){
        cpuTurn();
    }

}

function restartGame(){
    turn = 0;
    win = false;
    Array.from(document.getElementsByClassName('cell')).forEach(function(item){
        item.textContent = '';
        item.classList.remove('wincell');
        item.classList.remove('cannotuse');
        item.classList.remove('player-two');
        item.classList.remove('btn-green');
    })
}

function checkWinConditions(element){
    row = element.id[4];
    column= element.id[5];
    win = true;
    for(var i = 0;i<3;i++){
        if(document.getElementById('cell'+row+i).textContent !== element.innerHTML){
            win= false;
        }
    }
    if(win){
        for(var i = 0;i<3;i++){
            document.getElementById('cell'+row+i).classList.add('wincell')
        }
    }
}

function cpuTurn(){
    var ok = false;
    var kl = 0;
    while(!ok && kl <1000){
        row = Math.floor(Math.random()*3);
        column= Math.floor(Math.random()*3);
        if(document.getElementById('cell'+row+column).innerHTML == ''){
            ok = true;
        }
    }
    console.log('unsuccessful');
}