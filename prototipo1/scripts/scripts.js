
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


// 
// document.addEventListener("mouseover", (event) => {
//   if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar")) {
//     campodados.style.opacity = "1";
//   }
// });

// document.addEventListener("mouseout", (event) => {
//   if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar")) {
//     campodados.style.opacity = "0.5";
//   }
// });
// 



var obj = document.getElementById("topcanhao");
var obj2 = document.getElementById("rodacanhao");




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


// 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;  
// 


function sInt() {
  t = 0;
  voaux = document.getElementById("campo1").value;
  vo = parseFloat(voaux);
  vx = vo * Math.cos(py);
  vy = vo * Math.sin(py);
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
  ctx.beginPath();
  ctx.fillStyle= 'red';
  ctx.fillRect(pX, pY, 5, 5);

}
    // /canvas---------------------------------------------------------------------------------------------------------------------
