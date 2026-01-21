'use client';

import * as THREE from 'three';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import Can from './Can';
import { Flavor } from '@/types/global';

gsap.registerPlugin(useGSAP);

type PageSceneProps = {
  flavorType: Flavor;
};

const PageScene = ({ flavorType }: PageSceneProps) => {
  const canRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!canRef.current) return;

    gsap.set(canRef.current.position, { y: -8 });

    gsap
      .timeline({ defaults: { duration: 0.8, delay: 0.2, ease: 'back.out(1.5)' } })
      .to(canRef.current.position, { y: 0 });
  }, []);

  return (
    <group ref={canRef}>
      <Can textureName={flavorType} />
    </group>
  );
};

export default PageScene;
