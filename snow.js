class Snow {
    constructor(x, y, w, h) {
        var options = {
            friction:1,
            density:100,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,60)
        pop();
    }
};