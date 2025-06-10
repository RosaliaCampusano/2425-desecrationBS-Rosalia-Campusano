export default class Combat {
  constructor(superHero, villian, die) {
    this.superHero = superHero;
    this.villian = villian;
    this.die = die;
    this.isCombatOver = false;
    this.deadCharacter = null;
    this.isFinish = false;
    this.attacker = null;
  }

  execute() {
    this.setAttacker();
    this.startBattle();
    this.startCombat();
  }

  setAttacker() {
    const totalSuperHeroIntAndCom =
      this.superHero.intelligence + this.superHero.combat;
    const totalVillianIntAndCom =
      this.villian.intelligence + this.villian.combat;

    if (totalSuperHeroIntAndCom > totalVillianIntAndCom) {
      return (this.attacker = this.superHero);
    } else {
      return (this.attacker = this.villian);
    }
  }

  startCombat() {
    for (let i = 0; i < 100; i++) {
      console.log("Comienza el asalto " + (i + 1));
      console.log("----------------------");
      this.executeTurn();
      if (this.isCombatOver) {
        console.log("-------------------------");
        console.log("-------------------------");
        console.log(`${this.deadCharacter.name} ha sido derrotado`);
        return;
      }
    }
  }

  executeTurn() {
    let damage = this.attacker.attack(this.die, this.isFinish);

    if (this.attacker !== this.villian) {
      this.villian.hp -= damage;
    } else {
      this.superHero.hp -= damage;
    }

    if (this.villian.hp <= 0) {
      this.isCombatOver = true;
      this.deadCharacter = this.villian;
    } else if (this.superHero.hp <= 0) {
      this.isCombatOver = true;
      this.deadCharacter = this.superHero;
    }

    this.changeAttacker();
    this.showAttributes(this.superHero);
    this.showAttributes(this.villian);
  }

  changeAttacker() {
    this.isFinish = false;
    if (this.attacker === this.superHero) {
      return (this.attacker = this.villian);
    } else {
      return (this.attacker = this.superHero);
    }
  }

  startBattle(attacker) {
    console.log("WELCOME TO THE COMBAT ARENA!!");
    console.log("-----------------------------");
    console.log(`Hoy combatiran ${this.superHero.name} y ${this.villian.name}`);
    console.log("----------------------------------------");
    console.log("Listado de atributos");
    console.log("---------------------");
    this.showAttributes(this.superHero);
    this.showAttributes(this.villian);
    console.log(`El primer asalto es para ${this.attacker.name}`);
    console.log("------------------------");
  }

  showAttributes(character) {
    console.log("{ ");
    console.log(` name: '${character.name}'`);
    console.log(` intelligence: ${character.intelligence},`);
    console.log(` strength: ${character.strength},`);
    console.log(` durability: ${character.durability},`);
    console.log(` speed: ${character.speed},`);
    console.log(` power: ${character.power},`);
    console.log(` combat: ${character.combat},`);
    console.log(` HP: ${character.hp}`);
    console.log("}");
  }
}
