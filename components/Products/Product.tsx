'use client';

import clsx from 'clsx';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Environment, View } from '@react-three/drei';

import ProductsScene from './ProductsScene';
import { Flavor } from '@/types/global';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProductProps = {
  title: string;
  subtext: string;
  textureName: Flavor;
  isAlignedLeft?: boolean;
};

const Product = ({ title, subtext, textureName, isAlignedLeft }: ProductProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const scrollTl = gsap.timeline({
        defaults: {
          opacity: 0,
          ease: 'back.out(2)',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: 1,
          markers: true,
        },
      });

      scrollTl.from('.title', {
        scale: 1.3,
        opacity: 0,
        y: 20,
      });
      scrollTl.from('.subtext', {
        scale: 1.1,
        opacity: 0,
        y: 10,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={clsx('relative h-screen', textureName)}>
      <View className="pointer-events-none sticky top-0 z-50 hidden h-screen w-screen md:block">
        <ProductsScene
          textureName={textureName}
          isAlignedLeft={isAlignedLeft}
          finalPosition={[0, 0, 0]}
          triggerRef={sectionRef}
        />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>

      <div
        className={clsx(
          'text-text-primary absolute inset-0 grid place-items-center',
          isAlignedLeft && '-ml-70'
        )}
      >
        <div className="ml-70 flex h-[70vh] max-w-lg flex-col justify-center">
          <h3 className={`title font-bebas-neue text-5xl text-${textureName}`}>{title}</h3>
          <p className="subtext font-merriweather-sans text-xl">{subtext}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
