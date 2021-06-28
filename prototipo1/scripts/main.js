var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

var canvas_2 = document.getElementById("canvas_c")
canvas_2.width = window.innerWidth;
canvas_2.height = window.innerHeight;
var context_2 = canvas_2.getContext("2d");

var canvas_3 = document.getElementById("canvas_p")
canvas_3.width = window.innerWidth;
canvas_3.height = window.innerHeight;
var context_3 = canvas_3.getContext("2d");

var canvas_4 = document.getElementById("canvas_b")
canvas_4.width = window.innerWidth;
canvas_4.height = window.innerHeight;
var context_4 = canvas_4.getContext("2d");

var texto_menu = "Menu";
var texto_selecaoModo = "Seleção de Modos";
var texto_sair = "Vitória sem luta é triunfo sem glória.";

const telaEscura = document.getElementById("tela-escura");
const minhatela = document.getElementById('canvaswrap');
const campodados = document.getElementById('campodados');
const exitb = document.getElementById('exitbutton');
const tmenu = document.getElementById('menu');
const confirme = document.getElementById('confirmexit');
const gmenu = document.getElementById('modeselect');
const cbtrajetoria = document.getElementById('trajet');
telaEscura.style.display = "block";
tmenu.style.display = "block";

document.addEventListener("click", (event) => {
  if (event.target.matches("#playbutton")) {
    telaEscura.style.display = "none";
    minhatela.style.display = "block";
    campodados.style.display = "block";
    exitb.style.display = "block";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#exitbutton")) {
    telaEscura.style.display = "block";
    tmenu.style.display = "none";
    confirme.style.display = "block";
    document.querySelector(".titulo").textContent = texto_sair;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#confirmar")) {
    confirme.style.display = "none";
    tmenu.style.display = "block";
    document.querySelector(".titulo").textContent = texto_menu;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#desconfirmar")) {
    confirme.style.display = "none";
    telaEscura.style.display = "none";
  }
});

document.addEventListener("mouseover", (event) => {
  if (event.target.matches("#campodados") || event.target.matches("#tdcampodados1") || event.target.matches("#tdcampodados2") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar") || event.target.matches("#divtrajetoria") || event.target.matches("#trajet") || event.target.matches("#trajet2")) {
    campodados.style.opacity = "1";
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches("#campodados") || event.target.matches("#campo1") || event.target.matches(".horizontal-center") || event.target.matches("#botaolancar") || event.target.matches("#divtrajetoria") || event.target.matches("#trajet") || event.target.matches("#trajet2")) {
    campodados.style.opacity = "0.5";
  }
});
// document.addEventListener("mouseover", (event) => {
//   if (event.target.matches("cds")) {
//     campodados.style.opacity = "1";
//   }
// });

// document.addEventListener("mouseout", (event) => {
//   if (event.target.matches("cd")) {
//     campodados.style.opacity = "0.5";
//   }
// });

document.addEventListener("mouseover", (event) => {
  if (event.target.matches("#exitbutton")) {
    exitb.style.backgroundColor = "red";
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches("#exitbutton")) {
    exitb.style.backgroundColor = "gray";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#gamemode")) {
    tmenu.style.display = "none";
    gmenu.style.display = "block";
    document.querySelector(".titulo").textContent = texto_selecaoModo;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#modoLivre")) {
    telaEscura.style.display = "none";
    gmenu.style.display = "none";
    minhatela.style.display = "block";
    campodados.style.display = "block";
    exitb.style.display = "block";
    loop();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#voltar")) {
    tmenu.style.display = "block";
    gmenu.style.display = "none";
    document.querySelector(".titulo").textContent = texto_menu;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#tsair")) {
    // window.close();
    // <a href="./login.html">Voltar à tela de login</a>
    window.location.replace("./login.html");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#rank")) {
    // window.close();
    // <a href="./login.html">Voltar à tela de login</a>
    window.location.replace("./Ranking.html");
  }
});

var lancar = false;
document.addEventListener("click", (event) => {

  if (event.target.matches("#botaolancar")) {
    projetil.angulo = Math.floor(((180 * (-aux_angulo + 0.4375)) / Math.PI));
    console.log(projetil.angulo);
    projetil.componentes();
    alvo.setPosicao(projetil.alcance, canvas.height-70);
    lancar = true;
  }
});


const cenario = new Cenarios(9.8, 0, canvas.width, canvas.height);
const canhao = new Canhao(0);
const projetil = new Projetil(10, canhao.posicao);
const alvo = new Alvo();
function loop() {
  cenario.desenhar(context);
  canhao.draw(context);
  canhao.rodar(context_2);

  if (cbtrajetoria.checked) {
    projetil.trajetoria = true;
  } else {
    projetil.trajetoria = false;
  }
  //projetil.desenhar(context_3, canvas_3.height, 50, 35);
  if (lancar) {
    alvo.draw(context);
    projetil.desenhar(context_3, canvas.height, 40, 33)
    projetil.drawBall(context_4, canvas_4.height, 50, 35);
  }
  // canhao.lancarProjetil();
  requestAnimationFrame(loop);
}
window.addEventListener("keydown", canhao.move);

//loop();