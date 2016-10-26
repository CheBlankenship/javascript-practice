function printSquare(num){
    for (var i=0; i <num; i++){
        console.log(printInLine("*", num));
        }
}
printSquare(5);


function printInLine(char, times){
    var str = "";
    for (var j = 0; j< times ; j++){
        str += char;
    }
    return str;
}
