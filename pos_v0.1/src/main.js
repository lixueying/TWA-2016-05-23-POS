//TODO: Please write code in this file.
function printInventory(inputs) {
    var cart = new Array();
    var msg='';
    var totalPrices = 0.00;
    var j = 0;

    for(var i = 0; i < inputs.length; i++){
       if(judge(inputs[i],cart) == false){
        cart[j] = new Product(inputs[i].barcode, inputs[i].name, inputs[i].unit, inputs[i].price, 1);
        j++;
       }
    }

    for(var i=0;i<cart.length;i++){
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

function Product(barcode,name,unit,price,num)
{
    this.name=name;
    this.barcode=barcode;
    this.unit=unit;
    this.price=price;
    this.num=num;
}

function judge(input, cart){
    for(var i = 0; i < cart.length; i++){
        if(cart[i].barcode == input.barcode){
            cart[i].num++;
            return true;
        }
    }
    return false;
}