class hero{
    constructor(nome, idade, tipo, attack){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.attack = attack
    }

    actionAttack(){
        console.log(`O ${this.tipo} atacou usando ${this.attack}`)
    }
}

let character = new hero("Ben", 17, "Guerreiro", "Espada")

character.actionAttack()