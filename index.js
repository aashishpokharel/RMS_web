
var playerSymbol = "X";
var enemySymbol = 'O';
var i = 0;
var gameScreen = document.getElementById('game-screen');
var restart = document.getElementById('restart');
var choose_err = document.querySelector('h1');


gameScreen.addEventListener('click', (e)=>{
        // console.log(e.target.className);
        if(i %2 == 0 && (e.target.className == 'cell')){
            e.target.className = 'selected';
            e.target.innerText = playerSymbol;
            i++;
            var choose_err = document.querySelector('h1');
            // checkWin();
            choose_err.innerText= "player1's turn!";
        }else if(i %2 == 1 && (e.target.className == 'cell')){
            e.target.className = 'selected';
            e.target.innerText = enemySymbol;
            i++;
            var choose_err = document.querySelector('h1');
            choose_err.innerText= "player2's turn!";
        }else{
            var choose_err = document.querySelector('h1');
            choose_err.innerText= 'Cannot be selected';
        }
        
    });//finding which one is clicked
    
        
restart.addEventListener('click' , (e)=>{
            i = 0;
            var cell = document.getElementsByClassName('selected');
            var len  = cell.length;
            for(var j = 0; j < len;j++){
                console.log(cell.length);
                cell[j].innerText = '';
                cell[j].className = 'cell';
            }
            choose_err.innerHTML = 'Start again!';
            
    
    });
    
function checkWin(){
       var selected = document.getElementsByClassName('selected');
       var k=0;
       Array.from(selected).forEach((value)=>{
            console.log(value.className)
       });
       
    
}
    // checkWin();

