import React, { Component , useRef } from 'react';
import { Canvas ,useFrame } from '@react-three/fiber';

function CoinMesh() {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01));
    return (
      <mesh ref={mesh} scale={3}>
        <cylinderBufferGeometry color="red" args={[2, 1, 0.3, 50]} />
        <meshLambertMaterial attach="material" />
      </mesh>
    );
  }

const Three_Make = () => {
    return(
    <div className="App">
     <Canvas>
      <CoinMesh/>
     </Canvas>
    </div>
  );
};


export default Three_Make;