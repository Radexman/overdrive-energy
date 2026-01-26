'use client';

const DesktopOnlyNotice = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl space-y-6 text-center">
        <h1 className="font-bebas-neue text-brand text-5xl tracking-wide">
          Desktop Experience Only
        </h1>
        <p className="text-base opacity-80">
          This website is a high-performance 3D product showcase built with WebGL, scroll-based
          animations and real-time rendering.
        </p>
        <p className="text-sm opacity-60">
          For the best experience, please visit on a desktop or laptop device.
        </p>
        <div className="pt-6">
          <span className="inline-block rounded-full border border-white/20 px-6 py-2 text-xs tracking-widest uppercase opacity-70">
            Best experienced on desktop
          </span>
        </div>
      </div>
    </section>
  );
};

export default DesktopOnlyNotice;
