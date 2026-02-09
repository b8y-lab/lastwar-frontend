'use client';

import RewardModal from '@/components/ui/RewardModal';
import { BeakerIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function AttackRewardModal() {
  return (
    <RewardModal
      buttonText="Attack"
      title="Successful Attack!"
      rewards={[
        { icon: BeakerIcon, amount: 50 },
        { icon: WrenchScrewdriverIcon, amount: 100 },
      ]}
      redirectUrl="/"
    />
  );
}
