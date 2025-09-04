import React from 'react'
import {useGLTF} from '@react-three/drei'

const TechIcon = () => {
    const scene = useGLTF(model.modelaPath)
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Environment preset = 'city' />

      <float>
        <group>
            <primitive object={scene.scene} />

        </group>
      </float>
    </Canvas>
  )
}

export default TechIcon

