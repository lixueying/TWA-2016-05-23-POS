function isExited(input, cart) {
    for(var i = 0; i < cart.length; i++) {
        if(cart[i].barcode == input) {
            cart[i].num++;
            return true;
        }
    }
    return false;
}