/**
 * Application route constants
 * Centralized route definitions to avoid hardcoded URLs
 */

export const ROUTES = {
  HOME: '/',
  SLOT_MACHINE: '/slot-machine',

  // Base routes
  BASE: '/base',
  BASE_NEW: '/base/new',

  // Hero routes
  HERO: '/hero/all',
  HERO_CARS: '/hero/cars',
  HERO_PARAMS: '/hero/params',

  // Combat routes
  COMBAT_CHAPTER: '/combat/chapter',
  COMBAT_MISSION: '/combat/mission',
  COMBAT_ROUND: '/combat/round',
  COMBAT_WIN: '/combat/win',
  COMBAT_LOSS: '/combat/loss',

  // Foe routes
  FOE_ATTACK: '/foe/attack',
  FOE_HEIST: '/foe/heist',

  // Shop routes
  SHOP_PROMO: '/shop/promo',
  SHOP_KIT: '/shop/kit',
  SHOP_SUPPLY: '/shop/supply',
  SHOP_NFT: '/shop/nft',

  // Quest routes
  QUEST_DAY: '/quest/day',
  QUEST_WEEK: '/quest/week',
  QUEST_SEASON: '/quest/season',
  QUEST_PLOT: '/quest/plot',
  QUEST_REWARDS: '/quest/rewards',

  // Profile and Reward routes
  PROFILE: '/profile',
  REWARD: '/reward',
  REWARD_COIN: '/reward/coin',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
