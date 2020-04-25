// alert('Hello')
// const isUserReady = confirm('Are you ready?');
// console.log(isUserReady);
// const userName = prompt ('what is you name?');
// console.log(userName);

// let age = 30;
// let newAge = String(age);
// console.log(typeof newAge);

// let saraAge = '29';

// let newSaraAge = +saraAge;
// ;
// console.log(typeof saraAge;newSaraAge);

// const notEmptyString = 'Glifnrifig';
// const notEmptyString = ' fffff';


// console.log(Boolean(value:0));
// console.log(Boolean(value:14));

// console.log(5 + 5);
// console.log(5 - 5);
// console.log(5 / 5); 
// console.log(5 * 5);

// const age = '1';
// const friendAge = '2';
// const result = age + friendAge;
// const newAge = +age;


// let height = 100;
// console.log(height++);
// console.log(height);


// console.log(5 + 3 * 2);
// let height = 100;
// console.log(--height);
// console.log(height);



// const age = 55;
 
// if (age===50) {
//     console.log('Hello');
// }
// else if (age <50 && age !==30){
//     console.log('dafgh');
// }
// else if(age <50){
//     console.log('dafgh');
// }
// else {
//     console.log('fghhdjjdk');
// }

// if(userAge < str12)


// 'use strict';
// let name = 'petr';

// function checkSalary () {
//     console.log(name);
// }
// checkSalary();

// name = "pasha";


// function figSalary(){
//     const salary= promt('введите ваш возраст');
//     console.log(salary * 2);
// }

// figSalary();

// function myFunction(salary){
//     const result = salary * 2;
//     return result;
// }

// const result1 = (salary:300);
// const result2 = (salary:500);

// console.log(result1);
// console.log(result2);

function checkminway (x,z){
    let result;
     if ( x < z){
         result = x;
     } else {
         result = z;
     }

     return result;

}
const result1 = checkminway(10,7);
const result2 = checkminway(23,30);

console.log(result1);
console.log(result2);




function checkfloor (x){
    let result;
     if ( x < 13){
         result = x + 1;
     } else {
         result = x;
     }
     return result;
    

}
const result3 = checkfloor(10,7);
const result4 = checkfloor(23,30);

console.log(result3);
console.log(result4);



let name = 'Ggg';
let age = 40;
  

let userNames = new Array();


let userAges = [29,25,54,'qqqq',36];
let users = [{
    userId: 'iknk',
    userName: 'vvvv',
}
]

console.log(userNames);
console.log(userAges[3]);


console.log(userAges.length);


userAges[0] = 30;
console.log(userAges);


userAges[3 +1] = 30;
userAges[8] = 'hjkl';

console.log(userAges.length);


// zadanie5
// massiv

// let styles = ['джаз','блюз'];

// styles.push('рок-н-рол');
// console.log(styles);

// styles[styles.length-2] = 'classic';
// console.log(styles);

// alert(styles.shift());
// console.log(styles);

// styles.unshift('Rap','Reggi');
// console.log(styles);

// циклы тема



//1
let agesdd = ['10','11','12'];
for (let i = 0; i < 3; i++){
    console.log(1);
}


//2

let ages = ['10','11','12'];

for (let i = 0; i < 3; i++){
    console.log(ages[i]);
}

//3
let countgg = 1;
while(countgg < 3){
    console.log(countgg);
    countgg++;
}


//4
let count = 1;
while(count < 3){
    console.log(count);
    count++;
}

do{
    console.log(count);
}while (count < 0)

//5
// Создать массив при помощи цикла


let nameUser5 = [];
for(let i = 0;i < 10; i++){
    nameUser5[i] = i;
    }
console.log(nameUser5);


//модифицировать чтоб каждый элемент был
//больше предыдущего на пять





//dom
const spanEL = document.getElementById('primer')
console.log(spanEL);











