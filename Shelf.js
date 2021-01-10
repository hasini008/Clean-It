class Shelf{

    constructor(){
    var paper_props = {
        isStatic:false,
        restitution:0.8, 
        friction : 0.5 , 
        density : 0.2

        this.paper = body.circle(  -25 , 300 , 50 ,  paper_props)
        World.add(aiWorld , this.ball);
      }  
      
         display() {
          circleMode(CENTER);
          fill("violet");
        circle(-25 , 300 , 50)
         }
      }
}