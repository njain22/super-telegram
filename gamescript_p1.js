window.addEventListener('load', init);
// window.addEventListener('keypress', letterUpdater);
//Global Vars
// const levelone = ['A','B','C',' ','र','k','l'];
//an array of arrays! each element is a level, each subelm is a letter
const levelArray = [
[	'र',	'र',	'र',	'र',	'र',	'र',	'र',	'र',	],
[	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	],
[	'ब',	'ब',	'र',	'ब',	'ब',	'ब',	' ',	'ब',	],
[	'र',	'र',	'र',	'र',	'र',	'र',	'र',	'र',	],
[	'ब',	'ब',	'ब',	'ब',	'र',	' ',	'ब',	'ब',	],
[	'ब',	'ब',	'ब',	'ब',	'र',	'ब',	'ब',	'ब',	],
[	'रब',	'बर',	'बर',	' ',	'बर',	'रब',	'बर',	'बर',	],
[	'ब',	'र',	'र',	'र',	'र',	'र',	'ब',	'र',	],
[	'ब',	'ब',	'ब',	'ब',	'र',	'ब',	'ब',	'ब',	],
[	'र',	'ब',	'र',	'ब',	'र',	'ब',	'ब',	'ब',	],
[	'र',	'ब',	'र',	'ब',	'र',	'र',	'ब',	'ब',	],
[	'र',	'ब',	'र',	' ',	'र',	' ',	'ब',	'ब',	],
[	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	],
[	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	'ब',	],
[	'र',	'र',	'र',	'ब',	'र',	'र',	'र',	'र',	],
[	'ब',	'र',	'र',	'ब',	'र',	'र',	'ब',	'र',	],
[	'ब',	'र',	'र',	'ब',	'र',	'र',	'ब',	'र',	],
[	'ब',	'र',	'र',	'र',	'र',	'र',	'ब',	'र',	],
[	'ब',	'र',	'र',	'र',	'ब',	' ',	'ब',	'र',	],
[	'र',	'ब',	' ',	'ब',	'ब',	'र',	'ब',	'ब',	],
[	'र',	'र',	'र',	'र',	'र',	'र',	'र',	'र',	],
[	'र',	' ',	'र',	'र',	'र',	'र',	'र',	'र',	],
[	'र',	'ब',	'र',	'ब',	'ब',	'र',	'ब',	'ब',	],
[	'रब',	'बर',	'रब',	'बर',	'बर',	'रब',	'बर',	'बर',	],
[	'ब',	'ब',	'ब',	'ब',	'ब',	'र',	'ब',	'ब',	],
[	'ब',	'ब',	'ब',	'ब',	'र',	'ब',	'ब',	'ब',	],
[	'र',	'र',	'र',	'ब',	'र',	'र',	'र',	'र',	],
[	'ब',	'र',	' ',	'ब',	'र',	'र',	'ब',	'र',	],
[	'ब',	'र',	'र',	'ब',	'र',	'र',	'ब',	'र',	],
[	'ब',	'र',	'र',	'ब',	'र',	'र',	'ब',	'र',	],
[	'ब',	'र',	' ',	'ब',	'र',	'र',	'ब',	'र',	],
[	'रब',	'बर',	'रब',	'बर',	'रब',	'रब',	'रब',	'रब',	],
[	'बर',	'बर',	'बर',	'बर',	'बर',	' ',	'रब',	'बर',	],
[	'रब',	'रब',	'रब',	'रब',	'रब',	'रब',	'बर',	'बर',	],
[	'रब',	'बर',	'रब',	'बर',	'बर',	'बर',	'बर',	'बर',	],
[	'रब',	' ',	'रब',	'बर',	'बर',	'बर',	'बर',	'बर',	],
[	'रब',	'बर',	'रब',	'बर',	'बर',	'बर',	'बर',	'बर',	],
[	'रब',	'बर',	'रब',	'बर',	'बर',	'रब',	'बर',	'बर',	]
										
					];
// var currentLetter = levelone[0];


let isMatch;
let globalIndex = 0;
let isLastLetter;
let currentLevel = 0;
let currentLetter = levelArray[currentLevel][globalIndex];
let currentCol = "col1";

//DOM Elements
const wordInput = document.querySelector('#word-input');
const letter1 = document.querySelector('#slot1');
const letter2 = document.querySelector('#slot2');
const letter3 = document.querySelector('#slot3');
const letter4 = document.querySelector('#slot4');
const letter5 = document.querySelector('#slot5');
const letter6 = document.querySelector('#slot6');
const letter7 = document.querySelector('#slot7');
const letter8 = document.querySelector('#slot8');
const messageLog = document.querySelector('#donemessage');
// const testLink = document.querySelector('#testlink');
const iscore = document.querySelector('#score');
const keyMap = document.querySelector('#keymapsprite');
//Initialize
function init() {
  // Load letters from array
  slotFiller();
  // start matching letters
  //wordInput.addEventListener('input', matchLetter);
  setInterval(letterUpdater, 100);
   // matchLetter();
   // letterUpdater();
   iscore.innerHTML = currentLevel; //TODO should be CurrentLevel
}


//Set Up Game - Slot Filler
function slotFiller() {
	//set the innerHTML of each slot to its letter1
	letter1.innerHTML = levelArray[currentLevel][0];
	letter2.innerHTML = levelArray[currentLevel][1];
	letter3.innerHTML = levelArray[currentLevel][2];
	letter4.innerHTML = levelArray[currentLevel][3];
	letter5.innerHTML = levelArray[currentLevel][4];
	letter6.innerHTML = levelArray[currentLevel][5];
	letter7.innerHTML = levelArray[currentLevel][6];
	letter8.innerHTML = levelArray[currentLevel][7];
	//this is static, it doesn't change until level up
	//set current char - this will change
}

function levelUp() {
	globalIndex = 0;
	changeCol ();
	currentLevel = currentLevel + 1;
	 iscore.innerHTML = currentLevel;
	document.getElementById("col1").style.borderColor="#9099a2";
	document.getElementById("col2").style.borderColor="#9099a2";
	document.getElementById("col3").style.borderColor="#9099a2";
	document.getElementById("col4").style.borderColor="#9099a2";
	document.getElementById("col5").style.borderColor="#9099a2";
	document.getElementById("col6").style.borderColor="#9099a2";
	document.getElementById("col7").style.borderColor="#9099a2";
	document.getElementById("col8").style.borderColor="#9099a2";
	slotFiller();
	currentLetter = levelArray[currentLevel][globalIndex];
	setInterval(letterUpdater, 50);
	// if (currentLevel < 3)
	// {messageLog.innerHTML = currentLevel;}
 //  	else if (currentLevel === 3)
 //  	{
 //  	testLink.innerHTML = "You are done!";
 //  	document.getElementById("testlink").href = "test_ka.html"; 
 //  	}
}

function changeCol (){
	if 		(globalIndex === 0) {currentCol = "col1";}
	else if (globalIndex === 1) {currentCol = "col2";}
	else if (globalIndex === 2) {currentCol = "col3";}
	else if (globalIndex === 3) {currentCol = "col4";}
	else if (globalIndex === 4) {currentCol = "col5";}
	else if (globalIndex === 5) {currentCol = "col6";}
	else if (globalIndex === 6) {currentCol = "col7";}
	else if (globalIndex === 7) {currentCol = "col8";}

}

function letterMatcher(){
	if (wordInput.value === currentLetter)
 		{if (globalIndex < 8) 
 			{
 				document.getElementById(currentCol).style.borderColor="#062f4f";
 				wordInput.value = '';
 				globalIndex = globalIndex + 1;
 				changeCol ();
 				currentLetter = levelArray[currentLevel][globalIndex];
 			}}

 		else if (globalIndex === 8) 
 			{	
 
 				// document.addEventListener("keypress", function(event) 
 				// {
    	// 			if (event.keyCode === 13) 
    	// 				{
     //    				levelUp(); 
     //    				}
 				// })
 				levelUp();
 			}
	
}

function updateImage(){
	if (currentLetter === 'ब'){
		keyMap.src="keymap_sprite_Ba.png";
	}
	else if (currentLetter === 'र')
	{
		keyMap.src="keymap_sprite_Ra.png";
	}
		else 
	{
		keyMap.src="keymap_sprite_.png";
	}
	//how to have a space bar sprite work...wtf is going on
}


function letterUpdater() {


  letterMatcher();
  //update picture
  updateImage();
}