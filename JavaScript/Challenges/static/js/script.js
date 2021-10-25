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

// Challenge 2 Generate Cats
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

// Challenge 4 : Changing colors of buttons

var all_button= document.getElementsByTagName('button');


var copyAllButtons = [];

for(let i=0;i<all_button.length;i++){
    copyAllButtons.push(all_button[i].classList[1]);0
};





function randomIntClr(){
    return Math.floor(Math.random() * 4);
};

function randomColor(number){
    return ['red','green','yellow','blue'][number];
};

function buttonColorChange(btnChoice){
    if(btnChoice.value === 'red'){
        buttonsToRed();
    }
    else if(btnChoice.value === 'green'){
        buttonsToGreen();
    }
    else if(btnChoice.value === 'blue'){
        buttonsToBlue();
    }
    else if(btnChoice.value === 'yellow'){
        buttonsToYellow();
    }
    else if(btnChoice.value === 'random'){
        var color=randomColor(randomIntClr());
        changeToRandomColor(color);
        console.log(color);
    }
    else{
        reset();
    }
}

// Random Color
function changeToRandomColor(color){
    let colors= ['btn-danger','btn-success','btn-warning','btn-primary']
    
    for(let i=0;i<all_button.length;i++){
        let randomInt=Math.floor(Math.random() * 4);
        
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(colors[randomInt]);
        
    }
}
// Change the button to Green
function buttonsToGreen(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }

}
// Change the button to Red
function buttonsToRed(){
    for (let i = 0; i<all_button.length; i++) {
      all_button[i].classList.remove(all_button[i].classList[1]);
      all_button[i].classList.add('btn-danger');
    }
}
// Change the button to Blue
function buttonsToBlue(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-primary');
    }
}
// Change the button to Yellow
function buttonsToYellow(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-warning');
    }
}
// Reset the color
function reset(){
    for(let i=0;i<all_button.length;i++){
        
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButtons[i]);
    }
}



//  My Code for BlackJack After going through Qazi's tutorial and practices

let username=prompt("What's your name player");
let BlackJackGame = {
    'you':{'scoreSpan':'#your-score','div':'#your-box','score':0},
    'bot':{'scoreSpan':'#bot-score','div':'#bot-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]},
    'wins':0,
    'loses':0,
    'draws':0,
    'isStand':false,
    'isHit':'false',
    'turnsOver':false,
    'resultDeclared':false,
}

//Players of the game
const YOU=BlackJackGame['you'];
const BOT=BlackJackGame['bot'];

//Constant audios in the game
const hitSound=new Audio('static/sounds/swish.m4a');
const winSound=new Audio('static/sounds/cash.mp3');
const loseSound=new Audio('static/sounds/aww.mp3');

//Three buttons 
document.querySelector('#hit-btn').addEventListener('click',blackjackhit);
document.querySelector('#stand-btn').addEventListener('click',blackjackstand);
document.querySelector('#deal-btn').addEventListener('click',blackjackdeal);

// Username to display on board
if(username === null || username === ""){
    document.querySelector('#user-name').textContent= 'You';
}
else{
    document.querySelector('#user-name').textContent= username;
}

//To generate random cards
function randomCard(){
    let card=Math.floor(Math.random()*13);
    return BlackJackGame['cards'][card];
}

//When user clicks on Hit Button
function blackjackhit(){
    if(BlackJackGame['isStand'] === false && BlackJackGame['resultDeclared'] === false){
        BlackJackGame['isHit'] = true;
        let cards=randomCard();
        showCard(cards,YOU);
        updateScore(cards,YOU);
        showScore(YOU);
    }
}
//Showing Random cards
function showCard(cards,Player){
   if(Player['score'] <= 21){ // Cards will not be displayed if score is more than 21
        let cardImg=document.createElement('img');
        cardImg.src=`static/images/${cards}.png`; // String Templating
        document.querySelector(Player['div']).appendChild(cardImg);
        hitSound.play();
   }
}

//Updating users score according to card generated
function updateScore(cards,Player){
   if(cards === 'A'){
       if(Player['score'] + BlackJackGame['cardsMap'][cards][1] <= 21){
            Player['score'] += BlackJackGame['cardsMap'][cards][1];    
       }
       else{
        Player['score'] += BlackJackGame['cardsMap'][cards][0];
       }
   }
   else{
       Player['score'] += BlackJackGame['cardsMap'][cards];    
   }
}

//Show updated score
function showScore(Player){
    if(Player['score'] > 21){
        document.querySelector(Player['scoreSpan']).textContent = 'BUSTED!'; 
        document.querySelector(Player['scoreSpan']).style.color = 'red'; 
    }
    else{
        document.querySelector(Player['scoreSpan']).textContent = Player['score']; 
    }
}

// For wait while adding cards
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

// When bot plays
async function blackjackstand(){
    if(BlackJackGame['isHit'] === true && BlackJackGame['resultDeclared'] === false){
        BlackJackGame['isStand'] = true;
         while(BOT['score']<16 ){
            let cards=randomCard();
            showCard(cards,BOT);
            updateScore(cards,BOT)
            showScore(BOT);
            await sleep(800);
            }
        BlackJackGame['turnsOver'] = true;
        let winner=computeWinner();
        showResults(winner);
        BlackJackGame['resultDeclared'] = true;
    }
    else if(BlackJackGame['resultDeclared'] === true){
        alert('Please Press the Deal button');
    }
    else{
        alert('Please play your move first');
    }
};


// After pressing Deal button
function blackjackdeal(){
    let yourImg=document.querySelector('#your-box').querySelectorAll('img');
    let botImg=document.querySelector('#bot-box').querySelectorAll('img');
    
    if(BlackJackGame['turnsOver'] === true){
        BlackJackGame['isStand'] = false;    
        BlackJackGame['resultDeclared'] = false;
        BlackJackGame['isHit'] = false;
        for(i=0;i<yourImg.length;i++){
                yourImg[i].remove();
            }
        for(i=0;i<botImg.length;i++){
                botImg[i].remove();
            }

        YOU['score'] = 0;
        BOT['score'] = 0;
        
        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(YOU['scoreSpan']).style.color='white'
        document.querySelector(BOT['scoreSpan']).textContent = 0;
        document.querySelector(BOT['scoreSpan']).style.color='white'
        document.querySelector('#resultImg').remove();
    
    BlackJackGame['turnsOver'] = false;
    }
    else{
        alert('Turns are not over yet! press hit or Stand');
    }
    

}

// To Decide the winner 
function computeWinner(){
    
    let winner;
    if(YOU['score'] <= 21){
        if(YOU['score'] > BOT['score'] || BOT['score'] >21){
            BlackJackGame['wins']++;
            winner = YOU;
            winSound.play();
        }
        else if(YOU['score'] < BOT['score']){
            BlackJackGame['loses']++;
            winner = BOT;
            loseSound.play();
        }
        else if(YOU['score'] === BOT['score']){
            BlackJackGame['draws']++;
        }
    }
    else if(YOU['score'] > 21 && BOT['score']<=21){
        BlackJackGame['loses']++;
        winner = BOT;
        loseSound.play();
    }
    else if(YOU['score'] > 21 && BOT['score'] > 21){
        BlackJackGame['draws']++;    
    }
    return winner;

    
}

//To display the winner
function showResults(winner){

    let winImg='static/images/youWon.svg';
    let lostImg='static/images/youLost.svg';
    let drawImg='static/images/youDrew.svg';
    let resultImg;
    let message,messageColor;
    if(winner === YOU){
        resultImg=winImg;
    }
    else if(winner === BOT){
        resultImg=lostImg;
    }
    else{
        resultImg= drawImg;
    }
    let resultText=document.createElement('img');
    resultText.src=resultImg;
    resultText.style.position= 'absolute';
    resultText.style.top= '50%';
    resultText.setAttribute('id','resultImg');
    
    document.querySelector('#cards').appendChild(resultText);
}



INSERT INTO PUBLISHER VALUES('RAMAN',
ADDR_TYPE(400022,'SION','MUMBAI','MAHARASHTRA'),
BRANCHTABLE_TYPE(BRANCH_TYPE(ADDR_TYPE(412219,'ABC','PUNE','MAHARASHTRA'),1234567890,9874563210)));

INSERT INTO PUBLISHER VALUES('TECH KNOWLEDGE',
ADDR_TYPE(400028,'KAANAWAR','MUMBAI','MAHARASHTRA'),
BRANCHTABLE_TYPE(BRANCH_TYPE(ADDR_TYPE(412220,'ABC','PUNE','MAHARASHTRA'),1234567890,9874563210)));

INSERT INTO PUBLISHER VALUES('TECHNOVAZA',
ADDR_TYPE(400029,'RAIGAD','PUNE','MAHARASHTRA'),
BRANCHTABLE_TYPE(BRANCH_TYPE(ADDR_TYPE(412118,'ABC','PUNE','MAHARASHTRA'),1234567890,9874563210)));

INSERT INTO PUBLISHER VALUES('ORACLE',
ADDR_TYPE(400023,'KANJURMARG','MUMBAI','MAHARASHTRA'),
BRANCHTABLE_TYPE(BRANCH_TYPE(ADDR_TYPE(412118,'ABC','PUNE','MAHARASHTRA'),1234567890,9874563210)));

INSERT INTO PUBLISHER VALUES('IBM',
ADDR_TYPE(400011,'KHARGHAR','NAVI MUMBAI','MAHARASHTRA'),
BRANCHTABLE_TYPE(BRANCH_TYPE(ADDR_TYPE(412118,'ABC','PUNE','MAHARASHTRA'),1234567890,9874563210)));

INSERT INTO PUBLISHER VALUES('TECH MAX',
ADDR_TYPE(400065,'HEAS','BANJAN','PUNJAB'),
BRANCHTABLE_TYPE(BRANCH_TYPE(ADDR_TYPE(400065,'ABC','PUNE','MAHARASHTRA'),1234567890,9874563210)));

INSERT INTO PUBLISHER VALUES('NCERT',
ADDR_TYPE(422209,'AHER GAON','NASHIK','MAHARASHTRA'),
BRANCHTABLE_TYPE(BRANCH_TYPE(ADDR_TYPE(422220,'ABC','PUNE','MAHARASHTRA'),1234567890,9874563210)));

INSERT INTO PUBLISHER VALUES('WWC',
ADDR_TYPE(400021,'RATNAGIRI','RATNAGIRI','MAHARASHTRA'),
BRANCHTABLE_TYPE(BRANCH_TYPE(ADDR_TYPE(412232,'ABC','PUNE','MAHARASHTRA'),1234567890,9874563210)));
