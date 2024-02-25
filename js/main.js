const data = [

    [
        [''], 
        
        [''], 

        ['C', '()', '%', '÷'],   

        ['7', '8', '9', 'x'],    

        ['4', '5', '6', '-'],

        ['1', '2', '3', '+'],

        ['+/-', '0', '.', '='],  
    ]
        
];

const calculatorClasses = ['primary-display', 'secondary-display', 'clean-btn', 'brackets-btn',
'percent-btn', 'divide-btn', 'seven-btn', 'eight-btn', 'nine-btn', 'multiply-btn', 'four-btn',
'five-btn', 'six-btn', 'minus-btn', 'one-btn', 'two-btn', 'three-btn', 'plus-btn','plus-minus',
'zero-btn', 'dot-btn', 'equal-btn'];

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
};


contentDOM.innerHTML = HTML;

let primaryDisplayDOM = document.querySelector('.primary-display');
let secondaryDisplayDOM = document.querySelector('.secondary-display');

const oneBtnDOM = document.querySelector('.one-btn');
const twoBtnDOM = document.querySelector('.two-btn');
const threeBtnDOM = document.querySelector('.three-btn');
const fourBtnDOM = document.querySelector('.four-btn');
const fiveBtnDOM = document.querySelector('.five-btn');
const sixBtnDOM = document.querySelector('.six-btn');
const sevenBtnDOM = document.querySelector('.seven-btn');
const eightBtnDOM = document.querySelector('.eight-btn');
const nineBtnDOM = document.querySelector('.nine-btn');
const zeroBtnDOM = document.querySelector('.zero-btn')

const cleanBtnDOM = document.querySelector('.clean-btn');
const bracketsBtnDOM = document.querySelector('.brackets-btn');
const percentBtnDOM = document.querySelector('.percent-btn');
const divideBtnDOM = document.querySelector('.divide-btn');
const multiplyBtnDOM = document.querySelector('.multiply-btn');
const minusBtnDOM = document.querySelector('.minus-btn');
const plusBtnDOM = document.querySelector('.plus-btn');
const plusMinusBtnDOM = document.querySelector('.plus-minus');
const dotBtnDOM = document.querySelector('.dot-btn');
const equalBtnDOM = document.querySelector('.equal-btn');


oneBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 1;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})

twoBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 2;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})
threeBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 3;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})
fourBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 4;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})
fiveBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 5;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})
sixBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 6;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})

sevenBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 7;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})

eightBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 8;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})

nineBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 9;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})


zeroBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += 0;
    str += primaryDisplayDOM.textContent;
    console.log(str)
})


plusBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += ' + ';
    str += primaryDisplayDOM.textContent
    
    console.log(str);
})

minusBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent += ' - ';
    str += primaryDisplayDOM.textContent
    
    console.log(str);
})

equalBtnDOM.addEventListener('click', function () {
    let str = '';
    
    primaryDisplayDOM.textContent;
    str += primaryDisplayDOM.textContent
    
    let numArr = str.split(' + ' || ' - ');
    let count = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] >= '1' && numArr[i] <= '9') {
            count += (+ numArr[i]);
        }
    }
    
    secondaryDisplayDOM.textContent += ('' + count)
    
    console.log(count)
})



cleanBtnDOM.addEventListener('click', function () {
    let str = '';
    primaryDisplayDOM.textContent = '';
    str += primaryDisplayDOM.textContent;
    secondaryDisplayDOM.textContent = '';
    console.log(str);
})








