export const GeneratorVideo = () => (
  <div className="absolute -bottom-[82px] -left-[21px] z-15">
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-[420px] h-auto pointer-events-none"
    >
      <source src="/assets/slot-machine/generator.webm" type="video/webm" />
    </video>
  </div>
);