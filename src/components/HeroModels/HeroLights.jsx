import React from 'react'
import * as THREE from 'three';


const HeroLights = () => {
  return (
    <>
       <ambientLight intensity={0.2} color="A259FF" />
        <directionalLight position={[5, 5, 5]} intensity={6} />



        
<primitive
object={new THREE. RectAreaLight('#A259FF', 8, 3, 2)}
position={[10, 1, 10]}
intensity={150}
rotation={[-Math. PI / 4, Math. PI / 4, 0]}
/>

         <spotLight
            position={[2, 5, 6]}
            angle={0.15}
            intensity={100}
            penumbra={0.2}
            color="white"
            />
        <spotLight
            position={[4, 5, 4]}
            angle={0.3}
            intensity={40}
            penumbra={0.5}
            color="#4cc9f0"
        /> 
    </>
  )}

export default HeroLights
