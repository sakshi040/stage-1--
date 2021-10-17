class Player {

    constructor(x,y,width,height){
        // var options = {
        //     'restitution':0.4,
        //     'friction':1.0,
        //     'density':1.0
            
        // }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/main player 2.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

}
