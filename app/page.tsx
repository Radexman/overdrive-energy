'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero/Hero';
import Products from '@/components/Products/Products';
import Footer from '@/components/Footer/Footer';
import DesktopOnlyNotice from '@/components/DesktopOnlyNotice';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width:768px)', false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      {isDesktop ? (
        <>
          <Hero />
          <Products />
          <Footer />
        </>
      ) : (
        <DesktopOnlyNotice />
      )}
    </>
  );
}
