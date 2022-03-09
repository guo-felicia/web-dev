/*2. Loading External JavaScript Files */
// alert('Hello World!');

/*3. Writing to the Console*/
console.log('Hello World!');

// ADD THIS BLANK console.log() for line break and better visual in console :)
console.log('');

/*4. Variables and Constants*/
console.log('Variables and Constants');
var global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped -
    blockScoped;

console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

console.log('');

/* 5. Variable Types */
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

console.log('');

/* 6. Boolean Variables */
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);

console.log('');

/* 7. Conditionals */
console.log('If else');
if (true1) {
    console.log(true);
}

if (!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log('');

/* 8. Ternary Conditional Operator */
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

console.log('');

/* 9. Functions */
//9.1 New ES5 Functions
console.log('Legacy ES5 function');

function add(a, b) {
    return a + b;
}

const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log('');

//9.2 New ES6 Functions
console.log('New ES6 functions');
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

console.log('');

//9.3 Implied Return
console.log('Implied Return');
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log('');

// 9.4 Parenthesis and Parameters
console.log('Parenthesis and parameters\n');
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log('');

/* 10. Array*/
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];

var two = numberArray1[1];
var five1 = numberArray1[4];
var seven = variableArray1[2];
let numberArray2 = [1, 2, 4, 5, 6];
let stringArray2 = ['string1', 'string3'];
console.log('Array');
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);
console.log('0:' + two);
console.log('1:' + five1);
console.log('2:' + seven);
//QUESTION
console.log(numberArray2);
console.log(stringArray2);

console.log('');

// 10.1 Array index and length
console.log('Array index and length');
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

console.log('');

// 10.2 Adding and Removing Data to/from Arrays
console.log('Add and remove data to arrays');
// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

console.log('');

// 10.3 For Loop
console.log('For loops');
for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

console.log('');

// 10.4 Map Function
console.log('Map function');
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log(numberArray1);
console.log(squares);
console.log(cubes);

console.log('');

// 10.5 The Find Function
console.log('Find Function');
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(four);
console.log(string3);

console.log('');

// 10.6 The Find Index Function
console.log('Find index');
const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log(fourIndex);
console.log(string3Index);

console.log('');

// 10.7 The Filter Function
console.log('Filter function');
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);

console.log(numberArray1);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

console.log('');

/* 11. Template Strings*/
console.log('Template strings');

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const loggedIn2 = false;
const greeting2 = `Logged in: ${loggedIn2 ? "Yes" : "No"}`;
console.log(greeting2);

console.log('');


// /////////////////////////// jQuery ///////////////////////////////

/* 1. Executing jQuery Scripts*/
const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */
}
$(init);

console.log('');

/* 2. Binding to the DOM */
const bindById = $('#bind-by-id');
const bindByClass = $('.bind-by-class');
console.log('Binding to DOM');
console.log(bindById);
console.log(bindByClass);

/* 3. Changing Style Programmatically */
const changeStyle = $('#change-style');
const changeStyle2 = $('.change-style');
changeStyle.css('color', 'red');
changeStyle2.css('color', 'blue');

console.log('');

/* 4. Getting and Setting Attributes*/
const getIdAttr = $("#get-id-attr");
const id = getIdAttr.attr('id');
console.log(id);

const setClassAttr = $("#set-class-attr");
setClassAttr.attr('class', 'class-0');

/*5. Adding and Removing Classes*/
const addClass1Example = $("#add-class-1");
addClass1Example.addClass('class-1');
// Example 2
const removeClass1Example = $("#remove-class-1");
removeClass1Example.removeClass('class-2');

/*6. Hiding and Showing Content*/
const hideMe = $("#hide-me");
hideMe.hide();
// Example 2
const showMe = $("#show-me");
showMe.show();

/*7. Creating New Elements*/
const newLineItem = $("<li>Line item 1</li>");
const anotherLineItem = $("<li>Line item 2</li>");

/*8. Appending New Elements*/
const ul = $("#append-new-elements");
ul.append(newLineItem);
ul.append(anotherLineItem);

/*9. Removing and Emptying Content*/
const removeThisLi = $("#remove-this");
const emptyThisUl = $("#empty-this");
removeThisLi.remove();
emptyThisUl.empty();

/*10. Changing Content*/
const changeThisText =
    $("#change-this-text");
const changeThisHtml =
    $("#change-this-html");
changeThisText.html('New text');
changeThisHtml.html(`
    <li>Line item A</li>
    <li>Line item B</li>
    <li>Line item C</li>
`);

/*11. Navigating Up and Down the DOM Hierarchy*/
const child2 = $("#child-2");
const parent1 =
    child2.parents("#parent");
parent1
    .css('background-color', 'red')
    .css('color', 'white');

const parent = $("#parent");
const child = parent.find("#child-2");
child.css('background-color', 'blue')

/*12. Handling click events*/
const handleClick =
    () => console.log('Handle click');
const clickable = $('.clickable');
clickable.click(handleClick);

/*13. Event target*/
const handleEventTarget = (event) => {
    const target = event.target;
    console.log(target);
    $(target)
        .css('background-color', 'blue')
        .css('color', 'white');
}
const eventTarget = $("#event-target");
eventTarget.click(handleEventTarget);

/*14. Hiding and showing content*/
//define var/const - relate it to id in html
let hideBtn, showBtn, hideShowHeader;
hideBtn = $('#hide');
showBtn = $('#show');
hideShowHeader = $('#hide-show');
//define the function -- for action
const hideHandler = () => {
    hideShowHeader.hide();
}
const showHandler = () => {
    hideShowHeader.show();
}
//assign two button function/actions
hideBtn.click(hideHandler);
showBtn.click(showHandler);




////test
let gu = {
    si: 'da',
    cf: 'qe'
}
let uj = {
    cf: 'do',
    co: 'db',
    ...gu,
}
gu = {
    ...uj,
    cf: 'wh',
    co: 'nd'
}


console.log("TEST")
console.log(gu.si)
console.log(uj.cf)
console.log(gu.co)


let qq = [21,32,43,54,65,76];
let ww = [98,87];
let ee = [65,54,43,32,ww,...qq]
console.log(ee.length)

const PC = () => <h1>GO</h1>
const PC2 = () => { return(<h1>GO</h1>) }

function PC3() {
    return(<h1>GO</h1>)
}

