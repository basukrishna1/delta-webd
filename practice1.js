function start() {
	let position= new Array();
	while(position.length<25)
	{
       let t=Math.round(Math.random()*100);
       if(t==11||t==12||t==13||t==14||t==15||t==21||t==22||t==23||t==24||t==25||t==31||t==32||t==33||t==34||t==35||t==41||t==42||t==43||t==44||t==45||t==51||t==52||t==53||t==54||t==55)
       {
       	if(!position.includes(t)){
       		position[position.length]=t;
       	}
       }
	}
    let smallposition= new Array();
    while(smallposition.length<9)
    {
       let q=Math.round(Math.random()*100);
       if(q==13||q==21||q==33||q==35||q==15||q==45||q==42||q==55||q==51)
       {
        if(!smallposition.includes(q)){
            smallposition[smallposition.length]=q;
        }
       }
   }

document.getElementById("smallbox1").textContent=smallposition[0];
document.getElementById("smallbox1").style.background= 'url('+ smallposition[0] +'.png)';

document.getElementById("smallbox2").textContent=smallposition[1];
document.getElementById("smallbox2").style.background= 'url('+ smallposition[1] +'.png)'


document.getElementById("smallbox3").textContent=smallposition[2];
document.getElementById("smallbox3").style.background= 'url('+ smallposition[2] +'.png)'


document.getElementById("smallbox4").textContent=smallposition[3];
document.getElementById("smallbox4").style.background= 'url('+ smallposition[3] +'.png)'


document.getElementById("smallbox5").textContent=smallposition[4];
document.getElementById("smallbox5").style.background= 'url('+ smallposition[4] +'.png)'


document.getElementById("smallbox6").textContent=smallposition[5];
document.getElementById("smallbox6").style.background= 'url('+ smallposition[5] +'.png)'


document.getElementById("smallbox7").textContent=smallposition[6];
document.getElementById("smallbox7").style.background= 'url('+ smallposition[6] +'.png)'


document.getElementById("smallbox8").textContent=smallposition[7];
document.getElementById("smallbox8").style.background= 'url('+ smallposition[7] +'.png)'


document.getElementById("smallbox9").textContent=smallposition[8];
document.getElementById("smallbox9").style.background= 'url('+ smallposition[8] +'.png)'







//for big box



document.getElementById("box1").textContent=position[0];
document.getElementById("box1").style.background= 'url('+ position[0] +'.png)';



document.getElementById("box2").textContent=position[1];
document.getElementById("box2").style.background= 'url('+ position[1] +'.png)'


document.getElementById("box3").textContent=position[2];
document.getElementById("box3").style.background= 'url('+ position[2] +'.png)'


document.getElementById("box4").textContent=position[3];
document.getElementById("box4").style.background= 'url('+ position[3] +'.png)'


document.getElementById("box5").textContent=position[4];
document.getElementById("box5").style.background= 'url('+ position[4] +'.png)'


document.getElementById("box6").textContent=position[5];
document.getElementById("box6").style.background= 'url('+ position[5] +'.png)'


document.getElementById("box7").textContent=position[6];
document.getElementById("box7").style.background= 'url('+ position[6] +'.png)'


document.getElementById("box8").textContent=position[7];
document.getElementById("box8").style.background= 'url('+ position[7] +'.png)'


document.getElementById("box9").textContent=position[8];
document.getElementById("box9").style.background= 'url('+ position[8] +'.png)'


document.getElementById("box10").textContent=position[9];
document.getElementById("box10").style.background= 'url('+ position[9] +'.png)'


document.getElementById("box11").textContent=position[10];
document.getElementById("box11").style.background= 'url('+ position[10] +'.png)'


document.getElementById("box12").textContent=position[11];
document.getElementById("box12").style.background= 'url('+ position[11] +'.png)'


document.getElementById("box13").textContent=position[12];
document.getElementById("box13").style.background= 'url('+ position[12] +'.png)'


document.getElementById("box14").textContent=position[13];
document.getElementById("box14").style.background= 'url('+ position[13] +'.png)'


document.getElementById("box15").textContent=position[14];
document.getElementById("box15").style.background= 'url('+ position[14] +'.png)'

document.getElementById("box16").textContent=position[15];
document.getElementById("box16").style.background= 'url('+ position[15] +'.png)'


document.getElementById("box17").textContent=position[16];
document.getElementById("box17").style.background= 'url('+ position[16] +'.png)'


document.getElementById("box18").textContent=position[17];
document.getElementById("box18").style.background= 'url('+ position[17] +'.png)'


document.getElementById("box19").textContent=position[18];
document.getElementById("box19").style.background= 'url('+ position[18] +'.png)'


document.getElementById("box20").textContent=position[19];
document.getElementById("box20").style.background= 'url('+ position[19] +'.png)'


document.getElementById("box21").textContent=position[20];
document.getElementById("box21").style.background= 'url('+ position[20] +'.png)'


document.getElementById("box22").textContent=position[21];
document.getElementById("box22").style.background= 'url('+ position[21] +'.png)'


document.getElementById("box23").textContent=position[22];
document.getElementById("box23").style.background= 'url('+ position[22] +'.png)'


document.getElementById("box24").textContent=position[23];
document.getElementById("box24").style.background= 'url('+ position[23] +'.png)'

document.getElementById("box25").textContent=position[24];
document.getElementById("box25").style.background= 'url('+ position[24] +'.png)'

document.getElementById("number").innerText="Moves: 0";
moves=0;
}



function win(){
    let i=5
    let foul=0;
    while(i<20){
        
        if(i==7||i==8||i==9){
            str=i.toString();
            str1=(i-6).toString();
      if(document.getElementById("smallbox"+str1).textContent=="51"||document.getElementById("smallbox"+str1).textContent=="33"){
        if(document.getElementById("box"+str).textContent=="12"||document.getElementById("box"+str).textContent=="22"||document.getElementById("box"+str).textContent=="33"||document.getElementById("box"+str).textContent=="51"||document.getElementById("box"+str).textContent=="54"){
            foul++;
            console.log(0);
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="13"||document.getElementById("smallbox"+str1).textContent=="35"){
        if(document.getElementById("box"+str).textContent=="13"||document.getElementById("box"+str).textContent=="24"||document.getElementById("box"+str).textContent=="35"){
            foul++;
            console.log(1)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="21"||document.getElementById("smallbox"+str1).textContent=="55"){
        if(document.getElementById("box"+str).textContent=="21"||document.getElementById("box"+str).textContent=="31"||document.getElementById("box"+str).textContent=="41"||document.getElementById("box"+str).textContent=="44"||document.getElementById("box"+str).textContent=="55"){
           foul++;
           console.log(2)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="15"||document.getElementById("smallbox"+str1).textContent=="45"){
        if(document.getElementById("box"+str).textContent=="14"||document.getElementById("box"+str).textContent=="15"||document.getElementById("box"+str).textContent=="23"||document.getElementById("box"+str).textContent=="25"||document.getElementById("box"+str).textContent=="45"){
          foul++;
          console.log(3)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="42"){
        if(document.getElementById("box"+str).textContent=="32"||document.getElementById("box"+str).textContent=="42"||document.getElementById("box"+str).textContent=="52"||document.getElementById("box"+str).textContent=="53"){
          foul++;
          console.log(4)
        }
    }

    else{
         foul=0;
    }
}

    if(i==12||i==13||i==14){
            str=i.toString();
            str1=(i-8).toString();
      if(document.getElementById("smallbox"+str1).textContent=="51"||document.getElementById("smallbox"+str1).textContent=="33"){
        if(document.getElementById("box"+str).textContent=="12"||document.getElementById("box"+str).textContent=="22"||document.getElementById("box"+str).textContent=="33"||document.getElementById("box"+str).textContent=="51"||document.getElementById("box"+str).textContent=="54"){
            foul++;
            console.log(5)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="13"||document.getElementById("smallbox"+str1).textContent=="35"){
        if(document.getElementById("box"+str).textContent=="13"||document.getElementById("box"+str).textContent=="24"||document.getElementById("box"+str).textContent=="35"){
            foul++;
            console.log(6)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="21"||document.getElementById("smallbox"+str1).textContent=="55"){
        if(document.getElementById("box"+str).textContent=="21"||document.getElementById("box"+str).textContent=="31"||document.getElementById("box"+str).textContent=="41"||document.getElementById("box"+str).textContent=="44"||document.getElementById("box"+str).textContent=="55"){
           foul++;
           console.log(7)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="15"||document.getElementById("smallbox"+str1).textContent=="45"){
        if(document.getElementById("box"+str).textContent=="14"||document.getElementById("box"+str).textContent=="15"||document.getElementById("box"+str).textContent=="23"||document.getElementById("box"+str).textContent=="25"||document.getElementById("box"+str).textContent=="45"){
          foul++;
          console.log(8)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="42"){
        if(document.getElementById("box"+str).textContent=="32"||document.getElementById("box"+str).textContent=="42"||document.getElementById("box"+str).textContent=="52"||document.getElementById("box"+str).textContent=="53"){
          foul++;
          console.log(9)
        }
    }

    else{
         foul=0;
    }
}
    if(i==17||i==18||i==19){
            str=i.toString();
            str1=(i-10).toString();
      if(document.getElementById("smallbox"+str1).textContent=="51"||document.getElementById("smallbox"+str1).textContent=="33"){
        if(document.getElementById("box"+str).textContent=="12"||document.getElementById("box"+str).textContent=="22"||document.getElementById("box"+str).textContent=="33"||document.getElementById("box"+str).textContent=="51"||document.getElementById("box"+str).textContent=="54"){
            foul++;
            console.log(10)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="13"||document.getElementById("smallbox"+str1).textContent=="35"){
        if(document.getElementById("box"+str).textContent=="13"||document.getElementById("box"+str).textContent=="24"||document.getElementById("box"+str).textContent=="35"){
            foul++;
            console.log(11)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="21"||document.getElementById("smallbox"+str1).textContent=="55"){
        if(document.getElementById("box"+str).textContent=="21"||document.getElementById("box"+str).textContent=="31"||document.getElementById("box"+str).textContent=="41"||document.getElementById("box"+str).textContent=="44"||document.getElementById("box"+str).textContent=="55"){
           foul++;
           console.log(12)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="15"||document.getElementById("smallbox"+str1).textContent=="45"){
        if(document.getElementById("box"+str)=="14"||document.getElementById("box"+str).textContent=="15"||document.getElementById("box"+str).textContent=="23"||document.getElementById("box"+str).textContent=="25"||document.getElementById("box"+str).textContent=="45"){
          foul++;
          console.log(13)
        }
    }
    else if(document.getElementById("smallbox"+str1).textContent=="42"){
        if(document.getElementById("box"+str).textContent=="32"||document.getElementById("box"+str).textContent=="42"||document.getElementById("box"+str).textContent=="52"||document.getElementById("box"+str).textContent=="53"){
          foul++;
          console.log(14)
        }
    }

    else{
         foul=0;
    }
}

i++;
console.log(foul);
if(foul==9){
alert("You win");
document.getElementById("submit").innerText("Reset");
}
}



}








let moves=0;

function move(pos){
	if(document.getElementById(pos).textContent !='11')
	{   
		if(pos=="box1")
          {
          	if(document.getElementById("box2").textContent=='11'){
          		
          		let t=document.getElementById("box2").textContent;
          		document.getElementById("box2").textContent=document.getElementById("box1").textContent;
          		document.getElementById("box1").textContent=t;
          		
          		document.getElementById("box1").style.background= 'url('+ document.getElementById('box1').textContent +'.png)'
          		document.getElementById("box2").style.background= 'url('+ document.getElementById('box2').textContent +'.png)'
          		moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}
          	if(document.getElementById("box6").textContent=='11'){
          		
          		let t=document.getElementById("box6").textContent;
          		document.getElementById("box6").textContent=document.getElementById("box1").textContent;
          		document.getElementById("box1").textContent=t;
          		
          		document.getElementById("box1").style.background= 'url('+ document.getElementById('box1').textContent +'.png)'
          		document.getElementById("box6").style.background= 'url('+ document.getElementById('box6').textContent +'.png)'
          	    moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}

          }
          if(pos=="box5")
          {
          	if(document.getElementById("box4").textContent=='11'){
          		
          		let t=document.getElementById("box4").textContent;
          		document.getElementById("box4").textContent=document.getElementById("box5").textContent;
          		document.getElementById("box5").textContent=t;
          		
          		document.getElementById("box4").style.background= 'url('+ document.getElementById('box4').textContent +'.png)'
          		document.getElementById("box5").style.background= 'url('+ document.getElementById('box5').textContent +'.png)'
          		moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}
          	if(document.getElementById("box10").textContent=='11'){
          		
          		let t=document.getElementById("box10").textContent;
          		document.getElementById("box10").textContent=document.getElementById("box5").textContent;
          		document.getElementById("box5").textContent=t;
          		
          		document.getElementById("box5").style.background= 'url('+ document.getElementById('box5').textContent +'.png)'
          		document.getElementById("box10").style.background= 'url('+ document.getElementById('box10').textContent +'.png)'
          		moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}
          	
         }
         if(pos=="box21")
          {
          	if(document.getElementById("box22").textContent=='11'){
          		
          		let t=document.getElementById("box22").textContent;
          		document.getElementById("box22").textContent=document.getElementById("box21").textContent;
          		document.getElementById("box21").textContent=t;
          		
          		document.getElementById("box21").style.background= 'url('+ document.getElementById('box21').textContent +'.png)'
          		document.getElementById("box22").style.background= 'url('+ document.getElementById('box22').textContent +'.png)'
          		moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}
          	if(document.getElementById("box16").textContent=='11'){
          		
          		let t=document.getElementById("box16").textContent;
          		document.getElementById("box16").textContent=document.getElementById("box21").textContent;
          		document.getElementById("box21").textContent=t;
          		
          		document.getElementById("box16").style.background= 'url('+ document.getElementById('box16').textContent +'.png)'
          		document.getElementById("box21").style.background= 'url('+ document.getElementById('box21').textContent +'.png)'
          		moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}
          	
         }
         if(pos=="box25")
          {
          	if(document.getElementById("box24").textContent=='11'){
          		
          		let t=document.getElementById("box24").textContent;
          		document.getElementById("box24").textContent=document.getElementById("box25").textContent;
          		document.getElementById("box25").textContent=t;
          		
          		document.getElementById("box24").style.background= 'url('+ document.getElementById('box24').textContent +'.png)'
          		document.getElementById("box25").style.background= 'url('+ document.getElementById('box25').textContent +'.png)'
          		moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}
          	if(document.getElementById("box20").textContent=='11'){
          		
          		let t=document.getElementById("box20").textContent;
          		document.getElementById("box20").textContent=document.getElementById("box25").textContent;
          		document.getElementById("box25").textContent=t;
          		
          		document.getElementById("box25").style.background= 'url('+ document.getElementById('box25').textContent +'.png)'
          		document.getElementById("box20").style.background= 'url('+ document.getElementById('box20').textContent +'.png)'
          		moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}
          }
          	
          	for(i=1;i<25;i++)
          	{
          		if(i==7||i==8||i==9||i==12||i==13||i==14||i==17||i==18||i==19)
          		{   
                    let str=i.toString();
                    let str1=(i+1).toString();
                    let str2=(i-1).toString();
                    let str3=(i+5).toString();
                    let str4=(i-5).toString();
          			if(pos=="box"+str){
          				

          		if(document.getElementById("box"+str1).textContent=='11'){
          		
          		let t=document.getElementById("box"+str1).textContent;
          		document.getElementById("box"+str1).textContent=document.getElementById("box"+str).textContent;
          		document.getElementById("box"+str).textContent=t;
          		
          		document.getElementById("box"+str1).style.background= 'url('+ document.getElementById("box"+str1).textContent +'.png)'
          		document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
          		moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
          	}	

            if(document.getElementById("box"+str2).textContent=='11'){
                
                let t=document.getElementById("box"+str2).textContent;
                document.getElementById("box"+str2).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str2).style.background= 'url('+ document.getElementById("box"+str2).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   
            if(document.getElementById("box"+str3).textContent=='11'){
                
                let t=document.getElementById("box"+str3).textContent;
                document.getElementById("box"+str3).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str3).style.background= 'url('+ document.getElementById("box"+str3).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   

            if(document.getElementById("box"+str4).textContent=='11'){
                
                let t=document.getElementById("box"+str4).textContent;
                document.getElementById("box"+str4).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str4).style.background= 'url('+ document.getElementById("box"+str4).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   
          			}
          		}
                if(i==2||i==3||i==4)
                {   
                    str=i.toString();
                    let str1=(i+1).toString();
                    let str2=(i-1).toString();
                    let str3=(i+5).toString();
                    if(pos=="box"+str)
                {
                    if(document.getElementById("box"+str1).textContent=='11'){
                
                let t=document.getElementById("box"+str1).textContent;
                document.getElementById("box"+str1).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str1).style.background= 'url('+ document.getElementById("box"+str1).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   

            if(document.getElementById("box"+str2).textContent=='11'){
                
                let t=document.getElementById("box"+str2).textContent;
                document.getElementById("box"+str2).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str2).style.background= 'url('+ document.getElementById("box"+str2).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   
            if(document.getElementById("box"+str3).textContent=='11'){
                
                let t=document.getElementById("box"+str3).textContent;
                document.getElementById("box"+str3).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str3).style.background= 'url('+ document.getElementById("box"+str3).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   
                    }
                }
            
            if(i==6||i==11||i==16)
            {
                str=i.toString();
                let str1=(i+1).toString();
                let str3=(i+5).toString();
                let str4=(i-5).toString();
                 if(pos=="box"+str)
                {
                    if(document.getElementById("box"+str1).textContent=='11'){
                
                let t=document.getElementById("box"+str1).textContent;
                document.getElementById("box"+str1).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str1).style.background= 'url('+ document.getElementById("box"+str1).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            } 
               if(document.getElementById("box"+str3).textContent=='11'){
                
                let t=document.getElementById("box"+str3).textContent;
                document.getElementById("box"+str3).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str3).style.background= 'url('+ document.getElementById("box"+str3).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   

            if(document.getElementById("box"+str4).textContent=='11'){
                
                let t=document.getElementById("box"+str4).textContent;
                document.getElementById("box"+str4).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str4).style.background= 'url('+ document.getElementById("box"+str4).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   

            }
          }

          if(i==22||i==23||i==24)
          {
             let str=i.toString();
             let str1=(i+1).toString();
             let str2=(i-1).toString();
             let str4=(i-5).toString();
             if(pos=="box"+str){
                        

                if(document.getElementById("box"+str1).textContent=='11'){
                
                let t=document.getElementById("box"+str1).textContent;
                document.getElementById("box"+str1).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str1).style.background= 'url('+ document.getElementById("box"+str1).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   

            if(document.getElementById("box"+str2).textContent=='11'){
                
                let t=document.getElementById("box"+str2).textContent;
                document.getElementById("box"+str2).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str2).style.background= 'url('+ document.getElementById("box"+str2).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }
            if(document.getElementById("box"+str4).textContent=='11'){
                
                let t=document.getElementById("box"+str4).textContent;
                document.getElementById("box"+str4).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str4).style.background= 'url('+ document.getElementById("box"+str4).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }      
          }
      }
            if(i==10||i==15||i==20)
            {   
                let str=i.toString();
                let str2=(i-1).toString();
                let str3=(i+5).toString();
                let str4=(i-5).toString();
                    if(pos=="box"+str){
                if(document.getElementById("box"+str2).textContent=='11'){
                
                let t=document.getElementById("box"+str2).textContent;
                document.getElementById("box"+str2).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str2).style.background= 'url('+ document.getElementById("box"+str2).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   
            if(document.getElementById("box"+str3).textContent=='11'){
                
                let t=document.getElementById("box"+str3).textContent;
                document.getElementById("box"+str3).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str3).style.background= 'url('+ document.getElementById("box"+str3).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   

            if(document.getElementById("box"+str4).textContent=='11'){
                
                let t=document.getElementById("box"+str4).textContent;
                document.getElementById("box"+str4).textContent=document.getElementById("box"+str).textContent;
                document.getElementById("box"+str).textContent=t;
                
                document.getElementById("box"+str4).style.background= 'url('+ document.getElementById("box"+str4).textContent +'.png)'
                document.getElementById("box"+str).style.background= 'url('+ document.getElementById("box"+str).textContent +'.png)'
                moves++;
                document.getElementById("number").innerText="Moves:"+moves;win()
            }   


                    }
            }















        }



          	
    }

        

}



