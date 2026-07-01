const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 540;

const menu = document.getElementById("menu");

document.getElementById("startButton").onclick = iniciar;

function iniciar(){

menu.style.display="none";

canvas.style.display="block";

loop();

}

function desenhar(){

ctx.fillStyle="#87CEEB";

ctx.fillRect(0,0,960,540);

ctx.fillStyle="#5cb85c";

ctx.fillRect(0,430,960,110);

ctx.fillStyle="#7b4d21";

ctx.fillRect(0,455,960,85);

ctx.fillStyle="white";

ctx.font="40px Arial";

ctx.fillText("Versão 0.1",20,50);

ctx.font="24px Arial";

ctx.fillText("Em breve Joelson iniciará sua aventura...",20,90);

}

function loop(){

desenhar();

requestAnimationFrame(loop);

}
