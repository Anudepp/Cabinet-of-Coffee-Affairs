export default function Hero() {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image with Overlay - NOW USING LOCAL IMAGE */}
      <div className="absolute inset-0 bg-[url('/heroimage.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero Content (UNCHANGED) */}
      <div className="relative max-w-4xl mx-auto px-4 text-white">
        {/* Logo */}
        <img 
          src="/logo.png" 
          alt="Cabinet of Coffee Affairs Logo" 
          className="block mx-auto w-40 h-40 rounded-full border-4 border-white shadow-lg"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold font-serif relative inline-block pb-1">
          Cabinet of Coffee Affairs
          <span className="block h-[2px] w-3/5 mx-auto bg-[#d2b48c] mt-1"></span>
        </h1>

        {/* Tagline (Animated Fade & Slide-up) */}
        <p className="opacity-0 animate-fadeInUp delay-300 text-[#d2b48c] text-3xl italic font-cursive">
          From Farm to Globe
        </p>

        {/* Subtitle (Animated Fade & Slide-up) */}
        <p className="text-[#d2b48c] text-lg md:text-xl mt-1 opacity-0 animate-fadeInUp delay-500">
          Premium Coffee Exports from the World's Finest Plantations
        </p>
      </div>
    </div>
  );
}