import { Leaf, Coffee, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FDF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-[#4A3728] mb-16">Our Story</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Leaf className="h-12 w-12 text-[#8B7355]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Sustainable Sourcing</h3>
            <p className="text-gray-600">
              We partner directly with farmers to ensure ethical practices, fair trade relationships, and eco-friendly farming.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Coffee className="h-12 w-12 text-[#8B7355]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Exceptional Quality</h3>
            <p className="text-gray-600">
            From farm to your cup, the beans
are handpicked, expertly
harvested, and processed to the
highest standards for a premium
product each time.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Globe className="h-12 w-12 text-[#8B7355]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Global Expansion</h3>
            <p className="text-gray-600">
              Expanding our legacy to Australia, New Zealand, and the GCC region with a commitment to premium exports.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Coffee plantation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-serif text-[#4A3728] mb-4">Our Journey</h3>
              <p className="text-gray-600 mb-6">
                The journey began with our coffee plantations in Southern India. For decades, we have supplied the local market with premium beans, ensuring excellence and consistency.
              </p>
              <p className="text-gray-600 mb-6">
                Now, our prime focus is to expand globally, reaching coffee enthusiasts in Australia, New Zealand, and the GCC region.
              </p>
              <p className="text-gray-600">
              Our dedication to quality ensures
that every coffee bean we export
is of exceptional standard, ready
to satisfy global markets.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-serif text-[#4A3728] mb-4">Our Heritage</h3>
            <p className="text-gray-600">
              Rooted in the rich traditions of Southern India, our plantations have cultivated the finest coffee beans for generations. Our passion for sustainable farming ensures the highest quality harvests.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-serif text-[#4A3728] mb-4">Global Vision</h3>
            <p className="text-gray-600">
              As we expand to international markets, we uphold the same values of quality and dedication that define our brand. Our focus on sustainable and traceable sourcing guarantees excellence from farm to cup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
