console.log("Hello");

var b= 'Smoothie';
console.log(b);

var number=24;
console.log(number)

// var age=prompt("Enter your age :");



function Username(Uname){
    //Uname=prompt("Enter your name : ");
    //console.log(Uname);
  
}
// Username();

function sum(num1,num2){
    var result=num1+num2;
    console.log(result);

}

sum(2,5)

// var num=0;

// while(num<100){
//     num += 1
//     console.log(num)
// }

for(let num=0;num<=100;num++){
    console.log(num);
}


let yourName='rock';

let name={first: 'Rocks',last:'Band'};
console.log(name.first,name.last)


let fruits=['banana','apple','orange']
fruits = new Array('banana','apple','orange','mango');
console.log(fruits );

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// array methods

console.log('toString',fruits.toString()) 

console.log(fruits.join('}'));
console.log(fruits.pop())
console.log(fruits.push('Blackberry'),fruits) 
fruits[fruits.length]='new fruits';
console.log(fruits)

console.log(fruits.shift());
console.log(fruits.unshift('Kiwi'),fruits);

let vegetables=['tomato','broccoli','asparagus'];
let allgroceries=fruits.concat(vegetables);
console.log(allgroceries)

console.log(allgroceries.slice(1,5))
console.log(allgroceries.reverse());
 


let someNumbers=[5,545,58,84,98,15,2,7,9,213,15];
console.log(someNumbers.sort(function(a,b){return a-b}));
console.log(someNumbers.sort(function(a,b){return b-a}));

let emptyArray= new Array();
for(let num=0;num<10;num++){
    emptyArray.push(num);
}

console.log(emptyArray)
console.log(emptyArray.push(5))
console.log(emptyArray)

console.log(emptyArray.slice(3,8))
console.log(emptyArray.reverse())

//Objects 
let student ={first:'Mubeen',
 last:'Shaikh',
 age:20 ,
 height:170,
 studentDetails: function(){
     return 'First name: '+ this.first + '\nLast name: ' + this.last + '\nstudents age: ' + this.age;
 }
}
console.log(student.first)
console.log(student.last)

student.first='what';
student.age=25;
// console.log(student.age)
// console.log(student.first,student.last)
console.log(student.studentDetails())

//Conditional statements

//var age=prompt("Enter your age:");
age=20
if( (age>=18) && (age<=35) ){
    status='my audience';
    console.log(status)
}
else{
    status='not my audience';
    console.log(status)
}

//switch statements 

var obtainedMarks=86;
var grade='';
switch(obtainedMarks){
    case obtainedMarks<=60:
        grade='Fail'
        break;
    case obtainedMarks<=70:
        grade='Pass'
        break;
    case obtainedMarks<=80:
        grade='Good'
         break;
    case (obtainedMarks<=90): 
        grade='vERY GOOD';
        break;
    default:
        grade='Pass'
}

console.log(grade)




