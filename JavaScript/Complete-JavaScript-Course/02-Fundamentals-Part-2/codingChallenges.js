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
let tips=[];
let total =[];
const bills = [125,555,44];
let calcTip = function (){
    for(let i=0; i< bills.length; i++){
        let tip = bills[i] >= 50 && bills[i] <= 300 ? bills[i]*0.15 : bills[i]*0.2;
        tips.push(tip);
        total.push(tip+bills[i]);
        console.log(`Your bill is ${bills[i]} and after adding tip ${tip} your total will be ${total[i]} `)
        }
}
calcTip();
