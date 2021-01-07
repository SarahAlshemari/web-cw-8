let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]


let turn="O";
function press(x,y) {
    // Do stuff

    if(turn=="O"){
        turn="X";
    } else{
        turn="O";
    }
    board[x][y]=turn;
    let cell = document.getElementById(`${x}${y}`);
    cell.innerText=turn;
  
    
    if(board[0][0]==turn && board[1][1]==turn && board[2][2]==turn ){
        document.getElementById("status").innerText= `Bravo ${turn}!!!`;
    }

    if(board[0][0]==turn && board[0][1]==turn && board[0][2]==turn){
        document.getElementById("status").innerText= `Bravo ${turn}!!!`;
    }

    if(board[0][0]==turn && board[1][0]==turn && board[2][0]==turn){
        document.getElementById("status").innerText= `Bravo ${turn}!!!`;
    }

    if(board[2][0]==turn && board[2][1]==turn && board[2][2]==turn){
        document.getElementById("status").innerText= `Bravo ${turn}!!!`;
    }

    if(board[1][0]==turn && board[1][1]==turn && board[1][2]==turn){
        document.getElementById("status").innerText= `Bravo ${turn}!!!`;
    }

    if(board[0][1]==turn && board[1][1]==turn && board[2][1]==turn){
        document.getElementById("status").innerText= `Bravo ${turn}!!!`;
    }

    if(board[0][2]==turn && board[1][2]==turn && board[2][2]==turn){
        document.getElementById("status").innerText= `Bravo ${turn}!!!`;
    }


    console.log(x,y)
    
}


// function resetBu() {
//   c
//    };
   
