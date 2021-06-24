var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");



const cenario = new Cenarios(9.8, 1, canvas.width, canvas.height);
const canhao = new Canhao(45, 0); 
function loop() {
    cenario.desenhar(context);
    canhao.draw(context, (canvas.height-70));
    canhao.lancarProjetil();
    requestAnimationFrame(loop);
}

loop();