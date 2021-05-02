class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
       
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }


}
