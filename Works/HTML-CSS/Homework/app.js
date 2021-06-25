// Second

let arr = [1, 5, 9, 'New York', true, 'javascript', 7, ['false','exit']];

// show in console New York
console.log(arr[3]);

// show in console last element (Do not use code block like this: array[7])
console.log(arr[7][1]);

// Show in console length of array
console.log(arr.length);

//Find the eighth element in the array and show its first element
console.log(arr[7][0]);

// Add new element 'London' to the end of array
arr.push('London');
console.log(arr);

//Remove last element from array
arr.pop('London');
console.log(arr);

// Add after second element 'Moscow','Ankara' using method 'splice'(ex: [1,5,'Moscow','Ankara', 9,'New York', true, 'javascript',7, ['false','exit'])
arr.splice(2, 0, 'Moscow', 'Ankara');
console.log(arr);

//Add after second element 'Audi','BMW' and remove next element using method 'splice'(ex: [1,5,'Moscow','Ankara','New York', true, 'javascript',7, ['false','exit'])
let removed = arr.splice(2, 3,);
arr.splice(2, 0, 'Audi', 'BMW')
console.log(arr);

//Thrid

let arr1 = [36, 5, 89, 7, 2, 1]

//Sorting array element using correct form of method sort()(ex:[1,2,5,7,36,89])
arr1.sort(function(a, b) {
    return a - b;
});
console.log(arr1);

//Forurth

let str = ['Alma', 'Armud',]

//Show in console 'Heyva' using method slice

str.splice(2, 0, 'Heyva');
console.log(str);

//Show in console last two elements of array using method slice

str.splice(3, 0, 'Nar', 'Mandarin' )
console.log(str);