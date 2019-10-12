function Bot() {
    this.pos = createVector(width-55, height/2 - 150/2);
    this.s = createVector(15, 150);
    this.v = Math.random()*3+2;

    this.update = function() {
        rect(this.pos.x, this.pos.y, this.s.x, this.s.y);
    }

    this.move = function() {
        if (ball.pos.y > this.pos.y+this.s.y-15) {
            this.pos.y += this.v;
        } else if (ball.pos.y < this.pos.y+15) {
            this.pos.y -= this.v;
        }
    }
}
