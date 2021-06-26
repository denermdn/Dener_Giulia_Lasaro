var canhao_e_roda = new Array(1);
var x = 30;
var y;
var canvasc;
var contextc;
var t = 0;
class Canhao {
  constructor(angulo, id) {
    this.angulo = angulo;
    this.id = id;
    this.posicao = new Posicao(0, 0);
    this._init();
  }

  _init() {
    for (var i = 0; i < canhao_e_roda.length; i++) {
      canhao_e_roda[i] = new Array(2)
      canhao_e_roda[i][0] = new Image();
      canhao_e_roda[i][0].src = "./imagens/canhao" + i.toString() + ".png";
      canhao_e_roda[i][1] = new Image();
      canhao_e_roda[i][1].src = "./imagens/roda" + i.toString() + ".png";
      this.posicao.posX = 30;
      this.posicao.posY = canvas.height - 159;
    }
  }
//Aqui só desenha a roda
  draw(context) {
    context.drawImage(canhao_e_roda[this.id][1], this.posicao.posX + 15, this.posicao.posY + 38, 55, 55);
  }

//Aqui desenha o canhão no segundo canvas
  draw_(context, altura) {
    // context.drawImage(canhao_e_roda[this.id][0], this.posicao.posX , this.posicao.posY, 112, 80);
    // context.drawImage(canhao_e_roda[this.id][0], this.posicao.posX , this.posicao.posY , 119, 80);
    context.drawImage(canhao_e_roda[this.id][0], -44, -65, 116, 80);
  }

  lancarProjetil() {
    console.log("Lancei" + this.posicao.posX);
  }

  rodar(ctx) {
    let x = 42 + this.posicao.posX;
    let y = 65 + this.posicao.posY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(t);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    this.draw_(ctx);
    ctx.restore();
    console.log("TEste");
  }

  move(event) {
    var pay = 0;
    var px = this.left;
    var py = (pay * Math.PI) / 180;
    var px2 = 73;
    var vo = 130;
    var g = 9.8;
    // var auxc = this.transform - 19;
    var tecla = event.keyCode;
    if (tecla == 37) {
      if(t<=90){
        t+=1;
      }
      // this.angulo = (this.angulo * Math.PI) / 180;
      console.log(t);
    } else if (tecla == 38 && (pay >= -89)) {
      window.alert();
      this.angulo--;
    } else if (tecla == 39) {
      if(t>=0){
        t--;
      }
    } else if (tecla == 40 && (pay <= -25)) {
      // this.angulo++;
      
    } else if (tecla == 13) {
      py = (pay * (-1) * Math.PI) / 180;
      vx = vo * Math.cos(py);
      vy = vo * Math.sin(py);
    }
    this.angulo= (t*Math.PI)/180;

  }


}