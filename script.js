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
*/

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