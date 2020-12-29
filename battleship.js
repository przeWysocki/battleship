


 var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
    var location2 = location1 + 1;
    var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk ==false) {
    guess = prompt("Gotów, cel, pal! (podaj liczbę z zakresu od 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Miałaś/eś podać liczbę w przedziale od 0 do 6.");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
        if (hits == 1 || hits < 3)  {
            alert("Trafiłaś/eś tylko część okrętu.Strzelaj dalej.");
        } 

        if (hits == 3) {
            isSunk = true;
            alert("Zatopiłaś/eś cały okręt. Brawo!");
        }
    } else {
        alert("PUDŁO!");
    }

    }
    }
    
    var stats = `Potrzebowałaś/eś ${guesses} prób, by zatopić okręt, czyli Twój wynik wynosi ${3/guesses}`;
    alert(stats);
    


/*
PĘTLE!!!!!

let myNumber = 0;
while (myNumber<10) {
    console.log(myNumber);
    myNumber++;
}

const myArray = ['a', 'b', 'c', 'd'];
for (let kkk = 0; kkk < myArray.length; kkk++) {
    console.log(`pod indeksem ${kkk} jest element ${myArray[kkk]}`)
}



let n=9;
do {
    console.log(n);
    n=n+3;
} while (n<21);
console.log(n)



const person = {
    name:'Pazdan',
    age: 21,
    sex:'male'
}
for (let propertyName in person) {
    console.log(`${propertyName}:${person[propertyName]}`);
}



const elements = ['a', 'b', 'c', 'd'];
for (let element of elements) {
    console.log(element);
}


*/