'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { View, Environment } from '@react-three/drei';

import Bounded from '../Bounded';
import FooterScene from './FooterScene';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    const scrollTl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: 'back.out(2)',
        scale: 1.3,
      },
      scrollTrigger: {
        trigger: '.footer',
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    });

    scrollTl
      .from('.title', {
        y: 20,
      })
      .from('.subtext', {
        y: 10,
      });
  }, []);

  return (
    <Bounded className="footer">
      <View className="pointer-events-none sticky z-50 hidden h-screen w-screen md:block">
        <FooterScene />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>
      <div className="absolute flex h-screen flex-col justify-between">
        <footer className="font-bebas-neue mt-4 flex flex-col items-center justify-center text-white">
          <h3 className="title text-brand text-center text-8xl tracking-wider">Overdrive Energy</h3>
          <p className="subtext text-2xl">Push beyond limits</p>
        </footer>
        <div className="w-full pb-10 text-center text-white">
          <div className="bg-brand h-px w-screen" />
          <p className="mt-10">
            Concept energy drink brand <br /> Designed, modeled and developed by
            <a
              href="https://radoslaw-siek-portfolio-v3.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand ml-1 transition-opacity hover:opacity-80"
            >
              Radosław Siek
            </a>
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default Footer;
