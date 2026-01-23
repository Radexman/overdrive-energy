'use client';

import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

import Can from '../Can';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FooterScene = () => {
  return (
    <group>
      <group>
        <Can textureName="orange-burst" position={[-3, 0, -2]} />
      </group>
      <group>
        <Can textureName="lemon-lime" position={[0, 0, -2]} />
      </group>
      <group>
        <Can textureName="berry-frost" position={[3, 0, -2]} />
      </group>
    </group>
  );
};

export default FooterScene;
