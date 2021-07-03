
let location1 = Math.floor(Math.random() * 7);
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess; 
let guesses = 0; 
let hits = 0; 
let isSunk = false; 
while (isSunk == false) { 
    guess = prompt('Ates etmek ucun 0 ile 10 arasinda bir reqem daxil et: ');
    if (guess < 0 || guess > 10) {
        alert('Ay insan deyilmedi 0 ile 10 arasi reqem daxil et.');
    } else {
        guesses++; 
        if (guess == location1 || guess == location2 || guess == location3) {
            hits++; 
            if (hits == 3) {
               
                isSunk = true;
                alert('Halaldir bize usaqlar !!!');
                let resultText = 'Texminlerin sayi ' + guesses + ' degig atislarin sayi ' + hits / guesses;
                alert(resultText);
            }
        } else {
            alert('Sansivi bir daha dene');
        }
    }
} 