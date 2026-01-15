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
  const groupRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!canOneRef.current || !canTwoRef.current || !groupRef.current) return;

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

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        markers: true,
      },
    });

    scrollTl.to(groupRef.current.rotation, { y: Math.PI * 2 }, 0);

    scrollTl.to(groupRef.current.position, { y: -3 }, 0);
  }, []);

  return (
    <group ref={groupRef}>
      <Can ref={canOneRef} textureName="orange-burst" />
      <Can ref={canTwoRef} textureName="lemon-lime" />
    </group>
  );
};

export default HeroScene;
