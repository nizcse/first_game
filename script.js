/**
 * @type {HTMLCanvasElement}
 * */

const canvas = document.getElementById("canvas");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, WIDTH, HEIGHT);

let sliderLeftWidth = 10;
let sliderLeftHeight = 50;
let sliderRightWidth = 10;
let sliderRightHeight = 50;

const LEFTPAD = 30;
ctx.fillStyle = "#FF0000";
// ctx.fillRect(30, 375, 40, 425)
ctx.fillRect(
  LEFTPAD,
  HEIGHT * 0.5 - sliderLeftHeight * 0.5,
  sliderLeftWidth,
  sliderLeftHeight
);

const RIGHTPAD = 30;
ctx.fillStyle = "#FF0000";
ctx.fillRect(
  WIDTH - RIGHTPAD - sliderRightWidth,
  HEIGHT * 0.5 - sliderRightHeight * 0.5,
  sliderRightWidth,
  sliderRightHeight
);
