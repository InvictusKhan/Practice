// console.log("Hello");
// let x = 5;
// let y = 5;


// //This is add function
// function add(x, y){
//     console.log(x + y)

// }
// add(5, 4);


// let name = "Fasih";
// let last = "Khan"
// console.log(name,last);

// let first = "invictus";
// let last = "Khan";

// function age(a, b){
//     trueAge = result = a - b;
//     console.log(`Hello your name is ${first, last} and your age is ${trueAge}`)

// }

// age(2026, 1994);
// // adding this comment just to test if github is working
// let x = 5;
// let y = 10;
// let addition = x + y;

// console.log (addition);

// let x;
// x = 5;
// console.log(x);
// let isLaptopGaming = false;

// // console.log(isLaptopGaming);

// if (isLaptopGaming === true) {
//     console.log(`This is a gaming laptop`);
// }
// else{
//     console.log(`This is not a gaming laptop`);
// }
// let a = 5;
// let b = 10;
// let c = 9;

// if (a > b){
//     console.log(`a is greater than b`);
// }
// else if (b > c){
//     console.log(`b is greater than c`);
// }   
// else{
//     console.log(`c is greater than a and b`);
// }

// let a = 5;
// let b = 15;
// let c = 4;

// if (a > b){
//     console.log(`a is bigger than b`);
// }
// else if (b > c ){
//     console.log(`b is Greater than c`);
// }
// else {
//     console.log(`C is greated than both a and b`);
// }


// let students = 5;
// students = students + 1;
// console.log(students);

// let students = 5;
// students = students * 6;
// console.log(students);

// let students = 5;
// students = students / 2;
// console.log(students);

// let students = 5;
// students = students % 2;
// // console.log(students);

// let students = 5;
// students = students ** 2;
// console.log(students);

// let students = 20;
// students = students % 7;
// console.log(students);

// let x = 5;
// x = String(x);
// console.log(typeof x);


// const x = 5;
// // x = 7;
// console.log(x);



// let age = 20;
// let isBorn = false;

// if (age >= 20){
//     console.log(`You are old enough to drive`);
//     if (isBorn === true){
//         console.log(`You are born`);
//     }
//     else{
//         console.log(`You are not born`);
//     }
// }
// else if (age == 19){
//     console.log(`You are exactly 19 years old`);
// }
// else{
//     console.log(`You are not old enough to drive`);
// }

// And or Not operator

// let temp = 30;

// if (temp <= 30 && temp >= 20){
//     console.log(`The weather is pleasant`);

// } 
// else{
//     console.log(`The weather is not pleasant`);
// }

// let temp = 25;

// if (temp >= 26 || temp <=24){
//     console.log(`The weather is pleasant`);

// }
// else{
//     console.log(`The weather is not pleasant`);
// }

// let isRaining = true;

// if (isRaining){
//     console.log (`Its not raining`);
// }
// else{
//     console.log(`Its raining`);
// }

// let age = 20;

// if (age !== 20){
//     console.log(`You are 20 years old`);
// }
// else{
//     console.log(`You are not 20 years old`);
// }


// let x = 20;

// while (x <= 30){
//     console.log(x);
//     x++;
// }

// if (x > 30) {
//     console.log(`x is greater than 30`);
// }

// let name = "Fasih";
// while (name !== "Fasih"){
//     console.log(name);
// }
// console.log(`Name Incorrect`);

// let x = 5;
// for (let i = 0; i < x; i++){
//     console.log(x);
//     x++;
// }

// let x = 30;

// for (let i = 0; i < 100; i++){
//     console.log(x);
//     x++;
// }
// console.log(x);
// let x = 100;

// for (i = 0; i < 201; i++){
//     console.log(x);
//     x++;
// }

// let x = 1

// for (i = 0; i <= 100; i++){
//     if(i === 69){
//         console.log(`Reached goal`)
        
//         continue
//     }
//     else{
//         x++;
//         console.log(x);
//     }
// }


// function add(i, q){
//     let answer = i + q;
//     return answer;
// }


// // function subtract(a, b){
// //     result = a - b;
// //     console.log(result);
// // }
// // subtract(50 , 25);

// // function multiply(a, b){
// //     result = a * b;
// //     console.log(result);
// // }
// // multiply(2, 2);
// let result = add(2, 2);
// console.log (result);
// // subtract(6, 2);
// // console.log(x);


// function isEven(number){
//     if (number % 2 === 0){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// isEven(11);

// let games = ["RE8", "Lies of P", "Metro Exodus"];
// // games.push();
// // console.log(games);


// console.log(count);

// let games = ["RE8", "Lies of P", "Metro Exodus", "Tomb Raider", "Thymesia"];
// let count = games.length;
// let counter = 0;
// for(i = 0; i<count; i++){
//     console.log(games[counter]);
//     counter++;
    
// }

// let games = ("RE8", "Lies of P", "Metro Exodus", "Tomb Raider", "Thymesia");
// let way = [...games];
// console.log(way);

let games = ["RE8", "Lies of P", "Metro Exodus", "Tomb Raider", "Thymesia"];
let oldGames = ["Sekiro", "Uncharted", "Devil may cry"];
let allGames = [...games, ...oldGames];
console.log(allGames);