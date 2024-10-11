/**
 * @type {HTMLCanvasElement}
 * */

const canvas = document.getElementById("canvas");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const BALL_RADIUS = 10;
const LEFTPAD = 30;
const RIGHTPAD = 30;

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, WIDTH, HEIGHT);

let sliderLeftWidth = 10;
let sliderLeftHeight = 50;
let sliderRightWidth = 10;
let sliderRightHeight = 50;

ctx.fillStyle = "#FF0000";
// ctx.fillRect(30, 375, 40, 425)
ctx.fillRect(
  LEFTPAD,
  HEIGHT * 0.5 - sliderLeftHeight * 0.5,
  sliderLeftWidth,
  sliderLeftHeight
);

ctx.fillStyle = "#FF0000";
ctx.fillRect(
  WIDTH - RIGHTPAD - sliderRightWidth,
  HEIGHT * 0.5 - sliderRightHeight * 0.5,
  sliderRightWidth,
  sliderRightHeight
);



ctx.beginPath();
ctx.strokeStyle = '#00FF00';
ctx.arc(WIDTH * 0.5, HEIGHT * 0.5, BALL_RADIUS, 0, 2 * Math.PI);
ctx.fillStyle = '#00FF00'
ctx.fill()
ctx.closePath();
