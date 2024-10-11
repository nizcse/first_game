/**
 * @type {HTMLCanvasElement}
 * */


/**
 * TODOS:
 * Movement of Paddle on keyboard Event
 * Collision of Slider on ball
 * Score
 * Game Over
 * Pause
 */

const canvas = document.getElementById("canvas");

const WIDTH = document.body.clientWidth;
const HEIGHT = document.body.clientHeight;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.offsetWidth = WIDTH;
canvas.offsetHeight = HEIGHT;
const BALL_RADIUS = 7.5;
const LEFTPAD = 30;
const RIGHTPAD = 30;



let sliderLeftWidth = 10;
let sliderLeftHeight = 50;
let sliderRightWidth = 10;
let sliderRightHeight = 50;

let ballMomentSpeed = {
    x: 7,
    y: 2
};

let ballPosition = {
    x: WIDTH * 0.5,
    y: HEIGHT * 0.5
};

let leftBarPosition = {
    x: LEFTPAD,
    y: HEIGHT * 0.5 - sliderLeftHeight * 0.5,
}

let rightBarPosition = {
    x: WIDTH - RIGHTPAD - sliderRightWidth,
    y: HEIGHT * 0.5 - sliderRightHeight * 0.5,
};

let sliderMovementSpeed = {
    up: 5,
    down: 5,
}

let moveRightSlider = {
    up: false,
    down: true,
};

let moveLeftSlider = {
    up: false,
    down: true,
};

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

// ctx.fillRect(30, 375, 40, 425)
// ctx.fillRect(
//   LEFTPAD,
//   HEIGHT * 0.5 - sliderLeftHeight * 0.5,
//   sliderLeftWidth,
//   sliderLeftHeight
// );

const renderPaddle = (x, y) => {
    ctx.fillRect(
        x,
        y,
        sliderRightWidth,
        sliderRightHeight
    );

}

const renderBall = (x, y) => {
    ctx.beginPath();
    ctx.strokeStyle = '#00FF00';
    ctx.arc(x, y, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fillStyle = '#00FF00'
    ctx.fill()
    ctx.closePath();
}

/**
 * @param {Date} initialTime - preview function call date
 *
 * @returns {void}
 */
let showFps = true;

const rightPaddleMovement = (event) => {
    console.log(event.key === 'ArrowUp');
    if (event.key === 'ArrowUp') {
        moveRightSlider.down = true;
        moveRightSlider.up = false;
    } else if (event.key === 'ArrowDown') {
        moveRightSlider.down = true;
        moveRightSlider.up = false;
    } else {
        moveRightSlider.down = false;
        moveRightSlider.up = false;
    }
}

const leftPaddleMovement = (event) => {
    if (event.key === 'W') {
        moveRightSlider.down = true;
        moveRightSlider.up = false;
    } else if (event.key === 'S') {
        moveRightSlider.down = true;
        moveRightSlider.up = false;
    } else {
        moveRightSlider.down = false;
        moveRightSlider.up = false;
    }
}

const rightPaddleStop = () => {
    moveRightSlider.down = false;
    moveRightSlider.up = false;
}

const leftPaddleStop = () => {
    moveLeftSlider.down = false;
    moveLeftSlider.up = false;
}

document.body.addEventListener('keypress', rightPaddleMovement);
document.body.addEventListener('keypress', leftPaddleMovement);
document.body.addEventListener('keyup', rightPaddleStop);
document.body.addEventListener('keyup', leftPaddleStop);


const animation = (initialTime) => {
    const endTime = new Date();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    const nextFrameTimeDifference = endTime - initialTime;
    const startTime = new Date();
    if (ballPosition.x + BALL_RADIUS < 2 * BALL_RADIUS) {
        ballMomentSpeed.x = ballMomentSpeed.x * -1
    }
    if (ballPosition.x + BALL_RADIUS > WIDTH) {
        ballMomentSpeed.x = ballMomentSpeed.x * -1
    }
    if (ballPosition.y + BALL_RADIUS > HEIGHT) {
        ballMomentSpeed.y = ballMomentSpeed.y * -1
    }
    if (ballPosition.y + BALL_RADIUS < 2 * BALL_RADIUS) {
        ballMomentSpeed.y = ballMomentSpeed.y * -1
    }
    ballPosition.x = ballPosition.x + ballMomentSpeed.x;
    ballPosition.y = ballPosition.y + ballMomentSpeed.y;

    ctx.fillStyle = "#FF0000";
    renderBall(ballPosition.x, ballPosition.y);

    ctx.fillStyle = "#FF0000";
    renderPaddle(leftBarPosition.x, leftBarPosition.y);
    if (moveRightSlider.up) {
        rightBarPosition.y = rightBarPosition.y - sliderMovementSpeed.up;
        renderPaddle(rightBarPosition.x, rightBarPosition.y);
    } else if (moveRightSlider.down) {
        rightBarPosition.y = rightBarPosition.y + sliderMovementSpeed.down;
        renderPaddle(rightBarPosition.x, rightBarPosition.y);
    } else {
        renderPaddle(rightBarPosition.x, rightBarPosition.y);
    }

    // Left slider
    if (moveLeftSlider.up) {
        leftBarPosition.y = leftBarPosition.y - sliderMovementSpeed.up;
        leftPaddleMovement(leftBarPosition.x, leftBarPosition.y);
    } else if (moveLeftSlider.down) {
        leftBarPosition.y = leftBarPosition.y + sliderMovementSpeed.down;
        leftPaddleMovement(leftBarPosition.x, leftBarPosition.y);
    } else {
        leftPaddleMovement(leftBarPosition.x, leftBarPosition.y);
    }

    console.log(moveLeftSlider);

    if (showFps) {
        ctx.font = "20px monospace";
        ctx.fillText(Math.floor(1000 / (nextFrameTimeDifference || 1)), 10, 20);
    }
    window.requestAnimationFrame(() =>
        setTimeout(() => {
            if (showFps) ctx.clearRect(0, 0, 120, 30);
            animation(startTime);
        }, 59 / 1000)
    );
}

animation(new Date());
