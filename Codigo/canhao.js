class Canhao{
    constructor(){
        this.x = 100;
        this.y = 100;
        this.vx = 0;
        this.vy = 0;
        this.peso = 1;
    }

    update(){
        this.vy += this.peso;
        this.y += this.vy;
    }

	draw(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, 30,
			0, Math.PI*2);
		ctx.fillStyle = 'red';
		ctx.fill();
	}
}

const canhao = new Canhao();
