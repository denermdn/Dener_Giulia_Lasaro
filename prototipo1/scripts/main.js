let textos = [
  'Bem vindo ao introdutorio do TBPT, onde voce aprendera o básico para utilizar a nossa gamificação!',
  'Ao fundo temos a estrutura principal da nossa gamificação.',
  'Nossa fase é composto pelo nosso canhão, que é de onde será arremessado o nosso projetil.',
  'Temos também o cenário. Fique atento ao plano de fundo, pois a gravidade muda conforme o cenário muda',
  'Temos o nosso projetil, que é o elemento que será arremessado assim que solicitado.',
  'E por fim, temos a principal ferramenta do jogo: a tabela de variáveis.',
  'Por ela você poderá digitar valores referentes ao lançamento de projéteis desejado.',
  'No modo livre, digite o valores que quizer na tabela e ela calculará os demais valores.',
  'Fique ATENTO! Nem todos os valores de váriaveis combinados geram outros valores, como o exemplo da tabela.',
  'No modo competitivo, alguns valores virão travados. Voce pode perceber a diferença entre valores trabados e destravados na tabela.',
  'O objetivo no modo competitivo é calcular os valores que não estão travados na tabela.',
  'Use as formulas de lançamento de projéteis e seu conhecimento sobre Física para achar a resposta correta.',
  'No modo competitivo, sua pontuação aparecerá aqui, e ela condiz com a corretude e tempo de resposta de cada fase.',
  'Quanto menor o tempo de resposta e quanto mais perto da resposta estiver os valores digitados, mais pontos serão ganhos.',
  'Boa sorte, e bons estudos!'
];
var ntextos = textos.length;
var contatextos = 0;
console.log(ntextos);

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
var dificuldade = "";
var pos;

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
    modoJogo = "FF";
    bloqueiaCampos();
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

document.addEventListener("click", (event) => {
  if (event.target.matches("#introducao")) {
    gmenu.style.display = "none";
    auxBlock();
    contatextos = 0;
    exibeIntroducao();
    em_jogo = true;
    modoJogo = "L";
    loop();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#tela-escura")) {
    console.log(contatextos);
    if (contatextos <= 15)
      contatextos++;
  }
});

function auxBlock() {
  if (modoJogo == "C") {
    smenu.style.display = "none";
  }
  else {
    gmenu.style.display = "none";
  }
  em_jogo = true;
  telaEscura.style.display = "none";
  minhatela.style.display = "block";
  campodados.style.display = "block";
  exitb.style.display = "block";
  loop();
}

document.addEventListener("click", (event) => {
  if (event.target.matches("#modoLivre")) {
    modoJogo = "L";
    auxBlock();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#modoCompetitivo")) {
    gmenu.style.display = "none";
    smenu.style.display = "block";
    modoJogo = "C";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#faseFacil")) {
    dificuldade = "F";
    pos = Math.floor(Math.random() * 4);
    auxBlock();
  }
})
document.addEventListener("click", (event) => {
  if (event.target.matches("#faseMedia")) {
    dificuldade = "M";
    auxBlock();
  }
})

document.addEventListener("click", (event) => {
  if (event.target.matches("#faseDificil")) {
    dificuldade = "D";
    auxBlock();
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

var velocidade, vox, voy, gravidade, tempo, angulo, alcance, hmax;
var lancar = false;
document.addEventListener("click", (event) => {

  if (event.target.matches("#botaolancar") && !lancar) {
    // projetil.angulo = Math.floor(((180 * (-aux_angulo + toRadiano(25))) / Math.PI));
    projetil.angulo = Math.floor(toGrau(-aux_angulo + toRadiano(25)));
    projetil.componentes();
    alvo.setPosicao(projetil.alcance - 46, canvas.height - 70);
    lancar = true;
    projetil.reset(canhao.posicao);
    context_3.clearRect(0, 0, canvas.width, canvas.height);

    vox = calc_Vx(velocidade, toRadiano(angulo));
    voy = calc_Vy(velocidade, toRadiano(angulo));

    gravidade = calc_Gravidade(voy, projetil.altura_maxima);
    tempo = calc_TempoVoo(voy, gravidade);
    alcance = calc_Alcance(vox, tempo);
    hmax = calc_AlturaMax(voy, gravidade);

    document.getElementById('campo5').value = (tempo).toFixed(2);
    document.getElementById('campo7').value = (alcance).toFixed(2);
    document.getElementById('campo8').value = (hmax).toFixed(2);

    projetil.em_movimento = 1;
  }

});


///////////////////////////////////////////////////////////////
function toRadiano(angulo) {
  return (angulo * Math.PI / 180);
}

function toGrau(angulo) {
  return (angulo * 180) / Math.PI;
}
const cenario = new Cenarios(9.8, 1, canvas.width, canvas.height);
const canhao = new Canhao(0);
const projetil = new Projetil(canhao.posicao);
const alvo = new Alvo();


function calcular() {
  // let aux = -aux_angulo + 25 * Math.PI / 180;
  let aux = (-aux_angulo) + toRadiano(25);
  velocidade = parseFloat(document.getElementById('campo1').value);
  angulo = parseFloat(document.getElementById('campo6').value = Math.floor(toGrau(aux)));
  if (vox < 0) {
    vox = vox * -1;
  }
  // vox = velocidade * Math.cos(aux);
  // voy = velocidade * Math.sin(aux);
  // console.log(velocidade + "a"); 
  // console.log(vox +"a");
  // console.log(voy +"a");
  // console.log(gravidade +"a");
  // console.log(tempo +"a");
  // console.log(angulo +"a");
  // console.log(alcance +"a");
  // console.log(hmax +"a");
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
    projetil.drawBall(context_4, 50, 35);
  }

  calcular();
  try {
    document.getElementById('campo2').value = vox.toFixed(2);
    document.getElementById('campo3').value = voy.toFixed(2);
  } catch (e) {

  }
}

function exibeIntroducao() {
  switch (contatextos) {
    case 0:
      telaEscura.style.display = "block";
      telaEscura.style.opacity = 0.7;
      exitb.style.zIndex = 12;
      break;
    case 1:
      break;
    case 2:
      canvas.style.zIndex = 12;
      break;
    case 3:
      canvas.style.zIndex = 1;
      break;
    case 15:
      telaEscura.style.display = "none";
      telaEscura.style.opacity=1;
      break;
  }

  document.querySelector(".titulo").textContent = textos[contatextos];
  if (contatextos < ntextos)
    requestAnimationFrame(exibeIntroducao);
}
var campos = [1, 2, 3, 7, 5, 6, 8];
function bloqueiaCampos() {
  for (let i = 1; i < 9; i++) {
    if (modoJogo == "C") {
      let cor = "green"
      if (i != campos[pos]) {
        document.getElementById('campo' + i).disabled = true;
        cor = "red";
      }
      document.getElementById('campo' + i).style.border = '2px solid ' + cor;
    }
    else {
      document.getElementById('campo' + i).disabled = false;
      document.getElementById('campo' + i).style.border = 'none';

    }

  }
}

function faseFacil() {
  // console.log("Fácil");
  // console.log(campos[pos] + ' ' + pos + 'Aqui');

}

function faseMedia() {
  // console.log("Média");

}

function faseDificil() {
  // console.log("Difícil");

}

function modoCompetitivo() {
  bloqueiaCampos();
  switch (dificuldade) {
    case "F":
      faseFacil();
      break;
    case "M":
      faseMedia();
      break;
    case "D":
      faseDificil();
      break;
  }
  modoLivre();
}

function loop() {
  if (em_jogo) {
    switch (modoJogo) {
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