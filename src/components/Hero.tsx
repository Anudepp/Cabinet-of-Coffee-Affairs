export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
          backgroundBlend: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="/logo.png" 
            alt="Cabinet of Coffee Affairs Logo" 
            className="mx-auto w-40 h-40 mb-8 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            From Farm to Globe
          </h1>
          <p className="text-xl md:text-2xl text-[#D2B48C] mb-8">
            Premium Coffee Exports from the World's Finest Plantations
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#8B7355] text-white px-8 py-3 rounded-full hover:bg-[#6F4E37] transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}