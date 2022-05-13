class newAccount {
    constructor(newPin, newBalance, newName){
        this.pin = newPin;
        this.balance = newBalance;
        this.name = newName;
    }

    checkPin = (pin) => {
        if(pin !== this.pin){
            console.log("Sorry, you can't access this account");
            return false;
        }
        else{
            return true;
        }
    }
    
    withdrawCash = (account, amount) => {
        if(amount < this.balance){
            console.log(`Thank you for your withdrawal, ${this.name}, your new balance is ${this.balance - amount}`)
        }
        else {
            console.log("Sorry, please enter a valid amount");
        }
    }
}


const objNewAccount = new newAccount(1234, 5678, "me");

if (objNewAccount.checkPin(1234)) {
    objNewAccount.withdrawCash("me",5000)
};