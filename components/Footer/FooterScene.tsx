'use client';

import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

import Can from '../Can';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FooterScene = () => {
  const canOneRef = useRef<THREE.Group>(null);
  const canTwoRef = useRef<THREE.Group>(null);
  const canThreeRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!canOneRef.current || !canTwoRef.current || !canThreeRef.current) return;

    gsap.set(canOneRef.current.position, { x: -12 });
    gsap.set(canTwoRef.current.position, { y: -12 });
    gsap.set(canThreeRef.current.position, { x: 12 });

    const scrollTl = gsap.timeline({
      defaults: {
        ease: 'back.out(1.2)',
      },
      scrollTrigger: {
        trigger: '.footer',
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    });

    scrollTl.to(canOneRef.current.position, { x: 0 });
    scrollTl.to(canThreeRef.current.position, { x: 0 }, '<');
    scrollTl.to(canTwoRef.current.position, { y: 0 });
  }, []);

  return (
    <group>
      <group ref={canOneRef}>
        <Can textureName="orange-burst" position={[-3, 0, -2]} />
      </group>
      <group ref={canTwoRef}>
        <Can textureName="lemon-lime" position={[0, 0, -2]} />
      </group>
      <group ref={canThreeRef}>
        <Can textureName="berry-frost" position={[3, 0, -2]} />
      </group>
    </group>
  );
};

export default FooterScene;
