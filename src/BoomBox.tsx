/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Suspense, useEffect, useRef, useState } from 'react';
import { PositionalAudio, SpotLight, useGLTF } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three';
import { GLTF } from 'three-stdlib'
import { Mesh, PositionalAudio as PositionalAudioImpl, AudioAnalyser } from 'three';
import { useFrame } from '@react-three/fiber';
import { min, avg } from './util';

type GLTFResult = GLTF & {
  nodes: {
    BoomBox: THREE.Mesh
  }
  materials: {
    BoomBox_Mat: THREE.MeshStandardMaterial
  }
}

export function BoomBox(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/BoomBox.glb') as unknown as GLTFResult
  const mesh = useRef<Mesh>(null!);
  const [target, setTarget] = useState<any>(undefined);

  useEffect(() => {
    if (!target && mesh.current) setTarget(mesh.current);
  }, [mesh.current])


  const audio = useRef<PositionalAudioImpl>(null!);
  const [hovered, setHovered] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);
  const [pause, setPause] = useState<boolean>(false);

  const { scale } = useSpring({ scale: hovered ? 75 : 60 })

  const onOver = () => setHovered(true);
  const onOut = () => setHovered(false);
  const onClick = () => {
    if (!play) return setPlay(true);
    if (play) return setPause(p => !p);
  }

  useEffect(() => {
    if (!audio.current) return;
    if (pause) audio.current.play();
    if (!pause) audio.current.pause();
  }, [pause])

  return (
    <group position={[5, 0, 0]} {...props} dispose={null}>
      <SpotLight
        penumbra={1}
        intensity={3}
        angle={0.5}
        color="#6C63FF"
        castShadow
        target={target}
        position={[0, 3, 0]}
      />
      <animated.mesh
        ref={mesh}
        scale={scale}
        geometry={nodes.BoomBox.geometry}
        material={materials.BoomBox_Mat}
        rotation={[-Math.PI/4, Math.PI, 0]}
        onPointerOver={onOver}
        onPointerOut={onOut}
        onClick={onClick}
      >
        <Suspense>
          {play && <PositionalAudio ref={audio} autoplay url="/nomana.mp3" distance={1} />}
        </Suspense>
      </animated.mesh>
    </group>
  )
}

useGLTF.preload('/BoomBox.glb')
