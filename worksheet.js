"use strict";

let dayOfWeek = 'Monday';
console.log(dayOfWeek);
dayOfWeek = 'Friday';
console.log(`I can't wait for ${dayOfWeek}`);

let animalInput = prompt('What is your favorite animal?')
let colorInput = prompt('What is your favorite color?')
console.log(`I've never seen a ${colorInput}${animalInput}`)

// honey bunches of oats
// burgers
// shrimp scampi

let timeOfDay = 'sinaloa';
let typeOfMeal;

if(timeOfDay<1200){
    typeOfMeal= 'honey bunches of oats';
}
else if(timeOfDay>1200 && timeOfDay<1700){
    typeOfMeal= 'burgers';
}
else if(timeOfDay>1700){
    typeOfMeal= 'shrimp scampi';
}
else{
    typeOfMeal= 'invalid time';
}

console.log(typeOfMeal);

let randInt;
randInt = Math.floor(Math.random() * 11);

if(randInt > -1 && randInt < 3){
    console.log("Beatles");
}
else if(randInt > 2 && randInt < 6){
    console.log('Stones');
}
else if(randInt > 5 && randInt < 9){
    console.log('Floyd');
}
else if(randInt > 8 && randInt < 11){
    console.log('Hendrix');
}

for(let i=0; i < 7; i++){
    console.log("JavaScript is cool");
}

for(let i=0; i < 11; i++){
    
    let number = i;
    console.log(number);
}

for(let i=0; i < 11; i++){
    let number = i;
    if(number % 2 == 0){
        console.log('hello');
    }
    else{
        console.log('goodbye');
    }
}

function printMovieName(){
    let favoriteMovie = 'Spider-Man 2';
    console.log(favoriteMovie);
}

printMovieName()

function chooseFavoriteBand(){
    let favoriteBand = prompt('What is your favorite band?');
    return favoriteBand;
}

let bandResult = chooseFavoriteBand();
console.log(bandResult);

function concertDisplay(musicalAct){
    let myStreet = prompt('What street do you live on');
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}`);
}

concertDisplay('Hans Zimmer');

let desktopItems = ['desk', 'lamp', 'chair'];
console.log(desktopItems[1]);

desktopItems.push('Infinity Gauntlet');

for(let item of desktopItems){
    console.log(item);
}

let magicNumber = Math.floor(Math.random() * 101);
let guess = 0;

while(guess != magicNumber){
    guess = prompt('What is the Magic Number?');
    if(guess < magicNumber){
        console.log('Too Low!');
    }
    else if(guess > magicNumber){
        console.log('Too High!');
    }
    if(guess == magicNumber){
        console.log(`Congrats the magic number is ${magicNumber}`);
    }
    else if(guess - magicNumber >= -10 && guess - magicNumber <= 10){
        console.log('Getting Warmer');
    }
    
}