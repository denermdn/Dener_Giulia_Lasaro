class Canhao{
    constructor(x, y, vx, vy){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

	draw(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.atan(this.vy/this.vx));
            ctx.beginPath();
            ctx.fillStyle = "yellow";        
            ctx.rect(-30, -25, 60, 50);
            ctx.fill();
        ctx.stroke();
        ctx.restore();
	}
}

