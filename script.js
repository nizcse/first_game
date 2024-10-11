/**
 * @type {HTMLCanvasElement}
 * */

const canvas = document.getElementById("canvas");

const WIDTH = document.body.clientWidth;
const HEIGHT = document.body.clientHeight;
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
canvas.offsetWidth = document.body.clientWidth;
canvas.offsetHeight = document.body.clientHeight;
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
}

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
const animation = (initialTime) => {
    const endTime = new Date();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    const nextFrameTimeDifference = endTime - initialTime;
    console.log(nextFrameTimeDifference);
    const startTime = new Date();
    if (ballPosition.x + BALL_RADIUS < 2 * BALL_RADIUS) {
        ballMomentSpeed.x = ballMomentSpeed.x * -1
    }
    if (ballPosition.x + BALL_RADIUS > WIDTH) {
        ballMomentSpeed.x = ballMomentSpeed.x * -1
    }
    ballPosition.x = ballPosition.x + ballMomentSpeed.x;

    ctx.fillStyle = "#FF0000";
    renderBall(ballPosition.x, HEIGHT * 0.5);

    ctx.fillStyle = "#FF0000";
    renderPaddle(leftBarPosition.x, leftBarPosition.y);
    renderPaddle(rightBarPosition.x, rightBarPosition.y);

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
