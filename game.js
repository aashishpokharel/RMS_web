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
    }
    document.getElementById(element.id).classList.add('cannotuse');
    checkWinConditions(element);
    turn++;
    console.log(cpuEnabled);
    if(win || turn>8){
        document.getElementById('restart').classList.add('btn-green');
        // document.getElementById(element.id).classList.add('cannotuse');
    }else if(cpuEnabled && turn%2 !== 0){
        // cpuTurn();
        bestMove();
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
    // Horizontal Win condition
    for(var i = 0;i<3;i++){
        if(document.getElementById('cell'+row+i).textContent !== element.innerHTML){
            win= false;
        }
    }
    if(win){
        for(var i = 0;i<3;i++){
            document.getElementById('cell'+row+i).classList.add('wincell')
        }
        return;
    }
    // Vertical
    win=true;
    for(var i = 0;i<3;i++){
        if(document.getElementById('cell'+i+column).textContent !== element.innerHTML){
            win= false;
        }
    }
    if(win){
        for(var i = 0;i<3;i++){
            document.getElementById('cell'+i+column).classList.add('wincell');
        }
        return;
    }
    //main diagonal
    win=true;
    for(var i = 0;i<3;i++){
        if(document.getElementById('cell'+i+i).textContent !== element.innerHTML){
            win= false;
        }
    }
    if(win){
        for(var i = 0;i<3;i++){
            document.getElementById('cell'+i+i).classList.add('wincell');
        }
        return;
    }
    // Secondary Diagonal
    win= false;
    if(document.getElementById('cell02').textContent == element.innerHTML){
        if(document.getElementById('cell11').textContent == element.innerHTML){
            if(document.getElementById('cell20').textContent == element.innerHTML){
                win = true;
                document.getElementById('cell02').classList.add('wincell');
                document.getElementById('cell11').classList.add('wincell');
                document.getElementById('cell20').classList.add('wincell');
            }
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
        document.getElementById('cell'+row+column).click();
    }
}

function bestMove(){
    
    var row;
    var column;
    let bestScore = -Infinity;
    let move ;
    for(row = 0;row<3;row++){
        for(column= 0;column<3;column++){
            if(document.getElementById('cell'+row+column).innerHTML == ''){
                let score = minimax(0, true);
                if(score > bestScore){
                    bestScore = score;
                    move = [row, column]
                }
            }  
        }
    }
        document.getElementById('cell'+move[0]+move[1]).click();
    }
function minimax(depth, isMaximizing){
    return 1;
    
}