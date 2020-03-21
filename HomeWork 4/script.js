const userInput = prompt('Деньги есть? Сколько?');

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

let allPrice = 0;

function Cashier(name, productDatabase, allPrice, userInput) {

    this.name = name;

    this.productDatabases = Object.values(productDatabase);

    this.customerMoney = Number(userInput);

    this.countTotalPrice = function(){
        for(let item of this.productDatabases) {

        allPrice += Number(item);

        }
        return Number(allPrice);
    };

    this.countChange =  Number(userInput) - Number(this.countTotalPrice());


    this.onSuccess = function() {
            console.log(`Куда пошёл, сдачу забери, тут аж ${this.countChange} гривен!`)
    };

    this.onError = function(){
            console.log(`Мало очень денег, ты походу кошелёк забыл!`)
        }

    this.reset = function() {this.countTotalPrice() = 0};

}

const mango = new Cashier('Mango', products, allPrice, userInput)

if (mango.countChange >= 0) {
    mango.onSuccess();
} else {
    mango.onError();
}