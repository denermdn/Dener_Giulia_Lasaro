var projetil_sprite = new Array(1);//Colocar um tamanho aqui

var dados_sprite = {
    xOrigin: 0,
    yOrigin: 0,
    width: 32,
    height: 32,
}
class Projetil {
    constructor(angulo, posicao) {
        this.em_movimento=false;
        //this.trajetoria = true;
        this.angulo = 0;
        this.posicao = Object.assign({}, posicao);
        this.g = 9.8;
        this.componentes();
        this.alcance;
        this.tempo;
        this.altura_maxima;
        console.log(this.velocidade);
        this._init();
    }

    
    _init() {
        projetil_sprite[0] = new Image();
        projetil_sprite[0].src = "./imagens/balls.png";
    }

    componentes() {
        this.velocidade0 = document.getElementById("campo1").value;
        // this.vx = this.velocidade0 * Math.cos(this.angulo);//(this.angulo*Math.PI)/180);
        this.vx = this.velocidade0 * Math.cos((this.angulo * Math.PI) / 180);//(this.angulo*Math.PI)/180);
        // this.vy = -this.velocidade0 * Math.sin(this.angulo);//(this.angulo*Math.PI)/180);
        this.vy = -this.velocidade0 * Math.sin((this.angulo * Math.PI) / 180);//(this.angulo*Math.PI)/180);
        this.alcance = this.vx * 2 * ((-this.vy) / (this.g)) + 46;

        this.tempo = (this.alcance - 46) / this.vx;
        this.altura_maxima = Math.pow(this.vy, 2) / (this.g * 2);
        // console.log(this.vy);
        context.clearRect(0, 0, context.width, context.height);
    }

    reset(posicao){
        this.velocidade0 = document.getElementById("campo1").value;
        this.angulo = 0;
        //this.trajetoria = true;
        //this.alcance=0;
        //this.tempo=0;
        //this.altura_maxima=0;
        this.posicao.posX=posicao.posX;
        this.posicao.posY=posicao.posY;
    }

    desenhar(context, altura, tamX, tamY) {
        // if (this.trajetoria == false) {
        //     context.clearRect(0, 0, canvas.width, canvas.height);
        // }
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
            this.posicao.posX + tamX - 32, this.posicao.posY + tamY - 13,
            40, 40);
    }


    calcxdiferenca(altura) {
        // var aux_conta=(this.posicao.posX + tamX - 16) - this.vx;
        // var aux_conta2=this.posicao.posX + tamX - 16;
        // aux_conta=aux_conta/aux_conta2;
        // aux_conta2=aux_conta2+this.vx*aux_conta;
        // return aux_conta2;
        var alt = (altura - 135) / (this.posicao.posY);
        this.posicao.posX = this.posicao.posX - (this.posicao.posX * alt);
    }

    update(altura) {
        var limY = altura - 159 ;
        console.log(limY)
        if (this.posicao.posY <= limY ) {
            this.posicao.posY += this.vy / 8;
            this.posicao.posX += this.vx / 8;
        }
        else{
            this.em_movimento=2;
        }

        this.vy += this.g / 8;
        console.log(this.posicao.posX);
    }

}