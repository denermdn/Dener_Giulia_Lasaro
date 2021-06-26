var projetil_sprite = new Array(1);//Colocar um tamanho aqui
var dados_sprite = {
    xOrigin: 0,
    yOrigin: 0,
    width: 32,
    height: 32,
}
class Projetil {
    constructor(angulo, posicao) {
        this.velocidade0 = 0.17;
        this.trajetoria = true;
        this.angulo = 10;
        this.posicao = Object.assign({}, posicao);

        this.g = 0.25;
        this.vx = -100 * this.velocidade0 * Math.sin(this.angulo);
        this.vy = 100 * this.velocidade0 * Math.cos(this.angulo);

        this._init();
    }

    _init() {
        projetil_sprite[0] = new Image();
        projetil_sprite[0].src = "./imagens/balls.png";
    }

    desenhar(context, altura, tamX, tamY) {
        //context.clearContext();
        context.beginPath();
        context.arc(this.posicao.posX + tamX, this.posicao.posY + tamY, 5, 0, Math.PI * 2);
        context.fillStyle = 'red';
        context.fill();
        this.update(altura);
    }

    drawBall(context, altura, tamX, tamY) {
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(projetil_sprite[0],
            dados_sprite.xOrigin, dados_sprite.yOrigin,
            dados_sprite.width, dados_sprite.height,
            this.posicao.posX + tamX - 16, this.posicao.posY + tamY - 13,
            40, 40);
    }

    // update(altura) {
    //     var limY = altura - 135;

    update(altura){
        var limY = altura - 135;
        console.log(limY)
        if (this.posicao.posY <= limY) {
            this.posicao.posY += this.vy;
            this.posicao.posX += this.vx;
        }
        // this.posicao.posY += this.vy;
        //this.posicao.posX += this.vx;

        //this.posicao.posX += this.vx
        this.vy += this.g;
        console.log(this.posicao.posX);

    }

    // atualizaPosicao(angulo, posicao){
    //     this.angulo = angulo;
    //     this.posicao = posicao;

    //     this.vx = this.velocidade0 * Math.cos(this.angulo);
    //     this.vy = this.velocidade0 * Math.sin(this.angulo);
    // }

}