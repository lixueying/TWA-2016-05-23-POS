function print(cart){
    var totalPrices = 0.00;
    var msg='';
    for(var i = 0; i < cart.length; i++) {
            var subtotal = cart[i].num * cart[i].price;
            totalPrices += subtotal;
            msg = msg + '名称：' + cart[i].name + '，数量：'+ cart[i].num + cart[i].unit + '，单价：' +
                    cart[i].price.toFixed(2) + '(元)，小计：'+ subtotal.toFixed(2) + '(元)\n';
        }

        var result = '***<没钱赚商店>购物清单***\n' + msg +
                '----------------------\n' +'总计：'+totalPrices.toFixed(2)+'(元)\n' + '**********************';

        console.log(result);
}