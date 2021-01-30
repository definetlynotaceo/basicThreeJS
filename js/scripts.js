import * as THREE from 'three';
import img from '/logo.png';
import displacement from '/displacement.jpeg';

import fragment from '/shader/fragment.glsl';
import vertex from '/shader/vertex.glsl'

console.log(img);
export default class sketch  {
  constructor() {
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('canvas').appendChild( this.renderer.domElement );

    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  	this.camera.position.z = 1;
    this.scene = new THREE.Scene();

    this.time = 0;

    this.addMesh();
    this.render();
  }
  addMesh(){
    this.geometry = new THREE.PlaneGeometry( 1,1,1,1 );
    this.material = new THREE.ShaderMaterial({
      // extensions: {
      //   derivatives: "#extension GL_OES_standard_derivatives : enable"
      // },
      // side: THREE.DoubleSide,
      // uniforms: {
      //   time: { type : "f", value: 0 },
      //   image: { type: "t", value: new THREE.TextureLoader().load(img) },
      //   displacement: { type: "d", value: new THREE.TextureLoader().load(displacement) },
      //   resolution: { type: "v4", value: new THREE.Vector4() },
      //   uvRate1: {
      //     value: new THREE.Vector2(1,1)
      //   }
      // },
      // vertexShader: vertex,
      // fragmentShader: fragment
    });
    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );
  }
  render(){
    this.time++;
    window.requestAnimationFrame(this.render.bind(this));

    // this.mesh.rotation.x = this.time / 200;
    // this.mesh.rotation.y = this.time / 100;

    this.renderer.render( this.scene, this.camera );
  }
}
new sketch();
