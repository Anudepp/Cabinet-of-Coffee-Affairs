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
  <div className="p-6 bg-white rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <Icon className="h-12 w-12 text-[#2F5233]" /> {/* Changed to forest green */}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-[#5A4A42] text-base leading-relaxed">{description}</p>
  </div>
);

// About Section Component
const About: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="pt-32 pb-20 bg-[#FDF5E6] scroll-mt-32"
      >
        <div className="max-w-[80rem] mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-serif text-center text-[#2F2F2F] mb-16">
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
          <div className="bg-white rounded-lg shadow-md mt-16 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/9/452965436/DE/NM/HW/197384915/arabica-green-coffee-beans.jpg"
                alt="Coffee plantation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
              <div className="space-y-4 text-[#5A4A42]">
                <p>
                  The journey began with our coffee plantations in Southern
                  India. For decades, we have supplied the local market with
                  premium beans, ensuring excellence and consistency.
                </p>
                <p>
                  Now, our prime focus is to expand globally, reaching coffee
                  enthusiasts in Australia, New Zealand, and the GCC region.
                </p>
                <p>
                  Our dedication to quality ensures that every coffee bean we
                  export is of exceptional standard, ready to satisfy global
                  markets.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Heritage</h3>
              <p className="text-[#5A4A42]">
                Rooted in the rich traditions of Southern India, our plantations
                have cultivated the finest coffee beans for generations. Our
                passion for sustainable farming ensures the highest quality
                harvests.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Global Vision</h3>
              <p className="text-[#5A4A42]">
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