'use strict';
// Coding Challenge #1

// const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

// let dolphinsAverage = Math.floor(calcAverage(44,23,71));
// let koalasAverage = Math.floor(calcAverage(65,54,49));

//  function checkWinner(avgDolphins,avgKoalas){
//      if(avgDolphins >= avgKoalas*2){
//         return console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}` )
//      }else if(avgKoalas >= avgDolphins*2){
//         return console.log(`Koalas win ${avgKoalas} vs ${avgDolphins} `)
//      }else if(avgKoalas === avgDolphins){
//          return console.log(`It's a draw with ${avgDolphins} vs ${avgKoalas}`);
//      }else{
//             return console.log(`no one wins ${avgDolphins} vs ${avgKoalas}`)
//      }

//  }
// checkWinner(dolphinsAverage,koalasAverage);
// dolphinsAverage = Math.floor(calcAverage(85,54,41));
// koalasAverage = Math.floor(calcAverage(23,34,27));
// checkWinner(dolphinsAverage,koalasAverage);

// Coding Challenge #2
// let tips=[];
// let total =[];
// const bills = [125,555,44];
// let calcTip = function (){
//     for(let i=0; i< bills.length; i++){
//         let tip = bills[i] >= 50 && bills[i] <= 300 ? bills[i]*0.15 : bills[i]*0.2;
//         tips.push(tip);
//         total.push(tip+bills[i]);
//         console.log(`Your bill is ${bills[i]} and after adding tip ${tip} your total will be ${total[i]} `)
//         }
// }
// calcTip();
// -----Object methods------
// const jonas = {
//     firstName:'Jonas',
//     lastName: 'Schemadment',
//     birthYear:1991,
//     job: 'teacher',
//     friends: ['Michael','Peter','Steven'],
//     hasDriversLicense: false,
//     calcAge: function (){
//         this.age = 2037 - this.birthYear;
//         console.log(this.age)
//         return this.age;
//     },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense?'a':'no'} driver's license `
//     }
// };
// let nameKey= 'Name';

// // console.log(`${jonas['first'+nameKey]} has ${jonas.friends.length} friends, and his best friend  is ${jonas.friends[0]}`)
// console.log(jonas.getSummary())

// Coding Challenge #3

// const john={
//     fullName:'John Smith',
//     mass:'78',
//     height:'1.69',
//     calcBMI: function(){
//         return Math.floor(this.mass/this.height**2);
//     }
// }

// const mark={
//     fullName:'Mark Killer',
//     mass:'92',
//     height:'1.95',
//     calcBMI: function(){
//         return Math.floor(this.mass/this.height**2);
//     }
// }

// console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${john.calcBMI()>mark.calcBMI()?'higher':'lower'} than ${mark.fullName}'s (${mark.calcBMI()})`)

// const jonasArray=[
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven']
// ];

// for(let i=0;i<jonasArray.length;i++){
//     console.log(jonasArray[i]);
// }

//Calculate the ages and store in an array

// let birthYear= [1991, 2007, 1969, 2020];
// let ages=[];
// for(let i=0; i<birthYear.length;i++){
//     let age = 2037 - birthYear[i];
//     console.log(age)
//     ages.push(age)
// }

// console.log(ages)

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
for (let i = 0; i < bills.length; i++) {
  let tip =
    bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
  tips.push(tip);
  total.push(tip + bills[i]);
  //console.log(`Your bill is ${bills[i]} and after adding tip ${tip} your total will be ${total[i]} `)
}
// Coding Challenge#4 BONUS
// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return console.log(`Average is ${sum / arr.length}`);
// }
// calcAverage(total);

// Section -5
// Coding Challenge #1

//Understanding the Problem
// what is the amplitude? Diff between highest and lowest temp
// How to check max and min temperature?
// How to ignore errors ?

// Sub-problems
// How to ignore errors
// Find max value
// Find min value
// Subtract min from max to return the amplitude

// function amplitude(t1, t2) {
//   let arr = t1.concat(t2);
//   let max = arr[0];
//   let min = arr[0];

//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') continue;
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   return console.log(`Amplitude is ${max - min}`);
// }

// amplitude([-2, 3, 5, 1, 6, 'wow error', '0', 0], [3, 6, 2, 'dedhd', -3, 'sd']);

//  Coding Challenge#1
const printForcast = function (arr) {
  let forcast = '... ';
  let day = 1;
  for (let i = 0; i < arr.length; i++) {
    forcast += `${arr[i]}^C in ${day} days ...`;
    day++;
  }
  return console.log(forcast);
};

printForcast([17, 21, 23]);
printForcast([12, 5, -5, 0, 4]);
