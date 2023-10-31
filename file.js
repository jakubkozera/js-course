// zadanie:
// utwórz bardzo prosty obiekt reprezentujący bankowat, który będzie w stanie
// 1. Wyświetlić saldo bankomatu
// 2. Złożyć depozyt (zwiększyć saldo)
// 3. Wybrać gotówkę (zmniejszyć saldo)


const cashMachine = {
    balance: 1000,
    displayBalance: function() {
        console.log("Current balance: " + this.balance)
    },
    deposit: function(amount) {
        this.balance += amount
    },
    withdraw: function(amount) {
        this.balance -= amount
        return amount
    }
}

cashMachine.displayBalance()
cashMachine.deposit(50)
cashMachine.displayBalance()

cashMachine.withdraw(600)
cashMachine.displayBalance()



