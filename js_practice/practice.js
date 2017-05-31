// var home = "world"
//
// function math(num,num2){
//   return num + num2
// }
//
// function world(place) {
//   console.log("Hello, " + place + "!")
// }
//
// world(math(2,3));
//
// var cel = 20
//
// function far(num) {
//   return num * 1.8 + 32;
// }
//
// function sentence(num) {
//   console.log("The temperature outside is " + num + " degrees fahrenheit.");
// }
//
// sentence(far(cel));
//
// console.log(Math.floor(Math.random() * 10 + 1));

// for (i = 1; i <= 10; i++){
//   var x = 1
//   while (x <= 10){
//     console.log(x);
//     x += 1;
//   }
// }

var josh = {
  "favorite film": ["butts", "dicks"]
}

var dick = "dick";

josh[dick] = ["ok", "not bad"]


for (i in josh){
  var length = josh[i].length;
  var array = josh[i];

  array.forEach(function(x){
    console.log(x);
  });
}

var array = [2, 5, 9];
array.push(9);

console.log(array);
array.splice(2, 2)
console.log(array);
