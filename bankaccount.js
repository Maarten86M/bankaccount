const bankAccount = [
    {id: 1, saldo: 12342, pin: 2344, name: "Henk"},
    {id: 2, saldo: 1234, pin: 1111, name: "Jan"},
    {id: 3, saldo: 124, pin: 2222, name: "Piet"},
    {id: 4, saldo: 1333, pin: 3333, name: "Johan"}
]

// Saldo opvragen.

const bankFunction = function (pin, id) {
    for (let i = 0; i < bankAccount.length; i++) {
        if ((pin === bankAccount[i].pin) && (id === bankAccount[i].id)) {
            return console.log("Beste " + bankAccount[i].name + ", uw saldo is $ " + bankAccount[i].saldo + ",-");
        }
        if (!(pin === bankAccount[i].pin) === (id === bankAccount[i].id)) {
            console.log("Probeer het nogmaals")
        }
    }
}
// bankFunction(3333, 4);

// geld storten.

const stortFunction = function (pin, id, moneyStort) {
    for (let i = 0; i < bankAccount.length; i++) {
        if ((pin === bankAccount[i].pin) && (id === bankAccount[i].id)) {
            const newSaldo = moneyStort + bankAccount[i].saldo;
            return console.log("Beste " + bankAccount[i].name + ", uw wilt $ " + moneyStort + ",- op de bank zetten. Uw nieuwe saldo is $ " + newSaldo + ",-");
        }
        if (!(pin === bankAccount[i].pin) === (id === bankAccount[i].id)) {
            console.log("Probeer het nogmaals")
        }
    }
}
stortFunction(3333, 4, 10000)

// geld opnemen

const opneemFunction = function (pin, id, moneyOpneem) {
    for (let i = 0; i < bankAccount.length; i++) {
        if ((pin === bankAccount[i].pin) && (id === bankAccount[i].id)) {
            const newSaldoOpneem = bankAccount[i].saldo - moneyOpneem;
            return console.log("Beste " + bankAccount[i].name + ", uw wilt $ " + moneyOpneem + ",- opnemen. Uw nieuwe saldo is $ " + newSaldoOpneem + ",-");
        }
        if (!(pin === bankAccount[i].pin) === (id === bankAccount[i].id)) {
            console.log("Probeer het nogmaals")
    }
}}
opneemFunction(2222,3,100)