let toDoItems = {}

window.onload = loadLocalStorage ()

let selectValue = document.getElementById ("chooseList")
let ul = document.getElementById ("out")

document.getElementById ("buttonList").addEventListener ("click", addList)
document.getElementById ("buttonItems").addEventListener ("click", addItems)
document.getElementById ("chooseList").addEventListener ("change", selectAll)
document.getElementById ("clear").addEventListener ("click", clearLocalStorage)

function addList () {
    let list = document.getElementById ("list").value
        if (! list == ""){
            let y = []
            toDoItems[list] = y
            var x = document.getElementById ("chooseList");
            let option = new Option (list, list)
            x.add (option)
            document.getElementById ("list").value = ""
            ul.innerHTML = ''
            localStorage.setItem ("todo", JSON.stringify (toDoItems))

            let h1head = document.getElementById ("h1")
            h1head.innerHTML = list
        }
            else {
            alert ("Enter List name!!!")
            }
}
// створює новий масив в об'єкті toDoItems

function addItems () {
    let selectValue = document.getElementById ("chooseList")
    let item = document.getElementById ("items").value
        if (! item == ""){
            toDoItems[selectValue.value].push (item)
            document.getElementById ("items").value = ""
            localStorage.setItem ("todo", JSON.stringify (toDoItems))
            select ()
        }
            else {
                alert ("Enter items!!!")
            }
}
// при вибраному Listi з Select додає в вибраний масив toDoItems значення (Items) 

function select () {
    let optionVal1 = toDoItems [selectValue.value][toDoItems [selectValue.value].length-1]
    let li = document.createElement ("li")
        li.innerHTML = optionVal1
        ul.appendChild (li)

    let input=document.createElement('input')
        input.type="checkbox"
        li.prepend(input)

    let deleteItems = document.createElement('input')
        deleteItems.type = "button"
        deleteItems.className="button"
        deleteItems.addEventListener ("click", deleteItems1)
        deleteItems.value = "Delete items"
        li.appendChild (deleteItems)

        function deleteItems1 () {
            if (toDoItems[selectValue.value].length >1 ) {
                let g = deleteItems.parentElement.textContent
                    toDoItems[selectValue.value].splice (toDoItems[selectValue.value].indexOf(g), toDoItems[selectValue.value].indexOf(g))
                    localStorage.setItem ("todo", JSON.stringify (toDoItems))
            } 
                let g = deleteItems.parentElement.textContent
                toDoItems[selectValue.value].splice (toDoItems[selectValue.value].indexOf(g), toDoItems[selectValue.value].indexOf(g)+1)
                localStorage.setItem ("todo", JSON.stringify (toDoItems))
                this.parentNode.parentNode.removeChild(this.parentNode);
        }
    localStorage.setItem ("todo", JSON.stringify (toDoItems))
}
// ITEMS і робота з ITEMS ними при умові створення нового LIST і одразу роботі з ITEMS

function selectAll () {
    ul.innerHTML = ''
    let optionVal = toDoItems [selectValue.value]
        for (const key in optionVal) {
            const element = optionVal[key];
            
            let ul = document.getElementById ("out")
            let li = document.createElement ("li")
                li.innerHTML = element
                ul.appendChild (li)

            let input=document.createElement('input')
                input.type="checkbox"
                li.prepend(input)

            let deleteItems = document.createElement('input')
                deleteItems.type = "button"
                deleteItems.className="button"
                deleteItems.addEventListener ("click", deleteItems1)
                deleteItems.value = "Delete items"
                li.appendChild (deleteItems)

            function deleteItems1 () {
                if (toDoItems[selectValue.value].length >1 ) {
                    let g = deleteItems.parentElement.textContent
                    toDoItems[selectValue.value].splice (toDoItems[selectValue.value].indexOf(g), toDoItems[selectValue.value].indexOf(g))
                    localStorage.setItem ("todo", JSON.stringify (toDoItems))
                } 
                    let g = deleteItems.parentElement.textContent
                    toDoItems[selectValue.value].splice (toDoItems[selectValue.value].indexOf(g), toDoItems[selectValue.value].indexOf(g)+1)
                    localStorage.setItem ("todo", JSON.stringify (toDoItems))
                    this.parentNode.parentNode.removeChild(this.parentNode);
            }
    localStorage.setItem ("todo", JSON.stringify (toDoItems))
        }
    let h1head = document.getElementById ("h1")
        h1head.innerHTML = selectValue.value
}
// виведення всіх ITEMS і робота з ними при умові переключення SELECT 

function loadLocalStorage () {
    if  (JSON.parse (localStorage.getItem("todo")) == null || JSON.parse (localStorage.getItem("todo")) == undefined) {
        return}
        else {
            toDoItems = JSON.parse (localStorage.getItem("todo"))
            lis = Object.keys(toDoItems)
                for (let i = 0; i < lis.length; i++) {
                    var x = document.getElementById ("chooseList");
                    let option = new Option (lis[i], lis[i])
                    x.add (option)
            }
    }
}

function clearLocalStorage () {
    localStorage.clear ()
}