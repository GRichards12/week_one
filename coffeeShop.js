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
