function cipher(text){
    var str = text.toLowerCase();
    // var low_str = str.toLowerCase();
    var str2 = "";
    for (var i= 0; i< text.length; i++){
        var to_ascii = str.charCodeAt(i);
        if (to_ascii > 96 || to_ascii < 123){
            if (to_ascii < 111){
                to_ascii = (to_ascii + 13);
                to_ascii = String.fromCharCode(to_ascii);
                str2 += to_ascii;
            }
            else{
                to_ascii = (to_ascii - 13);
                to_ascii = String.fromCharCode(to_ascii);
                str2 += to_ascii;
            }
        }
        else{
            str2.push(" ");
        }
    }
     return str2;
}

console.log(cipher("hola"));
