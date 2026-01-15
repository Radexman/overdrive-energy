'use client';

import * as THREE from 'three';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import Can from '../Can';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  const canOneRef = useRef<THREE.Group>(null);
  const canTwoRef = useRef<THREE.Group>(null);
  const canThreeRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!groupRef.current || !canOneRef.current || !canTwoRef.current || !canThreeRef.current)
      return;

    gsap.set(canOneRef.current.position, { x: -11, y: 0 });
    gsap.set(canOneRef.current.rotation, { z: -0.3 });

    gsap.set(canTwoRef.current.position, { x: 11, y: 0 });
    gsap.set(canTwoRef.current.rotation, { z: 0.3 });

    gsap.set(canThreeRef.current.position, { x: -11, y: 2 });
    gsap.set(canThreeRef.current.rotation, { z: -Math.PI * 0.5 });

    gsap
      .timeline({ defaults: { duration: 2, delay: 1.5, ease: 'back.out(1.5)' } })
      .to(canOneRef.current.position, { x: -4 }, 0)
      .to(canTwoRef.current.position, { x: 4 }, 0)
      .to(canOneRef.current.rotation, { z: -0.5 }, 0)
      .to(canTwoRef.current.rotation, { z: 0.5 }, 0);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
          markers: true,
        },
      })
      .to(groupRef.current.rotation, { y: Math.PI * 2 })
      .to(groupRef.current.position, { y: -2.9 }, 0)

      .to(canThreeRef.current.position, { x: -1 }, 0)
      .to(canThreeRef.current.rotation, { x: Math.PI * 2.4 }, 0)

      .to(canOneRef.current.rotation, { x: Math.PI * 2.5 }, 0.2)
      .to(canThreeRef.current.rotation, { x: Math.PI * 0.5 }, 0.4)
      .to(canTwoRef.current.position, { y: '+=2' }, 0.2)
      .to(canOneRef.current.position, { x: '+=0.5' }, 0.2)
      .to(canOneRef.current.rotation, { x: '+=0.5' }, 0.41);
  }, []);

  return (
    <>
      <group ref={groupRef}>
        <group ref={canOneRef}>
          <Can textureName="orange-burst" />
        </group>
        <group ref={canTwoRef}>
          <Can textureName="lemon-lime" />
        </group>
      </group>
      <group ref={canThreeRef}>
        <Can textureName="berry-frost" />
      </group>
    </>
  );
};

export default HeroScene;
