// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Implemento il tasto start per fare iniziare il gioco
// Creo il tasto Start e al suo interno le IMPLEMENTAZIONI
const start = document.getElementById("start");
start.addEventListener("click", function() {
    
    // IMPLENTAZIONI
    const numberOfCells = 100;

    // gli associo una funzione
    const numbers = generateArrayNumbers();
    console.log(generateArrayNumbers(numberOfCells));

    // Creo le caselle per ogni numero
    const grid = document.querySelector(".grid");
    // per eseguire il programma solo al primo click
    grid.innerHTML = "";
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        // gli associo una funzione a entrambi
        const newNumber = generateCell (currentNumber);
        newNumber.addEventListener("click", manageCellClick);
        grid.append(newNumber);
    }
    console.log(grid);

})

// FUNZIONI
function generateArrayNumbers() {
    const arrayNumbers = [];
    for (let i = 1; i < 101; i++) {
        arrayNumbers.push(i);
    }
    return arrayNumbers;
}

function generateCell(value) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = `<span>${value}</span>`;
    return newCell;
}

function manageCellClick() {
    const clickedCell = parseInt(this.querySelector("span").textContent);
        this.classList.add("aqua");
        console.log(clickedCell);
    

}