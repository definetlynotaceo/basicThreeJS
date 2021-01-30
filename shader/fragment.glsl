uniform float time;
uniform float progress;
uniform sampler2D image;
uniform sampler2D displacement;
uniform vec3 resolution;

varying vec2 vUv;
varying vec3 vPosition;

void main(){
  vec4 color = texture2D(image,vUv);
  gl_FragColor = color ;
}
