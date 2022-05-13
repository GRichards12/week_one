let grinding = false;

const pressGrindBeans = () => {
    if(grinding == false){
    console.log("Grinding beans");
    }
    else{
        console.log("Stopping grinding beans");
    }
}
pressGrindBeans();

let account = 87654321;
let cashWithdrawal = (amount, acc_number) => {
    console.log(`£${amount} has been withdrawn from account ${acc_number}.`);
}
cashWithdrawal(100,12345678);
cashWithdrawal(200,account);

const addUp = (num1,num2) => {
    return num1 + num2;
}
console.log(addUp(4,5));

const multiplyByNineFifths = (celcius) => {
    return celcius*(9/5);
}

const celciusToFarenheight = (celcius) => {
    console.log(`The temperature in F is ${multiplyByNineFifths(celcius) + 32}`);
}

celciusToFarenheight(20);

// Activities

const factorial = (n) => {
    if(n === 0 || n===1){
        return 1;
    }
    else{
        return (n*factorial(n-1));
    }
}
let orderCount = 0;
const takeOrder = (topping1,topping2) => {
    console.log(`Thank you for ordering a ${topping1} and ${topping2} pizza`);
    orderCount++;
}
takeOrder("ham","peppers");
takeOrder("cheese","more cheese");
console.log(orderCount);

class newAccount {
    constructor(newPin, newBalance, newName){
        this.pin = newPin;
        this.balance = newBalance;
        this.name = newName;
    }
}
const me = new newAccount(1234, 5678, "me");
const withdrawCash = (account,pin,amount) => {
    pin = account.pin;
    if(amount < account.balance){
        console.log(`Thank you for your withdrawal, ${account.name}, your new balance is ${account.balance - amount}`)
    }
    else {
        console.log("Sorry, please enter a valid amount");
    }
}
const pinCheck = (account,pin,amount) => {
    if(pin == account.pin){
        withdrawCash(account,pin,amount);
    }
    else{
        console.log("Sorry, you can't access this account");
    }
}

pinCheck(me,1234,5000);
console.log(me.pin);