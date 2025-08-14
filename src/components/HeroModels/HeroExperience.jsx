import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { useLoader } from "@react-three/fiber";
// import * as THREE from "three";

const HeroExperience = () => {
  // const texture = useLoader(THREE.TextureLoader, "/pic-logo.jpg");

    // const materials = [
    //   new THREE.MeshStandardMaterial({ map: texture }), // face 1 with image
    //   new THREE.MeshStandardMaterial({ color: "teal" }), // face 2
    //   new THREE.MeshStandardMaterial({ color: "teal" }), // face 3
    //   new THREE.MeshStandardMaterial({ color: "teal" }), // face 4
    //   new THREE.MeshStandardMaterial({ color: "teal" }), // face 5
    //   new THREE.MeshStandardMaterial({ color: "teal" }), // face 6
    // ];
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={5} />

      <OrbitControls />

      {/* <mesh material={materials} > */}
      <mesh>
        <boxGeometry args={[5, 5, 5]} />
        {/* <sphereGeometry args={[5, 32, 32]} /> */}
        {/* <img src="/pic-logo.jpg" alt="" /> */}
        <meshStandardMaterial color="teal" />
      </mesh>
    </Canvas>
  );
}

export default HeroExperience
