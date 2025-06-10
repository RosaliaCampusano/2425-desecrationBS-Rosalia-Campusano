export default class Character {
    constructor(name, intelligence, strength, durability, speed, power, combat, hp) {
        this.name = name;
        this.intelligence = intelligence;
        this.strength = strength;
        this.durability = durability;
        this.speed = speed;
        this.power = power;
        this.combat = combat
        this.hp = hp;
    }

    attack() {}

    setDamage() {}
}