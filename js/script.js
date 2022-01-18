/* 
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//* FUNZIONI DA UTILIZZARE

function createCell(cellNumber, cellsPerRow) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.id = cellNumber;
    cell.innerText = cellNumber;
    const wh = `calc(100% / ${cellsPerRow})`;
    cell.style.height = wh;
    cell.style.width = wh;
    return cell;
}

// RECUPERO LA GRIGLIA
const select = document.getElementById("choices");
const grid = document.getElementById("grid");
const button = document.getElementById("start");

function start() {
    grid.innerHTML = '';
    grid.style.display = 'flex';

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

    const total = columns * columns;
    const array = [];


    for (let i = 0; i < total; i++) {
        let number = 0;
        number += (i + 1);
        const cell = createCell(number, columns);
        cell.id = i + 1;

        array.push(cell);

        cell.addEventListener("click", () => {
            cell.classList.toggle("clicked");
        });
        grid.appendChild(cell);
    }
}

button.addEventListener("click", () => start());