function printBox(width, height){
    for (var i=0; i<height;i++){
        if (i === 0 || i === height-1){
            console.log(printInLine("*",width));
        }
        else{
            console.log("*" + printInLine(" ", width-2) + "*");
        }
    }
}
printBox(6,4);


function printInLine(char, times){
    var str = "";
    for (var j = 0; j< times ; j++){
        str += char;
    }
    return str;
}
