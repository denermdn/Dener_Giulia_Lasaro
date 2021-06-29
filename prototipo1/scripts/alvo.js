var sprite_alvo;

class Alvo {
    constructor() {
        this.alvo_posicao = new Posicao();
        this.alvo_posicao.posX = 0;
        this.alvo_posicao.posY = 0;
        this._init();
    }
    _init() {
        sprite_alvo = new Image();
        sprite_alvo.src = "./imagens/roda0.png";
    }
    setPosicao(x, y) {
        this.alvo_posicao.posX = x;
        this.alvo_posicao.posY = y;
    }

    draw(context) {
        context.drawImage(sprite_alvo, this.alvo_posicao.posX, this.alvo_posicao.posY, 200, 20);
    }

}