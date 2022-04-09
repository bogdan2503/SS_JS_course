// ++++++++++++++++++++ task 1 ++++++++++++++++++++

// way - loop for

// let arr = [2, 3, 4, 5];
// let sum = 1
// for (let i = 0; i < arr.length; i++) {
//    sum = sum * arr [i] 
// }
// console.log (sum)

// way - loop while 

// let arr = [2, 3, 4, 5];
// let i = 0
// let sum = 1
// while (i <arr.length) {
//         sum = sum * arr [i]
//         i++
//       }
// console.log (sum)

// let arr = [2, 3, 4, 5];
// let i = 0
// let sum = 1
// do {
//     sum = sum * arr [i] 
//     ++i
// } while (i <arr.length);
// console.log (sum)

// ++++++++++++++++++++ task 2 ++++++++++++++++++++

// for (let i = 0; i<=15; i++) {
//     if (i % 2 == 0) {
//         console.log (i + " " + "is even") 
//         } else {
//         console.log (i + " " + "is odd")
//     }
// }

// ++++++++++++++++++++ task 3 ++++++++++++++++++++

// function randArray (x) {
    
//     let k = []

//     function getRandomIntInclusive(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
           
//     let i = 0
//         do {
//         k.push (getRandomIntInclusive(1, 500))
//         i++
//     } while (i < x);

//     return k
// }
// randArray (5)

// ++++++++++++++++++++ task 4 ++++++++++++++++++++

// function raiseToDegree(x, y) {
//     if (Number.isInteger (x) && Number.isInteger (y)) {
//         alert (Math.pow(x, y))
//     } else {
//         alert ("Число не ціле. Введіть ціле число")
//     }
// }
// raiseToDegree(Number (prompt ("Введіть числа яке бажаєте піднести до степені")) , Number (prompt ("Введіть число до якої степені піднести")))

// ++++++++++++++++++++ task 5 ++++++++++++++++++++

// function findMin () {
//     let arr = Array.from(arguments);
//     let x = Math.min(...arr);
//     console.log(arr)
//     return x
// }
// findMin (12, 14, 4, -4, 0.2)

// ++++++++++++++++++++ task 6 ++++++++++++++++++++

// function findUnique (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let t = (0+i); t < arr.length; t++) {
//             if(arr[i]===arr[t]){
//                 return false;
//             }
//         };
//     }
//     return true;
// }
// console.log (findUnique([1, 2, 3, 5, 3]))

// ++++++++++++++++++++ task 7 ++++++++++++++++++++

// function lastElem (arr, x) {
//     if (!isNaN(x)) {
//        return arr.slice(-x)
//     } else {
//         return  arr[arr.length - 1]
//     }
// }
// console.log (lastElem ([1, 2, 3, 4, 5, 6, 7], 3))

// ++++++++++++++++++++ task 8 ++++++++++++++++++++


// function uper (insertString) {
//     let string = insertString;
//     let arr = string.split (" ")
//     for(var i=0; i<arr.length; i++) {
//         arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1,arr[i].length) 
//       }
//      console.log (arr.join(' '))
// }

// uper ("i love java script")