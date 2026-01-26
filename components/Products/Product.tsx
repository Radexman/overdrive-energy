'use client';

import clsx from 'clsx';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { Environment, View } from '@react-three/drei';
import { useRouter } from 'next/navigation';

import ProductsScene from './ProductsScene';
import { flavorStyles } from '@/lib/flavors';
import { Flavor } from '@/types/global';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProductProps = {
  title: string;
  subtext: string;
  textureName: Flavor;
  isAlignedLeft?: boolean;
};

const Product = ({ title, subtext, textureName, isAlignedLeft }: ProductProps) => {
  const sectionRef = useRef<HTMLElement>(null!);
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/cans/${slug}`);
  };

  useGSAP(
    () => {
      gsap.to('.arrow', {
        x: 5,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
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
        <div className="ml-70 flex h-[70vh] max-w-xl flex-col justify-center">
          <h3 className={clsx('title font-bebas-neue text-7xl', flavorStyles[textureName].text)}>
            {title}
          </h3>
          <p className="subtext font-merriweather-sans text-2xl">{subtext}</p>
          <div className="product-button">
            <button
              onClick={() => handleClick(textureName)}
              className={clsx(
                'group mt-8 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border px-8 py-3',
                'font-bebas-neue text-lg tracking-wide uppercase',
                'transition-all duration-300 ease-out',
                'hover:-translate-y-0.5 hover:shadow-lg',
                flavorStyles[textureName].border,
                flavorStyles[textureName].hoverBg,
                flavorStyles[textureName].hoverText,
                flavorStyles[textureName].text
              )}
            >
              Explore flavor
              <span
                className={clsx(
                  'arrow mb-1 pl-4 text-2xl transition-transform duration-300 ease-out',
                  'group-hover:translate-x-1'
                )}
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
