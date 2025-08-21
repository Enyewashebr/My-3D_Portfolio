import React from 'react'
import * as THREE from 'three';


const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.2} color="A259FF" />
      <directionalLight position={[0, 5, 5]} intensity={2} />

      <spotLight
        position={[2, 5, 6]}
        angle={0.15} 
        intensity={100}
        penumbra={1}
        color="white"
        />
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={1}
        color="#4cc9f0"
      />

      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color="#9ddedd"
      />

      <primitive
      object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)} // Soft white light
      position={[2, 6, 4]}
      intensity={15}
      rotation={[-Math.PI / 2, Math.PI/4, 0]} // Rotate to face the room
      />

      <spotLight 
      position={[0,1,0]}
      intensity={10}
        color="#0d00a4"
      
      />
    </>
  );}

export default HeroLights
