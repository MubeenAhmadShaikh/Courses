// Challenge 1 : Age in Days

function ageIndays(){
    var birthYear= prompt('Whats your birth year buddy ?');
    var days=(2021-birthYear)*365;

    var textToShow=document.createTextNode('You are ' + days + ' days old.');
    var h1=document.createElement('h1');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textToShow);
    document.getElementById('flex-res').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


function generate(){
    var img=document.createElement('img');
    img.src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    
    img.setAttribute('name','catImages');
    document.getElementById('cat-gen').appendChild(img);
}

function removeCats(){
    var cats=document.getElementsByName('catImages');
    cats.remove();
}
// Challenge 3 : Rock Paper Scissor

 // My code
// function rps(choice){
//    var humanChoice, botChoice;
//    humanChoice=choice.id;
     
//    let bChoice=["rock","paper","scissor"];
//    botChoice= bChoice[Math.floor(Math.random() * bChoice.length)];
   
//    botChoiceImage=document.getElementById(botChoice);
//    //humanChoice botChoice
//    function decideWinner(humanChoice,botChoice){
//        if(humanChoice == botChoice){
//             message='You tied';
//        }
//        else{
//            if((humanChoice == 'rock' && botChoice == 'scissor')){
//                message='You won';
//            }
//            else if(humanChoice == 'rock' && botChoice == 'paper'){
//                message='You lost';
//            } 
//            else if(humanChoice == 'paper' && botChoice == 'rock'){
//             message='You won';
//         }
//         else if(humanChoice == 'paper' && botChoice == 'scissor'){
//             message='You lost';
//         }
//         else if(humanChoice == 'scissor' && botChoice == 'paper'){
//             message='You won';
//         }
//         else if(humanChoice == 'scissor' && botChoice == 'rock'){
//             message='You lost';
//         }
//        }
//        return message;
//    }

//    decideWinner(humanChoice,botChoice);
//    result=message;
//    function finalMessage(result){
//        if(result == 'You won'){
//            color='green';
//        }
//        else if(result == 'You lost'){
//            color='red';
//        }
//        else{
//            color='yellow';
//        }
//        return result,color;
//    }
//    finalMessage(result);

//    function rpsFrontEnd(humanChoice,botChoice,result,color){
//        document.getElementById('rock').remove();
//        document.getElementById('paper').remove();
//        document.getElementById('scissor').remove();

       
//        var img1=document.createElement('img');
//        img1.setAttribute('id','humanChoice');
//        img1.src=choice.src;
//        img1.setAttribute('class','img-blue')
//        document.getElementById('rps').appendChild(img1);

//        var h1=document.createElement('h1');
//        h1.setAttribute('id','resultText');
//        h1.innerHTML=result;
//        h1.style.color=color;
//        document.getElementById('rps').appendChild(h1);
       

//        var img2=document.createElement('img');
//        img2.setAttribute('id','botChoice');
//        img2.src=botChoiceImage.src;
//        img2.setAttribute('class','img-red')
//        document.getElementById('rps').appendChild(img2);

//        var textYou=document.createTextNode('You');
//        var you=document.createElement('h2');
//        you.appendChild(textYou)
//        document.getElementById('play').appendChild(you) 

//        var playBtn=document.createElement('button');
//        playBtn.innerHTML='Play Again';
//        playBtn.setAttribute('onclick','location.reload();');
//        playBtn.setAttribute('class','btn btn-success');
//        document.getElementById('play').appendChild(playBtn);
       
//        var textBot=document.createTextNode('Bot');
//        var bot=document.createElement('h2');
//        bot.appendChild(textBot)
//        document.getElementById('play').appendChild(bot)
       
       

//    }
//    rpsFrontEnd(humanChoice,botChoice,result,color);

//    //result=decideWinner(humanChoice,botChoice); [0,1] human lost bot won
//    //message = finalMessage(result); {'message':'You won!','color':'green'}
//    //rpsFrontEnd(choice.id,botChoice,message)




// }


//Qazi'z code

function rpsGame(yourChoice){

    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randomInt());
    console.log('Your choice '+humanChoice+' bots choice ' +botChoice);
    result=decideWinner(humanChoice,botChoice);// [0,1] human lost bot won
    console.log(result);
    message = finalMessage(result); //{'message':'You won!','color':'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randomInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

// To decide the winner
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase= {
        'rock':{'paper':0,'rock':0.5, 'scissor':1},
        'paper':{'scissor':0,'paper':0.5, 'rock':1},
        'scissor':{'rock':0,'scissor':0.5, 'paper':1}
    };

    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color':'red'};
    }
    else if(yourScore === 1){
        return {'message': 'You won!', 'color':'green'};
    }
    else{
        return {'message':'You tied!', 'color':'yellow'};
    }
}

//
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    };


    // remove all the images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    humanDiv.innerHTML="<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(45,50,233,1)' >";
    messageDiv.innerHTML="<h1 style='color:" + finalMessage['color'] + "; font-size:40px; padding10px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>";
    
    document.getElementById('rps').appendChild(humanDiv);
    document.getElementById('rps').appendChild(messageDiv);
    document.getElementById('rps').appendChild(botDiv);
    
    var textYou=document.createTextNode('You');
       var you=document.createElement('h2');
       you.appendChild(textYou)
       document.getElementById('play').appendChild(you) 

       //Additional
       var playBtn=document.createElement('button');
       playBtn.innerHTML='Play Again';
       playBtn.setAttribute('onclick','location.reload();');
       playBtn.setAttribute('class','btn btn-success');
       document.getElementById('play').appendChild(playBtn);
       
       var textBot=document.createTextNode('Bot');
       var bot=document.createElement('h2');
       bot.appendChild(textBot)
       document.getElementById('play').appendChild(bot)

}




