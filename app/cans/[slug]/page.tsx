'use client';

import clsx from 'clsx';
import { notFound, useParams } from 'next/navigation';
import { Environment, View } from '@react-three/drei';

import Can from '@/components/Can';
import Bounded from '@/components/Bounded';
import { Flavor } from '@/types/global';
import { flavorsConfig, flavorStyles } from '@/lib/flavors';

const page = () => {
  const params = useParams();
  const flavorType = params?.slug as Flavor;

  if (!flavorType) return notFound();

  const flavor = flavorsConfig[flavorType];

  const sections = [
    { content: flavor.description, title: flavor.title, align: 'left' },
    { content: flavor.description, title: flavor.title, align: 'left' },
    { content: flavor.description, title: flavor.title, align: 'left' },
  ];

  return (
    <Bounded className="relative h-screen overflow-hidden">
      <View className="pointer-events-none sticky top-0 z-10 hidden h-screen w-screen md:block">
        <Can textureName={flavorType} />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>
      <div className="absolute inset-0 z-20 mb-125 flex items-center justify-start pl-24">
        <div className="max-w-xl" style={{ color: flavor.accentColor }}>
          <h1 className="font-bebas-neue text-8xl leading-none">{flavor.title}</h1>
          <h2 className="font-bebas-neue text-3xl tracking-wide text-white/80">{flavor.tagline}</h2>
          <p className="font-merriweather-sans mt-4 text-lg leading-relaxed text-white">
            {flavor.description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-end pr-24">
        <div className="max-w-xl" style={{ color: flavor.accentColor }}>
          <h2 className="font-bebas-neue text-4xl">{flavor.highlightTitle}</h2>
          <p className="font-merriweather-sans text-lg leading-relaxed text-white">
            {flavor.highlightText}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-20 -mb-200 flex items-center justify-start pl-24">
        <button
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
              'mt-1 text-2xl transition-transform duration-300 ease-out',
              'group-hover:translate-x-1'
            )}
          >
            ⭠
          </span>
          Back to page
        </button>
      </div>
    </Bounded>
  );
};

export default page;
