// ++++++++++++++++++++ task 1 ++++++++++++++++++++

// let width = prompt ("Enter width");
// let height = prompt ("Enter height");
// function calcRectangleArea(width, height) {
//              let s = 1/2 * width * height;
//             if (isNaN(width) || isNaN(height)) {
//             throw new Error ("Ви ввели не числові параметри")
//         }
//         return s
// }
// try {
//     console.log (calcRectangleArea(width, height));
// } catch (error) {
//     console.log (error.name);
//     console.log (error.message);
//     console.log (error.stack);
// }

// ++++++++++++++++++++ task 2 ++++++++++++++++++++
// let age = prompt ("Enter your age")
// function checkAge() {
//     let x = ("you can watch film")
//     if (age === "") {
//         throw new Error ("The field is empty! Please enter your age")
//     }
//     if (isNaN(age)) {
//         throw new Error ("You enter not a number")
//     }
//     if (age < 14){
//         throw new Error ("You are too young")
//     }
//     return x
// }

// try {
//     checkAge(age)
// } catch (error) {
//     alert (error.name);
//     alert (error.message);
//     alert (error.stack);
// }

// ++++++++++++++++++++ task 3 ++++++++++++++++++++

// class MonthException {
//     constructor (message) {
//        this.message = message  
//     }
//     er(){
//         console.log (this.message)
//     }
// }

// let mon = new MonthException ('MonthException');
// let incor = new MonthException ('Incorrect month number');

// const year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function showMonthName (month){
//     let x = year [month-1]
//         if (month >= 13){
//         throw new Error (mon.er() +"" +incor.er())
//     }
//     console.log (x)
// }

// try {
//         console.log (showMonthName (13));
//     } catch (error) {
//         console.log (error.name);
// }

// ++++++++++++++++++++ task 4 ++++++++++++++++++++


// function showUser (id) {
//     if (id < 0) {
//         throw new Error("ID must not be negative:" + id);
//     }
//     return {id: id}
// }

// function showUsers (ids) {
//     let final = []
//     ids.forEach(function (id) {
//         try {
//             let man = showUser(id)
//             final.push (man)
//         } catch (error) {
//           console.log (error.message)
//         }
//     })
//     return final
// }

   
// showUsers ([7, -12, 44, 22, -5, -10])
