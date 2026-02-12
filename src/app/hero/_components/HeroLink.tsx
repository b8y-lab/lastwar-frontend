import HeroCard from './HeroCard';

interface IHeroLink {
  id: string;
  url: string;
  mid?: string;
  heroImage?: string;
  rating?: number;
  level?: number;
  isEmpty?: boolean;
  slotNumber?: number;
}

export default function HeroLink(props: IHeroLink) {
  return <HeroCard {...props} variant="link" />;
}
