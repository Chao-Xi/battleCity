var myColor=new Array("#DED284","blue");
var enemyColor=new Array("#00A2B5","#00FEFE");
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
    if(this.x<=0||this.x>=400||this.y<=0||this.y>=300)
		{
			window.clearInterval(this.timer);
			this.isLive=false
		}else{
	 switch(this.direct) 
	  { 
	   //子弹的坐标变化
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
	  document.getElementById('bulletdata').innerText="BulletX="+this.x+" && BulletY="+this.y;
	   }
}

function Tanks(x,y,direct,color)
   {
	 this.x=x;   
	 this.y=y;
	 this.speed=5;
	 this.color=color;
	 this.direct=direct; 
	 this.moveUp=function()
	 {
		this.y-=this.speed; 
		this.direct=0;
	 }
	 this.moveRight=function()
	 {
		this.x+=this.speed; 
		this.direct=1;
	 }
	 this.moveDown=function()
	 {
		this.y+=this.speed; 
		this.direct=2;
	 }
	 this.moveLeft=function()
	 {
		this.x-=this.speed; 
		this.direct=3;
	 }
	}


 function myTank(x,y,direct,color)
 {
	this.tank=Tanks;
	this.tank(x,y,direct,color);
	//对象冒充
	this.openfire=function()
	{    
	    //myBullet=new Bullet(this.x,this.y,0);
		
		switch(this.direct){
		case 0:
		myBullet=new Bullet(this.x+9,this.y,this.direct,2);   
		break; 
		case 1:
		myBullet=new Bullet(this.x+30,this.y+9,this.direct,2);   
		break; 
		case 2:
		myBullet=new Bullet(this.x+9,this.y+30,this.direct,2);   
		break; 
		case 3:
		myBullet=new Bullet(this.x,this.y+9,this.direct,2);   
		break;
		}
		myBullets.push(myBullet);
		//数组里的每个子弹都跑起来，每个子弹的定时器都是独立的，所以子弹的速度不会越来越快
		var timer=window.setInterval("myBullets["+(myBullets.length-1)+"].fly()",50);
		myBullets[myBullets.length-1].timer=timer;
	}
 }
 
 function EnemyTank(x,y,direct,color)
 {
	this.tank=Tanks;
	this.tank(x,y,direct,color);
	};	
 
 function drawMyBullet()
 {  
   for(var i=0; i<myBullets.length;i++){
	 var myBullet=myBullets[i];
    if(myBullet!=null && myBullet.isLive){
    cxt.fillStyle="#DED284";
    cxt.fillRect(myBullet.x,myBullet.y,3,3,2);	
	}
	}
 }
 
function drawTanks(tank){
   switch(tank.direct){
   case 0:
   case 2:
   cxt.fillStyle=tank.color[0];
   cxt.fillRect(tank.x,tank.y,5,30);
   cxt.fillRect(tank.x+15,tank.y,5,30);
   cxt.fillRect(tank.x+6,tank.y+5,8,20);
   
   cxt.fillStyle=tank.color[1];
   cxt.arc(tank.x+10,tank.y+15,3,0,440,true);
   cxt.fill();
   
   cxt.strokeStyle=tank.color[0];
   cxt.lineWidth=2;
   cxt.beginPath();
   cxt.moveTo(tank.x+10,tank.y+15);
   if(tank.direct==0){
   cxt.lineTo(tank.x+10,tank.y);}
   else if(tank.direct==2)
   {
	 cxt.lineTo(tank.x+10,tank.y+30)
	}
   cxt.closePath();
   cxt.stroke();
   break;
   
   case 1:
   case 3:
   cxt.fillStyle=tank.color[0];
   cxt.fillRect(tank.x,tank.y,30,5);
   cxt.fillRect(tank.x,tank.y+15,30,5);
   cxt.fillRect(tank.x+5,tank.y+6,20,8);
   
   cxt.fillStyle=tank.color[1];
   cxt.arc(tank.x+15,tank.y+10,3,0,440,true);
   cxt.fill();
   
   cxt.strokeStyle=tank.color[0];
   cxt.lineWidth=2;
   cxt.beginPath();
   cxt.moveTo(tank.x+15,tank.y+10);
   if(tank.direct==1){
   cxt.lineTo(tank.x+30,tank.y+10);}
   else if(tank.direct==3)
   {
	 cxt.lineTo(tank.x,tank.y+10)
	}
   cxt.closePath();
   cxt.stroke();
   break;
   }
   };	
 