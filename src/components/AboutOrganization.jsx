import { ShieldCheck, Award, Zap, ArrowRight, Sparkles, BadgeDollarSign, CalendarDays, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutOrganization = () => {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden" id="about-hub">
      {/* 1. Mastery Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-emerald-50/40 rounded-full blur-[120px] -mr-48 -z-10" />
      <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-amber-50/30 rounded-full blur-[100px] -ml-48 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          
          {/* Content Panel (Left) */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase mb-10 shadow-sm">
              <Sparkles size={14} /> The Expertise Edge
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tighter uppercase mb-10 leading-[0.95]">
              Providing Professional <span className="text-emerald-500 italic">Appliance Solutions.</span>
            </h2>

            <div className="space-y-8 mb-16">
              <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed uppercase tracking-wide">
                At <span className="text-gray-950 font-black italic uppercase">APPLIANCEMANIA</span>, we are redefining the standard of home service through expert precision and absolute transparency.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                <div className="group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-[11px] font-black text-gray-950 uppercase tracking-[0.2em] mb-3">Trained Techs</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Master experts certified for high-end appliance maintenance.</p>
                </div>

                <div className="group">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                    <BadgeDollarSign size={24} />
                  </div>
                  <h4 className="text-[11px] font-black text-gray-950 uppercase tracking-[0.2em] mb-3">Upfront Pricing</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Full diagnostic assessment and cost estimates before any work begins.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-10 border-t border-gray-50">
              <Link to="/contact" className="w-full sm:w-auto px-12 py-6 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group/btn">
                Request a Consultation <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Stage (Right) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Primary Image with High-End Border */}
              <div className="relative z-10 rounded-[60px] md:rounded-[100px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)] border-[12px] border-white aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img loading="lazy" src="/Kitchen.jpg" alt="Professional Workshop" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/20 via-transparent to-transparent" />
              </div>

              {/* Decorative Background Frame */}
              <div className="absolute -bottom-12 -left-12 w-64 h-64 border-2 border-amber-500/20 rounded-[60px] -z-10 transform -rotate-6" />
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOrganization;
