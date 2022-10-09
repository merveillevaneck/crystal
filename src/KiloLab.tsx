import { useRef, useState } from 'react'
import { Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Group } from 'three';

export const KiloLab = () => {
  const ref = useRef<Group>(null!)
  const [hovered, setHovered] = useState<boolean>(false);
  const { scale } = useSpring({ scale: hovered ? 1.5 : 1 });
  useFrame(({clock}) => {
    if (!ref.current) return;
    ref.current.position.x = (-20) + clock.getElapsedTime() / 100;
  })
  const onIn = () => {
    setHovered(true);
  }
  const onOut = () => {
    setHovered(false);
  }
  const onClick = () => {
    setHovered(h => !h);
    window.open('https://www.kilolab.co.za')
  }
  return (
    <animated.group
      rotation={[Math.PI/4, Math.PI / 2, -Math.PI/4]}
      ref={ref}
      scale={scale}
      onPointerOver={onIn}
      onPointerOut={onOut}
      onClick={onClick}>
      <Text3D
        isMesh
        font={"/Inter_Bold.json"}
        position={[3, 0, 10]}
      >
        <pointLight position={[2, 2, 2]} intensity={0.05} />
        KiloLab
        <meshPhysicalMaterial />
      </Text3D>
    </animated.group>
  )
}
