uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  // sample texture color
  vec4 texColor = texture2D(uTexture, vUv);

  // output final pixel color
  gl_FragColor = texColor;
}