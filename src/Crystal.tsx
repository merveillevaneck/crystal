/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three';

export function Crystal(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/crystal.glb') as any
  const mesh = useRef<Mesh>(null!);
  useFrame(({clock}) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = -clock.getElapsedTime() / 10;
  })

  return (
    <group receiveShadow castShadow {...props} dispose={null}>
      <mesh
        scale={1.5}
        ref={mesh}
        receiveShadow
        castShadow
        geometry={nodes.Quad_Sphere.geometry}
        material={materials.Material}>
          <color attach="color" args={["black"]} />
          <meshPhysicalMaterial />
      </mesh>

    </group>
  )
}

useGLTF.preload('/crystal.glb')

export default Crystal;