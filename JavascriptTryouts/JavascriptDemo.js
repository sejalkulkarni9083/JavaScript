
var heroName = "Aria";
let heroLevel = 5;
const heroHealth = 100;
console.log(heroName, heroLevel, heroHealth);



let level = 10;           // Number
let spell = "Fireball";    // String
let isAlive = true;       // Boolean
let inventory = ["potion","scroll"]; // Array
let hero = { name: "Aria", class: "Mage" }; // Object


function castSpell(spellName) {
  console.log("Casting " + spellName);
}

let cast = (spellName) => console.log("Casting " + spellName);

castSpell("fireball");
cast("sejal");