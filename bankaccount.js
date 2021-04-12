const bankAccount = [
    {id: 1, saldo: 12342, pin: 2344},
    {id: 2, saldo: 1234, pin: 1111},
    {id: 3, saldo: 124, pin: 2222},
    {id: 4, saldo: 1333, pin: 3333}
]

const bankFunction = function bankFunction(pin, id) {
    for (let i = 0; i < bankAccount.length; i++) {
        if ((pin === bankAccount[i].pin) && (id === bankAccount[i].id)) {
            return console.log("uw saldo is" + bankAccount[i].saldo);
        }
        if (!(pin === bankAccount[i].pin) === (id === bankAccount[i].id)) {
            console.log("klotp niet")
        }
    }
}
bankFunction(1111, 2);
