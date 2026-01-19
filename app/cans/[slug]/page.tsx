'use client';

import { notFound, useParams } from 'next/navigation';
import { Flavor } from '@/types/global';
import Bounded from '@/components/Bounded';

const page = () => {
  const params = useParams();
  const flavorType = params?.slug as Flavor;

  if (!flavorType) return notFound();

  return (
    <Bounded>
      <h1 className="text-white">{flavorType}</h1>
    </Bounded>
  );
};

export default page;
