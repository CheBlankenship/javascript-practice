function factors(num){
    var numbers=[];
        for (var j=1; j<=num;j++){
            var result = num % j;
        if(result == 0){
            numbers.push(j);
            }
    }
    console.log(numbers.length);
}
factors(12);
