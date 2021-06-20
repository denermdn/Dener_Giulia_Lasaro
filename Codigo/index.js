const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const projetil = new Projetil(canvas.width / 4, 3 * canvas.height / 4, 10, -10);

let gamespeed = 2;

function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	projetil.draw();
	projetil.update();

	requestAnimationFrame(animate);
}
animate();

window.addEventListener('click', (event) => {

})

