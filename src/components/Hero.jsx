import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Settings, MousePointer2, Phone } from 'lucide-react';
import BookingModal from './BookingModal';

const slides = [
  {
    id: "01",
    tag: "Certified Engineering",
    title: "Revolutionizing",
    highlight: "Washing Care.",
    desc: "Precision motor calibration and drum restoration using genuine manufacturer components.",
    image: "/hero-washing.jpg",
    accent: "text-emerald-500",
    color: "emerald"
  },
  {
    id: "02",
    tag: "Cooling Specialists",
    title: "Mastering Pro",
    highlight: "Refrigerator Fix.",
    desc: "Advanced thermodynamic diagnostics and eco-friendly gas recharging for all premium brands.",
    image: "/hero-refri.jpg",
    accent: "text-amber-500",
    color: "amber"
  },
  {
    id: "03",
    tag: "Kitchen Masters",
    title: "High-Performance",
    highlight: "Oven Repair.",
    desc: "Safety-first technical troubleshooting for modern heating systems and digital controls.",
    image: "/hero-cook.jpg",
    accent: "text-emerald-500",
    color: "emerald"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-950">
      {/* 1. Full-Screen Background Visuals */}
      {slides.map((slide, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Cinematic Zoom Image */}
          <div className="absolute inset-0 scale-110 animate-ken-burns">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Immersive Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/40 to-transparent" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* 2. Content Layer */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <Sparkles size={12} className="text-emerald-400" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/70">{slides[current].tag}</span>
          </div>

          <div className="relative mb-8 overflow-hidden">
            {slides.map((slide, idx) => (
              <div 
                key={idx}
                className={`transition-all duration-1000 transform ${
                  idx === current ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 absolute inset-0'
                }`}
              >
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                  {slide.title} <br />
                  <span className={`${slide.accent} italic`}>{slide.highlight}</span>
                </h1>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-lg uppercase tracking-widest animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {slides[current].desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-gray-950 transition-all shadow-2xl shadow-emerald-600/20 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              Book Specialist <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Immersive Navigation (Side Dots) */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-8">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <div className={`h-[1px] transition-all duration-700 ${idx === current ? 'w-10 bg-emerald-500' : 'w-4 bg-white/20 group-hover:bg-white/50'}`} />
            <span className={`text-[9px] font-black transition-all duration-700 ${idx === current ? 'text-white opacity-100' : 'text-white/20 opacity-0 group-hover:opacity-100'}`}>
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>

      {/* 4. Bottom Global Dashboard */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-gray-950 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/5 pt-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-500 border border-white/5">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-[9px] font-black text-white uppercase tracking-widest mb-0.5">Warranty</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">90-Day Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 border border-white/5">
                <Zap size={18} />
              </div>
              <div>
                <div className="text-[9px] font-black text-white uppercase tracking-widest mb-0.5">Response</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Under 60 Mins</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-500 border border-white/5">
                <Settings size={18} />
              </div>
              <div>
                <div className="text-[9px] font-black text-white uppercase tracking-widest mb-0.5">Equipment</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Certified OEM</div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-end">
               <button 
                onClick={() => document.getElementById('repair-solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black text-white uppercase tracking-[0.25em] hover:bg-emerald-600 hover:border-emerald-500 transition-all group cursor-pointer shadow-xl"
               >
                 Explore Solutions <ArrowRight size={14} className="text-emerald-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Cinematic Motion */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite alternate;
        }
      `}} />

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Elite Technical Support" 
      />
    </section>
  );
};

export default Hero;





