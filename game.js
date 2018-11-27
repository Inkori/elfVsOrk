let dmg = Math.floor(Math.random() * 10);
let bow =  dmg;
let axe = dmg;
let health = 50;
let registr = {

}
let id = 0;
class Stats  {
	constructor (health) {
		this.health = health;
		this.id = id++;
		registr[this.id] = this;	
	}

	render() {
		return `
			<div class="hpElf">${this.health}</div>
			<div class="hpOrk">${this.health}</div>
			<button class="btnElf">Attack</button>
			<button class="btnOrk">Attack</button>
		`
	}
	attack(health, weapon) {

		let btn = document.querySelector(".btnElf")
		btn.addEventListener("click",  () => { 
			if(this.state.health >= 1) {
				this.state.health -= this.state.weapon
			} else {
				this.state.health = this.health
				alert("Winer!")
			}
		})
		
	}
}



class Elf extends Stats {
	constructor(bow) {
		super()
		this.weapon = bow;
	}
}
class Ork extends Stats {
	constructor(axe) {
		super()
		this.weapon = axe;
	}
}

class Game {
	constructor (firstRace, secondRace) {
		this.rirstRace = firstRace
		this.secondRace = secondRace
		
	}
	
}
const elf = new Elf(bow)
const ork = new Ork(axe)
const characters = new Stats(health)
const newGame = new Game(elf, ork)
document.querySelector("body").innerHTML = characters.render();
