precision mediump float;
varying vec2 vUv;
uniform float uScrollSpeed;
uniform float uIntroCurve;

void main() {
  vUv = uv;

  // add a sine wave on the z-axis based on the UV x coordinate
  vec3 newPosition = position;
  float speed = (uScrollSpeed + uIntroCurve) * 40.0;
  newPosition.z += sin(uv.x * 3.141 ) * speed;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}