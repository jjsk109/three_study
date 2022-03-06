import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import {Physics, useBox, usePlane} from "@react-three/cannon";

function Box(){
    const [ref,api] = useBox(() =>({mass:1, position :[0,5,0]}));
    return (
        <mesh 
        onClick={() =>{
            api.velocity.set(0,5,0)
        }}
            ref={ref} position={[0,2,0]}>
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color="hotpink"/>
        </mesh>
    )
}

function Plane(){
    const [ref] = usePlane(() =>({
        rotation :[-Math.PI/2,0,0]
    }));
    return (
        <mesh rotation={[-Math.PI/2,0,0]}>
            <boxBufferGeometry attach='geometry' args={[100,100]} />
            <meshLambertMaterial attach='material' color="lightblue"/>
        </mesh>
    )
}


export default function Three_Stap_3(){
    return (
        <Canvas>
            <OrbitControls />
            <Stars/>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10,15,10]} angle={0.3}/>
            <Physics>
                <Box/>
                <Plane/>  
            </Physics>
          
        </Canvas>
        )
}