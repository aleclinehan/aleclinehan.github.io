import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

import './style.scss';

class Icosa extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.fog = new THREE.Fog(0xFFFFFF, 10, 40);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);
    

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.0125,
          this.state.cubeRotation.y + 0.0125,
          0
        ),
      });
    };
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (
    <div className = 'icosa'> 
    <React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      clearColor={this.fog.color}

      onAnimate={this._onAnimate}
    >
      <scene
        fog={this.fog}>

        <perspectiveCamera
          name="camera"
          fov={37.5}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <icosahedronGeometry
            radius={1}
          />
        

          <meshBasicMaterial
            color={0x00ff00}
            wireframe
          />
        </mesh>
      </scene>
    </React3>
    </div>);
  }
}

export default Icosa;