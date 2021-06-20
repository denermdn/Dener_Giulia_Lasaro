const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let x0 = canvas.width / 4;
let y0 = 5 * canvas.height / 6;

//valores de teste, retirados da minha tela apenas para verificar colisão. 
let alvoX = 1394; 
let alvoY = 625.9333333333295;

const projetil = new Projetil(x0, y0, 5, -10);
const canhao = new Canhao(x0, y0, 5, -10);
const alvo = new Alvo(alvoX, alvoY);

function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	alvo.draw();
	canhao.draw();
	projetil.draw();
	projetil.update();

	requestAnimationFrame(animate);
}
animate();

window.addEventListener('click', (event) => {

})

