var projetil_sprite = new Array(1);//Colocar um tamanho aqui
var dados_sprite = {
    xOrigin: 0,
    yOrigin: 0,
    width: 32,
    height: 32,
}
class Projetil {
    constructor(angulo, posicao) {
        this.velocidade0 = 60;
        this.trajetoria = true;
        this.angulo = angulo;
        this.posicao = Object.assign({}, posicao);
        this.g = 9.8;
        this.componentes();
        this.alcance;

        this._init();
    }

    _init() {
        projetil_sprite[0] = new Image();
        projetil_sprite[0].src = "./imagens/balls.png";
    }
    
    componentes() {
        this.vx = this.velocidade0 * Math.cos((this.angulo * Math.PI) / 180);//(this.angulo*Math.PI)/180);
        this.vy = -this.velocidade0 * Math.sin((this.angulo * Math.PI) / 180);//(this.angulo*Math.PI)/180);
        this.alcance =  this.vx * 2 *((-this.vy)/(this.g*0.5));
        console.log(this.vx);
        console.log(this.vy);
    }


    desenhar(context, altura, tamX, tamY) {
        if (this.trajetoria == false) {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
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


    calcxdiferenca(altura){
        // var aux_conta=(this.posicao.posX + tamX - 16) - this.vx;
        // var aux_conta2=this.posicao.posX + tamX - 16;
        // aux_conta=aux_conta/aux_conta2;
        // aux_conta2=aux_conta2+this.vx*aux_conta;
        // return aux_conta2;
        var alt=(altura-135)/(this.posicao.posY*100);
        this.posicao.posX=this.posicao.posX-(this.posicao.posX*alt);
    }
    
    update(altura) {
        var limY = altura - 135;
        console.log(limY)
        if (this.posicao.posY <= limY) {
            this.posicao.posY += this.vy;
            this.posicao.posX += this.vx;
        }

        this.vy += this.g;
        console.log(this.posicao.posX);
    }
}