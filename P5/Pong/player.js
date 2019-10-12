function Player() {
    this.pos = createVector(40, height/2 - 150/2);
    this.s = createVector(15, 150);
    this.v = 5;

    this.update = function() {
        rect(this.pos.x, this.pos.y, this.s.x, this.s.y);
    }

    this.move = function() {
        keys.forEach(key => {
            if (key.key == 'ArrowUp' && this.pos.y > 0) {
                this.pos.y -= this.v;
            } else if (key.key == 'ArrowDown' && this.pos.y < height-this.s.y) {
                this.pos.y += this.v;
            }
        });
    }
}
