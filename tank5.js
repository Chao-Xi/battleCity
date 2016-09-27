var Mycolor=new Array("#cc6600","#ff9900");
var Enemycolor=new Array("#00A2B5","#00FEFE");

function Bullet(x,y,direct,speed)
{
  this.x=x;
  this.y=y;
  this.direct=direct; 	
  this.speed=speed;
  this.timer=null;
  this.isLive=true;
  this.fly=function fly()
  { 
   if(this.x<=0||this.x>=800||this.y<=0||this.y>=500)
   {
	    window.clearInterval(this.timer);
		this.isLive=false;
	   }else{
	 switch(this.direct) 
	  {
	    case 0:
		  this.y-=this.speed;
		 break;  
		  case 1:
		  this.x+=this.speed;
		 break; 
		  case 2:
		  this.y+=this.speed;
		 break; 
		  case 3:
		  this.x-=this.speed;
		 break;  
	  }
	   }
	  document.getElementById("show").innerHTML="Running Data: BULLETX="+this.x+" BULLETY="+this.y;
   }
}

function Tank(x,y,direct,color)
 {
	this.x=x;
	this.y=y;
	this.speed=10;
	this.color=color
	this.direct=direct;   
	//direct 0 upwards 1 right 2 dowanwards 3 left 
	this.moveUp=function()
	{   
	    if(this.y-10>=0){
		this.y-=this.speed;
		this.direct=0;}
		else{
		this.y-=0;
		this.direct=0;	
			}
		}
	
	this.moveRight=function()
	{   
	if(this.x+55<=800){
		this.x+=this.speed;
		this.direct=1;
	   }else
	   {
		  this.x+=0;
		  this.direct=1; 
		   }
		}
		
	this.moveDown=function()
	{   if(this.y+60<=500)
	    {
		this.y+=this.speed;
		this.direct=2;
		}
		else{
		this.y+=0;
		this.direct=2;	
			}
		}
		
  this.moveLeft=function()
	{  if(this.x-10>=0){
		this.x-=this.speed;
		this.direct=3;
	  }else
	  {
		this.x-=0;
		this.direct=3;
		  }
		}		
	}
 
 
 function Mytank(x,y,direct,color)
   {
	//对象冒充
	this.tank=Tank;
	this.tank(x,y,direct,color);
	this.shotenemy=function()
	{  
	   //alert("okay");
	   //myBullet=new Bullet(this.x,this.y,0);
	   switch(this.direct){
		case 0:
		myBullet=new Bullet(this.x+19,this.y-6,this.direct,2);   
		break; 
		case 1:
		myBullet=new Bullet(this.x+55,this.y+20,this.direct,2);   
		break; 
		case 2:
		myBullet=new Bullet(this.x+20,this.y+55,this.direct,2);   
		break; 
		case 3:
		myBullet=new Bullet(this.x-5,this.y+20,this.direct,2);   
		break;  
		}
		myBullets.push(myBullet);
		//hard spot
		var timer=window.setInterval("myBullets["+(myBullets.length-1)+"].fly()",50);
		//js的传递是引用传递
	   myBullets[myBullets.length-1].timer=timer;
	 }
   }
  
  function Enemytank(x,y,direct,color)
   {
	//对象冒充
	this.tank=Tank;
	this.tank(x,y,direct,color);
   }

  function drawMyBullet()
{   
    for(var i=0;i<myBullets.length;i++){
	var myBullet=myBullets[i];	
    if(myBullet!=null && myBullet.isLive){
    cxt.fillStyle="#FEF26E";
	cxt.fillRect(myBullet.x,myBullet.y,5,5);
	}
	}
}

function drawTank(tank){

  switch(tank.direct){
  case 0:
  case 2:
  //cxt.fillStyle="#ff9900";
  cxt.fillStyle=tank.color[0];
  cxt.fillRect(tank.x,tank.y,10,50);
  cxt.fillRect(tank.x+30,tank.y,10,50);
  cxt.fillRect(tank.x+11,tank.y+15,18,25);
  
  cxt.fillStyle=tank.color[1];
  cxt.arc(tank.x+20,tank.y+15+10,5,360,0,true);
  cxt.fill();
  
  cxt.strokeStyle=tank.color[0];
  cxt.lineWidth=2.5;
  cxt.beginPath();
  cxt.moveTo(tank.x+20,tank.y+15+10);
  if(tank.direct==0)
  {
  cxt.lineTo(tank.x+20,tank.y-5);
  }else if(tank.direct==2)
  {
  cxt.lineTo(tank.x+20,tank.y+55);  
   }
  cxt.closePath();
  cxt.stroke();
  break;
  
  case 1:
  case 3:
  cxt.fillStyle=tank.color[0];
  cxt.fillRect(tank.x,tank.y,50,10);
  
  cxt.fillRect(tank.x,tank.y+30,50,10);
  
  cxt.fillRect(tank.x+10,tank.y+11,25,18);
  
  cxt.fillStyle=tank.color[1];
  cxt.arc(tank.x+10+15,tank.y+11+9,5,360,0,true);
  cxt.fill();
  
  cxt.strokeStyle=tank.color[0];
  cxt.lineWidth=2.5;
  cxt.beginPath();
  cxt.moveTo(tank.x+10+15,tank.y+11+9);
  if(tank.direct==1){
  cxt.lineTo(tank.x+10+15+30,tank.y+11+9);
  }else if(tank.direct==3){
  cxt.lineTo(tank.x+10+15-30,tank.y+11+9);  
	  }
  cxt.closePath();
  cxt.stroke();
  }
}// JavaScript Document