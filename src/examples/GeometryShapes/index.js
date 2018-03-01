import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class Simple extends React.Component {
  static propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.

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
          this.state.cubeRotation.x + 0.011,
          this.state.cubeRotation.y + 0.011,
          
        ),
      });
    };
  }

  render() {
    const {
      width,
      height,
    } = this.props;

    // or you can use:
    // width = window.innerWidth
    // height = window.innerHeight

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
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
            detail={0}
          />
          <meshNormalMaterial
            color={0x00ff00}
            transparent={true}
            opacity={0.67}
          />
        </mesh>

        <mesh
          rotation={this.state.cubeRotation}
        >
          <sphereGeometry
            radius={0.56}
            widthSegments={32}
            heightSegments={32}
          />
          <meshNormalMaterial
            color={0x00ff00}
            
          />
        </mesh>
      </scene>
    </React3>);
  }
}

export default Simple;
