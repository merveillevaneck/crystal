import { OrbitControls, OrthographicCamera, PerspectiveCamera, SpotLight, Stars, useDepthBuffer} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { BoomBox } from './BoomBox';
import { Crystal } from './Crystal';
import { KiloLab } from './KiloLab';
import { Camera } from 'three';

export const Scene = () => {
  const depthBuffer = useDepthBuffer();
  const camera = useRef<Camera>(null!);
  return (
    <Suspense fallback={null}>
      <color attach="background" args={["black"]} />
      <Crystal />
      <BoomBox />
      <KiloLab />
      <SpotLight
        penumbra={1}
        position={[4, 3, 0]}
        intensity={2}
        angle={0.5}
        color="#6C63FF"
        castShadow
        depthBuffer={depthBuffer}
      />
      <SpotLight
        penumbra={1}
        position={[-4, 3, 0]}
        intensity={2}
        angle={0.5}
        color="#8EE3C8"
        castShadow
        depthBuffer={depthBuffer}
      />
      <Stars />
      <OrbitControls autoRotate autoRotateSpeed={-0.5} maxDistance={15} minDistance={15} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 5} />
    </Suspense>
  )
}
