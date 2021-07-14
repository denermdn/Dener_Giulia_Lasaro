var canhao_e_roda = new Array(1);
// var aux_angulo = 0.4375;
var aux_angulo = 25 * Math.PI / 180;
class Canhao {
  constructor(id) {
    this.angulo = 0;
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
  draw(context) {
    context.drawImage(canhao_e_roda[this.id][1], this.posicao.posX + 15, this.posicao.posY + 38, 55, 55);
  }

  draw_(context, altura) {
    context.drawImage(canhao_e_roda[this.id][0], -44, -65, 116, 80);
  }

  rodar(ctx) {
    let x = 42 + this.posicao.posX;
    let y = 65 + this.posicao.posY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(aux_angulo);
    this.draw_(ctx);
    ctx.restore();
  }

  move(event) {
    var tecla = event.keyCode;
    var incremento = Math.PI / 180;
    if (tecla == 37) {
      if (this.angulo < 90) {
        aux_angulo -= incremento;
      }
    }
    if (tecla == 39) {
      if (this.angulo > 0) {
        aux_angulo += incremento;
      } 
      
    }
    // this.angulo = Math.floor(((180 * (-aux_angulo + 0.4375)) / Math.PI));
    this.angulo = aux_angulo;
    // console.log("Angulo= " + this.angulo + "t= " + aux_angulo);
  }
}