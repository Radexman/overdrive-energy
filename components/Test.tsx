'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

import Can from './Can';

const Test = () => {
  return (
    <Canvas style={{ position: 'fixed' }}>
      <Environment preset="city" />
      <OrbitControls />
      <ambientLight intensity={5} />
      <Can />
    </Canvas>
  );
};

export default Test;
