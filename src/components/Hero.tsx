import { useState, useEffect } from "react";
import Footer from "./Footer";

const images = ["/HeroImage1.jpeg", "/HeroImage2.jpeg", "/HeroImage3.jpeg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        id="home"
        className="relative w-full h-screen bg-black pt-24 overflow-hidden"
      >
        {/* Carousel Images */}
        <div className="relative h-full w-full flex items-center justify-center">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Overlay for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 pointer-events-none" />

        {/* Tagline - Top Left (pushed more right) */}
        <div className="absolute top-28 left-28 md:left-36 z-20">
          <p
            className="text-3xl md:text-4xl font-cursive italic bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #b08d57, #c5a880)",
            }}
          >
            From Farm to Globe
          </p>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
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

      {/* WHAT WE DO SECTION */}
      <section
        id="what-we-do"
        className="relative w-full bg-gradient-to-b from-[#4b2e2e] to-[#f7e9d7] py-20 px-6 md:px-20"
      >
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4b2e2e]/80 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
          {/* Intro Text */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              What We Do
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We specialize in the export of premium-grade green coffee beans
              sourced from the finest plantations in the southern states of
              India—regions renowned for their fertile soil, ideal climate, and
              unique flavor profiles. Our expertise combines sustainable
              sourcing, strict quality checks, and global logistics to ensure
              our partners receive authentic coffee from India, crafted for
              world markets.
            </p>
          </div>

          {/* Card Layout */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid gap-8 md:grid-cols-2 text-left">
              <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#6b4226] mb-2">
                  Green Coffee Bean Exports
                </h3>
                <p className="text-gray-600">
                  Supplying Arabica and Robusta varieties to meet the growing
                  global demand for high-quality beans.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#6b4226] mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  All products are sterilized and processed to control
                  micro-contamination, ensuring safety and consistency.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#6b4226] mb-2">
                  Efficient Logistics
                </h3>
                <p className="text-gray-600">
                  From careful packaging to on-time delivery, we ensure a smooth
                  export process tailored to international clients.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#6b4226] mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Serving roasters, distributors, and importers across Europe,
                  North America, the Middle East, and beyond.
                </p>
              </div>
            </div>

            {/* Closing Note */}
            <p className="mt-10 text-lg italic text-gray-700">
              For us, coffee export is not just a business—it’s a passion. We
              take pride in being part of every cup brewed with our beans,
              ensuring that our partners receive nothing less than the authentic
              taste of India’s coffee heritage.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}