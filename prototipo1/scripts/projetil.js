var projetil_sprite;

var dados_sprite = {
    xOrigin: 0,
    yOrigin: 0,
    width: 32,
    height: 32,
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

class Projetil {
    constructor(posicao, id) {
        this.em_movimento = false;
        this.angulo = 0;
        this.posicao = Object.assign({}, posicao,id);
        this.g;
        this.componentes();
        this.alcance;
        this.tempo;
        this.altura_maxima;
        this._init();
        this.id=id;
    }

    _init() {
        projetil_sprite= new Image();
        projetil_sprite.src = "./imagens/balls.png";
    }

    componentes(v, g) {
        this.velocidade0 = v;
        this.g = g;
        this.vx = this.velocidade0 * Math.cos((this.angulo * Math.PI) / 180);
        this.vy = -this.velocidade0 * Math.sin((this.angulo * Math.PI) / 180);
        this.alcance = this.vx * 2 * ((-this.vy) / (this.g)) + 46;
        this.tempo = (this.alcance - 46) / this.vx;
        this.altura_maxima = Math.pow(this.vy, 2) / (this.g * 2);
        context.clearRect(0, 0, context.width, context.height);
    }

    reset(v, posicao) {
        this.velocidade0 = v;
        this.angulo = 0;
        this.posicao.posX = posicao.posX;
        this.posicao.posY = posicao.posY;
    }

    desenhar(context, altura, tamX, tamY) {
        context.beginPath();
        context.arc(this.posicao.posX + tamX, this.posicao.posY + tamY, 5, 0, Math.PI * 2);
        context.fillStyle = 'red';
        context.fill();
        this.update(altura);
    }

    drawBall(context, tamX, tamY) {
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(projetil_sprite,
            posicoes_corte[this.id][0], posicoes_corte[this.id][1],
            dados_sprite.width, dados_sprite.height,
            this.posicao.posX + tamX - 33, this.posicao.posY + tamY - 18,
            40, 40);
        // context.drawImage(projetil_sprite,
        //     dados_sprite.xOrigin, dados_sprite.yOrigin,
        //     dados_sprite.width, dados_sprite.height,
        //     this.posicao.posX + tamX - 33, this.posicao.posY + tamY - 18,
        //     40, 40);
    }

    calcxdiferenca(altura) {
        var alt = (altura - 135) / (this.posicao.posY);
        this.posicao.posX = this.posicao.posX - (this.posicao.posX * alt);
    }

    update(altura) {
        var limY = altura - 159;
        if (this.posicao.posY <= limY) {
            this.posicao.posY += this.vy / 8;
            this.posicao.posX += this.vx / 8;
        }
        else {
            this.em_movimento = 2;
        }
        this.vy += this.g / 8;
    }

}