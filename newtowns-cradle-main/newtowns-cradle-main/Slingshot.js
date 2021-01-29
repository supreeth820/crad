class SlingShot{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:offsetX,y:offsetY}
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            
            strokeWeight(2);
            var Anchor2X = pointB.x+this.offsetX
            var Anchor2Y = pointB.y+this.offsetY
            line(pointA.x , pointA.y, Anchor2X , Anchor2Y);
        
            
    }
}
