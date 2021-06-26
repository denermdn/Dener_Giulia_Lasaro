var projetil_sprite= new Array();//Colocar um tamanho aqui
class Projetil {
    constructor(angulo, posicao) {
        this.velocidade0 = 0.1;
        this.trajetoria = true;
        this.angulo = 10;
        this.posicao = Object.assign({},posicao);

        this.g = 0.25;
        this.vx = -100 * this.velocidade0 * Math.sin(this.angulo);
        this.vy = 100* this.velocidade0 * Math.cos(this.angulo);
    }
    desenhar(context, altura, tamX, tamY){
        //context.clearContext();
        context.beginPath();
        context.arc(this.posicao.posX + tamX, this.posicao.posY + tamY, 5, 0, Math.PI*2);
        context.fillStyle = 'red';
		context.fill();
        this.update(altura);
    }

    update(altura){
        var limY = altura - 135;
        console.log(limY)
        if (this.posicao.posY <= limY){
            this.posicao.posY += this.vy;
            this.posicao.posX += this.vx;
        }
        this.vy += this.g;
        console.log(this.posicao.posX);

    }

}