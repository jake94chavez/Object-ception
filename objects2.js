const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "poition", "Tums"],
}

//console.log(adventurer.belongings)

//console.log(adventurer.belongings[0])

//for (let i = 0; i < adventurer.belongings.length; i++) {
	//console.log(adventurer.belongings[i]);
//}

console.log(adventurer.belongings[2]);
// => Tums
adventurer.belongings.push("Vogue Magazine");

for (let i = 0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}
// => sword, potion, Tums, Vogue Magazine

// Activity 2
adventurer.companion = { name: "Velma", type: "bat"};
console.log(adventurer.companion.name);
// => Velma
adventurer.companion.name = "Susan";
console.log(adventurer.companion.name);
// => Susan
adventurer.companion2 = { name: "Flik", type: "Insect"};
console.log(adventurer.companion2.name);
// => Flik

// Activity 3
adventurer.companion.companion = {name: "Tim", type:"Parasite"}
console.log(adventurer.companion.companion.type)
// => Parasite
adventurer.companion.companion.belongings = ["SCUBA tank", "Rogan josh", "health insurance"];
console.log(adventurer.companion.companion.belongings[2])
// => health insurance











