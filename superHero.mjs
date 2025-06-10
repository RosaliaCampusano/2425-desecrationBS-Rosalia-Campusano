import Character from "./character.mjs";
export default class SuperHero extends Character {
  constructor(name, int, str, dur, spe, pow, com, hp) {
    super(name, int, str, dur, spe, pow, com, hp);
    this.fumble = 0;
    this.normalDamage = 0;
    this.criticalDamage = 0;
  }

  attack(die, isFinish) {
    die.createD100();
    const result = die.roll(1);
    if (result <= this.combat) {
      console.log(`${this.name} obtiene un ${result} y ataca con exito`);
      die.createD20();
      const damage = this.setDamage(result, die);
      return damage;
    } else {
      console.log(`${this.name} obtiene un ${result} y ha fallado`);
      return isFinish;
    }
  }

  setDamage(result, die) {
    this.normalDamage = Math.ceil(
      ((this.power + this.strength) * result) / 100
    );
    if (result <= 2) {
      return this.setFumbleAttack(result, die);
    } else if (result > 3 || result <= 17) {
      return this.normalDamage;
    } else if (result >= 18) {
      return this.setCriticalDamage(result, this.normalDamage, die);
    }
  }

  setCriticalDamage(result, die) {
    die.createD3();
    if (result === 18) {
      this.criticalDamage = Math.ceil(
        ((this.intelligence * this.dur) / 100) * die.roll(1)
      );
    } else if (result === 19) {
      this.criticalDamage = Math.ceil(
        ((this.intelligence * this.durability) / 100) * die.roll(2)
      );
    } else {
      die.createD5();
      this.criticalDamage = Math.ceil(
        ((this.intelligence * this.durability) / 100) * die.roll(3)
      );
    }
    const totalCritialDamage = this.normalDamage + this.criticalDamage;

    console.log(
      `CRITICAL HIT!! ${this.name} obtiene un ${result} y ejerce un daño de ${totalCritialDamage}`
    );
    return totalCritialDamage;
  }

  setFumbleAttack(result, die) {
    die.createD3();
    if (result === 1) {
      this.fumble = this.speed / die.roll(1);
      console.log(
        `FAIL!! ${this.name} obtiene un ${result} y se clava el arma el arma en su pierna izda. Recibe un daño de ${this.fumble}`
      );
      return (this.hp -= this.fumble);
    } else {
      this.fumble = this.speed / die.roll(4);
      console.log(
        `FAIL!! ${this.name} obtiene un ${result} y se clava el arma en su pierna izda. Recibe un daño de ${this.fumble}`
      );
      return (this.hp -= this.fumble);
    }
  }
}
