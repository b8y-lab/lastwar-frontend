export const GeneratorVideo = () => (
  <div className="absolute -bottom-[98px] -left-[25px] z-15">
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-[500px] h-auto pointer-events-none"
    >
      <source src="/assets/slot-machine/generator.webm" type="video/webm" />
    </video>
  </div>
);