'use client';

import clsx from 'clsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { Environment, View } from '@react-three/drei';

import Bounded from '@/components/Bounded';
import PageScene from '@/components/PageScene';
import { Flavor } from '@/types/global';
import { flavorsConfig, flavorStyles } from '@/lib/flavors';

gsap.registerPlugin(useGSAP);

const page = () => {
  const [isUltraTall, setIsUltraTall] = useState(false);
  const router = useRouter();
  const params = useParams();
  const flavorType = params?.slug as Flavor;

  if (!flavorType) return notFound();

  const flavor = flavorsConfig[flavorType];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkHeight = () => {
      setIsUltraTall(window.innerHeight >= 1200);
    };

    checkHeight();
    window.addEventListener('resize', checkHeight);

    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  useGSAP(() => {
    const introTl = gsap.timeline({ defaults: { delay: 0.2, opacity: 0, ease: 'power2.in' } });

    introTl
      .from('.title', { scale: 2, y: 40 })
      .from('.tagline', { y: 20 })
      .from('.description', { y: 20 }, '<')
      .from('.highlight-title', { scale: 2, y: 40 })
      .from('.highlight-text', { y: 20 }, '<')
      .from('.back-button', { scale: 2, y: 20 }, '<');

    gsap.to('.arrow', { x: 5, duration: 0.8, yoyo: true, repeat: -1, ease: 'power1.inOut' });
  }, []);

  const handleClick = () => {
    router.push('/');
  };

  return (
    <Bounded className="relative h-screen overflow-hidden">
      <View className="pointer-events-none sticky top-0 z-10 hidden h-screen w-screen md:block">
        <PageScene flavorType={flavorType} />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>
      <div className={clsx('absolute inset-0 z-20', isUltraTall ? 'pt-30' : 'pt-5')}>
        <div className="flex items-center justify-start pl-24">
          <div className="max-w-xl" style={{ color: flavor.accentColor }}>
            <h1 className="title font-bebas-neue text-8xl leading-none">{flavor.title}</h1>
            <h2 className="tagline font-bebas-neue text-3xl tracking-wide text-white/80">
              {flavor.tagline}
            </h2>
            <p className="description font-merriweather-sans mt-4 leading-relaxed text-white">
              {flavor.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end pt-30 pr-24">
          <div className="max-w-xl" style={{ color: flavor.accentColor }}>
            <h2 className="highlight-title font-bebas-neue text-4xl">{flavor.highlightTitle}</h2>
            <p className="highlight-text font-merriweather-sans leading-relaxed text-white">
              {flavor.highlightText}
            </p>
          </div>
        </div>
        <div
          className={clsx(
            'back-button flex items-center justify-start pl-24',
            isUltraTall ? 'pt-100' : 'pt-20'
          )}
        >
          <button
            onClick={handleClick}
            className={clsx(
              'group mt-8 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border px-8 py-3',
              'font-bebas-neue text-lg tracking-wide uppercase',
              'transition-all duration-300 ease-out',
              'hover:-translate-y-0.5 hover:shadow-lg',
              flavorStyles[flavorType].border,
              flavorStyles[flavorType].hoverBg,
              flavorStyles[flavorType].hoverText,
              flavorStyles[flavorType].text
            )}
          >
            <span
              className={clsx(
                'arrow mt-1 pr-4 text-2xl transition-transform duration-300 ease-out',
                'group-hover:translate-x-1'
              )}
            >
              ⭠
            </span>
            Back to page
          </button>
        </div>
      </div>
    </Bounded>
  );
};

export default page;
