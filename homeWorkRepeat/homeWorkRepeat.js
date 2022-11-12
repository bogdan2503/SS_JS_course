///////////////////////////////////////////////////////////
//hw1//
///////////////////////////////////////////////////////////

// task 3//
// let x
// let y
// x = 1
// y = 2
// x=y
// alert (x)
// alert (y)

// task 4//
// let o = {
//     string: "string",
//     number: 1,
//     boolean: true,
//     undefined: undefined,
//     null: null
// }
// console.log (o)

// task 5//
// let isAdult = confirm ("are you adult?");
// console.log (isAdult)

// task 6//
// let nameF = "B";
// let surname = "K";
// let group = 1;
// let year = 1990;
// let mar = false;
// console.log (typeof(group), typeof(year), typeof(mar), typeof(nameF), typeof(surname));
// let yyy = null;
// let eee = undefined;
// console.log (typeof(yyy), typeof(eee));

// task 7//
// let login = prompt ("enter login");
// let mail = prompt ("enter mail");
// let parol = prompt ("enter parol");
// alert (`Dear ${login}, your email is ${mail}, your password is ${parol}`);

// task 8//
// let hour = 60*60;
// let day = hour*24;
// let month = day*30;
// alert (`hour ${hour}, day ${day}, month ${month}`)

///////////////////////////////////////////////////////////
//hw2//
///////////////////////////////////////////////////////////

// task 1//
// let x = 1;
// let y = 2;
// let res1 = String(x) + String(y);
// console.log (res1, typeof res1);
// let res2 = String (x<y)+y
// console.log (res2, typeof res2);
// let res3 = x<y;
// console.log (res3, typeof res3);
// let res4 = parseInt (String (x));
// console.log (res4, typeof res4);

// task 2//
// let x = Number (prompt ('enter number'));
// if (x>0 && x % 2 == 0 ) {
//     console.log  (true, "число є парним додатним")
// } else {console.log (false)}
// if (x%7 == 0) {
//     console.log  (true, "число є кратним 7")
// } else {console.log (false)};

// task 3//
// let arr = []
// arr[0] = 1;
// arr[1] = 'str';
// arr[2] = true;
// arr[3] = null;
// console.log (arr, arr.length);
// arr[4] = prompt ('enter')
// console.log (arr[4]);
// arr.shift(0);
// console.log (arr);

// task 4//
// let cities = ["Rome", "Lviv", "Warsaw"]
// let str =''
// for (let i = 0; i<cities.length; i++) {
//    if (i<cities.length-1) {
//     str += `${cities[i]}*`
//    } else {
//     str += `${cities[i]}`
//    }
// }
// console.log (str)
// let str = cities.join ('*')
// console.log (str)

// task 5//
// let isAdult = Number (prompt ('enter'));
// if (isAdult>=18) {
//     console.log ("Ви досягли повнолітнього віку");
// } else {console.log ("Ви ще надто молоді")}

// task 6//
// let x = Number (prompt ('enter'));
// let y = Number (prompt ('enter'));
// let z = Number (prompt ('enter'));
// if (x>0 && y>0 && z>0) {
//     let arrea = ((x+y+z) / 2).toFixed(3);
//     console.log (arrea);
//         if (Math.pow (x, 2) + Math.pow (y, 2) == Math.pow (z, 2) ||
//         Math.pow (z, 2) + Math.pow (y, 2) == Math.pow (x, 2) ||
//         Math.pow (x, 2) + Math.pow (z, 2) == Math.pow (y, 2)) {
//             console.log ('трикутник прямокутний');
//         } else {
//             console.log ("трикунтний не прямокутний");
//         }
// } else {
//     console.log ("Incorrect data");
// };

// task 7//
// let date = new Date();
// let hours = date.getHours();
// console.log(hours)

// if (hours >= 23 || hours <=5) {
//     console.log ('Доброї ночі')
// } else if (hours > 5 && hours <= 11) {
//     console.log ('Доброго ранку')
// } else if (hours > 11 && hours <= 17) {
//     console.log ('Доброго дня')
// } else if (hours > 17 && hours < 23) {
//     console.log ('Доброго вечора')
// };

// switch (true) {
//     case (hours >= 23 || hours <=5):
//         console.log ('Доброї ночі')
//         break;
//     case (hours > 5 && hours <= 11):
//         console.log ('Доброго ранку')
//         break;
//     case (hours > 11 && hours <= 17):
//         console.log ('Доброго дня')
//         break;
//     case (hours > 17 && hours < 23):
//         console.log ('Доброго вечора')
//         break;
// }

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// let arr =  ['Emma', 'Anna', 'Nata', 'Olya']
// console.log (arr)

// arr.push ('z')
// arr.push ('zzzzzzzzzz')
// console.log (arr)

// arr.pop ()
// arr.pop ()
// console.log (arr)

// arr.unshift ('')
// arr.unshift ('zzzzzz')
// console.log (arr)

// arr.shift ()
// arr.shift ()
// console.log (arr)

// let arr1 = arr.slice (0,4)
// console.log (arr1)

// arr.splice (2, 2, 'love', 'great')
// console.log (arr)

// .forEach;
// arr.forEach (function (el, i, array){
//     console.log (el + "!!!aaa777aaa!!!" + i)
// })

// let arr1  = [1, 2, 3, 66, 90, 100]

////// .filter //////
// let arr2 = arr1.filter (function (el, i, array){
//     return el > 3 })
// console.log (arr2)

////// .map //////
// let arr3 = arr1.map (function (el){
//     return el * 2
// })
// console.log (arr3)

////// .reduce //////
// let total = arr1.reduce (function (acc, el){
//     console.log ('acc=', acc, 'current elem=', el)
//     return acc + el
// }, 10)
// console.log (total)

// let names = arr.reduce (function (acc, el, i) {
//     acc[el] = i+1;
//     return acc
// }, {})
// console.log (names)

// .sort;

///////////////////////////////////////////////////////////
//hw3//
///////////////////////////////////////////////////////////

// task 1//
// let arr = [2, 3, 4, 5];
//   let sum = 0;
// for (let i = 0; i<arr.length; i++){
//       sum += arr[i]
// }
// console.log (sum)

// let sum1 = 0
// let i = 0
// while (i<arr.length) {
//    sum1 += arr[i]
// i++
// }
// console.log (sum1)

// task 2//
// for (let i = 0; i<=15; i++){
//     if (i%2===0) {
//         console.log (`${i} is even`)
//     } else {
//         console.log (`${i} is odd`)
//     }
// }

// task 3//
// let k = [];
// function randArray (n) {
// // classic with loop // //
//    for (let i = 0; i < n; i++) {
//     k.push (parseInt( Math.random()* (501-1)+1))
//    }
// // recurse // //
// k.push (parseInt( Math.random()* (501-1)+1))
// if (k.length === n) return
// randArray (n)
// }
// randArray (5)
// console.log (k)

// task 4//
// function raiseToDegree (a, b) {
//     return a ** b2
// };
// let a = Number (prompt ('enter a'));
// let b = Number (prompt ('enter b'));
// console.log (raiseToDegree (a, b))

// task 5//
// function findMin (...arr) {
//     for (let i = 0; i<=arr.length; i++){
//         if (arr[i] > arr[++i]){
//             console.log (arr[i])
//         }
//     }
// }
// findMin(12, 14, 4, -4, 0.2)

// task 6//
// function findUnique (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let z = (i+1); z < arr.length; z++) {
//            if (arr[i] === arr[z]) {
//             return false
//            }
//         }
//     }
//     return true
// }
// console.log (findUnique([1, 2]))
// console.log (findUnique([1, 2, 3, 5, 3]))
// console.log (findUnique([1, 2, 3, 5, 11]))

// task 7//
// function lastElem (arr, lastIndex) {
//     let ret = []
//     if (lastIndex) {
//         for (let i = arr.length-1; i >= arr.length-lastIndex && i>=0; i--) {
//             ret.push(arr[i]);
//         }
//         } else {
//             ret.push(arr[arr.length-1])
//     }
// return ret
// }
////////////////////////////////////////////
// function lastElem (arr, lastIndex) {

//     if (lastIndex) {
//        return arr.slice (-lastIndex)
//     } else {
//        return arr.pop()
//     }
// }
// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5],2));
// console.log(lastElem([3, 4, 10, -5],8));

// task 8//
// function toUp (str) {
// let arrFromString = str.split(' ');
// let finalString = []
// for (let i = 0; i < arrFromString.length; i++) {
//   let arrISpl = arrFromString[i].split('')
//   let firstLeter  = arrISpl[0].toUpperCase()
//   let finalArr = arrISpl.splice (0,1)
//   arrISpl.unshift(firstLeter)
//   finalString.push(arrISpl.join(""))
// }
// return finalString.join(" ")
// }
// console.log (toUp ('i love java script'))

///////////////////////////////////////////////////////////
//hw4//
///////////////////////////////////////////////////////////

// task 1//
// function calcRectangleArea (width, height) {
//     if (isNaN (width) || isNaN (height)) {
//         throw new Error ('you enter not a number')
//     }
//     return 0,5*width*height
// }
// try {
//     console.log (calcRectangleArea ("ss", 1))
// } catch (exxx) {
//     // console.log (exxx.name)
//     console.log (exxx.message)
//     console.log (exxx.stack)
// }

// task 2//
// function checkAge () {
//     let age = prompt ("How old are you?")
//         if (age == "" || isNaN (age)) {
//             throw new Error ("The field is empty! Please enter your age")
//                 } else if (age<14) {
//                     throw new Error ("You are to young")
//                 }
//     return `You can watch the film`
// }

// try {
//    console.log (checkAge ())
// } catch (er) {
//     alert (er.name)
//     alert (er.message)
//     console.log (er.stack)
// }

// task 3//
// class MonthException {
//     constructor (message) {
//         this.name = 'ERRRRRROOOORRRRRRRRRR';
//         this.message = message
//     }
// }

// function showMonthName(month) {
//     let arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     try {
//         if (month > 12 || month <=0) {
//             throw new MonthException ('Incorrect month number')
//         }
//         return arr[month-1]
//     } catch (er) {
//         console.error (`${er.name} "${er.message}"`)
//     }
// }
// console.log (showMonthName(13))

// task 4//
// let arr = []
// function showUser (id) {
//     function Object (id) {
//         this.id = id
//         return this.id
//     }
//         try {
//             if (id < 0) {
//             throw new Error (`Error: ID must not be negative: ${id}`)
//             }
//         return new Object (id)
//             } catch (er) {
//                 console.error (er.message)
//             }
// }

// function showUsers (ids) {
//     for (let i = 0; i < ids.length; i++) {
//         if (showUser (ids[i]) !== undefined) {
//             arr.push ((showUser (ids[i])))
//         }
//     }
// }

// console.log (showUser (10))
// console.log (showUsers([7, -12, 44, 22]))
// console.log (arr)

///////////////////////////////////////////////////////////
//hw5//
///////////////////////////////////////////////////////////

// task 1//
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };
// function propsCount (currentObject) {
//     let a = 0
//     for (let i in currentObject) {
//         console.log (i)
//         a ++
//     }
//     return a
// }
// console.log (propsCount (mentor) )

// task 2//
// let User = {
//     nameF: 'B',
//     nameL: 'L',
//     birth: 1990,
//     age: 32,
//     year: 2022
// }

// function showProps (obj) {
//     let arr = []
//     console.log (Object.getOwnPropertyNames(obj))
//         console.log (Object.keys (obj))
//             for (i in obj) {
//                 arr.push (i)
//             }
//             console.log (arr)
// }
// showProps (User)

// task 3//
// class Person {
//     constructor (name, surname) {
//         this.name = name,
//         this.surname = surname
//     }
//     showFullName () {
//         return `${this.name} ${this.surname}`
//     }
// }
// let per = new Person ('Ivan', 'Olegovych')
// console.log (per.showFullName())

// class Student extends Person {
//     constructor (name, surname, year)  {
//         super (name, surname)
//         this.year = year
//         }
//     showFullName (midleName) {
//         return `${this.name} ${this.surname} ${midleName}`
//     }

//     showCourse() {
//         return "Courent course: " + (2022 - this.year)
//     }
// }
// let stud = new Student ("Petro", "Petrenko", 2015)
// console.log(stud.showFullName ("Petrenko"))
// console.log (stud.showCourse())

// task 4//
// let workersList = []
// console.log (workersList)

// class Worker {
//     #experience = 1.2;
//     constructor (fullName, dayRate, workingDays) {
//     this.fullName = fullName,
//     this.dayRate = dayRate,
//     this.workingDays = workingDays
//     workersList.push(this)
//     }
//     showSalary () {
//         console.log (`${this.fullName} salary: ${this.dayRate*this.workingDays}`)
//     }
//     showSalaryWithExperiennce (){
//         console.log (`${this.fullName} salary: ${this.#experience*this.dayRate*this.workingDays}`)
//     }
//     set setExp (val) {
//         this.#experience=val;
//     }
//     get showExp () {
//         return this.#experience;
//     }
//     showSalaryWorker () {
//         return `${this.dayRate*this.workingDays*this.#experience}`
//     }
//     sortSalary (workersArray) {
//         let sortedSalary = workersArray.sort (function (a,b){return a.showSalaryWorker()-b.showSalaryWorker()})
//         for (let i = 0; i < sortedSalary.length; i++) {
//             console.log (sortedSalary[i].fullName+": " +sortedSalary[i].showSalaryWorker())
//         }
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperiennce();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperiennce();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperiennce();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperiennce();

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperiennce();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperiennce();
// worker3.sortSalary (workersList)

// task 5//
// class GeometricFigure {
//     getArea () {}
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name
//     }
// }
// let x =  new GeometricFigure
//     class Triangle extends GeometricFigure {
//         constructor (a, b) {
//             super ()
//             this.a = a
//             this.b = b
//         }
//         getArea () {
//             return this.a * this.b / 2
//         }
//     }
//         class Circle extends GeometricFigure {
//             constructor (r) {
//                 super ()
//                 this.r = r
//             }
//             getArea () {
//                 return Math.PI * this.r ** 2
//             }
//         }

// let figures = [new Triangle(4, 5), new Circle(5)];
// let circle = new Circle (2)
// console.log (figures[0].getArea())
// console.log (figures[1].getArea())
// console.log (figures[0].toString())
// console.log (figures[1].toString())

// function handleFigures (figures) {
//     for (let i = 0; i < figures.length; i++) {
//        if (figures[i] instanceof GeometricFigure) {
//        console.log (`${x.toString()}: ${figures[i].toString()} - area: ${figures[i].getArea()}`)
//     }
// }
// let sum = figures.reduce (function (sum, curent) {
// return sum.getArea()+ curent.getArea()
// })
// console.log (sum)
// }
// handleFigures (figures)

////////////////////////////////////////////
//////EXAMPLE OF OBJECTs and CLASSEs////////
////////////////////////////////////////////
// let obj1 = {
//     first: 'bogdan',
//     last: 'kor',
//     age: 32
// }
// console.log (obj1)

// let obj2 = new Object ()
//     obj2.first = 'ira'
//     obj2.last = 'leskiv'
//     obj2.age = 30
//     obj2.sum = function () {
//         return `${this.first} ${this.last} ${this.age} `
//     }
// console.log (obj2)
// console.log (obj2.sum ())

// function Obj3 (firstName, lastName, age) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age
//     this.sum = function () {
//         return `${this.firstName} ${this.lastName} ${this.age} `
//     }
// }

// let w1 = new Obj3 ('Ivan1', 'Petrov1', 14);
// let w2 = new Obj3 ('Ivan2', 'Petrov2', 15);
// let w3 = new Obj3 ('Ivan3', 'Petrov3', 16);
// let w4 = new Obj3 ('Ivan4', 'Petrov4', 17);

// console.log (w1, w2, w3, w4)
// console.log (w1.sum(), w2.sum(), w3.sum(), w4.sum())
// console.log (w3.age)

// class Worker {
//     constructor (firstName, lastName, age) {
//         this.name = firstName,
//         this.surname = lastName,
//         this.years = age
//     }
//     sum () {
//         return `${this.years} ${this.surname} ${this.name}`
//     }

//     get birth () {
//         return 2022-this.years
//     }

//     set newAge (val) {
//         if (val < 1990) {
//             console.log ('too young')
//         } else {
//             this.years = val
//         }
//     }
// }

// let one = new Worker ('Ali', 'Ginger', 18)
// let two = new Worker ('Fat', 'Red', 40)
// console.log (one)
// console.log (two.sum())
// console.log (one.birth)
// console.log (two.birth)
// one.newAge = 2000
// two.newAge = 2000
// console.log (one.birth)
// console.log (two.birth)

// class Animal {
//     constructor (kind, weight) {
//         this.kind = kind;
//         this.weight = weight
//     }
//     run () {
//         console.log (this.weight ,this.kind + " runs!")
//     }
// }
// let wolf = new Animal ('Wolf', 50)
// wolf.run()
// console.log (wolf.kind)
// console.log (wolf.weight)

// class Leopard extends Animal {
//     constructor (kind, weight, speed) {
//         super (kind, weight)
//         this.speed = speed
//     }
//     jump () {
//         console.log (this.weight, this.kind + " jumps!" + "speed " + this.speed)
//     }
//     run () {
//         console.log (`${this.speed} ${this.kind} ${this.weight} walking`)
//         console.log (super.run ())
//     }
// }
// let leopard = new Leopard ("Crazy Leopard", 100, 200)
// leopard.jump ()
// leopard.run ()
// console.log (leopard.kind)
// console.log (leopard.weight)
// console.log (leopard.speed)

///////////////////////////////////////////////////////////
//hw6//
///////////////////////////////////////////////////////////

// task 1//
// document.getElementById ("test").innerHTML ='Last'
// document.querySelector ('div').innerHTML='last111'

// task 2//
// let i = document.querySelector ('img')
// i.src = "cat.jpg"
// alert (i.outerHTML)

// task 3//
// let x = document.querySelectorAll ('#text p')
// for (let i = 0; i < x.length; i++) {
//     console.log (`Selector text ${i}: ${x[i].innerText}`);
// }

// task 4//
// let x = document.getElementById ('list')
// console.log (x.firstElementChild.innerHTML)
// console.log (x.lastElementChild.innerHTML)
// console.log (x.firstElementChild.nextElementSibling.innerHTML)
// console.log (x.lastElementChild.previousElementSibling.innerHTML)
// console.log (x.lastElementChild.previousElementSibling.previousElementSibling.innerHTML)

// task 5//
// document.querySelector ('h1').style.backgroundColor = "green";
// document.querySelector ("div").firstElementChild.style.fontWeight = 'bold';
// document.querySelectorAll ("p")[1].style.color = 'red';
// document.querySelector ("div").lastElementChild.previousElementSibling.style.textDecoration= 'underline';
// document.querySelector ("div").lastElementChild.style.fontStyle = 'italic'
// document.querySelector ('ul').style.display = 'flex'
// document.querySelector ('span').style.display = 'none'

// task 6//
// console.log (document.getElementById ('input1').value = prompt ('input1'))
// console.log (document.getElementById ('input2').value = prompt ('input2'))
// console.log (document.getElementById ('input2').value = prompt ('input1')
// )
// console.log ( document.getElementById ('input1').value = prompt ('input2')
// )

// task 6//
// document.body.innerHTML =
// `<main class="mainClass check item">
//     <div id="myDiv">
//          <p>First paragraph</p>
//     </div>
// </main>`

///////////////////////////////////////////////////////////
//hw7//
///////////////////////////////////////////////////////////

// task 1//
// let newWindow;
// newWindow = window.open ("", "", "width=300, height=300")
// setTimeout(function () {
//     newWindow.resizeTo (500, 500)
// }, 1000);
// setTimeout (()=> newWindow.moveTo (200, 200), 2000);
// setTimeout (()=> newWindow.close (), 3000);

// task 2//
// let p = document.querySelector ("#text")
// function addCSS () {
//     p.style.color = "orange",
//     p.style.font = "20px"
//     p.style.fontFamily = "Comic Sans MS"
// }
// document.querySelector ('button').addEventListener ('click',  addCSS)
// or
// document.querySelector ('button').addEventListener ('click',  ()=>p.classList.add ("classChange"))

// task 3//
// let bodyColor = document.querySelector ("body")
// document.querySelector ("#btn1").addEventListener ("click", ()=>bodyColor.style.backgroundColor = "blue"
// )
// document.querySelector ("#btn2").addEventListener ("dblclick", ()=>bodyColor.style.backgroundColor =  "yellow"
// )
// document.querySelector ("#btn3").addEventListener ("mousedown", ()=>bodyColor.style.backgroundColor = "brown"
// )
// document.querySelector ("#btn3").addEventListener ("mouseup", ()=>bodyColor.style.backgroundColor = ""
// )
// document.querySelector ("a").addEventListener ("mouseover", ()=>bodyColor.style.backgroundColor = "green"
// )
// document.querySelector ("a").addEventListener ("mouseleave", ()=>bodyColor.style.backgroundColor = ""
// )

// task 4//
// document.querySelector ('#btn').addEventListener('click', ()=> {
//     var x = document.querySelector("select");
//     x.remove(x.selectedIndex);
// })

// task 5//
// const currentDiv = document.querySelector("div");
// document.querySelector ('#btn').addEventListener('click',
// ()=>{
//     let newTextParag = document.createElement ("p");
//     newTextParag.innerHTML = 'I was pressed!'
//     currentDiv.after (newTextParag)
// })
// document.querySelector ('#btn').addEventListener('mouseover',
// ()=>{
//     let newTextParag = document.createElement ("p");
//     newTextParag.innerHTML = 'Mouse on me!'
//     currentDiv.after (newTextParag)
// })
// document.querySelector ('#btn').addEventListener('mouseleave',
// ()=>{
//     let newTextParag = document.createElement ("p");
//     newTextParag.innerHTML = 'Mouse is not on me!'
//     currentDiv.after (newTextParag)
// })

// task 6//
// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');
// window.addEventListener('resize', () => {
//     heightOutput.innerHTML = 'Height:' + window.innerHeight;
//     widthOutput.innerHTML = 'Width' + window.innerWidth;
// });

///////////////////////////////////////////////////////////
//hw8//
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
//hw9//
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
//hw10//
///////////////////////////////////////////////////////////

// task 1//
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, , ...z] = arr;
// console.log (x)
// console.log (y)
// console.log (z)

// task 2//
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
// let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data
// console.log (name2)
// console.log (age2)
// console.log (name4)
// console.log (age4)

// task 3//
// function mul(...rest) {
//     let sum = 0
//         for (let elem of rest) {
//             if (typeof elem == 'number'){
//             sum += elem
//             }
//         }
//     return sum
//  }
//  console.log(mul(1, "str", 2, 3, true))
//  console.log(mul(null, "str", false, true));

// task 4//
// let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback(() => {
//           return this.data + "";
//        });
//     }
//  };
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },
//     notification: function () {
//        return (callback => {
//           this.result = callback();
//        });
//     }
//  };
// client.calc(123);
// console.log(client.result);
// console.log(typeof client.result);

// task 5//
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = new Map ()
// for (let i = 0; i < keys.length && i < values.length; i++) {
//     console.log (keys[i])
//     console.log (values[i])
//     map.set (keys[i], values[i])
// }
// console.log (map.get(2))
// console.log (map.size)
// console.log (map.keys())
// console.log (map.values())
// console.log (map.entries())

///////////////////////////////////////////////////////////
//______________//
///////////////////////////////////////////////////////////
