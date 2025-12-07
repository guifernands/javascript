function BankAccount(holder, balance) {
    this.holder = holder;
    this.balance = balance;
}

BankAccount.prototype.deposit = function(value) {
    if (value > 0) {
        this.balance += value;
        console.log(`${this.holder}: Balance updated successfuly. Your balance now is: $${this.balance}.`);
    }
    else {
        console.log('[ERRO] Invalid value.');
    }
}
BankAccount.prototype.draw = function(value) {
    if (value > 0 && this.balance >= value) {
        this.balance -= value;
        console.log(`${this.holder}: Draw successful. Your balance now is $${this.balance}.`);
    }
    else {
        console.log('[ERRO] Invalid value.');
    }
}

const gui = new BankAccount('Gui', 100);
gui.draw(150);
gui.deposit(50);
gui.draw(150);