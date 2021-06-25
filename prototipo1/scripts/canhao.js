var canhao_e_roda = new Array(1);
var x = 30;
var y;
var canvasc;
var contextc;
class Canhao {
  constructor(/*Passar a posicao*/ angulo, id) {
    // this.posicao = posicao;
    this.angulo = angulo;
    this.id = id;
    // this.posicao= new Posicao(10,0);
    // console.log(this.posicao.posX);
    this.posicao = new Posicao();
    this._init();
  }
  _init() {
    for (var i = 0; i < canhao_e_roda.length; i++) {
      canhao_e_roda[i] = new Array(2)
      canhao_e_roda[i][0] = new Image();
      canhao_e_roda[i][0].src = "./imagens/canhao" + i.toString() + ".png";
      canhao_e_roda[i][1] = new Image();
      canhao_e_roda[i][1].src = "./imagens/roda" + i.toString() + ".png";
    }
  }
  draw(context, altura) {
    context.drawImage(canhao_e_roda[this.id][0], 30, altura - 89, 112, 80);
    context.drawImage(canhao_e_roda[this.id][1], 45, altura - 51, 55, 55);
  }
  
  lancarProjetil() {
    this.posicao.posX = 10;
    this.posicao.posY = 10;
    console.log("Lancei" + this.posicao.posX);
  }

  rodar(ctx, altura, largura) {
    ctx.save();
    // ctx.clearRect(0, 0, largura, altura);
    ctx.beginPath();
    ctx.rotate(Math.PI/3);
    // this.draw(ctx, altura);
    //context.drawImage(canhao_e_roda[this.id][0], 30, altura - 89, 112, 80);
    ctx.fillStyle = "black";
    ctx.fillRect(200, 400, 50, 100);
    ctx.closePath();
    // ctx.restore();
    // canhao.angulo = 180;
    // ctx.save();
    //ctx.translate(this.x, this.y);
    //this.translate(this.x, this.y);
    //desenho do canhão
    // ctx.stroke();
    // ctx.rotate(-Math.PI/3);
     ctx.restore()
  }

  move(event) {
    var px = this.left;
    var pay = -45;
    var py = (pay * (-1) * Math.PI) / 180;
    var px2 = 73;
    var vo = 130;
    var g = 9.8;
    var auxc = this.transform - 19;
    var tecla = event.keyCode;

    if (tecla == 37) {
      window.alert("lorem ipsum");
    } else if (tecla == 38 && (pay >= -89)) {
      // pay -= 1;
      // auxc -= 1;
      // this.transform = "rotate(" + auxc + "deg)";
      window.alert();
      this.angulo--;
      //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpar o canvas.
    } else if (tecla == 39) {

    } else if (tecla == 40 && (pay <= -25)) {
      /*pay += 1;
      auxc += 1;
      this.transform = "rotate(" + auxc + "deg)";*/
      this.angulo++;
    } else if (tecla == 13) {
      py = (pay * (-1) * Math.PI) / 180;
      vx = vo * Math.cos(py);
      vy = vo * Math.sin(py);
      // requestAnimationFrame(sInt);
    }

  }


}