// This is my age
const myAge = 22;

// The earlyYears of my dog life
let earlyYears = 2;
earlyYears *= 10.5;

// The laterYears of my dog life
let laterYears;
laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// My dog age
let myAgeInDogYears;
myAgeInDogYears = earlyYears + laterYears;

// My name in lowercase
let myName = 'Nana'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)