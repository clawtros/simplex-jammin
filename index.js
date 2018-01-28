// const regl = require('regl')();
const OpenSimplex = require("open-simplex-noise").default;

/* const mat4 = require('gl-mat4')
 * const hsv2rgb = require('hsv2rgb')
 * 
 * const NUM_POINTS = 1e5
 * const VERT_SIZE = 4 * (4 + 4 + 3)*/

const simp = new OpenSimplex(1);

function main() {
  var canvas = document.createElement("canvas"),
      context = canvas.getContext("2d");
  canvas.height = 60;
  canvas.width = 80;
  var scale = 10;
  var z = 0;

  const imageData = context.createImageData(canvas.width, canvas.height);
  function draw() {
    for (let x = 0; x < canvas.width; x++) {
      for (let y = 0; y < canvas.height; y++) {
        const i = (x + y * canvas.width) * 4;
        const value = (simp.noise3D(x / scale, y / scale, z / scale) + 1) * 128;
        imageData.data[i] = value;
        imageData.data[i + 1] = value;
        imageData.data[i + 2] = value;
        imageData.data[i + 3] = 255;
      }
    }
    context.putImageData(imageData, 0, 0);
  }
  
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = 0;
  
  document.body.appendChild(canvas);
  function animate() {
    requestAnimationFrame(animate);
    draw();
    z += 0.25;
  }
  animate();
}

window.doTheThing = main;