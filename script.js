/**
 * @type {HTMLCanvasElement}
 * */

const canvas = document.getElementById('canvas');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, WIDTH, HEIGHT);

const sliderWidth = 10;
const sliderHeight = 50;

const LEFTPAD = 30
ctx.fillStyle = '#FF0000'
ctx.fillRect(30, 375, 40, 425)
// ctx.fillRect(LEFTPAD, (HEIGHT * 0.5) - (sliderHeight * 0.5), LEFTPAD + sliderWidth, (HEIGHT * 0.5) + (sliderHeight * 0.5))