const winLabel = document.getElementById("win-label");

let playerOne = '';
let playerTwo = '';

const updateName = () => {
    playerOne = document.getElementById('player-one').value;
    playerTwo = document.getElementById('player-two').value;
}

let clickCount = 0;
let c1 = [];
let c2 = [];
let c3 = [];
let r1 = [];
let r2 = [];
let r3 = [];
let d1 = [];
let d2 = [];

const turnTracker = () => {
    clickCount++;
}

const winChecker = (arr) => {
    if (arr.length === 3) {
        if (arr[0] === 'O' && arr[0] === arr[1] && arr[0] === arr[2]) {
            winLabel.innerText = playerOne + " Win!";
        }
        else if (arr[0] === 'X' && arr[0] === arr[1] && arr[0] === arr[2]) {
            winLabel.innerText = playerTwo + " Win!";
        }
        else if (clickCount === 9) {
            winLabel.innerText = "Draw!"
        }
    }
}

const marker = (btn) => {
    const button = document.getElementById(btn);
    if (clickCount % 2 === 0) {
        button.innerText = 'X';

        if (btn === 'one' || btn === 'four' || btn === 'seven') {
            c1.push('X');
            winChecker(c1);
        }
        if (btn === 'two' || btn === 'five' || btn === 'eight') {
            c2.push('X');
            winChecker(c2);
        }
        if (btn === 'three' || btn === 'six' || btn === 'nine') {
            c3.push('X');
            winChecker(c3);
        }
    
        if (btn === 'one' || btn === 'two' || btn === 'three') {
            r1.push('X');
            winChecker(r1);
        }
        if (btn === 'four' || btn === 'five' || btn === 'six') {
            r2.push('X');
            winChecker(r2);
        }
        if (btn === 'seven' || btn === 'eight' || btn === 'nine') {
            r3.push('X');
            winChecker(r3);
        }
        
        if (btn === 'one' || btn === 'five' || btn === 'nine') {
            d1.push('X');
            winChecker(d1);
        }
        if (btn === 'three' || btn === 'five' || btn === 'seven') {
            d2.push('X');
            winChecker(d2);
        }
    }
    else {
        button.innerText = 'O';

        if (btn === 'one' || btn === 'four' || btn === 'seven') {
            c1.push('O');
            winChecker(c1);
        }
        if (btn === 'two' || btn === 'five' || btn === 'eight') {
            c2.push('O');
            winChecker(c2);
        }
        if (btn === 'three' || btn === 'six' || btn === 'nine') {
            c3.push('O');
            winChecker(c3);
        }
    
        if (btn === 'one' || btn === 'two' || btn === 'three') {
            r1.push('O');
            winChecker(r1);
        }
        if (btn === 'four' || btn === 'five' || btn === 'six') {
            r2.push('O');
            winChecker(r2);
        }
        if (btn === 'seven' || btn === 'eight' || btn === 'nine') {
            r3.push('O');
            winChecker(r3);
        }
        
        if (btn === 'one' || btn === 'five' || btn === 'nine') {
            d1.push('O');
            winChecker(d1);
        }
        if (btn === 'three' || btn === 'five' || btn === 'seven') {
            d2.push('O');
            winChecker(d2);
        }
    }
    button.disabled = true;
}