'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

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
      <View.Port />
    </Canvas>
  );
};

export default ViewCanvas;
