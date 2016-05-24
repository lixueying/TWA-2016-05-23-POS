function printInventory(inputs) {
    var cart = [];
    var index = 0;

    for(var i = 0; i < inputs.length; i++){
       if(isExited(inputs[i],cart) == false){
        cart[index] = new Product(inputs[i].barcode, inputs[i].name, inputs[i].unit, inputs[i].price, 1);
        index++;
       }
    }

    print(cart);
}

function print(cart){
    var totalPrices = 0.00;
    var msg='';
    for(var i=0;i<cart.length;i++){
            var subtotal = cart[i].num * cart[i].price;
            totalPrices += subtotal;
            msg = msg + '名称：'+cart[i].name+'，数量：'+cart[i].num+cart[i].unit+'，单价：'+
                            cart[i].price.toFixed(2)+'(元)，小计：'+subtotal.toFixed(2)+'(元)\n';
        }

        var result = '***<没钱赚商店>购物清单***\n' + msg +
                                                         '----------------------\n' +
                                                         '总计：'+totalPrices.toFixed(2)+'(元)\n' +
                                                         '**********************';
        console.log(result);
}

function Product(barcode,name,unit,price,num)
{
    this.name=name;
    this.barcode=barcode;
    this.unit=unit;
    this.price=price;
    this.num=num;
}

function isExited(input, cart){
    for(var i = 0; i < cart.length; i++){
        if(cart[i].barcode == input.barcode){
            cart[i].num++;
            return true;
        }
    }
    return false;
}