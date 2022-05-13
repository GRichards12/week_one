const cafe = {
    name:"whitesheep",
    seatingCapacity:100,
    hasSpecialOffers:true,
    drinks: ["cappuccino", "americano","tea","water"],
    breakfastOffer: "offer for breakfast",
    lunchOffer:"offer for lunch",
    noOffer:"sorry, no offer",
    openCafe(){return "come on in!";if(this.hasSpecialOffers){return "time for some offers"}},
    closeCafe(){return "sorry we're closed"}

}
let time = 1425;
if(time<1100){
    offer = cafe.breakfastOffer;
}
else if(time>=1200 && time<=1400){
    offer = cafe.lunchOffer;
}
else{
    offer = cafe.noOffer;
}

console.log(offer);

const person = {
    name:"gwyl",
    age:25,
    favouriteSongs:["sister ray","dead flag blues","she's lost control","runaway"],
    sayHi(){
        console.log(`Hello! My name ${this.name}`);
    }
}
console.log(person.favouriteSongs);
console.log(person.name);
console.log(person["age"]);

const alarms = {
    weekendAlarm:"no alarm needed",
    weekdayAlarm:"get up at 7AM"
}
let day = "thursday";
let alarm = "";
if(day == "saturday"||day == "sunday"){
    alarm = alarms.weekendAlarm;
}
else{
    alarm = alarms.weekdayAlarm;
}

console.log(cafe.openCafe());

// Activites

person.sayHi();

const pet = {
    name:"lucy",
    age:10,
    typeOfPet:"cat",
    colour:"black&white",
    eat(){return `${this.name} is eating.`;},
    drink(){return `${this.name} is drinking`;}
}
let order = [];
const coffeeShop = {
    branch:"manchester",
    drinksWithPrices:{"tea":1.00,"americano":2.00,"mocha":3.00,"latte":3.00,water:0},
    foodWithPrices:{"salad":2.00,"sandwich":3.00,"tunaJacket":4.50,"grape":15.00},
    drinksOrdered(drink1,drink2){
        let drinks = Object.keys(this.drinksWithPrices); 
        let drinkValues = Object.values(this.drinksWithPrices); 
        order.push(drinkValues[drinks.indexOf(drink1)]);
        order.push(drinkValues[drinks.indexOf(drink2)]);
        return `For drinks you've ordered ${drink1} and ${drink2}`;},
    foodOrdered(food1,food2){
        let foods = Object.keys(this.foodWithPrices); 
        let foodValues = Object.values(this.foodWithPrices); 
        order.push(foodValues[foods.indexOf(food1)]);
        order.push(foodValues[foods.indexOf(food2)]);
        return `For food you've ordered ${food1} and ${food2}`;
    }
}
console.log(coffeeShop.drinksOrdered("tea","mocha"));
console.log(coffeeShop.foodOrdered("salad","grape"));
let total = 0;
for(i=0;i<order.length;i++){
    total+=order[i];
}

console.log(`Your total comes to £${total}.`);



