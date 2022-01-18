/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
*/

//* FUNZIONI DA UTILIZZARE



// RECUPERO LA GRIGLIA
const select = document.getElementById("choices");
const grid = document.getElementById("grid");
const button = document.getElementById("start");

function start() {
    // Cambio il tasto del bottone e lo chiamo ricomincia
    button.innerText = 'RESTART'

    grid.innerHTML = '';
    grid.style.display = 'flex';

    // Preparo quello che mi serve per il gioco 
    let attempt = 0;
    const totalBombs = 16;

    let columns;

    switch (select.value) {
        case "2":
            columns = 9;
            break;
        case "3":
            columns = 7;
            break;
        case "1":
        default:
            columns = 10;
            break;
    }

    const totalCells = columns * columns;

    const maxAttempts = totalCell - totalBombs;


    // GENERO UNA BOMBA
    const generateBombs = (totalBombs, totalNumber) => {
        const bombs = [];
        while (bombs.length < totalBombs) { // il numero di bombe è inferiore a 16
            const randNumber = getRandomNumber(1, totalNumber);
            if (!bombs.includes(randNumber)) { // Controllo se c'è nell'array di bombe
                bombs.push(randNumber);
            }
        }
        return bombs;
    }

    // GENERO LA GRIGLIA
    const generateGrid = (cellsNumber, cellPerRow, bombs) => {
        for (let i = 1; i < cellsNumber; i++) {
            const cell = createCell(i, cellsPerRow);
            cell.addEventListener('click', (event) => onCellClick(event.target, bombs, i));
            grid.appendChild(cell);
        }
    }

    function createCell(cellNumber, cellsPerRow) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.innerText = cellNumber;
        const wh = `calc(100% / ${cellsPerRow})`;
        cell.style.height = wh;
        cell.style.width = wh;
        return cell;
    }



    /*  const array = [];
     for (let i = 0; i < totalCells; i++) {
         let number = 0;
         number += (i + 1);
         const cell = createCell(number, columns);
         cell.id = i + 1;

         array.push(cell);

         cell.addEventListener("click", () => {
             cell.classList.toggle("clicked");
         });
         grid.appendChild(cell);
     } */

    // Esecuzione

    const bombs = generateBombs(totalBombs, totalCells)
    console.log(bombs);

    generateGrid(totalCells, columns, bombs);
}

button.addEventListener("click", () => start());