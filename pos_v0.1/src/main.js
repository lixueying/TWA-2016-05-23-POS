function printInventory(inputs) {
    var cart = [];
    var index = 0;

    for(var i = 0; i < inputs.length; i++) {
       if(isExited(inputs[i],cart) == false) {
        cart[index] = {
            name: inputs[i].name,
            barcode: inputs[i].barcode,
            unit: inputs[i].unit,
            price: inputs[i].price,
            num: 1
           };
        index++;
       }
    }

    print(cart);
}

function isExited(input, cart) {
    for(var i = 0; i < cart.length; i++) {
        if(cart[i].barcode == input.barcode) {
            cart[i].num++;
            return true;
        }
    }
    return false;
}