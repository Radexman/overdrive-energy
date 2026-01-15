'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Environment, View } from '@react-three/drei';

import HeroScene from './HeroScene';
import TextSplitter from '../TextSplitter';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .set('.hero', { opacity: 1 })
      .from('.hero-header-word', {
        scale: 2,
        opacity: 0,
        ease: 'power4.in',
        delay: 0.3,
        stagger: 1,
      })
      .from('.last-word', {
        scale: 2,
        opacity: 0,
        ease: 'power4.in',
        delay: 0.3,
      })
      .from('.hero-tagline', { opacity: 0, y: 20, delay: 0.5 })
      .from('.hero-heading', { opacity: 0, y: 10 })
      .from('.hero-subheading', { opacity: 0, y: 10 });
  }, []);

  return (
    <div className="h-screen w-full">
      <View className="w-dhw h-dvh">
        <HeroScene />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>
      <div className="hero font-bebas-neue absolute inset-0 flex flex-col items-center justify-center text-white opacity-0">
        <header className="absolute top-18 flex flex-col items-center justify-center tracking-wider">
          <p className="text-brand hero-heading text-6xl">Overdrive</p>
          <p className="hero-subheading text-2xl">Energy Drink</p>
        </header>
        <h1 className="text-brand text-center text-[150px] font-bold tracking-wider">
          <TextSplitter
            text="Push Beyond"
            wordDisplayStyle="inline-block"
            className="hero-header-word"
          />
          <span className="last-word -mt-14 block">Limits</span>
        </h1>
        <p className="hero-tagline text-3xl">Engineered for focus and performance</p>
      </div>
    </div>
  );
};

export default Hero;
