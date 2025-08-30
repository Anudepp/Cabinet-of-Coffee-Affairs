import { useState, useEffect } from "react";

const images = [
  "/HeroImage1.jpeg",
  "/HeroImage2.jpeg",
  "/HeroImage3.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0 flex">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay for luxury feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

 {/* Title & Tagline */}
{/* Title & Tagline */}
<div className="relative z-10 flex flex-col items-center text-center text-white mt-28">
  <h1 className="text-4xl md:text-5xl font-bold font-serif relative inline-block pb-1">
    Georges Coffee
    <span className="block h-[2px] w-3/5 mx-auto bg-[#d2b48c] mt-1"></span>
  </h1>
  <p className="opacity-0 animate-fadeInUp delay-300 text-[#d2b48c] text-3xl italic font-cursive">
    From Farm to Globe
  </p>
</div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}