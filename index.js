const OpenSimplex = require("open-simplex-noise").default;
const simp = new OpenSimplex(new Date());
const NUM_POINTS = 4e3;

function generatePoints(w, h) {
  const r = [],
        scatter = Math.max(w, h);
  for (let i = 0; i < NUM_POINTS; i++) {
    r.push([w  + (Math.random() - 0.5) * scatter,
            h + (Math.random() - 0.5) * scatter])
  }
  return r;
}

function main() {
  var canvas = document.createElement("canvas"),
      otherCanvas = document.createElement("canvas"),
      context = canvas.getContext("2d"),
      otherContext = otherCanvas.getContext("2d"),
      width = window.innerWidth,
      height = window.innerHeight,
      points = generatePoints(width / 2, height / 2),
      speed = 5,
      scale = 100;
  
  canvas.width = width;
  canvas.height = height;
  otherCanvas.width = width / scale;
  otherCanvas.height = height / scale;
  var imageData = otherContext.createImageData(width / scale, height / scale);
  var z = 0;

  function draw() {
    //context.fillStyle = "rgba(255, 255, 255, 0.5)";
    //context.fillRect(0, 0, width, height)
    canvas.width = width;
    context.fillStyle = "rgba(0, 0, 0, 0.75)";
    for (let i = 0; i < NUM_POINTS; i++) {
      let [x, y] = points[i],
          [sx, sy] = points[i].map(p=>p / scale),
          noise = simp.noise3D(sx, sy, z) * 15,
          [nx, ny] = [x + Math.sin(noise) * speed, y + (Math.cos(noise) ) * speed].map(n=>n + (Math.random() - 0.5) * 5),
          s = 1,
          idx = (sx + sy) * 4;
      
      context.fillRect(x, y, s, s);
      imageData[sx] = noise * 255;
      imageData[sx + 1] = 0;
      imageData[sx + 2] = 255;
      imageData[sx + 3] = 255;
      
      if (nx > -100 && nx < canvas.width + 100 && nx > -100 && ny < canvas.height + 100) {
        points[i] = [nx, ny]
      } else {
        points[i] = [width / 2, height / 2]
      }
      
    }
    context.putImageData(imageData, 0, 0);
  }
  
  document.body.appendChild(canvas);

  document.body.appendChild(otherCanvas);  
  function animate() {
    requestAnimationFrame(animate);
    draw();
    z += 0.0025;
  }
  animate();
}

window.doTheThing = main;