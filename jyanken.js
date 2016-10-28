function rockPaperScissors(player1,player2){
    var gu = "rock";
    var choki = "sissors";
    var paa = "paper";
    if (player1 == gu && player2 == ){
        console.log("draw");
    }
    else if (player1 == gu && player2 == paa){
        console.log("draw");
    }
    else if (player1 == choki && player2 == gu){
        console.log("draw");
    }
    else if (player1 == gu && player2 == choki){
        console.log("draw");
    }
    else if (player1 == gu && player2 == paa){
        console.log("draw");
    }
    else {
        console.log("draw");
    }
}


function hands(){
    if ("rock", "rock"){
        return true;
    }
    else if("rock", "scissors"){
        return false;
    }
    else if ("rock", "rock") {
        return false;
    }
}
