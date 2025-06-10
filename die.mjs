export default class Die {
  constructor() {
    this.values = [];
  }

  createD3() {
    this.values = [1, 2, 3];
  }

  createD5() {
    this.values = [1, 2, 3, 4, 5];
  }

  createD20() {
    for (let i = 0; i < 20; i++) {
      this.values.push(i + 1);
    }
  }

  createD100() {
    for (let i = 1; i < 100; i++) {
      this.values.push(i + 1);
    }
  }

  roll(die) {
    let roll = Math.floor(Math.random() * this.values.length) + die;
    this.values = [];
    return roll;
  }
}
