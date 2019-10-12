var keys = []
var player;
var bot;
var ball;

function setup() {
    createCanvas(innerWidth, innerHeight);
    noStroke();

    player = new Player();
    bot = new Bot();
    ball = new Ball();
}

function draw() {

    if (state == 'playing') {
        background(25, 25, 25);

        displayScores();
        player.update();
        player.move();

        bot.update();
        bot.move();

        ball.update();
        ball.move();
        ball.checkPaddlesCol();
    } else if (state == 'restarting') {
        restartingPopup();
    }
}

function keyPressed(key) {
    keys.push( key );
}

function keyReleased(key) {
    keys.forEach(function(_key) {     
        if (_key.key == key.key) {
            keys.splice(keys.indexOf(_key), 1);           
        }
    });
}
