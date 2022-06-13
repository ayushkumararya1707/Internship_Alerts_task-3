// change player name
let music = new Audio("music.mp3");
let gameovermusic = new Audio("gameover.mp3");
var P1="PLAYER1";
var P2="PLAYER2";
// let childdance =document.getElementById("dance");




function changeName(){
    P1=prompt("Name of the player : X !!");
    P2=prompt("Name of the player : O !!");

    var str1= P1 +" : X";
    var str2= P2 +" : O";
    document.getElementById("result").innerHTML=str1+"<br>"+str2;
    // document.getElementById("result").style.color="antiquewhite";

music.play();
}

var flag = true;
var t=0;
function game() {
    if (flag == true) {
        document.activeElement.innerHTML="X";
        document.activeElement.removeAttribute("onclick");
        document.activeElement.style.backgroundColor="#2474f0";
        t++;
        flag = false;
        var final = checkresult();
        if (final == "stop") {
            document.getElementById("result").innerHTML = P1+" WINS !!";
            document.getElementById("result").style.fontSize="45px";
            document.getElementById("dance1").style.width="300px";
            document.getElementById("dance2").style.width="300px";
            // document.getElementById("result").style.color="black";
            gameovermusic.play();
document.getElementById("result").style.paddingTop="30px";
removeATT();
        }

        else if (t==9) {
            document.getElementById("result").innerHTML="MATCH DRAW !!";
            gameovermusic.play();
        }
    }
    else{
        document.activeElement.innerHTML="O";
        document.activeElement.style.backgroundColor="hotpink";
        document.activeElement.removeAttribute("onclick");
        t++;
        flag=true;
        var final = checkresult();
        if (final == "stop") {
            document.getElementById("result").innerHTML = P2+" WINS !!";
            document.getElementById("result").style.fontSize="45px";
            document.getElementById("dance1").style.width="300px";
            document.getElementById("dance2").style.width="300px";
            gameovermusic.play();
            // document.getElementById("result").style.color="antiquewhite";
document.getElementById("result").style.paddingTop="30px";
removeATT();
        }

        else if (t==9) {
            document.getElementById("result").innerHTML="MATCH DRAW !!";
            gameovermusic.play();
        }
    }
    }



    function checkresult(){
        var str;
        if((document.getElementById("b1").innerHTML==document.getElementById("b2").innerHTML && document.getElementById("b1").innerHTML==document.getElementById("b3").innerHTML) &&((document.getElementById("b1").innerHTML=="X") ||( document.getElementById("b1").innerHTML=="O")))
        {

            str="stop";
            return str;
        }
        
       else if((document.getElementById("b1").innerHTML==document.getElementById("b4").innerHTML && document.getElementById("b1").innerHTML==document.getElementById("b7").innerHTML) &&((document.getElementById("b1").innerHTML=="X") ||( document.getElementById("b1").innerHTML=="O")))
       {

           str="stop";
           return str;
       }

       else if((document.getElementById("b1").innerHTML==document.getElementById("b5").innerHTML && document.getElementById("b1").innerHTML==document.getElementById("b9").innerHTML) &&((document.getElementById("b1").innerHTML=="X") ||( document.getElementById("b1").innerHTML=="O")))
       {

           str="stop";
           return str;
       }
       else if((document.getElementById("b3").innerHTML==document.getElementById("b6").innerHTML && document.getElementById("b3").innerHTML==document.getElementById("b9").innerHTML) &&((document.getElementById("b3").innerHTML=="X") ||( document.getElementById("b3").innerHTML=="O")))
       {

           str="stop";
           return str;
       }
       else if((document.getElementById("b3").innerHTML==document.getElementById("b5").innerHTML && document.getElementById("b3").innerHTML==document.getElementById("b7").innerHTML) &&((document.getElementById("b3").innerHTML=="X") ||( document.getElementById("b3").innerHTML=="O")))
       {

           str="stop";
           return str;
       }
       else if((document.getElementById("b4").innerHTML==document.getElementById("b5").innerHTML && document.getElementById("b4").innerHTML==document.getElementById("b6").innerHTML) &&((document.getElementById("b4").innerHTML=="X") ||( document.getElementById("b4").innerHTML=="O")))
       {

           str="stop";
           return str;
       }
       else if((document.getElementById("b7").innerHTML==document.getElementById("b8").innerHTML && document.getElementById("b7").innerHTML==document.getElementById("b9").innerHTML) &&((document.getElementById("b7").innerHTML=="X") ||( document.getElementById("b7").innerHTML=="O")))
       {

           str="stop";
           return str;
       }
       else if((document.getElementById("b2").innerHTML==document.getElementById("b8").innerHTML && document.getElementById("b2").innerHTML==document.getElementById("b5").innerHTML) &&((document.getElementById("b2").innerHTML=="X") ||( document.getElementById("b2").innerHTML=="O")))
       {

           str="stop";
           return str;
       }
    }

    // remove attribute

    function removeATT(){
        document.getElementById("btn1").removeAttribute("onclick");
        document.getElementById("btn2").removeAttribute("onclick");
        document.getElementById("btn3").removeAttribute("onclick");
        document.getElementById("btn4").removeAttribute("onclick");
        document.getElementById("btn5").removeAttribute("onclick");
        document.getElementById("btn6").removeAttribute("onclick");
        document.getElementById("btn7").removeAttribute("onclick");
        document.getElementById("btn8").removeAttribute("onclick");
        document.getElementById("btn9").removeAttribute("onclick");
    }

// replay game
function replay(){
    window.location.reload();
}