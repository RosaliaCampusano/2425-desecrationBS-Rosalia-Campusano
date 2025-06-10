import SuperHero from "./superHero.mjs";
import Villian from "./villain.mjs";

export default class TrainingGround {
  constructor(data) {
    this.data = data;
  }

  createSuperHero() {
    for (let i = 0; i < this.data.length; i++) {
      let newHero = Math.floor(Math.random() * this.data.length);
      const hp = this.setHP(this.data[newHero].strength);

      if (this.data[newHero].name === "Junkpile") {
        continue;
      }

      return new SuperHero(
        this.data[newHero].name,
        this.data[newHero].intelligence,
        this.data[newHero].strength,
        this.data[newHero].durability,
        this.data[newHero].speed,
        this.data[newHero].power,
        this.data[newHero].combat,
        hp
      );
    }
  }

  createVillian() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].name === "Junkpile") {
        const hp = this.setHP(this.data[i].strength);
        return new Villian(
          this.data[i].name,
          this.data[i].intelligence,
          this.data[i].strength,
          this.data[i].durability,
          this.data[i].speed,
          this.data[i].power,
          this.data[i].combat,
          hp
        );
      }
    }
  }

  setHP(strength) {
    let hp = strength * 10;

    if (hp > 666) {
      return (hp = 666);
    } else {
      return hp;
    }
  }
}
