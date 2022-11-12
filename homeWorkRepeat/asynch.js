// function caclTax (tax1, tax2) {
//     const totalTax = (tax1+tax2) * 0.85;
//     setTimeout (function(){
//         console.log (totalTax)
//     }, 2000)
// }
// console.log ("start")
// caclTax (1,1)
// console.log ('end')
///////////////////////////////////////////

// console.log ('request to server...')
// setTimeout (function fetchData () {
//     console.log ('Loading...');
//         const serverData = {
//             user: "employee",
//             id: 122,
//             localtion: 'Lviv'
//         }
//             setTimeout (function showData (){
//                 serverData.received = true;
//                 console.log ('Data loaded', serverData)
//             }, 1000)
// }, 1500)
// console.log ('other')
///////////////////////////////////////////

// const promise = new Promise (function (resolve, reject) {
// })
///////////////////////////////////////////

// const isBossHape = true;
//
// const isBossHape = false;

// const willGetPremium = new Promise (
//     function (resolve, reject) {
//         if (isBossHape) {
//             const bonus = {
//                 kind: 'premium',
//                 mount: 500
//             }
//             resolve (bonus)
//         } else {
//             const reason = new Error ('premium  rejected')
//             reject (reason)
//         }
//     }
// )

// willGetPremium
// .then (
//     function(result){console.log (result)}
//     ,
//     function(error) {console.log (error.message)}
// )

///////////////////////////////////////////

// const p = new Promise (function (resolve, reject){
//     setTimeout (() => resolve (1), 1000)
// })

// p.then (function (result){
//     console.log (result)
//     return result*2
// }).then (function (result){
//     console.log (result)
//     return result*2
// }).then (function (result){
//     console.log (result)
//     return result*2
// })

///////////////////////////////////////////

// const p = new Promise (function (resolve, reject) {
//     setTimeout (function () {
//         resolve ("Done")
//     }, 1500)
// })

// p.then (function (result) {
//     console.log (result);
//     return new Promise (function (resolve, reject) {
//         setTimeout (function() {
//             resolve(true)
//         }, 2000)
//     }).then (function (result) {
//         console.log (result)
//     })
// })

///////////////////////////////////////////

// const user1 = new Promise (function (resolve) {
//     setTimeout (()=> {
//         resolve ({id: 10, login: "admin"})
//     }, 1000)
// })

// const user2 = new Promise (resolve =>{
//     setTimeout (()=> {
//         resolve ({id:22, login: 'tester'})
//     }, 500)
// })

// Promise.all ([user1, user2])
// .then (result=>{
//     console.log ('Array of result:', result)
// }). catch (error => {
//     console.log (error)
// })

///////////////////////////////////////////

// async function testAsync () {
//     return "done";
// }

// testAsync().then (console.log)

// const testAsync1 = async () => {
//     return "done1"
// }

// testAsync1().then (console.log)

///////////////////////////////////////////

// async function testAwait() {
//     const promise = new Promise (function (resolve, reject) {
//         setTimeout (()=> resolve ('Ready'), 1000)
//     })

//     let result = await promise

//     console.log (result)
// }

// // testAwait ()

// alert(111);
