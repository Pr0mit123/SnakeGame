class Snake {
    constructor() {
        this.length = 1;
        this.body = [];
        this.body[0] = createVector(0, 0);
        //creates a vector object that has an x and y
        this.Xdirection = 0;
        this.Ydirection = 0;

         this.x;
         this.y;
    }

    grow() {
        var head = this.body[this.body.length - 1].copy();
        this.length++;
        this.body.push(head);
    }

    update() {
        
        var head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x = this.Xdirection;
        head.y = this.Ydirection;
        this.body.push(head);

        //this.body[0].x += this.Xdirection;
        //this.body[0].y += this.Ydirection;
    }

    display() {
        for(let i = 0; i < this.body.length++; i++) {
        fill(255)
        noStroke();
        rect(this.body[i].this.x, this.body[i].this.y, 1, 1)
        }
    }

setDirection(x,y) {
        this.Xdirection = x;
        this.Ydirection = y; 
}

    eat(position) {
        this.x = this.body[this.body.length - 1].x;
        this.y = this.body[this.body.length - 1].y;

        if(this.x == position.x && this.y == position.y) {
            this.grow();
            return true;
        }
        return false;
    }

    endGame() {
        x = this.body[this.body.length - 1].x;
        y = this.body[this.body.length - 1].y;

        if(x > width - 1 || x < 0 || y > height - 1 || h < 0) {
            return true;
        }
        for(var i = 0; i < this.body.length-1; i++) {
            var part = this.body[i];

            if(part.x == x && part.y == y) {
                return true
            }
        }
        return false;
    }
}