class Plinko{
    constructor(x, y, r){
        var options = {
           isStatic: true
        }

 
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);

    }
    
    display(){
        var pos = this.body.position;

        push();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
 };