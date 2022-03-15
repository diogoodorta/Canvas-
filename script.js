
var c=document.getElementById("canvas"); 
var ctx=c.getContext("2d");
ctx.fillStyle="black";
ctx.fillRect(-50,500,500,500);

ctx.moveTo(1,500);
ctx.lineTo(210,50);
ctx.lineTo(390,300);
ctx.StrokeStyle="black";
ctx.stroke();

ctx.moveTo(300,500);
ctx.lineTo(500,50);
ctx.lineTo(700,500);
ctx.StrokeStyle="black";
ctx.stroke();

ctx.moveTo(610,300);
ctx.lineTo(800,50);
ctx.lineTo(1050,500);
ctx.StrokeStyle="black";
ctx.stroke();

ctx.moveTo(940,300);
ctx.lineTo(1050,50);
ctx.lineTo(1250,500);
ctx.StrokeStyle="black";
ctx.stroke();


ctx.fillStyle="black";
ctx.fillRect(200,500,1500,200);

ctx.fillStyle="black";
ctx.fillRect(1500,500,500,500);

ctx.fillStyle="brown";
ctx.fillRect(400,700,1100,300);









