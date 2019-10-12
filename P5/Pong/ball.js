function Ball() {
    this.pos = createVector(width/2, height/2);
    this.s = 15;
    this.v = createVector(Math.random()*2+3, Math.random()*2+3);

    this.update = function() {
        ellipse(this.pos.x, this.pos.y, this.s);
    }

    this.move = function() {
        if (this.pos.x - this.s/2 <= 0) {
            data.botscore += data.interval;
            data.lastwinner = 'bot';
            state = 'restarting';
        } else if (this.pos.x + this.s/2 >= width) {
            data.playerscore += data.interval;
            data.lastwinner = 'player';
            state = 'restarting';
        }

        if (this.pos.y - this.s/2 <= 0 || this.pos.y + this.s/2 >= height) {
            this.v.y = -this.v.y;
        }

        this.pos.x += this.v.x;
        this.pos.y += this.v.y;
    }

    this.checkPaddlesCol = function() {
        if (this.pos.x <= player.pos.x+player.s.x && this.pos.y >= player.pos.y && this.pos.y <= player.pos.y+player.s.y) {
            this.v.x = -this.v.x;
        } else if (this.pos.x >= bot.pos.x && this.pos.y >= bot.pos.y && this.pos.y <= bot.pos.y+bot.s.y) {
            this.v.x = -this.v.x;
        }
    }
}
