const data = [

    [
        ['2 + 7'], 
        
        ['9'], 

        ['C', '()', '%', '÷'],   

        ['7', '8', '9', 'x'],    

        ['4', '5', '6', '-'],

        ['1', '2', '3', '+'],

        ['+/-', '0', '.', '='],  
    ]
        
];

const calculatorClasses = ['primary-display', 'secondary-display', 'clean-btn', 'brackets-btn',
'percent-btn', 'divide-btn', 'seven-btn', 'eight-btn', 'nine-btn', 'multiply-btn', 'four-btn',
'five-btn', 'six-btn', 'minus-btn', 'one-btn', 'two-btn', 'three-btn', 'plus-btn','plus-minus', 'zero-btn',
'dot-btn', 'equal-btn'];

const contentDOM = document.getElementById('content');

let HTML = '';

let index = 0;

for (const row of data) {
    let columnHTML = '';
    for (const column of row) {
        let itemHTML = '';
        for (const item of column) {
            itemHTML += `<div class="${calculatorClasses[index]} btn" >${item}</div>`;
            index++;
        }
        columnHTML += `<div class="column">${itemHTML}</div>`;

    }
    HTML += `
            <div class="row">
                ${columnHTML}
            </div>
            `;
}


contentDOM.innerHTML = HTML;