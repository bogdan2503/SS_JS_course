// +++++++++++++++++++++++++ task 1 +++++++++++++++++++++++++

// let x = 1;
// let y = 2;

// let res1 = String(x)+String(y);
// console.log (res1);
// console.log (typeof res1);

// let res2 = Boolean(x)+String(y);
// console.log (res2);
// console.log (typeof res2)

// let res3= y>x;
// console.log (res3);
// console.log (typeof res3)

// let res4 = parseInt (x>y);
// console.log (res4)
// console.log (typeof res4);

// +++++++++++++++++++++++++ task 2 +++++++++++++++++++++++++

// let k = prompt ("enter number");
// if (k%2===0 && k>0){
//     console.log ("ваше число парне і додатне")  
// }  else {
//     console.log ("ваше число не парне або не додатне")
// } 

// let l = prompt ("enter number");
// if (l%7===0){
//     console.log ("ваше число кратне 7")
// }

// +++++++++++++++++++++++++ task 3 +++++++++++++++++++++++++

// const arr = [];
// arr.push (1);
// arr.push ("string")
// arr.push (true)
// arr.push (null);
// alert (arr.length);
// arr [4] = prompt ("How old are you?");
// console.log (arr [4]);
// arr.splice (0,0);
// alert (arr);

// +++++++++++++++++++++++++ task 4 +++++++++++++++++++++++++

// let cities = ["Rome", "Lviv", "Warsaw"];
// let glue = cities.join ('*');
// console.log (glue);

// +++++++++++++++++++++++++ task 5 +++++++++++++++++++++++++

// let isAdult = prompt ("Скільки Вам років?");
// if (isAdult >= 18) {
// alert ("Ви повнолітній")    
// } else {
//  alert ("Ви неповнолітній")
// }

// let isAdult = prompt ("Скільки Вам років?");
// console.log (typeof isAdult);
// let num = Number (isAdult);
// console.log (typeof num);
// switch (num) {
//     case num > 18: 
//            console.log ("Ви повнолітній");
//         break;
//     case num < 18:
//             console.log ("Ви неповнолітній");
//          break;
//     default:
//         console.log ("Ви мутант");
// }

// мені не вдалося зробити цю задачу через switch case

// +++++++++++++++++++++++++ task 6 +++++++++++++++++++++++++

// let x = Number (prompt ("сторона x"));
// let y = Number (prompt ("сторона y"));
// let z = Number (prompt ("сторона z"));

// if (x > 0 && y > 0 && z > 0) {
//    let areaTriangle = Math.sqrt(((x + y + z)/2)*(((x + y + z)/2)-x)*(((x + y + z)/2)-y)*(((x + y + z)/2)-z))
//         console.log (areaTriangle.toFixed(3))
// } else {
//         console.log ("Incorrect data")
//     }

// if (Math.pow (x, 2) + Math.pow (y, 2) === Math.pow (z, 2) ||
//     Math.pow (z, 2) + Math.pow (y, 2) === Math.pow (x, 2) ||
//     Math.pow (z, 2) + Math.pow (x, 2) === Math.pow (y, 2)
// ) {
//          console.log ("Трикутник прямокутний")
// } else {
//          console.log ("Трикутник не прямокутний")
// }


// +++++++++++++++++++++++++ task 7 +++++++++++++++++++++++++

//  way 1

// let hours = new Date().getHours()
// console.log (hours)
// if (hours >= 5 && hours < 11) {
//     console.log ("Доброго ранку");
// } else if (hours >= 11 && hours < 17) {
//     console.log ("Доброго дня");
// } else if (hours >= 17 && hours <= 23) {
//     console.log ("Доброго вечора");
// } else {
//     console.log ("Доброї ночі");
// }

// way 2

let hours = new Date().getHours()
switch (true) {
    case hours >= 5 && hours < 11:
        console.log ("Доброго ранку");
        break;
    case hours >= 11 && hours < 17:
        console.log ("Доброго дня");
        break;
     case hours >= 17 && hours <= 23:
        console.log ("Доброго вечора");
        break;
    default: console.log ("Доброї ночі");
        break;
}