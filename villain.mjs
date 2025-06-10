import Character from "./character.mjs";

export default class Villian extends Character {
  constructor(name, int, str, dur, spe, pow, com, hp) {
    super(name, int, str, dur, spe, pow, com, hp);
    this.criticalDamage = 0;
    this.normalDamage = 0;
  }

  attack(die, isFinish) {
    die.createD20();
    const result = die.roll(1);

    console.log(`${this.name} obtiene un ${result} y ataca con exito`);
    const damage = this.setDamage(result, die);
    return damage, isFinish;
  }

  setDamage(result, die) {
    this.normalDamage = Math.ceil(
      ((this.power + this.strength) * result) / 100
    );
    if (result <= 17) {
      console.log(
        `${this.name} obtiene un ${result} y ejerce un daño de ${this.normalDamage}`
      );
      return this.normalDamage;
    } else if (result > 18 || result === 20) {
      return this.setCriticalDamage(result, this.normalDamage, die);
    }
  }

  setCriticalDamage(result, normalDamage, die) {
    die.createD3();
    if (result === 18) {
      this.criticalDamage = Math.ceil(
        ((this.intelligence * this.durability) / 100) * die.roll(2)
      );
    } else if (result === 19) {
      this.criticalDamage = Math.ceil(
        ((this.intelligence * this.durability) / 100) * die.roll(3)
      );
    } else {
      die.createD5();
      this.criticalDamage = Math.ceil(
        ((this.intelligence * this.durability) / 100) * die.roll(4)
      );
    }

    const totalCritialDamage = normalDamage + this.criticalDamage;

    return totalCritialDamage;
  }
}
