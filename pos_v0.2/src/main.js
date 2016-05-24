function printInventory(inputs) {
    var allItems;
    var cart = [];
    var index = 0;
    allItems = loadAllItems();
    for(var i = 0; i < inputs.length; i++){
        if(isExited(inputs[i],cart) == false){
            if(findItem(inputs[i], allItems, cart, index)){
                index++;
            }
        }
    }
    print(cart);
}

function findItem(input, allItems, cart, index){
    for(var i = 0; i < allItems.length; i++){
        if(allItems[i].barcode == input){
            cart[index] = {
              name: allItems[i].name,
              barcode: allItems[i].barcode,
              unit: allItems[i].unit,
              price: allItems[i].price,
              num: 1
             };
            return true;
        }
    }
}

function isExited(input, cart){
    for(var i = 0; i < cart.length; i++){
        if(cart[i].barcode == input){
            cart[i].num++;
            return true;
        }
    }
    return false;
}