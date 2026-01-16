import clsx from 'clsx';
import { Environment, View } from '@react-three/drei';

import Can from '../Can';

type Flavor = 'orange-burst' | 'berry-frost' | 'lemon-lime';
type Vec3 = [number, number, number];

type ProductProps = {
  title: string;
  subtext: string;
  textureName: Flavor;
  canPosition?: Vec3;
  isAlignedLeft?: boolean;
};

const Product = ({
  title,
  subtext,
  textureName,
  canPosition = [0, 0, 0],
  isAlignedLeft,
}: ProductProps) => {
  return (
    <section className="relative h-screen">
      <View className="pointer-events-none sticky top-0 z-50 hidden h-screen w-screen md:block">
        <group>
          <Can textureName={textureName} position={canPosition} />
        </group>
        <Environment preset="studio" />
        <ambientLight intensity={0.5} />
      </View>
      <div
        className={clsx(
          'text-text-primary absolute inset-0 grid place-items-center',
          isAlignedLeft && '-ml-70'
        )}
      >
        <div className="ml-70 flex h-[70vh] max-w-lg flex-col justify-center">
          <h3 className={`font-bebas-neue text-5xl text-${textureName}`}>{title}</h3>
          <p className="font-merriweather-sans text-xl">{subtext}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
