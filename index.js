class hero{
	constructor(name, age, tipe, golpe){
    	this.name = name 
        this.age = age
        this.tipe = tipe
        this.golpe = golpe 
    }

	ataque(){
    	console.log("O " + this.tipe, "atacou usando a " + this.golpe)
    }
	
    }

let mago = new hero("Fernando", "30", "mago","magia")
let guerreiro = new hero("Rafael", "34", "guerreiro","espada")
let monge = new hero("Pedro", "30","monge","artes marciais")
let ninja = new hero("Beatriz", 30, "ninja","shuriken")

mago.ataque()
guerreiro.ataque()
monge.ataque()
ninja.ataque()