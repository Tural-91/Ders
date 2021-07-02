22.06.2021

1. Difference between var, let, const

 var funksiyası scope xüsusiyyətinə malikdir. let və const block scope xüsusiyyətinə malikdir. Yaradılan dəyişən əvvəlcə istifadə olunarsa və sonra var açar sözü ilə təyin olunarsa, heç bir səhv baş verməz. Let ve const üçün vəziyyət belə deyil. Let və const ilə yaratdığınız dəyişənlərə dəyərlər təyin etdikdə, const ilə yaratdığınız dəyişəni yenidən təyin edə bilmərik, lakin let dəyişəninə yeni bir dəyər təyin edə bilərsiniz.

2. Console in Javascript (log, error, warn,table,clear,count)

console log- consolu çaöırmaq üçündür
console error - consolda səhvi göstərir
console warn - təhlükə olduğunu bildirir
console table - cədvəl məlumatlarını cədvəl kimi göstərir
console clear - consolu təmizləmək üçündür
console count - saymaq üçün istifafə edilir

3. Data types in Javascript

javascript data tipləri 2 növdür.
Primitive Types: String, Number, Boolean və undefined
Reference Types: Array, Object Literals, Functions

4. Logical operators

&& - AND: hər iki operand / boolean dəyər doğru olduqda doğrudur, əks halda false olaraq qiymətləndirir
||  - OR: operandlar / boolean dəyərlərdən biri doğrudursa doğrudur. hər ikisi də yalan olduqda yalan olaraq qiymətləndirir
! - NOT: operand səhvdirsə və əksinə doğrudursa.

5. JavaScript Arithmetic Operator(Modulus,increment,decrement)

Modulus - qalığı göstərir
İncrement - toplamaq üçündür
Decrement - cıxmaq üçündür


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

var person = {name:"Tural", sname:"Agayev", age:30};

var text = "";
var x;
for (x in person) {
  text += person[x] + " ";
}

Difference between arrays which are declared with let and const? (ex: let arr = [1,2,3] and const arr = [1,2,3])

let ilə yaratdığımız bir dəyişənə daha sonra yeni bir dəyər əlavə edə bilirik. Lakin const ilə yaradılan dəyişənə yeni bir dəyər əlavə edə bilmirik.


02.07.21


İnnerText xassəsi boşluq və daxili element etiketi olmadan yalnız mətni qaytarır.
İnnerHTML xassəsi bütün boşluqlar və daxili element etiketləri daxil olmaqla mətni qaytarır.
TextContent xassəsi mətni aralıqlarla, lakin daxili element etiketleri olmadan qaytarır.

<div id="mylinks">
  This is my <b>link collection</b>:
  <ul>
    <li><a href="www.borland.com">Bye bye <b>Borland</b> </a></li>
    <li><a href="www.microfocus.com">Welcome to <b>Micro Focus</b></a></li>
  </ul>
</div>

This is my link collection:Bye bye Borland Welcome to Micro Focus - InnerText


This is my <b>link collection</b>:
<ul> 
  <li><a href="www.borland.com">Bye bye <b>Borland</b></a></li>      - InnerHTML
  <li><a href="www.microfocus.com">Welcome to <b>Micro Focus</b></a></li> 
</ul>


This is my link collection: - TextContent
