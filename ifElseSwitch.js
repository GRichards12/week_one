let weather = "grey";

if(weather === "red"){
    console.log("somet's going on");
}
else if(weather === "blue"){
    console.log("sunny innit");
}
else if(weather === "grey"){
    console.log("Play the stone roses");
}
else {
    console.log("Error");
}

if(1 === "1"){
    console.log("True");
}
else{
    console.log("False");
}

if(1 != "1"){
    console.log("True");
}
else{
    console.log("False");
}

1 === 1
1 == "1"
1 !== "1"
1 != 2

let car = "volkswagen"

switch(car){
    case "volkswagen":
    case "mercedes":
    case "BMW":
    case "porsche":
        console.log("German car");
        break;
    case "ferrari":
    case "lamborghini":
        console.log("Italian car");
        break;
    default:
        console.log("Neither german nor Italian car");
        break;
}

// Activities

let country = "UK";
let age = "25";

if(country == "UK" && age >=18){
    console.log("You can be served!");
}
else{
    console.log("You aren't old enough! (or possibly not in the UK)");
}

let topping = "jalapenos";

switch(topping.toLowerCase()){
    case "jalapenos":
    case "pepperoni":
        console.log(`Best toppings, ${topping} is a good choice`);
    case "chicken":
    case "beef":
        console.log("mid");
    case "anchovies":
    case "pineapple":
        console.log("rotten");
    default:
        console.log("not sure");
}

let password = "password";
if(password.length() < 8){
    console.log("Your password is too short");
}
else{
    console.log(`${password}`);
}

let num_one = 1;
if(num_one % 3 === 0 || num_one % 5 === 0){
    console.log("Your number is divisible by 3 or 5");
}
else{
    console.log("qwerty");
}

let num_two = 1;
switch(num_two){
    case num_two % 5 === 0 && num_two % 3 === 0:
        console.log("fizzbuzz");
        break;
    case num_two % 3 === 0:
        console.log("fizz");
        break;
    case num_two % 5 === 0:
        console.log("buzz");
        break;
    default:
        break;
}

let num = ["blue"];
let numHalfway = (num.length - 1) / 2;
let numEnd = num.length - 1;
let numSecondHalf = num.slice(numHalfway,numEnd);
let numFirstHalf = num.slice(0,numHalfway);
if(numFirstHalf === numSecondHalf){
    console.log("Palindrome!");
}
else {
    console.log("Not a palindrome!");
}

let time = 0;
let placeOfWork = "work";
let placeOfHome = "home";
if (time >= 9.5 && time <= 17.5){
    console.log(`I'm at ${placeOfWork}`);
}
else if(typeof(time) == "number"){
    console.log(`I'm at ${placeOfHome}`);
}
else{
    console.log("don't know where I am");
}

let vowels = ["a","e","i","o","u"];
let gibberish = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
for(i=0;i<=gibberish.length;i++){
    console.log(gibberish.lastIndexOf(vowels));
}
