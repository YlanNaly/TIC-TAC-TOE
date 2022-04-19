window.addEventListener("DOMContentLoaded", ()=>{
    const tile = Array.from(document.querySelectorAll('tile'))
    const playerDisplay = document.querySelector('.display-player')
    const resetButton = document.querySelector('#reset')
    const announcer = document.querySelector('.announcer')
    const container = document.getElementById('container')
    
    let Board= ['','','','','','','','','']
    let currentPlayer = "X"
    let isGameActive  = true ; 
    const PLAYERX_WON = "PLAYERX_WON"
    const PLAYERO_WON = "PLAYERO_WON"
    const TIE         = "TIE"

    const winningCondition = [
        [0,1,2] , 
        [3,4,5] , 
        [6,7,8] ,
        [0,3,6] ,
        [1,4,7] , 
        [2,5,8] , 
        [0,4,8] ,
        [2,4,6] ,
    ];
  
  

    var player = document.getElementsByClassName('tile');
    var X = document.getElementById('PlayerX') ;
    var O = document.getElementById('PlayerO') ; 

    for(let tile of player){
      tile.addEventListener("click", function(){
        var X = document.getElementById('PlayerX') ;
        var O = document.getElementById('PlayerO') ;
        
        if(tile.textContent == ''){
          tile.textContent = X.textContent
          X.textContent = X.textContent=="X"?"O":"X"
        }
      });
    }
     var X = document.getElementById("container")
   ;   X.style.color = 'green' ;
})
