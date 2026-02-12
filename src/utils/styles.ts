/**
 * Style utilities for consistent styling across components
 */

import { CSSProperties } from 'react';

/**
 * Creates background image style object
 * @param imageUrl - Path to the background image
 * @returns Style object with background properties
 */
export function createBackgroundStyle(imageUrl: string): CSSProperties {
  return {
    backgroundImage: `url("${imageUrl}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
}

/**
 * Common background image paths
 * Centralized to avoid hardcoded URLs throughout the codebase
 */
export const BG_IMAGES = {
  // Heroes
  HERO_CARD_BG: '/assets/heroes/hero-card-bg.svg',
  HERO_CARD_BG_EMPTY: '/assets/heroes/hero-card-bg-empty.svg',
  HERO_CARD_BAR: '/assets/heroes/hero-card-bar.svg',
  HERO_BUTTON: '/assets/heroes/button.svg',
  HERO_STAR: '/assets/heroes/star.svg',
  HERO_PARCHMENT_BG: '/assets/heroes/parchment-bg.svg',
  HERO_BG: '/assets/heroes/bg.svg',

  // Hero page specific
  HERO_NAMEBAR: '/assets/heroes/hero/namebar.svg',
  HERO_EQUIP_BG: '/assets/heroes/hero/equip-bg.svg',
  HERO_EQUIP_ITEM_BG: '/assets/heroes/hero/equip-item-bg.svg',
  HERO_CART_BTN: '/assets/heroes/hero/cart-btn.svg',
  HERO_UPRANK_BG: '/assets/heroes/hero/uprank-bg.svg',
  HERO_UPRANK_BTN: '/assets/heroes/hero/uprank-btn.svg',
  HERO_SKILL_BG: '/assets/heroes/hero/skill-bg.svg',
  HERO_PARAMS_BG: '/assets/heroes/hero/params-bg.svg',
  HERO_EXPAND_BTN: '/assets/heroes/hero/expand-btn.svg',
  HERO_PARAM_ITEM_BG: '/assets/heroes/hero/param-item-bg.svg',

  // Slot Machine
  SLOT_MACHINE: '/assets/slot-machine/slotmachine.svg',
  SLOT_SNOW_ON_ROOF: '/assets/slot-machine/snowonroof.svg',
  SLOT_BG: '/assets/slot-machine/bg.svg',
  SLOT_BUSHES: '/assets/slot-machine/bushes.svg',
  SLOT_REWARD_EFFECT: '/assets/slot/reward/reward-effect.png',
  SLOT_REWARD_CHEST: '/assets/slot/reward/chest.png',
  SLOT_REWARD_BUTTON: '/assets/slot/reward/rewardButton.png',
  SLOT_HEADER: '/assets/slot/header.png',
  SLOT_GENERATOR: '/assets/slot/generator.png',

  // Quests
  QUEST_BG: '/assets/quests/quest-bg.png',
  QUEST_LIST_BG: '/assets/quests/quest-list-bg.png',
  QUEST_EMPTY_BAR: '/assets/quests/emptybar.svg',
  QUEST_FILLED_BAR: '/assets/quests/filledbar.svg',
  QUEST_TOKEN: '/assets/quests/token.svg',
  QUEST_TAKE_GREEN_BTN: '/assets/quests/takegreenbtn.svg',
  QUEST_NAV_BTN: '/assets/quests/questsnavbtn.svg',
  QUEST_NAV_BTN_ACTIVE: '/assets/quests/questsnavbtnactive.svg',
  QUEST_WINDOW: '/assets/quests/window.svg',

  // Foe
  ATTACK_BG: '/assets/attack/attack-bg.png',
  HEIST_BG: '/assets/heist/heist-bg.png',

  // Settings
  SETTINGS_BG: '/assets/settings/settings-bg.svg',
  SETTINGS_GREEN_BTN: '/assets/settings/green-btn.svg',
  SETTINGS_GRAY_BTN: '/assets/settings/gray-btn.svg',

  // Diamonds
  DIAMONDS_INSUFF_BG: '/assets/diamonds/insuff-diamonds-bg.svg',
  DIAMONDS_USE_BG: '/assets/diamonds/use-diamonds-bg.svg',
  DIAMONDS_NEXT_BTN: '/assets/diamonds/next-btn.svg',
  DIAMONDS_GOLD_FRAME: '/assets/diamonds/gold-frame.svg',
  DIAMONDS_DIAMOND: '/assets/diamonds/diamond.svg',

  // Profile
  PROFILE_BG: '/assets/profile/profile-bg.svg',
  PROFILE_AVATAR: '/assets/profile/avatar.svg',
  PROFILE_RATING_FRAME: '/assets/profile/rating-frame.svg',
  PROFILE_NICKNAME_BG: '/assets/profile/nickname-bg.svg',
  PROFILE_RATING_PLATE: '/assets/profile/rating-plate.svg',
  PROFILE_CHANGE_NAME_BTN: '/assets/profile/change-nickname-btn.svg',
  PROFILE_CONNECT_WALLET_BTN: '/assets/profile/tg-wallet-btn.svg',
  PROFILE_REF_SYSTEM_BG: '/assets/profile/ref-system-bg.svg',
  PROFILE_INVITE_PLATE: '/assets/profile/invite-plate.svg',
  PROFILE_INVITE_BTN: '/assets/profile/invite-btn.svg',

  // Errors
  ERROR_BG: '/assets/errors/error-bg.svg',
} as const;

export type BgImage = (typeof BG_IMAGES)[keyof typeof BG_IMAGES];
