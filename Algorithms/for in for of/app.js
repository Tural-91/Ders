
// for of

let arr = [5, 10, 15];

for (let value of arr) {
  console.log(value);
}

let arr1 = [1, 2, 3];

for (let value of arr1) {
  value += 1;
  console.log(value);
}

// for in

var person = {name:"Tural", sname:"Agayev", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x] + " ";
}







