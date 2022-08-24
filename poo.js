class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    saldo = 0;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        };
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }

        this.saldo += valor;
    }
};


const cliente1 = new Cliente();
cliente1.Nome = "Ricardo";
cliente1.CPF = 11122233309;

const cliente2 = new Cliente();
cliente2.Nome = "Alice";
cliente2.CPF = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
// contaCorrenteRicardo.qualquerCoisa = 10000;
// contaCorrenteRicardo.saldo = 10000;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRicardo);