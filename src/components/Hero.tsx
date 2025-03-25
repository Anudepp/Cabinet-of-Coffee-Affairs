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
          <h1 className="hero-title">Cabinet of Coffee Affairs</h1>
          <p className="hero-tagline">From Farm to Globe</p> 
          <p className="hero-subtitle">
            Premium Coffee Exports from the World's Finest Plantations
          </p>
        </div>
      </div>
    </div>
  );
}