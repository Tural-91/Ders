// 1 ci sual

let arr = [2, 6, 32, 95, 44, 62, 94];

//Sort elements of an array from larger to smaller

arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);

// Show in console all elements which are divided into 3 without remainder

console.log(arr[1]);

// Show in console all element which are less than 50

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);  //sual?

// Show in console all elements which are greater than 35 and less than 70

console.log(arr[4]);
console.log(arr[5]);   // sual?

//2 ci saul

let arr1 = ["I", "learn", "JavaScript"];

//Remove first element of an array (splice)

let removed = arr1.splice(0, 1);
console.log(arr1);

//Remove first element and add two other ('PHP','Python') (splice)

let removed1 = arr1.splice(0, 0, 'PHP', 'Python');
console.log(arr1);

//3 cu sual

let arr2 = [25, 95, 'test','php',  true, {}, 129, 'javascript'];

//When function calling in global area user must add a parameter (number, string, object, boolean)



