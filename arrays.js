let coffeeOrder = ["a - coffee", "b - tea", "c - coffee", "d - water"];
console.log(coffeeOrder);
console.log(coffeeOrder[2]);
coffeeOrder[1] = "e - orange juice";
console.log(coffeeOrder);
console.log(coffeeOrder.length);
coffeeOrder.push("f - espresso");
coffeeOrder.pop();

// Activities

favouriteFilms = ["8 1/2","The Producers", "The Death of Stalin", "American Psycho", "Submarine"];
favouriteFilms.push("The Room");
favouriteFilms.push("Jack & Jill")
for(let i = 0; i < favouriteFilms.length; i++){
    console.log(favouriteFilms[i]);
}

for(i=0;i<6;i++){
    console.log(Math.round(Math.random()*50));
}

for(i=9;i>=0;i--){
    console.log(i);
}

if(favouriteFilms[2].toLowerCase() == "ghostbusters"){
    console.log("It's ghostbusters - that's terrific")
}
else{
    console.log("It's not ghosbusters - what a conundrum.")
}

let randNumber = [];
for (i = 0; i < 7; i++){
    x = Math.round(Math.random()*30);
    if (x % 7 == 0){
        randNumber.push(x);
    }
}
console.log(`${randNumber} are divisible by 7`);

let bobsFollowers = ["a","b","c","d"];
let hannahsFollowers = ["d","c","f","g"];
for(i=0;i<bobsFollowers.length;i++){
    for(let j=0;j<hannahsFollowers.length;j++){
        if(bobsFollowers[i] == hannahsFollowers[j]){
            console.log(`${bobsFollowers[i]} likes hannah and bob`);
            continue;
        }
    }
}

i=0
j=0
do{
    i++
    j++
    console.log(`${i} ${j}`)
}
while(j<5 && i<5);

// do...while would be used to execute code before a certain condition is met, this would be well used as a limit on server requests for a website, e.g. only load the page while the server is under its maximum capacity.