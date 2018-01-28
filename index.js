// const regl = require('regl')();
const OpenSimplex = require("open-simplex-noise").default;

/* const mat4 = require('gl-mat4')
 * const hsv2rgb = require('hsv2rgb')
 * 
 * const NUM_POINTS = 1e5
 * const VERT_SIZE = 4 * (4 + 4 + 3)*/

const simp = new OpenSimplex(1);
/* console.log(simp.noise3D);
 * var pointBuffer = regl.buffer(Array(NUM_POINTS).fill().map(function () {
 *   const color = hsv2rgb(Math.random() * 360, 0.6, 1)
 *   const noise = simp.noise3D(color[0], color[1], color[2])
 *   return [
 *     // freq
 *     Math.sin(noise) * 2,
 *     Math.cos(noise) * 2,
 *     noise * 2,
 *     Math.random() * 10,
 *     // phase
 *     2.0 * Math.PI * Math.random(),
 *     2.0 * Math.PI * Math.random(),
 *     2.0 * Math.PI * Math.random(),
 *     2.0 * Math.PI * Math.random(),
 *     // color
 *     color[0] / 255, color[1] / 255, color[2] / 255
 *   ]
 * }))
 * 
 * const drawParticles = regl({
 *   vert: `
 *   precision mediump float;
 *   attribute vec4 freq, phase;
 *   attribute vec3 color;
 *   uniform float time;
 *   uniform mat4 view, projection;
 *   varying vec3 fragColor;
 *   void main() {
 *     vec3 position = 8.0 * cos(freq.xyz * time + phase.xyz);
 *     gl_PointSize = length(cos(freq.xyz * time));
 *     gl_Position = projection * view * vec4(position, 1);
 *     fragColor = color;
 *   }`,
 * 
 *   frag: `
 *   precision lowp float;
 *   varying vec3 fragColor;
 *   void main() {
 *     if (length(gl_PointCoord.xy - 0.5) > 0.5) {
 *       discard;
 *     }
 *     gl_FragColor = vec4(0,0,0, 0.9);
 *   }`,
 * 
 *   attributes: {
 *     freq: {
 *       buffer: pointBuffer,
 *       stride: VERT_SIZE,
 *       offset: 0
 *     },
 *     phase: {
 *       buffer: pointBuffer,
 *       stride: VERT_SIZE,
 *       offset: 16
 *     },
 *     color: {
 *       buffer: pointBuffer,
 *       stride: VERT_SIZE,
 *       offset: 32
 *     }
 *   },
 * 
 *   uniforms: {
 *     view: ({tick}) => {
 *       const t = 0.01 * tick
 *       return mat4.lookAt([],
 *                          [30 * Math.cos(t), 2.5, 30 * Math.sin(t)],
 *                          [0, 0, 0],
 *                          [0, 0.1, 0])
 *     },
 *     projection: ({viewportWidth, viewportHeight}) =>
 *       mat4.perspective([],
 *                        Math.PI / 4,
 *                        viewportWidth / viewportHeight,
 *                        0.01,
 *                        1000),
 *     time: ({tick}) => tick * 0.001
 *   },
 * 
 *   count: NUM_POINTS,
 * 
 *   primitive: 'points'
 * })
 * 
 * 
 * function main() {
 *   regl.frame(() => {
 *     regl.clear({
 *       depth: 1,
 *       color: [1, 1, 1, 1]
 *     })
 * 
 *     drawParticles()
 *   })
 *   
 * }
 * console.log(simp)*/
window.doTheThing = main;