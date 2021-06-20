var limite;
class Projetil{
    constructor(x, y, vx, vy){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.g = 0.1;
        limite = y;

    }
    
	draw(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, 30,	0, Math.PI*2);
		ctx.fillStyle = 'red';
		ctx.fill();
	}

    update(){
        if (this.y <= limite){
            this.y += this.vy;
            this.x += this.vx; 
        } else {
            console.log("x: "+ this.x + ", y: "+ this.y)
        }
        this.vy += this.g;
        
    }
}


