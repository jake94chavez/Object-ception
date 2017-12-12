const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "poition", "Tums"]
}

//console.log(adventurer.belongings)

//console.log(adventurer.belongings[0])

//for (let i = 0; i < adventurer.belongings.length; i++) {
	//console.log(adventurer.belongings[i]);
//}

console.log(adventurer.belongings[2]);

adventurer.belongings.push("Vogue Magazine");

for (let i = 0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}