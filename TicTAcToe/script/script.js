var board = document.getElementById('board');
var boxes = document.querySelectorAll('#board div');
var choices = ["X","O"];
var reStart = document.getElementById('restart');
var start = document.getElementById('start');
var flag = 0;
var win = false;
var gameEnd = false;
let player;
let computer;
let available=[];



 const boardReset= function(){
  	for(var i =0;i<9;i++){
  		boxes[i].innerHTML ='';	
  		boxes[i].style.color = 'black';
  		boxes[i].style.background = 'white';
 }
}

const game = function (p1){     
	
     let c1 = available[0];
    for(var i = 0; i<9; i++){ 
    boxes[i].onclick= function kick(){
    	
	   if(X_or_O%2 == 0 && this.innerText=="" && win == false){       
		this.innerHTML = p1; 
		X_or_O += 1;
		flag = -1
		winCheck(flag);
	   }else if(X_or_O%2 ==1 && this.innerText=="" && win == false){
		this.innerHTML = c1;
		X_or_O += 1;
        glag = 1;
		winCheck(flag);
	    } 
	}
  }		

}


function startGame(){
     available = ["X","O"];
    console.log('Check');
    X_or_O = 0 ;
	var choice = prompt("Select your weapon(X or O):","");
	gameEnd = true;
	let p1 = choice;
	if (choice != "X" && choice != "O"){
		const error = alert("Please choose a valid choice!");
		startGame();
	}
	if(p1 === "X"){
		available.shift();
	}else if(p1 ==="O"){ 
		available.pop();
	  }

   game(p1);
 }



function winCheck(flag){


  	var box1 = document.getElementById('box1');   
  	var box2 = document.getElementById('box2');
  	var box3 = document.getElementById('box3');
  	var box4 = document.getElementById('box4');
  	var box5 = document.getElementById('box5');
  	var box6 = document.getElementById('box6');
  	var box7 = document.getElementById('box7');
  	var box8 = document.getElementById('box8');
  	var box9 = document.getElementById('box9');

  	
    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){     
    	  win = true; 
    	  winboxes(box1,box2,box3);
    }else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){     
    	 win = true;
    	  winboxes(box4,box5,box6);
    }else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){     
    	   win = true;
    	  winboxes(box7,box8,box9);
    }else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){     
    	   win = true;
    	  winboxes(box1,box4,box7);
    }else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){     
    	 win = true;
    	  winboxes(box2,box5,box8);
    }else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box4.innerHTML === box9.innerHTML){     
    	   win = true;
    	  winboxes(box3,box6,box9);
    }else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){     
    	   win = true;
    	  winboxes(box1,box5,box9);
    }else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){     
    	   win = true;
    	  winboxes(box3,box5,box7);
    }


  function winboxes(b1,b2,b3){
    b1.style.background ='black';
    b2.style.background = 'black';
    b3.style.background = 'black';
     b1.style.color ='white';
    b2.style.color = 'white';
    b3.style.color = 'white';
         
  }

   setTimeout(function(){
   	if(win == true){
        if(flag == -1){
        	var r1 = alert("Player 1 Wins the game");
        }else if(flag == 1){
        	var r2 = alert("Player 2 Wins the game");
        }
          gameEnd=false;
      }

     }, 2000);
}

    


  reStart.onclick =  function(){
  
  	var varify = confirm("Do you really want to REDO the game ? All Data maybe lost!!");
  	if(varify == true){
  		console.log(gameEnd);
  		win = false;
        boardReset();
        startGame();
    }
  }



  

  

start.onclick  = function(){
	
     board.style.visibility ='visible';
	if(gameEnd== true){
		var finishGame = alert("Please finish the game first!!")
	}else if (gameEnd== false){
		win = false;
	boardReset();
	startGame();
    }
}