// 1 ci sual

let arr = [2, 6, 32, 95, 44, 62, 94];

//Sort elements of an array from larger to smaller

arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);

// Show in console all elements which are divided into 3 without remainder

for(let i = 0;i<arr.length;i++){
      
    if(arr[i]%3==0){
        console.log(arr[i])
        }
};

// Show in console all element which are less than 50
let ar=[]
for(let i = 0; i<arr.length; i++){
       if(arr[i]<= 50){
             ar.push(arr[i])
             
    
    }
};
console.log(ar);
// Show in console all elements which are greater than 35 and less than 70

for(let i = 0;i<arr.length;i++){
    if(arr[i]<35 == 70<arr[i]){
             console.log(arr[i])
    }
 };


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

function name(a) {
    for (let i = 0; i<array.length; i++) {
        if (typeof a == typeof arr[i]) 
            console.log(arr[i],typeof arr[i]);
            
    }
    
};


