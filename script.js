/*
let a=3; // number
let b=1.2; // number
let c= 'hello world'; // string
let d= "hello world"; // string
let e=true; // boolean
let f=false; // boole
let g=null; // väärtus, mis näitab väärtuse puudumist. (object ?)
let h=undefined; // undefined
let j=1/0; //Infinity type number
let k=-1/0; //-Infinity type number
let l=Math.sqrt(-1); // "Math" peab olema suure tähega algul. (NaN=Not a Number)
let m=[1, 1.2, 'asdasd', true]; // array (object)
let n={name: 'henri', age: 18}; // object
console.log(typeof m)
console.log(typeof n) */
/*let num = 3;
num=num+2;
num+=2;
num-=3;
num*=4;
num/=2;
num = 7 % 2; // moodulo
num= 6%4
num%=2;
num++; //lisab ühe võrra
num--; // vähendada väärtust ühe võrra
num=Math.PI;
num=Math.abs (-2);
num=2**5
console.log(num);
let text = 'hello world';
text = text + '!!!';
text+= 'abc';
text=text.length 

let answer = !true // NOT -> kui on ! siis tre muutub false ja vastupidi
answer = true && false; // AND
answer = true && true;
answer = false || true; // or
answer = true && false || true && !false && !(true || false); // = false
answer = false ^ true; // XOR = exclusiv order. On true kui ühel pool on true.

answer = 1 == 2; // kaks = kontrollib, kas mölemad on võrdsed. Siin näitab False
answer = '1' == 1; // siin tlgendab numbri ja kuna on võrdsed, siis näitab true
answer = '1' === 1; // kontrollivad "tüüpe" naiteks, kuidas üks on orants ja teine üks on heleroheline
answer = '' == 0;
answer = !1 == 2; // üks ei ole võrden kahe, jah ei ole = true
answer = 2 < 10; // kaks väiksem kui kümme. True
answer = 2 > 10;
answer = 10 < 10;
answer = 10 > 10;
answer = 10 <= 10;
answer = 10 >= 10;

console.log(answer);

import readline from 'node:readline'; // ????????
const rl = readline.createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout,
});



rl.question('Give us a number', a => {; 
if(a<10){
    console.log('less than 10');
}else if(a==10){
    console.log('equal to 10')
} 
else {
    console.log('more than 10')
}
rl.close();
}) // Ei saa muffigi aru. 

const date = new Date('2005-12-23T12:00:00');
console.log(date);
console.log(date.getDay());

switch(date.getDay()){
    case 0:
        console.log('Pühapäev');
        break;
    case 1:
        console.log('Esmaspäev');
        break;
    case 2:
        console.log('Teisipäev');
        break;
    case 3:
        console.log('Kolmapäev');
        break;
    case 4:
        console.log('Nelöjapäev');
        break;
    case 5:
        console.log('Reede');
        break;
    case 6:
        console.log('Laupäev');
        break;

} */
/*
for(let i=0;i<10;i++){
    console.log(i);
}
for(let i=9;i>=0;i--){
    console.log(i);
}
for(let i=9;i<0;i--){
    console.log(i);
}

for(let i=0; i<=1000; i+=2){
    console.log(1);
}

for(let i=0; i<=1000; i*=2){
    console.log(1);
}

for(let i=0; i<=1000; i+=2){
    console.log(1);
}
*/
/*
let i= 10;
while(i<0){
    console.log('loop');
}

do {
    console.log('loop');
} while(i<0);

let array = ['banana', 'apple', 'cherry', 'granade'];

for(value of array){
    console.log(value);
}

let object = {
    name: 'Bob',
    Age: 78,
    color: 'pink',
}
for(key in object){
    console.log(key, object[key])
}

function hello(){
    console.log('hello function');
}

hello();

function greet(name='Nameless', age){
    console.log('Hello ' + name + '!You are ' + age + ' years old');
}

greet('Eric', 18);
greet('Bob', 78);
greet();

let sum = function (a, b){
    return a+b;
}

let answer = sum(2,4);
console.log(answer);

let sub = (a,b) => {
    return a-b;
}
answer = sum(2,4);
console.log(answer);

let div =(a, b) => a/b;

answer = div(2,4);
console.log(answer);

let root = a => a*a;

answer = root(6);
console.log(answer);

let object = {
    hello(){
        console.log('Hello object');
    },
    goodbye: () => {
        console.log('Goodbye object');
    }
}

object.hello();
object.goodbye();

function isNameLong(name){
    return name.length > 5;
}

console.log(isNameLong('Optimus'));
console.log(isNameLong('Bob'));

function recursive(num){
    console.log(num);
    if(num<10){
        //num++;
        recursive(++num);
    }
}
// recursive = functsioon, mis kutsub välja ise ennast.
recursive(0);

let fruits = ['apple', 'mango', 'banana', 'handgranade', 'cherry'];

fruits.forEach(function (fruit, i, fruits){
    console.log(fruit, i, fruits);
});

let capitalizeFruits = fruits.map(function(fruit) {
    return fruit.charAt(0).toUpperCase() + fruit.slice(1);
});

console.log(capitalizeFruits)

let mangoIndex = fruits.findIndex(function (fruit) {
    return fruit == 'mango';
});

console.log(mangoIndex);

let fruitsWithA = fruits.filter(function (fruit){
   return !fruit.includes('a');
});

console.log(fruitsWithA);

let nums = [3, 8, 9, 1323, 4, 7, 2 ,5];

let product = nums.reduce(function (prod, num) {
    return prod * num;
}, 1);

console.log(product);
//KUSKIL SIIN ON ERROR!
sortsortedNums = num((a,b) => b - a);

console.log(sortedNums); 

let person = {
    name:'Henri',
    age: 18,
    sex:'Male',
    'id-code': '50512231423',
    getBirthYear(){
        return this ['id-code'].slice(1,3);
    }
};

console.log(person.name);
console.log(person['id-code']);
console.log(person.getBirthYear());

class Person {
    constructor(){
        this.name = '';
        this.idCode = '';
    }
    getCentury(){
        let num = parseInt(this.idCode.charAt(0));
        return 1700 + Math.ceil(num/2) * 100
    }

    getBirthYear() {
        return this.idCode.slice (1,3);
    }

    getSex(){
        if(parseInt(this.idCode.charAt(0)) % 2 === 0){
            return 'Female';
        } else {
            return 'Male';
        }
    }
    getBirthMonth(){
        return this.idCode.slice (3,5);
    }
    getBirthDay(){
        return this.idCode.slice (5,7);
    }
};

let person1 = new Person();
person1.name = 'Erik';
person1.idCode = '50512231423'

console.log(person.getBirthYear());
console.log(person1);
console.log();


// HTML algab pihta!
let button = document.querySelector('button');
button.addEventListener('click', function (event){
    console.log(event);
    let heading = document.querySelector('h1');
    heading.innerHTML = 'Hello VM23';
});

let input = document.querySelector('input');
input.addEventListener('input', function(event){
let text = document.querySelector ('h1#text');
text.innerHTML = input.value.split('').reverse().join('');
});


let button = document.querySelector('button');
let input = document.querySelector('input');
let list = document.querySelector('ul');


let add = () => {
    if(input.value. trim()){
    let listItem = document.createElement('li');
    listItem.innerHTML = input.value.trim();
    list.append(listItem);
    }
    input.value = '';
}

button.addEventListener('click', add)
input.addEventListener('keydown', event => {
    if(event.code === 'Enter'){
        add();
    }
});

button.addEventListener('mouseover', () => {
    button.disabled = true; 
});

button.addEventListener('mouseleave', () => {
    button.disabled = false;
}); 

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let x = 100;
let y = 100;

context.rect(100, 100, 100, 100);
context.fillStyle = '#b3a899'
context.fill();

setInterval(() => {
    context.clearRect(x,y, 100, 100);
    context.beginPath();
    x+=1;
    context.rect(x, y, 100, 100);
    context.fillStyle = '#b3a899';
    context.fill(); // Liigub kuub paremale
}, 16,6666666666); 

let start;
let prevTimestamp;
function step(timestamp){
    if(prevTimestamp == undefined){
        prevTimestamp = timestamp
    }
    if(start == underfined){
        start = timestamp;
    }
    let delta = timestamp - prevTimestamp;
    prevTimestamp = timestamp;

    console.log(delta);

    console.log(timestamp);
    console.log(start);
    context.clearRect(x-1,y, 100, 100);
    context.beginPath();
    x+=10/60*delta;
    context.rect(x, y, 100, 100);
    context.fillStyle = '#b3a899';
    context.fill();

    requestAnimationFrame(step);
}

requestAnimationFrame(step);

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let draw = false;

Canvas.addEventListener('mousemove', event => {
    if(draw){
        let rect = event.target.getBoundClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.right;
        ontext.beginPath();
        context.arc(event.clientX, event.clientY, 30, 0, 2*Math.PI);
        context.fill();
    }
});

canvas.addEventListener('mousedown', () => {
    draw = true;
});

canvas.addEventListener('mousedown', () => {
    draw = false;
});

let color = document.querySelector('input');
color.addEventListener('input', () => {
    context.fillStyle = color.value;
}); */ 

import common from ('./common.js');
common.hello();
import es from './es.js';
es.hello();
