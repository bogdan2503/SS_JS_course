/////////////////////////////// task 1 ///////////////////////////////

// let task1 = window.open ("https://www.google.com/", "google", "width=300, height = 300");
// setTimeout(() => task1.resizeTo (500, 500), 2000)
// setTimeout(() => task1.moveTo (200, 200), 4000)
// setTimeout(() => task1.close (), 6000)

/////////////////////////////// task 2 ///////////////////////////////

// document.getElementById ("btn").onclick = changeCSS

// function changeCSS () {
//     document.getElementById ('text').style.color="orange";
//     document.getElementById ('text').style.fontFamily = "Comic Sans MS"
//     document.getElementById ('text').style.fontSize = "20px"
// }

/////////////////////////////// task 3 ///////////////////////////////
// document.getElementById ("ex1").onclick = ex1
// function ex1 () {
//     document.body.style.backgroundColor = "blue"
// }

// document.getElementById ("ex2").addEventListener ("dblclick", 
// function (){document.body.style.backgroundColor = "pink"})

// document.getElementById ("ex3").addEventListener ("mousedown", 
// function (){document.body.style.backgroundColor = "red"})
// document.getElementById ("ex3").addEventListener ("mouseup", 
// function (){document.body.style.backgroundColor = "green"})

// document.getElementById ("ex4").addEventListener ("mouseenter", 
// function (){document.body.style.backgroundColor = "yellow"})
// document.getElementById ("ex4").addEventListener ("mouseleave", 
// function (){document.body.style.backgroundColor = "black"})

/////////////////////////////// task 4 ///////////////////////////////

// document.getElementById ("btn").addEventListener ("click", names)

// function names () {
//     let x = document.getElementById ("sel");
//     x.remove (x.selectedIndex);
// }

/////////////////////////////// task 5 ///////////////////////////////

// document.getElementById ("btn").addEventListener ("click", presed)
// function presed () {
//     let ul = document.getElementById ("ul")
//     let li = document.createElement ("li")
//     li.appendChild (document.createTextNode ("I was pressed!"))
//     ul.appendChild (li)
// }

// document.getElementById ("btn").addEventListener ("mouseenter", enter)
// function enter () {
//     let ul = document.getElementById ("ul")
//     let li = document.createElement ("li")
//     li.appendChild (document.createTextNode ("Mouse on me!"))
//     ul.appendChild (li)
// }

// document.getElementById ("btn").addEventListener ("mouseleave", leave)
// function leave () {
//     let ul = document.getElementById ("ul")
//     let li = document.createElement ("li")
//     li.appendChild (document.createTextNode ("Mouse is not on me!"))
//     ul.appendChild (li)
// }

/////////////////////////////// task 6 ///////////////////////////////

// window.addEventListener ("resize", check)

// function check () {
//     let x = window.innerHeight;
//     let y = window.innerWidth;
//     let z = "Height: " + x + " Width: " + y;
//     document.getElementById ("p").innerHTML = z 
// }

/////////////////////////////// task 7 ///////////////////////////////

// let objArr = {
//     'ger': ['Berlin', 'Ingolshtadt'],
//     'usa': ['Chicago', 'New York'],
//     'ukr': ['Lviv', 'Kiev'],
// }

// let countries = document.getElementById ("country");
// countries.addEventListener ("change", listCountries)
// countries.addEventListener ("change", parag)

// let city = document.getElementById ("cities");
// city.addEventListener ("change", parag)


// function listCountries () {
//     city.innerHTML = "";
//     let x = countries.value;
//     for (let i = 0; i < objArr [x].length; i++){
//         let z = document.createElement ('option');
//         z.innerHTML = objArr[x][i];
//         city.appendChild (z)
//     }
// }

// let y = document.querySelector ("p");
// function parag () {
//     y.innerHTML = '';
//     y.innerHTML = countries.options[countries.selectedIndex].text +', '
//     + city.options[city.selectedIndex].text
// }
