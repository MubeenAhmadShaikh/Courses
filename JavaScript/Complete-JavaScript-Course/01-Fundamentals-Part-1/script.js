

//Coding Challenge #3
let dolphinsScore1= 97;
let dolphinsScore2= 112;
let dolphinsScore3= 101;

let koalasScore1= 109;
let koalasScore2= 95;
let koalasScore3= 106;

let dolphinAverage = 0; 
let koalaAverage = 0; 
let result;
function calculateAverage(){
    koalaAverage = ((koalasScore1+koalasScore2+koalasScore3)/3);
    dolphinAverage = ((dolphinsScore1+dolphinsScore2+dolphinsScore3)/3);

    if(koalaAverage>=100 && dolphinAverage>=100){
        if(koalaAverage>dolphinAverage){
            result = `Koalas are the winner with the average score of ${koalaAverage} greater than ${dolphinAverage}`;
        }
        else if(koalaAverage === dolphinAverage){
            result = `It's a draw of average score koalas Score = ${koalaAverage}, dolphins score = ${dolphinAverage}`;
        }
        else{
            result =  `Dolphins are the winner with the average score of ${dolphinAverage} greater than ${koalaAverage}`;
          p}///
        return result;
    }
    else{
        return "Average score should be at least 100";
    }
    
}
console.log(calculateAverage());
