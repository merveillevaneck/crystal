import React, { useRef } from 'react'
import { Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const KiloLab = () => {
  const ref = useRef<Mesh>(null!)
  useFrame(({clock}) => {
    if (!ref.current) return;
    ref.current.position.x = (-20) + clock.getElapsedTime() / 100;
  })
  return (
    <Text3D
      ref={ref}
      font={"/Inter_Bold.json"}
      position={[-5, -5, -5]}
      rotation={[Math.PI/4, Math.PI / 2, -Math.PI/4]}

    >
      <pointLight position={[2, 2, 2]} intensity={0.1} />
      KiloLab
      <meshStandardMaterial color="#8EE3C8" />
    </Text3D>
  )
}
