function positiveNum(array){
    var result =[];
    for (var i = 0; i <array.length; i++ ){
        var num = array[i];
        if (num >0){
            result.push(num);
        }
    }
    return result;
}

console.log(positiveNum([-10,20,-3,35435,-25452,45545]));
