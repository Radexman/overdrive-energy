'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const scrollTl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: 'back.out(2)',
      },
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 2,
      },
    });

    scrollTl
      .from('.heading-one', {
        scale: 1.3,
        y: 40,
        duration: 1.5,
      })
      .from(
        '.heading-two',
        {
          scale: 1.5,
          y: 40,
          duration: 1.5,
        },
        '-=0.6'
      )
      .from(
        '.paragraph-body',
        {
          scale: 1.1,
          y: 40,
          duration: 1.4,
        },
        '-=0.6'
      );
  }, []);

  return (
    <div className="about text-text-primary grid min-h-screen place-items-center">
      <div className="absolute mb-14 min-w-7xl">
        <h2 className="heading-one font-bebas-neue text-5xl">Keep high</h2>
        <h2 className="heading-two font-bebas-neue text-brand text-9xl">performance</h2>
        <div className="paragraph-body">
          <p className="font-merriweather-sans">
            Powered by caffeine, taurine and B-vitamins for clean energy,
          </p>
          <p className="font-merriweather-sans">
            clear focus, and sharp performance when it matters most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
