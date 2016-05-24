function printInventory(inputs) {
    var allItems;
    var cart = new Array();
    var msg='';
    var j = 0;
    var totalPrices = 0.00;
    allItems = loadAllItems();
    for(var i = 0; i < inputs.length; i++){
        if(isExited(inputs[i],cart) == false){
            if(findItem(inputs[i], allItems, cart, j)){
                j++;
            }
        }
    }

    for(var i = 0; i < cart.length; i++){
            var totalPrice = cart[i].num * cart[i].price;
            totalPrices += totalPrice;
            msg = msg + '名称：'+cart[i].name+'，数量：'+cart[i].num+cart[i].unit+'，单价：'+
                            cart[i].price.toFixed(2)+'(元)，小计：'+totalPrice.toFixed(2)+'(元)\n';
        }

        var result = '***<没钱赚商店>购物清单***\n' + msg +
                                                         '----------------------\n' +
                                                         '总计：'+totalPrices.toFixed(2)+'(元)\n' +
                                                         '**********************';
        console.log(result);
}

function findItem(input, allItems, cart, j){
    for(var i = 0; i < allItems.length; i++){
        if(allItems[i].barcode == input){
            cart[j] = new Product(allItems[i].barcode, allItems[i].name, allItems[i].unit, allItems[i].price, 1);
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

function Product(barcode,name,unit,price,num)
{
    this.name=name;
    this.barcode=barcode;
    this.unit=unit;
    this.price=price;
    this.num=num;
}