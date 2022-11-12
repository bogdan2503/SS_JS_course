// ++++++++++++++++++++ task 1 ++++++++++++++++++++ 

// let mentor = { 
//     course: "JS fundamental", 
//     duration: 100,
//     direction: "web-development", 
//     optional: "react"
// };

// function propsCount (mentor) {
//     let x = 0
//     for (const i in mentor) {
//         x++
//     }
//     return x
// }
// propsCount (mentor)


// ++++++++++++++++++++ task 2 ++++++++++++++++++++ 

// let obj = {
//     one: "car",
//     two: "bus",
//     three: "tank",
//     four: "ship",
//     five: "train",
// }

// way 1

// function showProps (obj) {
//     let arrKey = []
//     let arrValue = []
//     for (i in obj) {
//         arrKey.push (i)
//         arrValue.push (obj[i])
//     }
//     console.log (arrKey)
//     console.log (arrValue)
// }   
// showProps (obj)

// way 2

// function showProps (obj) {
// console.log (Object.keys (obj))
// console.log (Object.values (obj))
// } 
// showProps (obj)

// ++++++++++++++++++++ task 3 ++++++++++++++++++++ 

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//         showFullName() {
//             console.log (this.name + this.surname);
//         }
// }
// // let man = new Person ("Ivan", " Rak");
// // man.showFullName();

// class Student extends Person {
//     constructor (name, surname, year) {
//         super (name, surname);
//         this.yearIntro = year;
//         this.midleName = 0;
//         this.currentYear = 2022;
//     }
//         showFullName (midleName) {
//             this.midleName = midleName
//                 return this.name+this.surname+this.midleName;
//         }
//         showCourse() {
//             if (this.currentYear - this.yearIntro >=1 && this.currentYear - this.yearIntro <=6) {
//                 return this.currentYear - this.yearIntro;
//             } else {
//                 throw new Error ("You are not a student")
//             }
//         }
// }

// let stud1 = new Student ("Roman", " Leskiv", 2012);
// console.log (stud1.showFullName (" Petrovich"))
// console.log ("Current course: " + stud1.showCourse())

// ++++++++++++++++++++ task 4 ++++++++++++++++++++
// let arr = [];

// class Worker {
//     #experience = 0;
//     constructor (fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         this.salaryLast = 0;
//         arr.push (this);
//     }
//     showSalary (){
//         return this.dayRate * this.workingDays;
//     }
//     showSalaryWithExperience(){
//         return this.dayRate * this.workingDays *this.#experience;
//     }
//     salaryValue (x){
//         this.salaryLast = x
//         return this.salaryLast;
//     }
//    set experiece (value) {
//         this.#experience = value;
//     }
//     get experiece () {
//         return this.#experience;
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log (worker1.fullName)
// console.log ("Зарплата без experience: " + worker1.showSalary())
// worker1.experiece = 1.2
// console.log ("Зарплата з experience: " + worker1.showSalaryWithExperience())
// worker1.experiece = 1.5
// console.log ("Зарплата з new experience: " + worker1.showSalaryWithExperience())
// console.log (worker1.salaryValue (worker1.showSalaryWithExperience()))

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log (worker2.fullName)
// console.log ("Зарплата без experience: " + worker2.showSalary())
// worker2.experiece = 1.2
// console.log ("Зарплата з experience: " + worker2.showSalaryWithExperience())
// worker2.experiece = 1.5
// console.log ("Зарплата з new experience: " + worker2.showSalaryWithExperience())
// console.log (worker2.salaryValue (worker2.showSalaryWithExperience()))

// let worker3 = new Worker("Andy Ander", 29, 23)
// console.log (worker3.fullName)
// console.log ("Зарплата без experience: " + worker3.showSalary())
// worker3.experiece = 1.2
// console.log ("Зарплата з experience: " + worker3.showSalaryWithExperience())
// worker3.experiece = 1.5
// console.log ("Зарплата з new experience: " + worker3.showSalaryWithExperience())
// console.log (worker3.salaryValue (worker3.showSalaryWithExperience()))



// function sortBySalaryWorker() {
//     let bySalaryLast = arr.slice(0);
//         bySalaryLast.sort (function (a, b){
//         return a.salaryLast - b.salaryLast;
//         });

//     for (let i=0; i < arr.length; i++){
//         console.log (arr[i].fullName + ": " + arr[i].salaryLast)
//     }
// }
// sortBySalaryWorker()

// ++++++++++++++++++++ task 5 ++++++++++++++++++++

let figures = []

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor (width, height) {
        super ();
        this.width = width;
        this.height = height;
        this.area = 0;
        figures.push (this);
    }
    getArea () {
        this.area = this.width / 2 * this.height;
        return this.width / 2 * this.height;
    }
}
let tria = new Triangle (2, 3)
tria.getArea ()

class Square extends GeometricFigure {
    constructor (side) {
        super ();
        this.side = side;
        this.area = 0;
        figures.push (this);
    }
    getArea () {
        this.area = Math.pow (this.side, 2);
        return Math.pow (this.side, 2);
    }
}
let squa = new Square (2)
squa.getArea ()

class Circle extends GeometricFigure {
    constructor (radius) {
        super ();
        this.radius = radius;
        this.area = 0;
        figures.push (this);
    }
    getArea () {
        this.area =3.14 * Math.pow (this.radius, 2);
        return 3.14 * Math.pow (this.radius, 2);
    }
}
let circ = new Circle (2)
circ.getArea ()

function handleFigures(figures) {
    let x = tria instanceof GeometricFigure;
    let y = squa instanceof GeometricFigure;
    let z = circ instanceof GeometricFigure
    console.log ("tria extends GeometricFigure: " + x);
    console.log ("squa extends GeometricFigure: " + y);
    console.log ("circ extends GeometricFigure: " + z);
    console.log ("Geometric figure: " + figures[0] + " - area: " + figures[0].area);
    console.log ("Geometric figure: " + figures[1] + " - area: " + figures[1].area);
    console.log ("Geometric figure: " + figures[2] + " - area: " + figures[2].area);

    let arr = [figures[0].area, figures[1].area, figures[2].area]
    let sum = arr.reduce ((total, amount)=>total+amount);
    return sum

}
handleFigures(figures)