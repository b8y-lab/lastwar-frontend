import PromoModal from '@/app/shop/_components/PromoModal.tsx';
import BoostModal from '@/app/shop/_components/BoostModal.tsx';

export default function PromoSideNav() {
  return (
    <div className="flex flex-col gap-5 z-3">
      <PromoModal />
      <PromoModal />
      <BoostModal />
    </div>
  );
}
