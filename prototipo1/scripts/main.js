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
const smenu = document.getElementById('playselect');
const cbtrajetoria = document.getElementById('trajet');
var em_jogo = false;
var modoJogo = "";

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
    aux_angulo = 0;
    canhao.rodar(context_2);
    aux_angulo = 25 * Math.PI / 180;
    projetil.em_movimento = 0;
    context_2.clearRect(0, 0, canvas.width, canvas.height);
    context_3.clearRect(0, 0, canvas.width, canvas.height);
    context_4.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('campo7').value = 0;
    document.getElementById('campo5').value = 0;
    document.getElementById('campo8').value = 0;
    document.querySelector(".titulo").textContent = texto_menu;
    em_jogo = false;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#desconfirmar")) {
    confirme.style.display = "none";
    telaEscura.style.display = "none";

  }
});

document.addEventListener("mouseover", (event) => {
  if (event.target.matches(".tabdados")
    || event.target.matches("#tabeladados")
    || event.target.matches("#botaolancar")
    || event.target.matches("#trajet")
    || event.target.matches(".inputdados")) {
    campodados.style.opacity = "1";
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches(".tabdados")
    || event.target.matches("#tabeladados")
    || event.target.matches("#botaolancar")
    || event.target.matches("#trajet")
    || event.target.matches(".inputdados")) {
    campodados.style.opacity = "0.3";
  }
});

document.addEventListener("mouseover", (event) => {
  if (event.target.matches("cd")) {
    campodados.style.opacity = "1";
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.matches("cd")) {
    campodados.style.opacity = "0.5";
  }
});

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

function auxBlock(){
    telaEscura.style.display = "none";
    minhatela.style.display = "block";
    campodados.style.display = "block";
    exitb.style.display = "block";
}

document.addEventListener("click", (event) => {
  if (event.target.matches("#modoLivre")) {
    gmenu.style.display = "none";
    auxBlock();
    em_jogo = true;
    modoJogo= "L";
    loop();
  }
});


document.addEventListener("click", (event) => {
  if (event.target.matches("#modoCompetitivo")) {
    gmenu.style.display = "none";
    smenu.style.display = "block";
  }
});
document.addEventListener("click", (event) => {
  if(event.target.matches("#faseFacil")){
    smenu.style.display = "none";
    modoJogo = "C";
    auxBlock();
    em_jogo = true;
    loop();
  }
})

document.addEventListener("click", (event) => {
  if (event.target.matches("#voltar")) {
    tmenu.style.display = "block";
    gmenu.style.display = "none";
    document.querySelector(".titulo").textContent = texto_menu;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#exitp")) {
    smenu.style.display = "none";
    gmenu.style.display = "block";
    document.querySelector(".titulo").textContent = texto_menu;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#tsair")) {
    window.location.replace("./login.html");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#rank")) {
    window.location.replace("./Ranking.html");
  }
});

var lancar = false;
document.addEventListener("click", (event) => {

  if (event.target.matches("#botaolancar") && !lancar) {
    projetil.angulo = Math.floor(((180 * (-aux_angulo + 25 * Math.PI / 180)) / Math.PI));

    console.log(projetil.angulo);
    projetil.componentes();
    alvo.setPosicao(projetil.alcance - 46, canvas.height - 70);
    lancar = true;
    projetil.reset(canhao.posicao);
    context_3.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('campo7').value = (projetil.alcance - 46).toFixed(2);
    document.getElementById('campo5').value = (projetil.tempo).toFixed(2);
    document.getElementById('campo8').value = (projetil.altura_maxima).toFixed(2);

    projetil.em_movimento = 1;
  }

});


///////////////////////////////////////////////////////////////
const cenario = new Cenarios(9.8, 0, canvas.width, canvas.height);
const canhao = new Canhao(0);
const projetil = new Projetil(canhao.posicao);
const alvo = new Alvo();

var velocidade, vox, voy, gravidade, tempo, angulo, alcance, hmax;

function calcular() {
  let aux = -aux_angulo + 25 * Math.PI / 180;
  velocidade = parseFloat(document.getElementById('campo1').value);
  angulo = parseFloat(document.getElementById('campo6').value = Math.floor(((180 * (aux)) / Math.PI)));
  vox = velocidade * Math.cos(aux);
  voy = velocidade * Math.sin(aux);
  if (vox < 0) {
    vox = vox * -1;
  }
}


function modoLivre() {
  cenario.desenhar(context);
  canhao.draw(context);
  canhao.rodar(context_2);
  if (projetil.em_movimento != 1) {
    lancar = false;
    if (projetil.em_movimento == 2)
      alvo.draw(context);
  }
  if (cbtrajetoria.checked) {
    canvas_p.style.display = "inline";
  } else {
    canvas_p.style.display = "none";
  }
  if (lancar) {
    alvo.draw(context);
    projetil.desenhar(context_3, canvas.height, 40, 33);
    projetil.drawBall(context_4, canvas_4.height, 50, 35);
  }
  // angulo = parseFloat(document.getElementById('campo6').value = Math.floor(((180 * (-aux_angulo + 25 * Math.PI / 180)) / Math.PI)));
  // velocidade = parseFloat(document.getElementById('campo1').value);
  // vox = velocidade * Math.cos(-aux_angulo + 25 * Math.PI / 180);
  // voy = velocidade * Math.sin(-aux_angulo + 25 * Math.PI / 180);
  // if (vox < 0) {
  //   vox = vox * -1;
  // }
  calcular();

  document.getElementById('campo2').value = vox.toFixed(2);
  document.getElementById('campo3').value = voy.toFixed(2);
}


function bloqueiaCampos(){
  for(let i=1; i<9; i++){
    document.getElementById('campo' + i).disabled = true;
  }
}

function faseFacil(){
  bloqueiaCampos();
  modoLivre();
}

function modoCompetitivo() {
  faseFacil();
}

function loop() {
  if (em_jogo) {
    switch(modoJogo) {
      case "L":
        modoLivre();
        break;
      case "C":
        modoCompetitivo();
        break;
      case "T":
        break;
    }
    requestAnimationFrame(loop);
  }
  console.log(modoJogo);
}

window.addEventListener("keydown", canhao.move);

