

let time = 0;
let score = 0;
let isPlaying;
let randind;
 //DOM elements
  const currentword=document.querySelector('#currentword');
  const timestart=document.querySelector('#time');
  const scoredisplay=document.querySelector('#score');
  const wordinput=document.querySelector('#wordinput');
  const button=document.querySelector('#button');
  const quit=document.querySelector('#Quit');
//array of word
const words=[
  'ishevhs',
   'aht',
  'irvre',
  'uckly',
  'atsteu',
  'rengeaet',
  'bubstorn',
  'tokcaicl',
  'awurnya',
  'ejko',
  'lopdervee',
  'lihtsaebsment',
  'reoh',
  'vajsirptca',
  'nitontuir',
  'rloervev',
  'hceo',
  'bisilsgn',
  'iveseatgint',
  'hornersoud',
  'ysmmotp',
  'ugalreth',
  'igmac',
  'tsmare',
  'scape', 
  ];
  const dwords=[
  'vishesh',
    'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  
  ];
 
  //initializing of thew game

function init() {
	//time starts..
	setInterval(countdown,1000);
	showword(words);
	window.addEventListener('input',startMatch);
	setInterval(checkstatus,5000);
}

function countdown() {
 	time ++;
    timestart.innerHTML= time;
}
function showword(words){
 // Generate random array index
   randind = Math.floor(Math.random() * words.length);
  // Output random word
  currentword.innerHTML = words[randind];
}
// Start match
function startMatch() {
  if (matchwords()) {
   isPlaying = true;
    showword(words);
    wordinput.value = '';
     score++;
    scoredisplay.innerHTML=score;
   
  }
  else
  	isPlaying = false;
}
function matchwords(){
	if (wordinput.value===dwords[randind]) {
		message.innerHTML="correct";
		return true;
	}
	else{
		message.innerHTML="try again";
	    return false;
	  }
	}

function checkstatus(){
	if(!isPlaying)
		message.innerHTML="";

	else
		message.innerHTML="enter the word"
}
function end(){
	alert("Game over ......we request you to reload the page");
 }
