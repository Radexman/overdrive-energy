'use client';

import { Html, useProgress } from '@react-three/drei';

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  if (!active) return null;

  return (
    <Html center prepend>
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="text-center">
          <p className="font-bebas-neue text-4xl tracking-widest text-white">
            {Math.floor(progress)}%
          </p>
          <p className="mt-2 text-sm tracking-wide text-white/60 uppercase">Loading assets</p>
        </div>
      </div>
    </Html>
  );
};

export default LoadingScreen;
