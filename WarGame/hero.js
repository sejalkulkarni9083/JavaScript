// Mana → Your energy
// Spell cost → How much energy the spell takes
// Cast a spell → Using that energy to do magic


var heroName = "Aria";       
let heroLevel = 5;            
const heroHealthMax = 100;    
console.log(heroName, heroLevel, heroHealthMax);



// Create a variable mana using let and reduce its value inside a loop.
// Create a const for MAX_HEALTH and try to change it. Observe the error.


let mana = 100;

for (let i = 1; i <= 5; i++) {
    mana = mana - 10;
    console.log("After spell " + i + ", mana =", mana);
}



let level = 10;                      
let spell = "Fireball";              
let isAlive = true;                  
let inventoryItems = ["potion", "scroll"]; 
let hero = { name: "Aria", class: "Mage" }; 

console.log(level, typeof level);
console.log(spell, typeof spell);
console.log(isAlive, typeof isAlive);
console.log(inventoryItems, typeof inventoryItems);
console.log(hero, typeof hero);



let attack1 = 12;
let attack2 = 18;
let attack3 = 10;

let totalDamage = attack1 + attack2 + attack3;
console.log("Total damage:", totalDamage);

mana = 30;
let spellCost = 20;
isAlive = true;

let canCastSpell = mana >= spellCost && isAlive;
console.log("Can cast spell:", canCastSpell);


heroLevel = 10;
let enemyLevel = 12;
console.log(heroLevel > enemyLevel);   
console.log(heroLevel < enemyLevel);   
console.log(heroLevel === enemyLevel); 
console.log(heroLevel !== enemyLevel); 



function castSpell(spellName) {
  console.log("Casting " + spellName);
}

let cast = (spellName) => console.log("Casting " + spellName);

castSpell("fireball");
cast("sejal");


// 1. Write an if-else to check hero health and log "Alive" or "Defeated".
// 2. Use a for loop to simulate 5 rounds of attack.
// 3. Try a while loop that continues until mana is 0.


let heroHealth = 50;  

if (heroHealth > 0) {
  console.log("Alive");
} else {
  console.log("Defeated");
}

let attackDamage = 10;

for (let round = 1; round <= 5; round++) {
  heroHealth -= attackDamage;  
  console.log("Round " + round + ", Hero health: " + heroHealth);

  if (heroHealth <= 0) {
    console.log("Hero is defeated!");
    break; 
  }
}

mana = 30;
spellCost = 5;

while (mana > 0) {
  console.log("Casting a spell! Mana left:", mana);
  mana -= spellCost;  
}
console.log("Out of mana!");



// 1. Create an object weapon with name, damage, type.
// 2. Create an array inventory and push 3 items.
// 3. Loop through the array and log each item.

let weapon = { name:"sword", damage: 50 , type:"melee"};
let inventory = ["potion", "scroll", "ring"];

for(let item of inventory){
  console.log(item);
}
