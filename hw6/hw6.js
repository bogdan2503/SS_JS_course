// ++++++++++++++++++++ task 1 ++++++++++++++++++++
// document.getElementsByTagName ("div")[0].innerHTML = "Last1"; 
// document.getElementById ("test").innerHTML = "Last2";
// document.querySelector ("#test").innerHTML = "Last3"

// ++++++++++++++++++++ task 2 ++++++++++++++++++++
// document.getElementsByClassName ("image")[0].src = "cat.jpg";
// document.getElementById ("image1").src = "cat.jpg";

// ++++++++++++++++++++ task 3 ++++++++++++++++++++
// let x = document.querySelectorAll ("div#text p");
//         for (let i = 0; i < x.length; i++) { 
//             console.log ("Selector text " + i + ": " + x[i].innerHTML);
//         }

// ++++++++++++++++++++ task 4 ++++++++++++++++++++
// way 1
    // let x = document.getElementById("list").children;
    //     for (i=0; i<x.length; i++){
    //         alert  (x[i].innerHTML); 
    //     }
// way 2
    // let y = document.getElementById("list")
    //     alert (y.firstElementChild.innerHTML);
    //     alert (y.lastElementChild.innerHTML);
    //     alert (y.children.length-3);
    //     alert (y.children.length-1);
    //     alert (y.children.length-2);

// ++++++++++++++++++++ task 5 ++++++++++++++++++++
    // document.getElementsByTagName ("h1")[0].style.backgroundColor = "green";
    // document.getElementById ("myDiv").firstElementChild.style.fontWeight = "900";
    // document.getElementsByTagName ("p")[1].style.color = "red";
    // document.getElementsByTagName ("p")[2].style.textDecoration = "underline";
    // document.getElementsByTagName ("p")[3].style.fontStyle = "italic";
    // document.getElementsByTagName ("li")[0].style.display = "inline"
    // document.getElementsByTagName ("li")[1].style.display = "inline"
    // document.getElementsByTagName ("li")[2].style.display = "inline"
    // document.getElementsByTagName ("span")[0].setAttribute ("hidden", "true");
    // // or
    // document.getElementsByTagName ("span")[0].style.display = "none";

// ++++++++++++++++++++ task 6 ++++++++++++++++++++
    // let inp1 = prompt("Please enter your name //////input 1");
    //     document.getElementById("input1").value = inp1;

    // let inp2 = prompt("Please enter your //////input 2");
    //     document.getElementById("input2").value = inp2;

    // let input1 = document.getElementById("input1");
    // let input2 = document.getElementById("input2");
    //     let x = input1.value;
    //         input1.value = input2.value;
    //         input2.value = x;

// ++++++++++++++++++++ task 7 ++++++++++++++++++++
    // document.body.innerHTML = "<main></main>"
    // document.getElementsByTagName ("main")[0].className = "mainClass check item"

    // let main = document.getElementsByClassName ("mainClass check item")[0]
    // main.insertAdjacentHTML('afterbegin', '<div></div>')

    // let div = document.getElementsByTagName ("div")[0]
    // div.id = "myDiv"

    // myDiv.insertAdjacentHTML("afterbegin", "<p>First paragraph</p>")