export const FortuneWheel = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute -bottom-22 right-0 w-[80px] h-auto pointer-events-none z-15"
  >
    <source src="/assets/slot-machine/fortunewheel.webm" type="video/webm" />
  </video>
);