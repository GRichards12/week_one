let num = "10011001";
num = Array.from(num);
let numHalfway = (num.length) / 2;
let numEnd = num.length;
let numSecondHalf = num.slice(numHalfway,numEnd);
console.log(numSecondHalf);
let numFirstHalf = num.slice(0,numHalfway);
numFirstHalf = numFirstHalf.toString();
numSecondHalf = numSecondHalf.toString();
if(numFirstHalf == numSecondHalf){
    console.log("Palindrome!");
}
else {
    console.log("Not a palindrome!");
}