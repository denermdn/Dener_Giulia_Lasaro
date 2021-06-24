
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");





const cenario = new Sceneries(9.8, 0, canvas.width, canvas.height);
const canhao = new Cannon(45, 0); //id referencia o qual canhao/roda se deseja
function loop() {
    cenario.desenhar(context);
    canhao.draw(context, (canvas.height-70));
    canhao.lancarProjetil();
    requestAnimationFrame(loop);
}


loop();

