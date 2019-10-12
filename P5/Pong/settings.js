var state = 'playing';

var data = {
    "playerscore": 0,
    "botscore": 0,
    'interval': 5,
    'lastwinner': ''
}

function displayScores() {
    fill(255, 255, 255);
    textSize(75);
    textAlign(CENTER, CENTER);
    text(data.playerscore, width/6, height/7);
    text(data.botscore, width-width/6, height/7);
}

function restartingPopup() {
    ball = null;

    fill(255, 255, 255);
    textSize(75);
    textAlign(CENTER, CENTER);
    text(data.lastwinner + ' has won!', width/2, height/2);

    setTimeout(function() {
        ball = new Ball();
        state = 'playing';
    }, 1000);

    state = 'waiting';
}
