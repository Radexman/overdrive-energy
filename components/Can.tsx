'use client';

import * as THREE from 'three';
import { forwardRef } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};

type CanProps = {
  textureName: 'orange-burst' | 'berry-frost' | 'lemon-lime';
  position?: [number, number, number];
};

const Can = forwardRef<THREE.Group, CanProps>(({ textureName, position }, ref) => {
  const { nodes } = useGLTF('/can-model.glb') as unknown as GLTFResult;
  const texture = useTexture(`/textures/${textureName}.jpg`);

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <Float speed={1} rotationIntensity={1.5} floatIntensity={1}>
      <group ref={ref} dispose={null}>
        <group scale={[0.906, 2.084, 0.906]} position={position} rotation-y={Math.PI}>
          <mesh geometry={nodes.Cylinder.geometry}>
            <meshStandardMaterial map={texture} metalness={1} roughness={0.6} />
          </mesh>
          <mesh geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} />
        </group>
      </group>
    </Float>
  );
});

Can.displayName = 'Can';

export default Can;
