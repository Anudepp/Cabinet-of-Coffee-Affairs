import { Leaf, Coffee, Globe } from 'lucide-react';
import "./../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="heading">Our Story</h2>
        
        <div className="grid-container">
          <div className="info-card">
            <div className="icon-container">
              <Leaf className="icon" />
            </div>
            <h3 className="sub-heading">Sustainable Sourcing</h3>
            <p className="text">
              We partner directly with farmers to ensure ethical practices, fair trade relationships, and eco-friendly farming.
            </p>
          </div>

          <div className="info-card">
            <div className="icon-container">
              <Coffee className="icon" />
            </div>
            <h3 className="sub-heading">Exceptional Quality</h3>
            <p className="text">
              From farm to your cup, the beans are handpicked, expertly harvested, and processed to the highest standards for a premium product each time.
            </p>
          </div>

          <div className="info-card">
            <div className="icon-container">
              <Globe className="icon" />
            </div>
            <h3 className="sub-heading">Global Expansion</h3>
            <p className="text">
              Expanding our legacy to Australia, New Zealand, and the GCC region with a commitment to premium exports.
            </p>
          </div>
        </div>

        <div className="story-container">
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Coffee plantation" />
          </div>
          <div className="story-text">
            <h3 className="sub-heading">Our Journey</h3>
            <p className="text">
              The journey began with our coffee plantations in Southern India. For decades, we have supplied the local market with premium beans, ensuring excellence and consistency.
            </p>
            <p className="text">
              Now, our prime focus is to expand globally, reaching coffee enthusiasts in Australia, New Zealand, and the GCC region.
            </p>
            <p className="text">
              Our dedication to quality ensures that every coffee bean we export is of exceptional standard, ready to satisfy global markets.
            </p>
          </div>
        </div>

        <div className="heritage-container">
          <div className="heritage-card">
            <h3 className="sub-heading">Our Heritage</h3>
            <p className="text">
              Rooted in the rich traditions of Southern India, our plantations have cultivated the finest coffee beans for generations. Our passion for sustainable farming ensures the highest quality harvests.
            </p>
          </div>
          <div className="heritage-card">
            <h3 className="sub-heading">Global Vision</h3>
            <p className="text">
              As we expand to international markets, we uphold the same values of quality and dedication that define our brand. Our focus on sustainable and traceable sourcing guarantees excellence from farm to cup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}