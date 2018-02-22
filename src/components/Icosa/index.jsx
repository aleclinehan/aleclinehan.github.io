import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

import './style.scss';


class Icosa extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.fog = new THREE.Fog(0xFFFFFF, 40, 100);

    const d = -15;
    const f = -2;
    this.lightPosition = new THREE.Vector3(d, 8, -7);
    this.lightPosition2 = new THREE.Vector3(-d, 8, 15);
    this.lightPosition3 = new THREE.Vector3(0, f, 0);
    this.lightTarget = new THREE.Vector3(0, 0, 0);

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

  
    

    
     
      
    
  


  componentDidMount() {
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
        fog={this.fog}
       >

        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <ambientLight
            color={0xffffff}
            intensity={9.75}
          />
          <directionalLight
            color={0xffffff}
            intensity={2.75}

            position={this.lightPosition}
            lookAt={this.lightTarget}
          />

          <directionalLight
            color={0xccccff}
            intensity={2.75}

            position={this.lightPosition3}
            lookAt={this.lightTarget}
          />


          <directionalLight
            color={0xccccff}
            intensity={2.75}

            position={this.lightPosition2}
            lookAt={this.lightTarget}
          />

           <directionalLight
            color={0x0000ff}
            intensity={8.75}

            position={this.lightTarget}
            lookAt={this.cameraPosition}
          />
           
         
        <mesh
          rotation={this.state.cubeRotation}
        >
          <icosahedronGeometry
            radius={1}
          />
        

          <meshNormalMaterial
            color={0x000000}
            transparent={true}
            opacity={0.5}
            alphaTest={0.5}
            
          />
        </mesh>
         <mesh>
          <sphereGeometry
            radius={0.57}
            widthSegments={32}
            heightSegments={32}
            
          />
        

          <meshNormalMaterial
            color={0x000000}
            transparent={false}
            opacity={0.8}
          />
        </mesh>
      </scene>
    </React3>
    </div>);
  }
}

export default Icosa;