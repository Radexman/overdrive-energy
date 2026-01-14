'use client';

import { Environment, View } from '@react-three/drei';
import HeroScene from './HeroScene';

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <View className="w-dhw h-dvh">
        <HeroScene />
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>
      <div className="font-bebas-neue absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 id="hero-heading" className="mb-6 text-9xl font-bold tracking-wider">
          OVERDRIVE
        </h1>
        <h2 id="hero-subheading" className="text-5xl font-semibold tracking-wide">
          ENERGY DRINK
        </h2>
        <p id="hero-tagline" className="text-3xl font-medium text-yellow-400">
          Push Beyond Limits
        </p>
      </div>
    </div>
  );
};

export default Hero;
