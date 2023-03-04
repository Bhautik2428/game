var count=0;
var countx=0;
var counto=0;
var count_drows=0;
var player=0;

function cell_click(cell){
    document.getElementById("result").innerHTML="result";
    var element = document.getElementById(cell);
    if(element . innerHTML !="")return;
        if (player==1) {
           element.innerHTML=x;
           element.style.color="#eb5307" 
           player -=1;
           ++count;
           winner ();
        }
        else{
           element.innerHTML=o;
           element.style.color="1b8f03" 
           player -=1;
           ++count;
           winner ();
        }
}

function winner()  {
    if( 
        //horizontal X

        document.getElementById("cell_1").innerHTML == x && document.getElementById("cell_2").innerHTML == x && document.getElementById("cell_3").innerHTML == x || document.getElementById("cell_4").innerHTML == x  && document.getElementById("cell_5").innerHTML == x  && document.getElementById("cell_6").innerHTML == x || document.getElementById("cell_7").innerHTML == x  && document.getElementById("cell_8").innerHTML == x && document.getElementById("cell_9").innerHTML == x  ||
        
        //vertical X

        document.getElementById("cell_1").innerHTML == x  && document.getElementById("cell_4").innerHTML == x  && document.getElementById("cell_7").innerHTML == x  || document.getElementById("cell_2").innerHTML == x  && document.getElementById("cell_5").innerHTML == x  && document.getElementById("cell_8").innerHTML == x  || document.getElementById("cell_3").innerHTML == x  && document.getElementById("cell_6").innerHTML == x  && document.getElementById("cell_9").innerHTML == x ||
        
        //diagonal X
        
        document.getElementById("cell_1").innerHTML == x  && document.getElementById("cell_5").innerHTML == x  && document.getElementById("cell_9").innerHTML == x || document.getElementById("cell_3").innerHTML == x  && document.getElementById("cell_5").innerHTML == x  && document.getElementById("cell_7").innerHTML == x 
      
      )
    {
        document.getElementById("result").innerHTML="X-WON";
        ++countx;
        document.getElementById("xx").innerHTML= countx + "&nbsp;" + "WINS";
        reset ();
        count=0;
        //document.getElementById("result").innerHTML="result";
    }
    else if (
        
        //horizontal O
        
        document.getElementById("cell_1").innerHTML == o  && document.getElementById("cell_2").innerHTML == o && document.getElementById("cell_3").innerHTML == o || document.getElementById("cell_4").innerHTML == o && document.getElementById("cell_5").innerHTML == o && document.getElementById("cell_6").innerHTML == o || document.getElementById("cell_7").innerHTML == o && document.getElementById("cell_8").innerHTML == o && document.getElementById("cell_9").innerHTML == o ||

        //vertical O   

        document.getElementById("cell_1").innerHTML == o && document.getElementById("cell_4").innerHTML == o && document.getElementById("cell_7").innerHTML == o || document.getElementById("cell_2").innerHTML == o && document.getElementById("cell_5").innerHTML == o && document.getElementById("cell_8").innerHTML == o || document.getElementById("cell_3").innerHTML == o && document.getElementById("cell_6").innerHTML == o && document.getElementById("cell_9").innerHTML == o ||

        //diagonal O

        document.getElementById("cell_1").innerHTML == o && document.getElementById("cell_5").innerHTML == o && document.getElementById("cell_9").innerHTML == o || document.getElementById("cell_3").innerHTML == o && document.getElementById("cell_5").innerHTML == o && document.getElementById("cell_7").innerHTML == o 
    ) 
    {
        document.getElementById("result").innerHTML= "# O won";
        ++counto;
        document.getElementById("ooo").innerHTML=  counto +"&nbsp;" + "wins";  
        reset();
        count=0;
        //document.getElementById("result").innerHTML= "result";
    }
     
}