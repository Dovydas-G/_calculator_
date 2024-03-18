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


// Num button
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


// Arithmetic Operators
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



let str = '';
oneBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += oneBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
});

twoBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += twoBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
   
});
threeBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += threeBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
});
fourBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += fourBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
});
fiveBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += fiveBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
});
sixBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += sixBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
});

sevenBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += sevenBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
});

eightBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += eightBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
});

nineBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += nineBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
});


zeroBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent += zeroBtnDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
});


plusBtnDOM.addEventListener('click', function () {

    if (typeof (+ str) === 'number' && str.length > 0) {
        if (str[str.length -1] !== ' '){
            primaryDisplayDOM.textContent += ' + ';
            str += primaryDisplayDOM.textContent;
        }
    }
    
});

minusBtnDOM.addEventListener('click', function () {

    if (typeof (+ str) === 'number' && str.length > 0) {
        if (str[str.length -1] !== ' '){
            primaryDisplayDOM.textContent += ' - ';
            str += primaryDisplayDOM.textContent;
        }
    }
    
});

multiplyBtnDOM.addEventListener('click', function () {
    
    if (typeof (+ str) === 'number' && str.length > 0) {
        if (str[str.length -1] !== ' '){
            primaryDisplayDOM.textContent += ' * ';
            str += primaryDisplayDOM.textContent;
        }
    }
     
});

divideBtnDOM.addEventListener('click', function () {
   
    if (typeof (+ str) === 'number' && str.length > 0) {
        if (str[str.length -1] !== ' '){
            primaryDisplayDOM.textContent += ' ÷ ';
            str += primaryDisplayDOM.textContent;
        }
    }
    
});
percentBtnDOM.addEventListener('click', function () {

    

    if (typeof (+ str) === 'number' && str.length > 0) {
        if (str[str.length -1] !== ' '){
            primaryDisplayDOM.textContent += ' % ';
            str += primaryDisplayDOM.textContent;
        }
    }

   
});

dotBtnDOM.addEventListener('click', function () {

    let countDots = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            countDots = i;
        }
        if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '÷') {
            countDots = 0;
        }
    }

    if (typeof (+ str) === 'number' && str.length > 0) {
        if (str[str.length -1] !== '.' && str[str.length -1] !== ' ' && countDots === 0){
            primaryDisplayDOM.textContent += '.';
            str += primaryDisplayDOM.textContent;
        }
    } 


});


equalBtnDOM.addEventListener('click', function () {
  
    let str = '';
    
    primaryDisplayDOM.textContent;
    str += primaryDisplayDOM.textContent;
    
    console.log(str)
    let numArr = str.split(' ');
    let count = 0;

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === '+') {
           count += (+ numArr[i += 1]);
        }
        else if (numArr[i] === '-') {
            count -= (+ numArr[i += 1]);
        }
        else if (numArr[i] === '*') {
            count *= (+ numArr[i += 1]);
        }
        else if (numArr[i] === '÷') {
            count /= (+ numArr[i += 1]);
        }
        else count += (+ numArr[i]);
    }
    console.log(count)
    
    let countDot = 0;
    const countToStr = ('' + count);

    for (let i = 0; i < countToStr.length; i++) {
        if (countToStr[i] === '.') {
            countDot++
        }
    }

    const result = countDot > 0 ? countToStr.length > 12 ? count.toFixed(10) :  countToStr : countToStr;
    

    secondaryDisplayDOM.textContent += result;
    
    const countLength = result.length;
    const equalLength = secondaryDisplayDOM.textContent.length;

        if (countLength !== equalLength) {
            primaryDisplayDOM.textContent = '';
            str += primaryDisplayDOM.textContent;
            secondaryDisplayDOM.textContent = '';
            str = '';
        }
    
});


console.log(str)

cleanBtnDOM.addEventListener('click', function () {
    primaryDisplayDOM.textContent = '';
    str += primaryDisplayDOM.textContent;
    secondaryDisplayDOM.textContent = '';
    str = '';
    
});








