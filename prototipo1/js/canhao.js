var canhao_roda = new Array(1);

class Canhao {
    constructor(/*Passar a posicao*/ angulo, id) {
        // this.posicao = posicao;
        this.angulo = angulo;
        this.id = id;
        this.transform =angulo+180;
        // this.posicao= new Posicao(10,0);
        // console.log(this.posicao.posX);
        this._init();
    }
    _init() {
        for (var i = 0; i < canhao_roda.length; i++) {
            canhao_roda[i] = new Array(2)
            canhao_roda[i][0] = new Image();
            canhao_roda[i][0].src = "./imagens/canhao" + i.toString() + ".png";
            canhao_roda[i][1] = new Image();
            canhao_roda[i][1].src = "./imagens/roda" + i.toString() + ".png";
        }
    }
    draw(context, altura) {
        context.drawImage(canhao_roda[this.id][0], 30, altura - 89, 112, 80);
        context.drawImage(canhao_roda[this.id][1], 45, altura - 51, 55, 55);
    }
    //preciso de onde o chão começa
    lancarProjetil() {
        console.log("Lancei");
    }
}