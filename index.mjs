import TrainingGround from "./trainingGround.mjs";
import Combat from "./combat.mjs";
import Die from "./die.mjs";

const url =
  "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
const response = await fetch(url);
const data = await response.json();

function createDataCharacters() {
  let dataCharacter;
  let arrayData = [];
  for (let i = 0; i < data.length; i++) {
    arrayData.push(
      (dataCharacter = {
        name: data[i].name,
        intelligence: data[i].powerstats.intelligence,
        strength: data[i].powerstats.strength,
        durability: data[i].powerstats.durability,
        speed: data[i].powerstats.speed,
        power: data[i].powerstats.power,
        combat: data[i].powerstats.combat,
      })
    );
  }
  return arrayData;
}

const die = new Die();
const dataCharacter = createDataCharacters();
const trainingGround = new TrainingGround(dataCharacter);
const superHero = trainingGround.createSuperHero();
const villian = trainingGround.createVillian();
const combat = new Combat(superHero, villian, die);
combat.execute();
