function Ball() {
    this.pos = createVector(width/2, height/2);
    this.s = height*.75;
    this.answer;
    this.alpha = 0;


    this.update = function() {
        fill(0);
        stroke(200);
        strokeWeight(5);
        ellipse(this.pos.x, this.pos.y, this.s);
    }

    this.updateAnswer = function() {
        this.answer = answers[Math.floor(Math.random()*answers.length)]
    }

    this.doMagic = function() {
        if (state == 'waiting') {
            fill(255);
            textSize(250);
            noStroke();
            textAlign(CENTER, CENTER);
            text('8', this.pos.x, this.pos.y);
        } else if (state == 'answering') {
            fill('rgba(255, 255, 255, '+this.alpha+')');
            this.alpha += .01;
            textSize(40);
            noStroke();
            textAlign(CENTER, CENTER);
            text(this.answer, this.pos.x, this.pos.y);

            if (alpha > 1) {
                this.alpha = 0;
                state = 'answered';
            }
        }
    }
}