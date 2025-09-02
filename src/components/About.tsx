import { Leaf, Coffee, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";
import React from "react";
import Footer from "./Footer";

// Define props interface for FeatureCard
interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

// Reusable FeatureCard Component with typed props
const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
}) => (
  <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="flex justify-center mb-4">
      <Icon className="h-12 w-12 text-[#2F5233]" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-[#2F2F2F]">{title}</h3>
    <p className="text-[#3a2f2f] text-base leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="relative pt-32 pb-20 scroll-mt-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/heroimage.png')" }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-[80rem] mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-serif text-center text-white mb-16 drop-shadow-lg">
            Our Story
          </h2>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              Icon={Leaf}
              title="Sustainable Sourcing"
              description="We partner directly with farmers to ensure ethical practices, fair trade relationships, and eco-friendly farming."
            />
            <FeatureCard
              Icon={Coffee}
              title="Exceptional Quality"
              description="From farm to your cup, the beans are handpicked, expertly harvested, and processed to the highest standards for a premium product each time."
            />
            <FeatureCard
              Icon={Globe}
              title="Global Expansion"
              description="Expanding our legacy to Australia, New Zealand, and the GCC region with a commitment to premium exports."
            />
          </div>

          {/* Journey Section with Image & Text */}
          <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-lg mt-16 overflow-hidden flex flex-col md:flex-row transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="md:w-1/2">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/9/452965436/DE/NM/HW/197384915/arabica-green-coffee-beans.jpg"
                alt="Coffee plantation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-[#2F2F2F]">
                Our Journey
              </h3>
              <div className="space-y-4 text-[#3a2f2f] leading-relaxed">
                <p>
                  Georges Imports and Exports Pvt Ltd, we proudly present Georges Coffee – Farm to Globe. Certified by the Coffee Board of India, we are trusted merchant exporters, we specialize in sourcing the finest Arabica and Robusta green coffee beans directly from the plantations of Karnataka and Kerala, regions known for their fertile soil and rich coffee heritage.
                </p>
                <p>
                  Our tagline, “Farm to Globe,” reflects this journey. We work closely with growers to source beans at their origin, preserve their natural character through careful processing and sterilization, and deliver them worldwide with efficient logistics and strict quality control. From the farm to the global market, we ensure authenticity at every step.
                </p>
                <p>
                  More than a product, coffee is our passion. From the hands of farmers to cups worldwide, Georges Coffee truly lives the promise of “Farm to Globe.”
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="p-8 bg-white/85 backdrop-blur-md rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-[#2F2F2F]">
                Our Heritage
              </h3>
              <p className="text-[#3a2f2f] leading-relaxed">
                Rooted in the rich traditions of Southern India, our plantations
                have cultivated the finest coffee beans for generations. Our
                passion for sustainable farming ensures the highest quality
                harvests.
              </p>
            </div>
            <div className="p-8 bg-white/85 backdrop-blur-md rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-[#2F2F2F]">
                Global Vision
              </h3>
              <p className="text-[#3a2f2f] leading-relaxed">
                As we expand to international markets, we uphold the same values
                of quality and dedication that define our brand. Our focus on
                sustainable and traceable sourcing guarantees excellence from
                farm to cup.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;