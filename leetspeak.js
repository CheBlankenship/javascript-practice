function leetspeak(str){
    var result = "";
    var upperstr = str.toUpperCase();
    var swap ={
        "A": 4,
        "E": 3,
        "G": 6,
        "I": 1,
        "O": 0
    };
    for(var i=0; i < str.length; i++){
        var char = upperstr[i];
        if(char in swap){
            result += swap[char];
        }
        else{
            result += "";
        }
    }
    return result;
}

console.log(leetspeak("leet"));
