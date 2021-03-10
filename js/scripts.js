import * as THREE from 'three';

import fragment from '/shader/fragment.glsl';
import vertex from '/shader/vertex.glsl'

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
