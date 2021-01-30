uniform float time;
varying vec2 vUv;

uniform sampler2D texture1;
uniform sampler2D texture2;

uniform vec2 pixels;
uniform vec2 uvRate1;

void main(){
  vUv = uv;

  // gl_position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
