import "./../styles/hero.css";

export default function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-container">
          <img 
            src="/logo.png" 
            alt="Cabinet of Coffee Affairs Logo" 
            className="hero-logo"
          />
          <h1 className="hero-title">From Farm to Globe</h1>
          <p className="hero-subtitle">
            Premium Coffee Exports from the World's Finest Plantations
          </p>
          <a href="#contact" className="hero-button">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}