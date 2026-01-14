'use client';

import Can from '../Can';

const HeroScene = () => {
  return (
    <group>
      <group position-x={-4}>
        <Can textureName="lemon-lime" />
      </group>
      <group position-x={4}>
        <Can textureName="orange-burst" />
      </group>
    </group>
  );
};

export default HeroScene;
