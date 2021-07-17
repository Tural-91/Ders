let ul = document.querySelector('ul');
let elements = document.querySelectorAll('.elem');
ul.addEventListener('click', (e) => {
    let atribut = e.target.getAttribute('id');
    elements.forEach(elem => {
        elem.classList.add('active');
        setTimeout(() => {
            elem.style.display = 'none';
        }, 1000);
        setTimeout(() => {
            if (elem.dataset.filter == atribut) {
                elem.classList.remove("active");
                elem.style.display = 'block';
            }
            if (atribut == 'all') {
                elem.classList.remove("active");
                elem.style.display = 'block';
            }
        }, 1000);
    })
}) 