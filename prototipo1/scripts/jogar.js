let textos = [
  'Bem vindo ao introdutorio do TBPT, onde você aprenderá o básico para utilizar a nossa gamificação!',
  'Ao fundo temos a estrutura principal da nossa gamificação.',
  'A fase é composta por um canhão, de onde será arremessado um projétil.',
  'Temos também o cenário. Fique atento ao plano de fundo, pois a gravidade pode variar conforme o cenário muda.',
  'E, por fim, temos a principal ferramenta do jogo: a tabela de variáveis.',
  'Por ela você poderá digitar valores referentes ao lançamento de projéteis desejado.',
  'No modo livre, digite os valores que quizer na tabela e ela calculará os demais valores.',
  'Fique ATENTO! Nem todos os valores de váriaveis combinados geram outros valores, como o exemplo da tabela.',
  'No modo competitivo, alguns valores virão travados. Voce pode perceber a diferença entre valores travados e destravados na tabela.',
  'O objetivo no modo competitivo é calcular os valores que não estarão travados na tabela.',
  'Use as formulas de lançamento de projéteis e seu conhecimento sobre Física para achar a resposta correta.',
  'No modo competitivo, sua pontuação aparecerá aqui, e ela condiz com a corretude das respostas de cada fase.',
  'Quanto maior o número de respostas corretas, maior será sua pontuação.',
  'Boa sorte, e bons estudos!'
];
const imputs = document.querySelectorAll(".inputdados");
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
var texto_dificuldade = "Seleção de Fases";
var texto_sair = "Vitória sem luta é triunfo sem glória.";

const telaEscura = document.getElementById("tela-escura");
const minhatela = document.getElementById('canvaswrap');
const campodados = document.getElementById('campodados');
const exitb = document.getElementById('exitbutton');
const pontuacao = document.getElementById('pontuacao');
const movimentacao = document.getElementById('movimentacao');
const tmenu = document.getElementById('menu');
const confirme = document.getElementById('confirmexit');
const gmenu = document.getElementById('modeselect');
const smenu = document.getElementById('playselect');
const cbtrajetoria = document.getElementById('trajet');
const alerta_pontuacao = document.getElementById('alerta-pontuacao');

var em_jogo = false;
var modoJogo = "";
var dificuldade;
var pos;
var resposta = new Array(3);
var saida = 0;
var posicao = new Array();
var indice = 0;
var travaCanhao = true;
var controle = 0;
var pontos = 0;

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
    saida = 1;
    document.querySelector(".titulo").textContent = texto_sair;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#confirmar")) {
    resetAux();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#voltar-menu")) {
    telaEscura.style.display = "block";
    alerta_pontuacao.style.display = "none";
    resetAux();
  }
});


function resetAux() {
  confirme.style.display = "none";
  travaCanhao = true;
  movimentacao.style.display = "none";
  tmenu.style.display = "block";
  aux_angulo = 0;
  canhao.rodar(context_2);
  aux_angulo = 25 * Math.PI / 180;
  projetil.em_movimento = 0;
  em_jogo = false;
  campodados.style.display = "none";
  alerta_pontuacao.style.display = "none";
  campodados.style.opacity = 1;
  telaEscura.style.opacity = 1;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context_2.clearRect(0, 0, canvas.width, canvas.height);
  context_3.clearRect(0, 0, canvas.width, canvas.height);
  context_4.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById('campo7').value = 0;
  document.getElementById('campo5').value = 0;
  document.getElementById('campo8').value = 0;
  document.querySelector(".titulo").textContent = texto_menu;
  modoJogo = "FF";
  bloqueiaCampos();
  clearDados();
  controle = 0;
  posicao = new Array();
}

document.addEventListener("click", (event) => {
  if (event.target.matches("#desconfirmar")) {
    saida = 0;
    if (modoJogo != 'T')
      telaEscura.style.display = "none";
    confirme.style.display = "none";
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
    exitb.style.removeProperty("background-color");
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#gamemode")) {
    tmenu.style.display = "none";
    gmenu.style.display = "block";
    telaEscura.style.backgroundColor = "#0076ff";
    document.querySelector(".titulo").textContent = texto_selecaoModo;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#introducao")) {
    gmenu.style.display = "none";
    saida = 0;
    contatextos = 0;
    parar = 1;
    em_jogo = true;
    modoJogo = "T";
    auxBlock();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#tela-escura") && saida != 1) {
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
  bloqueiaCampos();
  em_jogo = true;
  telaEscura.style.display = "none";
  minhatela.style.display = "block";
  campodados.style.display = "block";
  exitb.style.display = "block";
  pontuacao.style.display = "block";
  loop();
}

document.addEventListener("click", (event) => {
  if (event.target.matches("#modoLivre")) {
    modoJogo = "L";
    auxBlock();
    pontuacao.style.display = "none";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#modoCompetitivo")) {
    gmenu.style.display = "none";
    smenu.style.display = "block";
    telaEscura.style.backgroundColor = "#00a1ff";
    document.querySelector(".titulo").textContent = texto_dificuldade;
    pontuacao.textContent = "Pontos : 0";
    modoJogo = "C";
    indice = 0;
    velocidade = Math.floor(Math.random() * 70 + 40);
    angulo = Math.floor(Math.random() * 91);
  }
});



document.addEventListener("click", (event) => {
  if (event.target.matches("#faseFacil")) {
    dificuldade = "F";
    aux_faseFacil();
    auxBlock();
  }
})

document.addEventListener("click", (event) => {
  if (event.target.matches("#faseMedia")) {
    dificuldade = "M";
    aux_faseMedia();
    auxBlock();
  }
})

document.addEventListener("click", (event) => {
  if (event.target.matches("#faseDificil")) {
    dificuldade = "D";
    aux_faseDificil();
    auxBlock();

  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#reset-fase")) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context_3.clearRect(0, 0, canvas.width, canvas.height);
    context_4.clearRect(0, 0, canvas.width, canvas.height);
    projetil.em_movimento = 0;
    alerta_pontuacao.style.display = "none";

    posicao = new Array();
    indice = 0;
    clearDados();
    controle = 0;
    velocidade = Math.floor(Math.random() * 70 + 40);
    angulo = Math.floor(Math.random() * 91);

    console.log(dificuldade);

    if (dificuldade == 'F')
      aux_faseFacil();
    else if (dificuldade == 'M')
      aux_faseMedia();
    else if (dificuldade == 'D')
      aux_faseDificil();


    modoJogo = 'L';
    bloqueiaCampos();
    modoJogo = 'C';
    bloqueiaCampos();

  }

  if (event.target.matches("#reset-fase")
   && document.getElementById("reset-fase").textContent == "Proxima Fase") {
    //lancar=false;
    if (cenario.id == 1)
      cenario.id = 0;
    else if (cenario.id == 0)
      cenario.id = 1;

    cenario.desenhar(context);
  }
});

function aux_faseDificil() {
  posicao[0] = Math.floor(Math.random() * 8);
  while (posicao.length < 3) {
    posicao.push(Math.floor(Math.random() * 8))
    posicao = [...new Set(posicao)];
  }
}

function aux_faseMedia() {
  while (posicao.length < 2) {
    let a = Math.floor(Math.random() * 8);
    if (a != 5 && a != 3) {
      posicao.push(a);
    }
    posicao = [...new Set(posicao)];
  }
}

function aux_faseFacil() {
  posicao[0] = Math.floor(Math.random() * 4);
  if (posicao[0] == 3)
    posicao[0] = 6;
}

document.addEventListener("click", (event) => {
  if (event.target.matches("#voltar")) {
    tmenu.style.display = "block";
    gmenu.style.display = "none";
    telaEscura.style.backgroundColor = "#0373f8";
    // telaEscura.style.backgroundColor = "#0076ff";
    document.querySelector(".titulo").textContent = texto_menu;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#exitp")) {
    smenu.style.display = "none";
    gmenu.style.display = "block";
    document.querySelector(".titulo").textContent = texto_selecaoModo;
  }
});

document.addEventListener("click", (event) => {
  if (event.target.matches("#tsair")) {
    window.location.replace("./login.html");
  }
});
///////////////////
document.addEventListener("click", (event) => {
  // if (event.target.matches("#rank")) {
  //   window.location.replace("./Ranking.html");
  // }
  // if(event.target.matches("#perfil")) {
  //   window.location.replace("./perfil.html");
  // }
});
////////////////////
const cenario = new Cenarios(9.8, 1, canvas.width, canvas.height);
const canhao = new Canhao(0);
const projetil = new Projetil(canhao.posicao);
const alvo = new Alvo();
var velocidade, vox, voy, gravidade, tempo, angulo, alcance, hmax;
var lancar = false;

gravidade = 9.8;
document.addEventListener("click", (event) => {

  if (event.target.matches("#botaolancar") && !lancar && modoJogo != 'T' && modoJogo != 'C') {

    projetil.angulo = Math.floor(toGrau(-aux_angulo + toRadiano(25)));

    velocidade = imputs[0].value;
    projetil.componentes(velocidade, gravidade); ///Aqui é passada a gravidade
    alvo.setPosicao(projetil.alcance - 46, canvas.height - 70);
    lancar = true;
    projetil.reset(velocidade, canhao.posicao);
    context_3.clearRect(0, 0, canvas.width, canvas.height);

    vox = calc_Vx(velocidade, toRadiano(angulo));
    voy = calc_Vy(velocidade, toRadiano(angulo));
    if (voy != 0) {
      gravidade = calc_Gravidade(voy, projetil.altura_maxima);
      console.log("gravidade  " + gravidade);
      tempo = calc_TempoVoo(voy, gravidade);
      alcance = calc_Alcance(vox, tempo);
      hmax = calc_AlturaMax(voy, gravidade);
    }
    else {
      imputs[4].value = imputs[6].value = imputs[7].value = 0;
    }

    try {
      imputs[4].value = (tempo).toFixed(2);
      imputs[3].value = (gravidade).toFixed(2);
      imputs[6].value = (alcance).toFixed(2);
      imputs[7].value = (hmax).toFixed(2);

      projetil.em_movimento = 1;
    } catch (e) {
    }
  }

  if (event.target.matches("#botaolancar") && modoJogo == 'C') {


    console.log("Projetil " + projetil.angulo);




    var j;
    if (dificuldade == 'F')
      j = 1;
    else if (dificuldade == 'M')
      j = 2;
    else if (dificuldade == 'D')
      j = 3;

    var eh_correta = 0;
    for (var i = 0; i < j; i++) {
      switch (posicao[i]) {

        case 0:
          if (parseFloat(imputs[0].value) == velocidade)
            eh_correta += 1;
          break;

        case 1:
          if (parseFloat(imputs[1].value) == vox.toFixed(2))
            eh_correta += 1;
          break;

        case 2:
          if (parseFloat(imputs[2].value) == voy.toFixed(2))
            eh_correta += 1;
          break;

        case 3:
          if (parseFloat(imputs[3].value) == gravidade.toFixed(1))
            eh_correta += 1;
          break;

        case 4:
          if (parseFloat(imputs[4].value) == tempo.toFixed(2))
            eh_correta += 1;
          break;

        case 5:
          if (parseFloat(imputs[5].value) == var_angulo)
            eh_correta += 1;
          console.log(angulo);
          break;

        case 6:
          if (parseFloat(imputs[6].value) == alcance.toFixed(2))
            eh_correta += 1;
          break;

        case 7:
          if (parseFloat(imputs[7].value) == hmax.toFixed(2))
            eh_correta += 1;
          break;
      }
    }

    pontos = pontos + 100 * eh_correta;

    console.log(j);
    console.log(eh_correta);

    if (eh_correta == j) {

      projetil.angulo = Math.floor(toGrau(-angulo + toRadiano(25)));

      console.log(angulo);
      lancar = true;
      projetil.componentes(velocidade, 9.8); ///Aqui é passada a gravidade
      alvo.setPosicao(projetil.alcance - 46, canvas.height - 70);
      projetil.reset(velocidade, canhao.posicao);
      context_3.clearRect(0, 0, canvas.width, canvas.height);
      projetil.em_movimento = 1;
      pontuacao.textContent = "Pontos : " + pontos;
      document.getElementById("texto-pontuacao").textContent = "Parabéns! Voce Acertou. Voce ganhou : " + eh_correta * 100 + " pontos";
      document.getElementById("reset-fase").textContent = "Proxima Fase";
      // alerta_pontuacao.textContent="Parabens! ";
      // alerta_pontuacao.textContent+="Voce ganhou "+pontos+" pontos";

      alerta_pontuacao.style.display = "block";

    } else {
      pontuacao.textContent = "Pontos : " + pontos;
      document.getElementById("texto-pontuacao").textContent = "Voce errou. Voce tem: " + eh_correta * 100 + " pontos";
      // document.getElementById("texto-pontuacao").innerHTML= "<div id=\"texto-pontuacao\">Voce errou!<br>" + "Voce ganhou: " + pontos + " pontos</div>";
      document.getElementById("reset-fase").textContent = "Tente de novo";
      alerta_pontuacao.style.display = "block";
    }

    console.log(pontos);
  }
});


///////////////////////////////////////////////////////////////
function toRadiano(angulo) {
  return (angulo * Math.PI / 180);
}

function toGrau(angulo) {
  return (angulo * 180) / Math.PI;
}

function calcular() {
  // let aux = -aux_angulo + 25 * Math.PI / 180;
  let aux = (-aux_angulo) + toRadiano(25);
  // velocidade = parseFloat(document.getElementById('campo1').value);
  velocidade = parseFloat(imputs[0].value);
  // angulo = parseFloat(document.getElementById('campo6').value = Math.floor(toGrau(aux)));
  if (modoJogo == 'L')
    angulo = parseFloat(imputs[5].value = Math.floor(toGrau(aux)));
  vox = calc_Vx(velocidade, toRadiano(angulo));
  voy = calc_Vy(velocidade, toRadiano(angulo));
  if (vox < 0) {
    vox = vox * -1;
  }
  //console.log(voy);
  // vox = velocidade * Math.cos(aux);
  // voy = velocidade * Math.sin(aux);
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
    canvas_p.style.display = "block";
  } else {
    canvas_p.style.display = "none";
  }
  if (lancar) {
    alvo.draw(context);
    projetil.desenhar(context_3, canvas.height, 40, 33);
    projetil.drawBall(context_4, 50, 35);
  }


  if (modoJogo == "L") {
    calcular();
    // document.getElementById('campo2').value = vox.toFixed(2);
    // document.getElementById('campo3').value = voy.toFixed(2);
    imputs[1].value = vox.toFixed(2);
    imputs[2].value = voy.toFixed(2);
  }
  // try {
  //   document.getElementById('campo2').value = vox.toFixed(2);
  //   document.getElementById('campo3').value = voy.toFixed(2);
  // } catch (e) { }
}

function clearDados() {
  velocidade = vox = voy = tempo = angulo = alcance = hmax = 0;
  gravidade = 9.8;
  imputs[0].value = 100;
}

function initCampos() {

}

function exibeIntroducao() {
  switch (contatextos) {
    case 0:
      telaEscura.style.display = "block";
      telaEscura.style.opacity = 0.7;
      exitb.style.zIndex = 12;
      campodados.style.display = "none";
      pontuacao.style.display = "none";
      break;
    case 1:
      if (confirme.style.display != 'block') {
        cenario.desenhar(context);
        canhao.draw(context);
        canhao.rodar(context_2);
        campodados.style.display = "block";
      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context_2.clearRect(0, 0, canvas.width, canvas.height);
        campodados.style.display = "none";
      }
      break;
    case 2:
      if (confirme.style.display != 'block') {

        campodados.style.display = "none";
        context.clearRect(0, 0, canvas.width, canvas.height);
        canhao.draw(context);
        canhao.rodar(context_2);
      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context_2.clearRect(0, 0, canvas.width, canvas.height);
      }
      break;
    case 3:
      if (confirme.style.display != 'block') {
        context_2.clearRect(0, 0, canvas.width, canvas.height);
        cenario.id = 0;
        cenario.desenhar(context);
      }
      else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
      break;
    case 4:
      if (confirme.style.display != 'block') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        campodados.style.display = "block";
        campodados.style.zIndex = 12;
        campodados.style.opacity = 1;
      }
      else
        campodados.style.display = "none";
      break;
    case 5:
      if (confirme.style.display != 'block')
        campodados.style.opacity = 1;
      else
        campodados.style.opacity = 0;
      break;
    case 6:
      if (confirme.style.display != 'block')
        campodados.style.opacity = 1;
      else
        campodados.style.opacity = 0;
      break;
    case 7:
      if (confirme.style.display != 'block') {
        campodados.style.opacity = 0.7;
        campodados.style.zIndex = 8;
      }
      else {
        campodados.style.opacity = 0;
      }
      break;
    case 8:
      if (confirme.style.display != 'block') {
        campodados.style.zIndex = 12;
        campodados.style.opacity = 1;
        modoJogo = 'C';
        dificuldade = 'F';
        posicao[0] = 1;
        pos = 1;
        bloqueiaCampos();
        modoJogo = 'T';
      }
      else {
        campodados.style.opacity = 0;
      }
      break;
    case 9:
      if (confirme.style.display != 'block')
        campodados.style.opacity = 1;
      else
        campodados.style.opacity = 0;

      break;
    case 10:
      campodados.style.zIndex = 8;
      campodados.style.opacity = 0.7;
      campodados.style.display = "none";
      break;
    case 11:
      if (confirme.style.display != 'block') {
        campodados.style.zIndex = 8;
        pontuacao.textContent = "Pontos : 2578";
        pontuacao.style.display = "block";
        pontuacao.style.zIndex = 12;
      }
      else {
        pontuacao.style.display = "none";
        pontuacao.style.zIndex = 9;
      }
      break;
    case 12:
      if (confirme.style.display != 'block')
        pontuacao.style.display = "block";
      else
        pontuacao.style.display = "none";
      break;
    case 13:
      pontuacao.style.zIndex = 9;
      pontuacao.style.display = "none";
      pontuacao.textContent = "Pontos : 0";
      break;
    case 14:
      bloqueiaCampos();
      cenario.id = 1;
      context.clearRect(0, 0, canvas.width, canvas.height);
      cenario.desenhar(context);
      exitb.style.zIndex = 9;
      telaEscura.style.opacity = 1;
      telaEscura.style.display = "none";
      campodados.style.display = "block";
      movimentacao.style.display = "block";
      modoJogo = 'L';
      contatextos++;
      break;
  }
  if (saida != 1)
    document.querySelector(".titulo").textContent = textos[contatextos];
}

var campos = [0, 1, 2, 7, 4, 5, 6];

function bloqueiaCampos() {
  posicao.sort();
  for (let i = 0; i < 8; i++) {
    if (modoJogo == "C") {
      let cor = "green"
      if (i != posicao[indice]) {
        imputs[i].disabled = true;
        cor = "red";
      } else {
        if (dificuldade == "M" && indice < 1) {
          indice++;
        }
        if (dificuldade == "D" && indice < 2) {
          indice++;
        }
      }
      imputs[i].style.border = '2px solid ' + cor;
      // document.getElementById('campo' + i).style.border = '2px solid ' + cor;
    }


    if (modoJogo != "C") {
      // document.getElementById('campo' + i).disabled = false;
      // document.getElementById('campo' + i).style.border = 'none';
      imputs[i].disabled = false;
      imputs[i].style.border = 'none';
    }
  }
}

function faseFacil() {
  // angulo= canhao.angulo;
}

function faseMedia() {
  // console.log("Média");

}

function faseDificil() {
  // console.log("Difícil");

}


function valor_campos() {

  gravidade = 9.8;
  vox = calc_Vx(velocidade, toRadiano(angulo));
  voy = calc_Vy(velocidade, toRadiano(angulo));

  console.log("gravidade  " + gravidade);
  tempo = calc_TempoVoo(voy, gravidade);
  alcance = calc_Alcance(vox, tempo);
  hmax = calc_AlturaMax(voy, gravidade);

  imputs[1].value = vox.toFixed(2);
  imputs[2].value = voy.toFixed(2);
  imputs[3].value = (gravidade).toFixed(2);
  imputs[4].value = (tempo).toFixed(2);
  imputs[6].value = (alcance).toFixed(2);
  imputs[7].value = (hmax).toFixed(2);

  imputs[posicao[0]].value = 0;

  if (dificuldade == 'M' || dificuldade == 'D')
    imputs[posicao[1]].value = 0;

  if (dificuldade == 'D')
    imputs[posicao[2]].value = 0;

  canhao.muda_angulo(toRadiano(-angulo + 25));
}

var var_angulo;
function modoCompetitivo() {
  if (controle == 0) {
    imputs[0].value = velocidade;
    imputs[5].value = canhao.angulo = angulo;
    var_angulo = angulo;
    console.log(velocidade);
    console.log(angulo);
    controle = 1;
    valor_campos();
  }

  // bloqueiaCampos();
  let a;
  for (let i = 0; i < posicao.length; i++) {
    if (posicao[i] == 5) {
      a = 1
    }
  }
  (a == 1) ? travaCanhao = true : travaCanhao = false;

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
        exibeIntroducao();
        break;
    }
    requestAnimationFrame(loop);
  }
}

window.addEventListener("keydown", canhao.move);
// window.addEventListener("keydown", () => { if (travaCanhao) canhao.move(event) });