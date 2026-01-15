'use client';

import * as THREE from 'three';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import Can from '../Can';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroScene = () => {
  const canOneRef = useRef<THREE.Group>(null);
  const canTwoRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!canOneRef.current || !canTwoRef.current) return;

    // Can One
    gsap.set(canOneRef.current.position, { x: -11 });
    gsap.set(canOneRef.current.rotation, { z: -0.3 });

    // Can Two
    gsap.set(canTwoRef.current.position, { x: 11 });
    gsap.set(canTwoRef.current.rotation, { z: 0.3 });

    gsap
      .timeline({ defaults: { duration: 2, ease: 'back.out(1.4)' } })
      .to(canOneRef.current.position, { x: -4 })
      .to(canTwoRef.current.position, { x: 4 }, '<');
  }, []);

  return (
    <group>
      <group ref={canOneRef} position-x={-4}>
        <Can textureName="lemon-lime" />
      </group>
      <group ref={canTwoRef} position-x={4}>
        <Can textureName="orange-burst" />
      </group>
    </group>
  );
};

export default HeroScene;
