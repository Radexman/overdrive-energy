'use client';

import * as THREE from 'three';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useControls } from 'leva';

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
      .timeline({ defaults: { duration: 2, ease: 'back.out(1.5)' } })
      .to(canOneRef.current.position, { x: -4, delay: 1.5 })
      .to(canOneRef.current.rotation, { z: -0.5 }, '<')
      .to(canTwoRef.current.position, { x: 4 }, '<')
      .to(canTwoRef.current.rotation, { z: 0.5 }, '<');
  }, []);

  return (
    <group>
      <Can ref={canOneRef} textureName="orange-burst" />
      <Can ref={canTwoRef} textureName="lemon-lime" />
    </group>
  );
};

export default HeroScene;
