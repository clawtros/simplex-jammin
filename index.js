const OpenSimplex = require("open-simplex-noise").default;
const simp = new OpenSimplex(new Date());
const NUM_POINTS = 1e3;

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
      context = canvas.getContext("2d"),
      width = window.innerWidth,
      height = window.innerHeight,
      points = generatePoints(width / 2, height / 2),
      speed = 2,
      scale = 500;
  
  canvas.width = width;
  canvas.height = height;
  var z = 0;

  function draw() {
    //context.fillStyle = "rgba(255, 255, 255, 0.5)";
    //context.fillRect(0, 0, width, height)
    context.fillStyle = "rgba(0, 0, 0, 0.15)";
    for (let i = 0; i < NUM_POINTS; i++) {
      let [x, y] = points[i],
          noise = simp.noise3D(x / scale, y / scale, z) * 10,
          [nx, ny] = [x + Math.sin(noise) * speed , y + (Math.cos(noise) ) * speed],
          s = 2;
      
      context.fillRect(x, y, s, s);

      if (nx > -100 && nx < canvas.width + 100 && nx > -100 && ny < canvas.height + 100) {
        points[i] = [nx, ny]
      } else {
        points[i] = [width / 2, height / 2]
      }
      
    }
  }
  
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = 0;
  
  document.body.appendChild(canvas);
  function animate() {
    requestAnimationFrame(animate);
    draw();
    z += 0.0125;
  }
  animate();
}

window.doTheThing = main;