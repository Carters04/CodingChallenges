var state = 'waiting';
var answers = ["As I see it, yes", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and\nask again", "Don’t count on it", "It is certain", "It is decidedly so", "Most likely", "My reply is no", "My sources say no", "Outlook not so good", "Outlook good", "Reply hazy, try again", "Signs point to yes", "Very doubtful", "Without a doubt", "Yes", "Yes – definitely", "You may rely on it"]

var ball;
function setup() {
    createCanvas(innerWidth, innerHeight);
    noStroke();

    ball = new Ball();
    ball.updateAnswer();
}

function draw() {
    if (state == 'waiting' || state == 'answering') {
        ball.update();
        ball.doMagic();
    }
}

function mousePressed() {
    state = 'answering';
    ball.updateAnswer();
    ball.alpha = 0;
}