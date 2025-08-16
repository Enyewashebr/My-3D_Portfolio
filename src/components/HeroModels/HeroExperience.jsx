// import React, { use } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
// import { useLoader } from "@react-three/fiber";
// import * as THREE from "three";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // const texture = useLoader(THREE.TextureLoader, "/pic-logo.jpg");

    // const materials = [
    //   new THREE.MeshStandardMaterial({ map: texture }), // face 1 with image
    //   // new THREE.MeshStandardMaterial({ color: "teal" }), // face 2
    //   // new THREE.MeshStandardMaterial({ color: "teal" }), // face 3
    //   // new THREE.MeshStandardMaterial({ color: "teal" }), // face 4
    //   // new THREE.MeshStandardMaterial({ color: "teal" }), // face 5
    //   // new THREE.MeshStandardMaterial({ color: "teal" }), // face 6
    // ];
  return (
    <Canvas camera={{ position: [7, 15, 40], fov: 45 }}>
      <ambientLight intensity={0.2} color="1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <OrbitControls
      enablePan={false}
      enableZoom={!isTablet}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={Math.PI / 2}
      />

      {/* <mesh material={materials} > */}
      {/* <mesh> */}
        {/* <boxGeometry args={[5, 5, 5]} />
        {/* <sphereGeometry args={[5, 32, 32]} /> */}
        {/* <img src="/pic-logo.jpg" alt="" /> */}
         {/* <meshStandardMaterial color="teal" /> */}
      {/* </mesh>  */} 



      <group
      scale={isMobile ? 0.7 : 1}
      position={[0, -3.5, 0]}
      rotation={[0, Math.PI / 4, 0]}
      />

      <Room />
      
    </Canvas>
  );
}

export default HeroExperience
