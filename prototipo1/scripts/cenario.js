var plano_deFundo = [];
plano_deFundo.length = 2;
var chao = [];
chao.length = 1;

var drawChao = {
    xOrigin: 31,
    yOrigin: 287,
    width_origin: 1285,
    height_origin: 260,
    xDestination: 0,
    yDestination: 0,
    width_destination: 0,
    height_destination: 80,
}

class Cenarios {
    constructor(gravidade, largura, altura) {
        this.gravidade = gravidade;
        this.id;
        this.largura = largura;
        this.altura = altura;
        this._init();
    }

    _init() {
        for (var i = 0; i < plano_deFundo.length; i++) {
            plano_deFundo[i] = new Image();
            plano_deFundo[i].src = "./imagens/cenario" + i.toString() + ".png"
        }
        for (var i = 0; i < chao.length; i++) {
            chao[i] = new Image();
            chao[i].src = "./imagens/chao" + i.toString() + ".png"
        }
        drawChao.yDestination = this.altura - 70;
        drawChao.width_destination = this.largura / 2;
    }

    desenhar(context, id) {
        this.id= id;
        console.log("AQui");
        context.fillStyle = "skyblue";
        context.fillRect(0, 0, this.largura, this.altura);
        context.drawImage(plano_deFundo[this.id], 0, 0, this.largura, this.altura);

        context.drawImage(chao[0],
            drawChao.xOrigin, drawChao.yOrigin,
            drawChao.width_origin, drawChao.height_origin,
            drawChao.xDestination, drawChao.yDestination,
            drawChao.width_destination, drawChao.height_destination);
        context.drawImage(chao[0],
            drawChao.xOrigin + 20, drawChao.yOrigin,
            drawChao.width_origin, drawChao.height_origin,
            (this.largura / 2) - 1, drawChao.yDestination,
            drawChao.width_destination + 12, drawChao.height_destination
        );
    }

}