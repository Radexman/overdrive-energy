'use client';

import * as THREE from 'three';
import { Float, useGLTF, useTexture } from '@react-three/drei';

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};

type CanProps = {
  textureName: 'orange-burst' | 'berry-frost' | 'lemon-lime';
};

const Can = ({ textureName }: CanProps) => {
  const { nodes } = useGLTF('/can-model.glb') as unknown as GLTFResult;
  const texture = useTexture(`/textures/${textureName}.jpg`);

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <Float floatIntensity={3}>
      <group dispose={null}>
        <group scale={[0.906, 2.084, 0.906]} rotation-y={Math.PI * 1}>
          <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material}>
            <meshStandardMaterial map={texture} metalness={1} roughness={0.6} />
          </mesh>
          <mesh geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} />
        </group>
      </group>
    </Float>
  );
};

export default Can;
