export const FortuneWheel = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute -bottom-18 right-0 w-[67px] h-auto pointer-events-none z-15"
  >
    <source src="/assets/slot-machine/fortunewheel.webm" type="video/webm" />
  </video>
);
