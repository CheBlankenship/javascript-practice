function decipher(text){
    var result = "";
    for (var i=0; i <text.length+1; i++){
        var to_ascii = text.charCodeAt(i);
        if(to_ascii > 64 && to_ascii < 91 || to_ascii >= 97 && to_ascii < 123){
            if(to_ascii < 77){
                to_ascii += 13;
                to_ascii = String.fromCharCode(to_ascii);
                result += to_ascii;
            }
            else if(to_ascii >= 77 && to_ascii < 91){
                to_ascii -= 13;
                to_ascii = String.fromCharCode(to_ascii);
                result += to_ascii;
            }
            else if(to_ascii >= 97 &&to_ascii < 110){
                to_ascii += 13;
                to_ascii = String.fromCharCode(to_ascii);
                result += to_ascii;
            }
            else if(to_ascii >= 110){
                to_ascii -= 13;
                to_ascii = String.fromCharCode(to_ascii);
                result += to_ascii;
            }
        }
        else{
            result += " ";
        }
    }
  return result;
}

console.log(decipher("anz"));
