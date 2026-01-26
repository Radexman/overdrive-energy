'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Environment, View } from '@react-three/drei';

import HeroScene from './HeroScene';
import Bounded from '../Bounded';
import About from './About';
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
    <Bounded className="hero opacity-0">
      <View className="pointer-events-none sticky top-0 z-50 hidden h-screen w-screen md:block">
        <HeroScene />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>
      <div className="font-bebas-neue text-text-primary absolute inset-0 flex flex-col items-center justify-center">
        <header className="absolute top-10 flex flex-col items-center justify-center tracking-wider">
          <p className="text-brand hero-heading text-6xl">Overdrive</p>
          <p className="hero-subheading text-2xl">Energy Drink</p>
        </header>
        <h1 className="text-brand text-center text-[130px] tracking-wider">
          <TextSplitter
            text="Push Beyond"
            wordDisplayStyle="inline-block"
            className="hero-header-word"
          />
          <span className="last-word block">Limits</span>
        </h1>
        <p className="hero-tagline text-3xl">Engineered for focus and performance</p>
      </div>
      <About />
    </Bounded>
  );
};

export default Hero;
