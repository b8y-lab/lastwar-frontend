export const gameWeights = {
  resource: 55, // probability for resource slots
  game: 45, // probability for mini-game slots
};

export const reelSymbols = ['🪙', '⚡️', '🎁', '💎', '⚔️', '🛡', '🔑', '🎫'];

export const gameSymbols = [
  { char: 'no', weight: 50 },
  { char: '⚔️', weight: 10 },
  { char: '🛡', weight: 20 },
  { char: '🔑', weight: 15 },
  { char: '🎫', weight: 5 },
];

export const resourceSymbols = [
  { char: 'no', weight: 62 },
  { char: '🪙', weight: 28 },
  { char: '⚡️', weight: 5 },
  { char: '🎁', weight: 4 },
  { char: '💎', weight: 1 },
];

export type RewardResult = {
  type: 'reward';
  rewardType: 'coin' | 'box' | 'energy' | 'diamond' | 'ticket' | 'defense';
};

export type SpinResult =
  | RewardResult
  | {
      type: 'reward';
      rewardType: 'coin' | 'box' | 'energy' | 'diamond' | 'ticket' | 'defense';
    }
  | { type: 'fight' }
  | { type: 'heist' }
  | { type: 'none' };

export function getGameArray(): string[] {
  // const totalWeight = gameWeights.resource + gameWeights.game;
  // const gameWin = Math.random() * totalWeight < gameWeights.game;
  const gameWin = Math.random() * 100 < gameWeights.game;

  return gameWin ? getWeightedGameArray() : getWeightedResourceArray();
}

export function getReelsRandomArray(): string[] {
  return [
    getReelRandomSymbol() as string,
    getReelRandomSymbol() as string,
    getReelRandomSymbol() as string,
  ];
}

export function getWeightedGameArray(): string[] {
  const s = getWeightedRandomGameSymbol() as string;
  return s === 'no' ? getReelsRandomArray() : [s, s, s];
}

export function getWeightedResourceArray(): string[] {
  const s = getWeightedRandomResourceSymbol() as string;
  return s === 'no' ? getReelsRandomArray() : [s, s, s];
}

export function getReelRandomSymbol(): string {
  let random = Math.floor(Math.random() * reelSymbols.length);
  return reelSymbols[random];
}

export function getWeightedRandomGameSymbol() {
  // const totalWeight = gameSymbols.reduce((sum, s) => sum + s.weight, 0);
  // let random = Math.random() * totalWeight;
  let random = Math.random() * 100;

  for (const s of gameSymbols) {
    if (random < s.weight) return s.char;
    random -= s.weight;
  }
}

export function getWeightedRandomResourceSymbol() {
  // const totalWeight = resourceSymbols.reduce((sum, s) => sum + s.weight, 0);
  // let random = Math.random() * totalWeight;
  let random = Math.random() * 100;

  for (const s of resourceSymbols) {
    if (random < s.weight) return s.char;
    random -= s.weight;
  }
}

export function getResultBySymbols(results: string[]): SpinResult {
  const isTriple = results[0] === results[1] && results[1] === results[2];

  if (isTriple) {
    switch (results[0]) {
      // NOTE: Reward coin-jackpot
      case '🪙':
        return { type: 'reward', rewardType: 'coin' };
      // NOTE: Reward energy
      case '⚡️':
        return { type: 'reward', rewardType: 'energy' };
      // NOTE: Reward box
      case '🎁':
        return { type: 'reward', rewardType: 'box' };
      // NOTE: Reward diamond
      case '💎':
        return { type: 'reward', rewardType: 'diamond' };
      // NOTE: Reward ticket
      case '🎫':
        return { type: 'reward', rewardType: 'ticket' };
      // NOTE: Reward defense
      case '🛡':
        return { type: 'reward', rewardType: 'defense' };
      // NOTE: Fight
      case '⚔️':
        return { type: 'fight' };
      // NOTE: Heist
      case '🔑':
        return { type: 'heist' };
    }
  }

  // Small win
  return { type: 'reward', rewardType: 'coin' };
}
