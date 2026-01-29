import BuySpinModal from '@/app/shop/_components/BuySpinModal.tsx';

interface SpinButtonProps {
  spins: number;
  rolling: boolean;
  onSpin: () => void;
}

export const SpinButton = ({ spins, rolling, onSpin }: SpinButtonProps) => {
  if (spins > 0) {
    return (
      <button
        onClick={onSpin}
        disabled={rolling}
        className="spin-button button w-[189px] h-[118px] absolute -bottom-29 z-20"
      ></button>
    );
  }

  return (
    <div className="flex flew-row justify-around items-center w-full h-15 mt-2 z-20">
      <button className="button p-3 w-1/2 h-15">
        Buy 50 Spins <br />
        for 25 Diam.
      </button>
      <BuySpinModal />
    </div>
  );
};
