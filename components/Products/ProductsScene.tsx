'use client';

import * as THREE from 'three';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import Can from '../Can';
import { Flavor, Vec3 } from '@/types/global';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProductsSceneProps = {
  textureName: Flavor;
  isAlignedLeft?: boolean;
  finalPosition?: Vec3;
  triggerRef: React.RefObject<HTMLElement>;
};

const ProductsScene = ({
  textureName,
  isAlignedLeft,
  finalPosition = [0, 0, 0],
  triggerRef,
}: ProductsSceneProps) => {
  const canRef = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!canRef.current || !triggerRef.current) return;

    const startX = isAlignedLeft ? -12 : 12;
    const endX = isAlignedLeft ? 3 : -3;

    gsap.set(canRef.current.position, { x: startX, y: finalPosition[1], z: finalPosition[2] });

    gsap.to(canRef.current.position, {
      x: endX,
      duration: 2,
      ease: 'back.out(1)',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    });
  }, []);

  return (
    <group ref={canRef}>
      <Can textureName={textureName} position={[0, 0, 0]} />
    </group>
  );
};

export default ProductsScene;
