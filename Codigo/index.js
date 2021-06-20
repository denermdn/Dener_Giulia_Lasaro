const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

//const projetil = new Projetil();

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





/* 
let imageAlvo = new Image();
let imageProjetil = new Image();


function mostraImagem (x, y){
	let w = canvas.width;
	let nw = this.naturalWidth;
	let nh = this.naturalHeight;
	let aspect = nw / nh;
	let h = canvas.width / aspect;

	canvas.height = h;

	ctx.drawImage(this, x, y);
	//ctx.drawImage(imgObj, dx, dy, dw, dh);
	//ctx.drawImage(imgObj, sx, sy, sw, sh, dx, dy, dw, dh);
};
imageAlvo.onload = mostraImagem(0, 0);
imageAlvo.src = '../Imagens/alvo_base.png';

imageProjetil.onload = mostraImagem(300, 300);
imageProjetil.src = '../Imagens/projetil_base.png';

class Canhao {
	static a = 0;
}

class Projetil {
	static a = 0;
}

class Alvo {

	constructor (x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	draw(){
		ctx.drawImage(img, 130, 130);
	}
}

const alvo = new Alvo (canvas.width /2 , canvas.height/2, 30, 'blue');

alvo.draw(); */