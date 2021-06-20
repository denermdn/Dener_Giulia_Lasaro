class Alvo{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
	draw(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, 40,	0, Math.PI*2);
		ctx.fillStyle = 'blue';
		ctx.fill();
	}
}


