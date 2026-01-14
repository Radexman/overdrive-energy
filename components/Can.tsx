'use client';

import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};

const Can = () => {
  const { nodes } = useGLTF('/can-model.glb') as unknown as GLTFResult;
  const texture = useTexture('/textures/overdrive-lemon-lime.jpg');

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  return (
    <group dispose={null}>
      <group scale={[0.906, 2.084, 0.906]} rotation-y={Math.PI * 1}>
        <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material}>
          <meshStandardMaterial map={texture} />
        </mesh>
        <mesh geometry={nodes.Cylinder_1.geometry} material={nodes.Cylinder_1.material} />
      </group>
    </group>
  );
};

export default Can;
