function printBanner(text){
    console.log(printInLine("*",text.length+4));
    console.log("* " + text + " *");
    console.log(printInLine("*",text.length+4));
}


function printInLine(char, times){
    var str ="";
    for (var j=0; j<times; j++){
        str += char;
    }
    return str;
}
printBanner("Hello world!");
