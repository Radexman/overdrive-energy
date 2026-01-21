import { Flavor } from '@/types/global';

export type FlavorContent = {
  title: string;
  tagline: string;
  description: string;
  highlightTitle: string;
  highlightText: string;
  accentColor: string;
};

export const flavorsConfig: Record<Flavor, FlavorContent> = {
  'orange-burst': {
    title: 'Orange Burst',
    tagline: 'Explosive citrus energy',
    description:
      'A bold orange kick packed with caffeine and essential B-vitamins, crafted to deliver fast, clean energy. Orange Burst hits hard from the first sip, keeping your mind sharp and your body ready when performance matters most. Perfect for high-intensity moments when you need instant focus and drive.',
    highlightTitle: 'Fast-Acting Energy',
    highlightText:
      'Designed for quick activation and mental clarity. Orange Burst delivers a sharp energy spike without the heavy crash, helping you stay locked in and alert.',
    accentColor: '#f97316',
  },
  'berry-frost': {
    title: 'Berry Frost',
    tagline: 'Cold. Smooth. Refreshing.',
    description:
      'An icy berry blend with a smooth, refreshing finish that feels light yet powerful. Berry Frost provides steady, balanced energy, ideal for long sessions, late nights, or extended focus without overwhelming your system.',
    highlightTitle: 'Smooth Performance',
    highlightText:
      'A controlled energy profile built for endurance. Berry Frost keeps you focused and consistent, sip after sip.',
    accentColor: '#38bdf8',
  },
  'lemon-lime': {
    title: 'Lemon Lime',
    tagline: 'Sharp & refreshing',
    description:
      'A crisp lemon-lime fusion with a clean, sharp taste that refreshes instantly. Light on the palate but powerful in effect, Lemon Lime is dangerously drinkable while delivering reliable energy and mental clarity.',
    highlightTitle: 'Clean Focus',
    highlightText:
      'A refreshing energy boost designed to feel light, clean and precise — perfect for staying sharp without feeling heavy.',
    accentColor: '#a3e635',
  },
};

export const flavorStyles: Record<
  Flavor,
  {
    text: string;
    border: string;
    hoverBg: string;
    hoverText: string;
    gradientFrom: string;
    gradientTo: string;
  }
> = {
  'orange-burst': {
    text: 'text-orange-burst',
    border: 'border-orange-burst',
    hoverBg: 'hover:bg-orange-burst',
    hoverText: 'hover:text-black',
    gradientFrom: '#0b0d10',
    gradientTo: '#ae4512',
  },
  'berry-frost': {
    text: 'text-berry-frost',
    border: 'border-berry-frost',
    hoverBg: 'hover:bg-berry-frost',
    hoverText: 'hover:text-black',
    gradientFrom: '#0b0d10',
    gradientTo: '#052a4a',
  },
  'lemon-lime': {
    text: 'text-lemon-lime',
    border: 'border-lemon-lime',
    hoverBg: 'hover:bg-lemon-lime',
    hoverText: 'hover:text-black',
    gradientFrom: '#0b0d10',
    gradientTo: '#019707',
  },
};
