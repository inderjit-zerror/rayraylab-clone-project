precision mediump float;

varying vec2 vUv;

void main() {
  vUv = uv;

  // add a sine wave on the z-axis based on the UV x coordinate
  vec3 newPosition = position;
  newPosition.z += sin(uv.x * 3.141 ) * 7.0;


  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}