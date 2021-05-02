
class Rain{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.3,
            density: 0.4,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,2,options)
        this.x = x;
        this.y = y;
        this.r = 2;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push() 
        strokeWeight(0.5)       
        stroke(163, 245, 245)
        fill(204, 255, 255)
        
        //fill(200)
        circle(pos.x,pos.y,4);
        pop()
    }
    reset(){
        if(this.body.position.y>710){
            // this.body.position.y=random(10,20);
            // this.body.position.x=50;
            Matter.Body.setPosition(this.body , { x : random(50,450) , y : random(10,20) })
        }
    }
}