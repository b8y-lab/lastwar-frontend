export const GAME_WEIGHTS = {
  resource: 55,
  game: 45,
} as const;

export const REEL_SYMBOLS = ['🪙', '⚡️', '🎁', '💎', '⚔️', '🛡', '🔑', '🎫'] as const;

export type ReelSymbol = (typeof REEL_SYMBOLS)[number];

export const SYMBOL_IMAGE_MAP: Record<ReelSymbol, string> = {
  '🪙': '/assets/slot/icons/coin.png',
  '🎁': '/assets/slot/icons/gift.png',
  '⚔️': '/assets/slot/icons/attack.png',
  '💎': '/assets/slot/icons/diamond.png',
  '🛡': '/assets/slot/icons/defense.png',
  '🔑': '/assets/slot/icons/key.png',
  '🎫': '/assets/slot/icons/ticket.png',
  '⚡️': '/assets/slot/icons/energy.png',
};

const GAME_SYMBOLS = [
  { char: 'no', weight: 50 },
  { char: '⚔️', weight: 10 },
  { char: '🛡', weight: 20 },
  { char: '🔑', weight: 15 },
  { char: '🎫', weight: 5 },
] as const;

const RESOURCE_SYMBOLS = [
  { char: 'no', weight: 62 },
  { char: '🪙', weight: 28 },
  { char: '⚡️', weight: 5 },
  { char: '🎁', weight: 4 },
  { char: '💎', weight: 1 },
] as const;

export type RewardResult = {
  type: 'reward';
  rewardType: 'coin' | 'box' | 'energy' | 'diamond' | 'ticket' | 'defense';
};

export type SpinResult =
  | RewardResult
  | { type: 'fight' }
  | { type: 'heist' }
  | { type: 'none' };

function getWeightedRandom(
  symbols: ReadonlyArray<{ char: string; weight: number }>
): string {
  let random = Math.random() * 100;

  for (const s of symbols) {
    if (random < s.weight) return s.char;
    random -= s.weight;
  }

  return symbols[0].char;
}

function getWeightedTriple(
  symbols: ReadonlyArray<{ char: string; weight: number }>
): ReelSymbol[] {
  const s = getWeightedRandom(symbols);
  return s === 'no' ? getReelsRandomArray() : [s as ReelSymbol, s as ReelSymbol, s as ReelSymbol];
}

export function getGameArray(): ReelSymbol[] {
  const isGameWin = Math.random() * 100 < GAME_WEIGHTS.game;
  return isGameWin
    ? getWeightedTriple(GAME_SYMBOLS)
    : getWeightedTriple(RESOURCE_SYMBOLS);
}

export function getReelsRandomArray(): ReelSymbol[] {
  return [
    getReelRandomSymbol(),
    getReelRandomSymbol(),
    getReelRandomSymbol(),
  ];
}

export function getReelRandomSymbol(): ReelSymbol {
  const index = Math.floor(Math.random() * REEL_SYMBOLS.length);
  return REEL_SYMBOLS[index];
}

export function getResultBySymbols(results: string[]): SpinResult {
  const isTriple = results[0] === results[1] && results[1] === results[2];

  if (isTriple) {
    switch (results[0]) {
      case '🪙':
        return { type: 'reward', rewardType: 'coin' };
      case '⚡️':
        return { type: 'reward', rewardType: 'energy' };
      case '🎁':
        return { type: 'reward', rewardType: 'box' };
      case '💎':
        return { type: 'reward', rewardType: 'diamond' };
      case '🎫':
        return { type: 'reward', rewardType: 'ticket' };
      case '🛡':
        return { type: 'reward', rewardType: 'defense' };
      case '⚔️':
        return { type: 'fight' };
      case '🔑':
        return { type: 'heist' };
    }
  }

  return { type: 'reward', rewardType: 'coin' };
}
