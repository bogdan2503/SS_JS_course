////////////////////////// task 1 //////////////////////////

// function task1 (str) {
//     let reg = /^[A-Z]/
//         if (reg.test (str)) {
//             console.log ("str 1 -String's starts with uppercase character")
//             } else {
//             console.log ("str 1 -String's not starts with uppercase character")
//             }
// }
// task1 ("regexp")
// task1 ("RegExp")

////////////////////////// task 2 //////////////////////////

// function task2 (str) {
//     let reg = /\S+@\S+\.\S+/
//     console.log (reg.test(str))
// }
// task2 ("Qmail2@gmail.com")

////////////////////////// task 3 //////////////////////////

// let reg = /d(b+)(d)/i
// console.log (reg.exec("cdbBdbsbz"))

////////////////////////// task 4 //////////////////////////

// let reg = /(\w+)\s(\w+)/
// let str = "Java Script"
// console.log (str.replace(reg, "$2, $1"))

////////////////////////// task 5 //////////////////////////

// function task5 (card) {
//     let reg = /^\d{4}-\d{4}-\d{4}-\d{4}-$/
//     let x = reg.test (card)
//     if (x) {
//         console.log ("ok")
//     } else {
//         console.log ("not ok")
//     }
// }

// task5 (9999-9999-9999-99998)
// task5 (99998-9999-9999-9999)
// task5 (9999-99998-9999-9999)
// task5 (9999-9999-99998-9999)
// task5 (9999-9999-9999-9999)

////////////////////////// task 6 //////////////////////////

// function checkEmail (str) {
//     let reg = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
//         if (reg.test(str)) {
//             console.log ("Email is correct")
//         } else {
//             console.log ("Email is not correct")
//         }
// }
// checkEmail ('my_mail@gmail.com')
// checkEmail ('#my_mail@gmail.com')
// checkEmail ('my_ma--il@gmail.com')

////////////////////////// task 7 //////////////////////////

// function checkLogin (str) {
//     let reg = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/
//     let reg1 = /0-9\.]+/g
//     let res = reg.test (str)
//     let res1 = str.match(reg1)

//     console.log ("${str} is ${res}-${res1}")

// }

// checkLogin ('ee1.1ret3')

// checkLogin ('ee1*1ret3')
