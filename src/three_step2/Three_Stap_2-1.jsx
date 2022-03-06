import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


function Box(props) {
  const mesh = useRef(null)
  console.log(mesh)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
 
  let a = 1;
  
  useFrame((state, delta) => {
    mesh.current.position.y += 0.05 * a;
    if(mesh.current.position.y > 3){
      a = -1;
    }else if(mesh.current.position.y < 0){
      a = 1;
    }
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z += 0.01;
    
  })
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <circleBufferGeometry args={[1, 10, 1]} />
      {/* <circleGeometry args={[1, 10, 1]} /> */}
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function ThreeStep2_1() {
  return (
    <Canvas >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />

    </Canvas>
  )
}