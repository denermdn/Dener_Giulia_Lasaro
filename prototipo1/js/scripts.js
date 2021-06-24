
const telaEscura = document.getElementById("tela-escura");
const minhatela = document.getElementById('canvas');
const campodados = document.getElementById('campodados');
telaEscura.style.display = "block";

document.addEventListener("click", (event) => {
  if (event.target.matches("#playbutton")) {
    telaEscura.style.display = "none";
    minhatela.style.display = "block";
    campodados.style.display = "block";
  }
});

document.addEventListener("mouseover", (event) => {
  if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar")) {
    campodados.style.opacity = "1";
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar")) {
    campodados.style.opacity = "0.5";
  }
});

var obj = document.getElementByClass("Canhao");
var obj2 = document.getElementById("rodacanhao");

//var cannon = document.getElementByClassName("Canhao");
//var wheel = document.getElementById("rodacanhao");
//var px = obj.style.left;
var px = minhatela.height - 70;
var pay = -45;
var py = (pay * (-1) * Math.PI) / 180;
var px2 = 73;
var vo = 130;
var g = 9.8;
var auxc = canhao.angulo - 19;

function move() {

  var tecla = event.keyCode;

  if (tecla == 37) {
  } else if (tecla == 38 && (pay >= -89)) {
    pay -= 1;
    auxc -= 1;
    cannon.style.transform = "rotate(" + auxc + "deg)";
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas.
  } else if (tecla == 39) {
  } else if (tecla == 40 && (pay <= -25)) {
    pay += 1;
    auxc += 1;
    obj.style.transform = "rotate(" + auxc + "deg)";
  } else if (tecla == 13) {
    py = (pay * (-1) * Math.PI) / 180;
    vx = vo * Math.cos(py);
    vy = vo * Math.sin(py);
    requestAnimationFrame(sInt);
  }
}

document.addEventListener("keydown", move);


///canvas---------------------------------------------------------------------------------------------------------------------

// Início do desenho.
var x = 70;
var xaux = x;
var y = 807;
var yaux = y;
var linha = 1;
var vx;
var vy;
var t = 0;
vx = vo * Math.cos(py);
vy = vo * Math.sin(py);
var voaux;

//ctx.save();

//if(tecla==13)
//requestAnimationFrame(sInt);
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



function sInt() {
  t = 0;
  voaux = document.getElementById("campo1").value;
  vo = parseFloat(voaux);
  vx = vo * Math.cos(py);
  vy = vo * Math.sin(py);
  //canvas = document.getElementById('minha-tela');
  //ctx = canvas.getContext('2d');
  setInterval(gameloop, 1);
  clearInterval(gameloop);
}

function gameloop() {

  x = xaux + vx * t;
  y = yaux - (vy * t - 0.5 * g * Math.pow(t, 2));
  t += 0.0001;

  desenharQuadrado(x, y);
  if (y <= canvas.height)
    requestAnimationFrame(gameloop);
}

function desenharQuadrado(pX, pY) {
  //ctx.clearRect(0, 0, 800, 400); // Limpar o canvas.

  //ctx.beginPath();
 // ctx.fillStyle = '#F0F';
  ctx.fillStyle= 'red';
  ctx.fillRect(pX, pY, 5, 5);

  //  ctx.beginPath();//Apaga dados de desenhos anteriores
  //  ctx.lineTo(pX, pY);
  //  ctx.stroke();  
//  context.moveTo(75, 250);
//  context.lineTo(150, 50);
//  context.lineTo(225, 250);
//  context.lineTo(50, 120);
//  context.lineTo(250, 120);
//  context.lineTo(75, 250);
//  context.stroke();
}
    ///canvas---------------------------------------------------------------------------------------------------------------------
