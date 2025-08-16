
import React from 'react'
import { useGLTF, useTexture, Text } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/optimized-room.glb')
  const myImageTexture = useTexture("/pic-logo.jpg");
  const myImageTexture2 = useTexture("/gra-pic.png");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.body1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <Text
        position={[0.5, 0.3, 2]} // X, Y, Z position in the room
        fontSize={0.4} // Size of the text
        color="red" // Text color
        rotation={[-Math.PI / 2, 0, 0]}
        // Optional: rotate if needed 0]} // Optional: rotate if needed
      >
        Welcome to My World!
      </Text>

      <Text
        position={[0, 5.68, -3.3]}
        fontSize={0.4}
        color="blue"
        rotation={[-Math.PI / 2, 0, 0]}
        // Optional: rotate if needed
      >
        Software Engineer!
      </Text>
      <Text
        position={[-3.25, 5.68, -0.3]} // X, Y, Z position in the room
        fontSize={0.4} // Size of the text
        color="violet" // Text color
        rotation={[-Math.PI / 2, 0, 1.57]}
        // Optional: rotate if needed 0]} // Optional: rotate if needed
      >
        Design. Create. Inspire.!
      </Text>
      <Text
        position={[0, 0.19, 3.2]} // X, Y, Z position in the room
        fontSize={0.28} // Size of the text
        color="white" // Text color
        rotation={[-Math.PI / 20, 0, 0]}
        // Optional: rotate if needed 0]} // Optional: rotate if needed
      >
        I'am a Front end Web Developer!
      </Text>

      <Text
        position={[-0.05, 1.68, -1.4]} // X, Y, Z position in the room
        fontSize={0.28} // Size of the text
        color="blue" // Text color
        rotation={[-Math.PI / 2, 0, 0]}
        // Optional: rotate if needed 0]} // Optional: rotate if needed
      >
        Let's build something together!
      </Text>
      {/* <mesh geometry={nodes.body1_blinn1_0.geometry}>
        <meshStandardMaterial map={myImageTexture} />
      </mesh> */}
      <group position={[0, 4, -2.9]}>
        {/* Picture */}
        <mesh>
          <planeGeometry args={[2.5, 2.5]} />
          <meshStandardMaterial map={myImageTexture} />
        </mesh>

        {/** Frame */}
        {/** Top frame */}
        <mesh position={[0, 1.34, -0.05]}>
          <boxGeometry args={[2.6, 0.1, 0.05]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/** Bottom frame */}
        <mesh position={[0, -1.34, -0.05]}>
          <boxGeometry args={[2.6, 0.1, 0.05]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/** Left frame */}
        <mesh position={[-1.34, 0, -0.05]}>
          <boxGeometry args={[0.1, 2.6, 0.05]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/** Right frame */}
        <mesh position={[1.34, 0, -0.05]}>
          <boxGeometry args={[0.1, 2.6, 0.05]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>

      <mesh position={[2.5, 2.8, -2.9]}>
        <planeGeometry args={[1.2, 1.2]} />
        <meshStandardMaterial map={myImageTexture2} />
      </mesh>

      <mesh
        geometry={nodes.cabin_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.comp_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.table_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.tablet_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}

useGLTF.preload('/models/optimized-room.glb')
