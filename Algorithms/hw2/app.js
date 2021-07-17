

let mainElement = document.createElement('div')
mainElement.classList.add('block');
document.querySelector('body').appendChild(mainElement);

for (let i = 0; i < 16; i++) {
    let element = document.createElement('div');
    element.classList.add('miniBlock');
    element.innerText = i+1;
    document.querySelector('div').appendChild(element);
}
