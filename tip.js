var priceStr = prompt("How much was the dish? ");
var price = parseInt(priceStr);

var service = prompt("How was the sirvice(goo, fair, poor)?");

function tipAmount(price, service){
    if (service == "good"){
        console.log(price + (price * 20/100));
    }
    else if (service == "fair") {
        console.log(price + (price * 15/100));
    }
    else if (service == "poor" || "bad"){
        console.log(price + (price * 10/100));
    }
    else{
        console.log("Check.");
    }
}

// tipAmount(100, "good");
tipAmount(price,service);
