import { OrbitControls, SpotLight, Stars} from '@react-three/drei';
import { Model } from './Crystal';
import { KiloLab } from './KiloLab';

export const Scene = () => {
  return (
    <>
      <color attach="background" args={["black"]} />
      <group>
        <Model />
        <OrbitControls autoRotate autoRotateSpeed={-0.5} maxDistance={10} minDistance={10} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 5} />
      </group>
      <SpotLight
        penumbra={0.05}
        position={[4, 3, 0]}
        intensity={2}
        angle={0.5}
        color="#6C63FF"
        castShadow
      />
      <SpotLight
        penumbra={0.05}
        position={[-4, 3, 0]}
        intensity={2}
        angle={0.5}
        color="#8EE3C8"
        castShadow
      />
        <KiloLab />
      <Stars />
    </>
  )
}
