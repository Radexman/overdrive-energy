'use client';

import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

import LoadingScreen from './LoadingScreen';

const ViewCanvas = () => {
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setEventSource(document.body);
  }, []);

  return (
    <Canvas
      style={{ position: 'fixed', inset: 0 }}
      camera={{ position: [0, 0, 12], fov: 35 }}
      eventSource={eventSource ?? undefined}
      eventPrefix="client"
    >
      <Suspense fallback={<LoadingScreen />}>
        <View.Port />
      </Suspense>
    </Canvas>
  );
};

export default ViewCanvas;
