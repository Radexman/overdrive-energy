'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Environment, View } from '@react-three/drei';

import HeroScene from './HeroScene';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .set('.hero', { opacity: 1 })
      .from('.hero-heading', { scale: 2, opacity: 0, ease: 'power4.in', delay: 0.3 })
      .from('.hero-subheading', { opacity: 0, y: 20 }, '+=0.3')
      .from('.hero-tagline', { opacity: 0, y: 20 });
  }, []);

  return (
    <div className="h-screen w-full">
      <View className="w-dhw h-dvh">
        <HeroScene />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>
      <div className="hero font-bebas-neue absolute inset-0 flex flex-col items-center justify-center text-white opacity-0">
        <h1 className="hero-heading mb-6 text-9xl font-bold tracking-wider">OVERDRIVE</h1>
        <h2 className="hero-subheading text-5xl font-semibold tracking-wide">ENERGY DRINK</h2>
        <p className="hero-tagline text-3xl font-medium text-yellow-400">Push Beyond Limits</p>
      </div>
    </div>
  );
};

export default Hero;
