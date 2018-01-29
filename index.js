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
      speed = 1,
      scale = 100;
  
  canvas.width = width;
  canvas.height = height;
  var z = 0;

  function draw() {
    for (let i = 0; i < NUM_POINTS; i++) {
      let [x, y] = points[i],
          [sx, sy] = points[i].map(p=>p / scale),
          noise = simp.noise3D(sx, sy, z) * 6.28,
          [nx, ny] = [x + Math.sin(noise) * speed, y + (Math.cos(noise) ) * speed].map(n=>n + (Math.random() - 0.5) * 5),
          s = 0.5;
      context.fillStyle = `hsla(${parseInt(255 * noise)}, 80%, 50%, 0.25)`;      
      context.fillRect(x, y, s, s);
      
      if (nx > -100 && nx < canvas.width + 100 && nx > -100 && ny < canvas.height + 100) {
        points[i] = [nx, ny]
      } else {
        points[i] = [width / 2, height / 2]
      }
    }
  }
  
  document.body.appendChild(canvas);
  function animate() {
    requestAnimationFrame(animate);
    draw();
    z += 0.005;
  }
  animate();
}

window.doTheThing = main;