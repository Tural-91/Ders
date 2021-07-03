

let mainElement = document.createElement('div')
mainElement.classList.add('block');
document.querySelector('body').appendChild(mainElement);

for (let i = 0; i < 10; i++) {
    let element = document.createElement('div');
    document.querySelector('div').appendChild(element);
    element.classList.add('miniBlock');
}
