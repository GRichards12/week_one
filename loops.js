favouriteDrinks = ["water","apple juice","coke-zero"]

for(let i = 0; i < 3; i++){
    console.log(favouriteDrinks[i])
}

let multiplesOfTwo = []
for(i = 0; i<21;i++){
    if(i%2==0){
        multiplesOfTwo.push(i);
    }
}
console.log(`The multiples of 2 up to 20 are ${multiplesOfTwo}.`);

let age = 15
while(age < 18){
    console.log("You're a child!");
    age++;
}
console.log("You're an adult!");

// Activities completed in arrays.js