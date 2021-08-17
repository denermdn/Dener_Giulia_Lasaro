// window.onload = function () {
var canvas_box_cenario = document.getElementById("box_cenario");
var context_box_cenario = canvas_box_cenario.getContext("2d");

var canvas_box_canhao = document.getElementById("box_canhao");
var context_box_canhao = canvas_box_canhao.getContext("2d");

var canvas_box_projetil = document.getElementById("box_projetil");
var context_box_projetil = canvas_box_projetil.getContext("2d");

var idElementos = {
    qtd_cenarios: 4,
    qtd_canhao: 5,
    qtd_projetil: 7,
    idCenarios: 0,
    idCanhao: 0,
    idProjetil: 0
};

var tela = {
    largura: 0,
    altura: 0,
}
const posicoes_corte = [
    [0, 0],
    [32, 0],
    [64, 0],
    [0, 32],
    [32, 32],
    [64, 32],
    [0, 64]
];

function setaParemetrosTela() {
    tela.largura = 350;
    tela.altura = 150;
}

var cenario = new Image();
var canhao = new Image();
var ball = new Image();


function draw_boxCenario() {
    cenario.src = "./imagens/cenario" + idElementos.idCenarios.toString() + ".png";
    context_box_cenario.fillStyle = "skyblue";
    context_box_cenario.fillRect(0, 0, tela.largura, tela.altura);
    context_box_cenario.drawImage(cenario, 0, 0, tela.largura, tela.altura);
}
function draw_boxCanhao() {
    canhao.src = "./imagens/canhao" + idElementos.idCanhao.toString() + ".png";
    var roda = new Image();
    roda.src = "./imagens/roda" + idElementos.idCanhao.toString() + ".png";
    context_box_canhao.fillStyle = "#D3D3D3";
    context_box_canhao.fillRect(0, 0, tela.largura, tela.altura);
    context_box_canhao.drawImage(canhao, tela.largura * 0.2, tela.altura * 0.2, tela.largura * 0.4, tela.altura * 0.53)
    context_box_canhao.drawImage(roda, tela.largura * 0.25, tela.altura * 0.449, tela.largura * 0.2, tela.altura * 0.35);
}

function draw_boxProjetil() {
    ball.src = "./imagens/balls.png";
    context_box_projetil.clearRect(0, 0, tela.largura, tela.altura);
    context_box_projetil.fillStyle = "#D3D3D3";
    context_box_projetil.fillRect(0, 0, tela.largura, tela.altura)
    context_box_projetil.drawImage(ball,
        posicoes_corte[idElementos.idProjetil][0], posicoes_corte[idElementos.idProjetil][1],
        32, 32,
        tela.largura * 0.37, tela.altura * 0.3,
        40, 40);

}
setaParemetrosTela();

function loop() {
    draw_boxCenario();
    draw_boxCanhao();
    draw_boxProjetil();
    requestAnimationFrame(loop);
}
loop();

function trocaCenario(direcao) {
    idElementos.idCenarios += direcao;
    document.getElementById("idCenario").value = idElementos.idCenarios;
    if (idElementos.idCenarios == -1) {
        idElementos.idCenarios = 0;
        document.getElementById("idCenario").value = idElementos.idCenarios;
    }
    if (idElementos.idCenarios == idElementos.qtd_cenarios) {
        idElementos.idCenarios = idElementos.qtd_cenarios - 1;
        document.getElementById("idCenario").value = idElementos.idCenarios;
    }
}

function trocaCanhao(direcao) {
    idElementos.idCanhao += direcao;
    document.getElementById("idCanhao").value = idElementos.idCanhao;
    if (idElementos.idCanhao == -1) {
        idElementos.idCanhao = 0;
        document.getElementById("idCanhao").value = idElementos.idCanhao;
    }
    if (idElementos.idCanhao == idElementos.qtd_canhao) {
        idElementos.idCanhao = idElementos.qtd_canhao - 1;
        document.getElementById("idCanhao").value = idElementos.idCanhao;
    }
}

function trocaProjetil(direcao) {
    idElementos.idProjetil += direcao;
    document.getElementById("idProjetil").value = idElementos.idProjetil;
    if (idElementos.idProjetil == -1) {
        idElementos.idProjetil = 0;
        document.getElementById("idProjetil").value = idElementos.idProjetil;
    }
    if (idElementos.idProjetil == idElementos.qtd_projetil) {
        idElementos.idProjetil = idElementos.qtd_projetil - 1;
        document.getElementById("idProjetil").value = idElementos.idProjetil;
    }
}

