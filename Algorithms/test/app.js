/*let names = document.querySelector(".name");
let surnames = document.querySelector(".surname");
document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault();
    let nametext = document.createElement("p");
    document.querySelector(".result").appendChild(nametext);
    let surnametext = document.createElement("p");
    document.querySelector(".result").appendChild(surnametext);
    nametext.textContent = names.value;
    surnametext.textContent = surnames.value;

})
*/

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
})