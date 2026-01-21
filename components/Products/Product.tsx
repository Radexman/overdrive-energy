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

      scrollTl
        .from('.title', {
          scale: 1.3,
          y: 20,
          duration: 1.2,
        })
        .from(
          '.subtext',
          {
            scale: 1.1,
            y: 12,
            duration: 1,
          },
          '-=0.6'
        );
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
                'mb-1 text-2xl transition-transform duration-300 ease-out',
                'group-hover:translate-x-1'
              )}
            >
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
