//////////////////// task 1 ////////////////////

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, ,...z] = arr
// console.log (x);
// console.log (y);
// console.log (z);

//////////////////// task 2 ////////////////////

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };

// // let {names, ages} = data
// // let [name1, name2, name3, name4] = names
// // let [age1, age2, age3, age4] = ages

// let [name1, name2, name3, name4] = data.names
// let [age1, age2, age3, age4] = data.ages

//////////////////// task 3 ////////////////////

// function mul (...arr) {
//     let out = 1;
//     let isNumber;
//     for (let i of arr) {
//         if (typeof i == "number") {
//             out *= i;
//             isNumber = true;
//         }
//     }
//     return isNumber ? out : 0
// }

// console.log(mul(1, "str", 2, 3, true))
// console.log(mul(null, "str", false, true))

//////////////////// task 4 ////////////////////

// let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback( () => {
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
//        return ( (callback) => {
//           this.result = callback();
//        });
//     }
//  };

//  client.calc(123);
//  console.log(client.result);
//  console.log(typeof client.result);

//////////////////// task 5 ////////////////////

// let keys = [1, 2, 3, 4]
// let values = ["div", "span", "b", "i"]

// function mapBuilder (keysArray, valuesArrays) {
//     let map = new Map ()
//     for (const i of keysArray) {
//         map.set (i, valuesArrays [i-1])
//     }
//     return map
// }

// mapBuilder (keys , values)