var c=document.getElementById("canvas"); 
var ctx=c.getContext("2d");
var img=new Image; 

ctx.fillStyle="black";
ctx.fillRect(-50,500,500,500);


ctx.strokeStyle="#8b4513";
ctx.fillStyle="#8b4513";
ctx.beginPath();
ctx.moveTo(0,300);
ctx.lineTo(150,50);
ctx.lineTo(390,300);
ctx.stroke();
ctx.fill();


ctx.strokeStyle="#8b4513";
ctx.fillStyle="#8b4513";
ctx.beginPath();
ctx.moveTo(200,500);
ctx.lineTo(500,50);
ctx.lineTo(800,500);
ctx.stroke();
ctx.fill();


ctx.strokeStyle="#8b4513";
ctx.fillStyle="#8b4513";
ctx.beginPath();
ctx.moveTo(850,500);
ctx.lineTo(1050,50);
ctx.lineTo(1300,500);
ctx.stroke();
ctx.fill();

ctx.strokeStyle="#8b4513";
ctx.fillStyle="#8b4513";
ctx.beginPath();
ctx.moveTo(1190,300);
ctx.lineTo(1350,50);
ctx.lineTo(1540,300);
ctx.stroke();
ctx.fill();


ctx.strokeStyle="#8b4513";
ctx.fillStyle="#8b4513";
ctx.beginPath();
ctx.moveTo(1380,500);
ctx.lineTo(1750,50);
ctx.lineTo(2100,500);
ctx.stroke();
ctx.fill();

ctx.fillStyle="#8b4513";
ctx.fillRect(-2,300,2000,200);

ctx.fillStyle="black";
ctx.fillRect(200,500,1500,200);

ctx.fillStyle="black";
ctx.fillRect(1500,500,500,500);

ctx.fillStyle="#8b4513";
ctx.fillRect(400,700,1100,300);

ctx.strokeStyle="red";
ctx.fillStyle="red";
ctx.beginPath();
ctx.shadowBlur = 30;
ctx.shadowColor = "yellow";
ctx.arc(800, 140, 150, 1, Math.PI/3, true);
ctx.stroke(); 
ctx.fill();

img.onload=function(){
	ctx.drawImage(img, 50, 200);
};
img.src= 'img/carro.png';

