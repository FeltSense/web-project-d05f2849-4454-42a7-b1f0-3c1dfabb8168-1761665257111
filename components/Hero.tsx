export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" 
      alt="Fitness studio background" 
      className="w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80"></div>
  </div>

  {/* Centered Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    {/* Main Headline */}
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
      Transform Your Fitness Journey at PulseFlow Studio
    </h1>
    
    {/* Subheadline */}
    <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
      Expert-led classes designed for every fitness level. Join a community committed to your health and wellness goals.
    </p>

    {/* Key Value Props */}
    <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <div className="text-3xl font-bold text-white mb-2">50+</div>
        <div className="text-slate-200 text-sm">Weekly classes across all fitness levels</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <div className="text-3xl font-bold text-white mb-2">10+ Years</div>
        <div className="text-slate-200 text-sm">Average trainer experience and certification</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <div className="text-3xl font-bold text-white mb-2">Flexible</div>
        <div className="text-slate-200 text-sm">Membership plans with no long-term contracts</div>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg w-full sm:w-auto">
        Start Free Trial
      </button>
      <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg w-full sm:w-auto">
        View Class Schedule
      </button>
    </div>

    {/* Trust Indicator */}
    <p className="text-slate-300 text-sm mt-8">
      Join 2,000+ members already training with us • No credit card required
    </p>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
    <div className="flex flex-col items-center gap-2 text-slate-300">
      <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
      <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</section>
  );
}