export const SmokeAnimation = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute -top-14 left-15 w-[50px] h-auto pointer-events-none z-0"
  >
    <source src="/assets/slot/anims/smoke.webm" type="video/webm" />
  </video>
);
