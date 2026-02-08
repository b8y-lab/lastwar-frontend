export interface Hero {
  id: string;
  name?: string;
  rating: number;
  level: number;
  heroImage: string;
}

export const HEROES_DATA: Record<string, Hero> = {
  '1': {
    id: '1',
    name: 'Пёс',
    rating: 5,
    level: 25,
    heroImage: '/assets/heroes/dog.svg',
  },
  '2': {
    id: '2',
    name: 'Кот',
    rating: 4,
    level: 20,
    heroImage: '/assets/heroes/cat.svg',
  },
  '3': {
    id: '3',
    name: 'Утка',
    rating: 3,
    level: 15,
    heroImage: '/assets/heroes/duck.svg',
  },
};

export function getHeroById(id: string): Hero | undefined {
  return HEROES_DATA[id];
}
