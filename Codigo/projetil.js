const limY = 3 * innerHeight / 4

class Projetil{
    constructor(){
        this.x = innerWidth / 4;
        this.y = limY;
        this.vx = 10;
        this.vy = -10;
        this.g = 0.1;
    }
	draw(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, 30,
			0, Math.PI*2);
		ctx.fillStyle = 'red';
		ctx.fill();
	}

    update(){
        if (this.y <= limY){
            this.y += this.vy;
        }
        this.vy += this.g;
        this.x += this.vx;
    }
}

const projetil = new Projetil();
