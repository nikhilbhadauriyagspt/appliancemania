import { ShieldCheck, Clock, Award, ArrowLeft, Sparkles, CheckCircle2, AlertCircle, Wrench, Zap, ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookingModal from './BookingModal';

const ServiceLayout = ({ title, desc, longDesc, icon, image, extraContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left: Sticky Visual Panel */}
        <div className="lg:w-5/12 h-[50vh] lg:h-screen lg:sticky lg:top-0 relative overflow-hidden bg-gray-950">
          <div className="absolute inset-0">
            <img loading="eager" src={image} alt={title} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
          </div>
          
          <div className="absolute top-0 left-0 w-full p-8 pt-32 lg:pt-24 z-30">
            <Link to="/" className="inline-flex items-center gap-3 px-6 py-3.5 bg-gray-950/40 backdrop-blur-2xl rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-white hover:bg-emerald-600 transition-all border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group/back">
              <ArrowLeft size={14} className="group-hover/back:-translate-x-1 transition-transform text-emerald-400" /> Back to Catalog
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-10 lg:p-16 z-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white mb-8 shadow-2xl shadow-emerald-600/20">
              {icon}
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              {title} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Expertise.</span>
            </h1>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest border-l-2 border-emerald-500 pl-6 max-w-sm">
              {desc}
            </p>
          </div>
        </div>

        {/* Right: Scrollable Content */}
        <div className="lg:w-7/12 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none lg:block hidden" />
          
          <div className="px-6 py-16 lg:p-24 max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed mb-12 uppercase tracking-tight">
                {longDesc}
              </p>
              
              <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 mb-16">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                  <Settings size={14} /> Diagnostic Scope
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-emerald-500"><Zap size={18} /></div>
                    <div>
                      <h4 className="text-sm font-black text-gray-950 uppercase tracking-tight mb-1">Electrical</h4>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Circuit & PCB Analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-amber-500"><Wrench size={18} /></div>
                    <div>
                      <h4 className="text-sm font-black text-gray-950 uppercase tracking-tight mb-1">Mechanical</h4>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Motor & Drive Systems</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-content">
                {extraContent}
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <AlertCircle size={22} />
                </div>
                <h3 className="text-lg font-black text-gray-950 uppercase tracking-tight mb-4">Common Issues</h3>
                <ul className="space-y-3">
                  {["Performance Drops", "Unusual Noises", "Power Failures", "Leaking Components"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-[32px] bg-gray-950 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 blur-[60px]" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-4">The Workflow</h3>
                  <ul className="space-y-3">
                    {["Deep Diagnostics", "OEM Parts Replace", "Safety Testing", "Cleaning"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                        <ArrowRight size={12} className="text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="sticky bottom-10 z-30 px-4 md:px-0">
              <div className="max-w-xl mx-auto bg-gray-950 rounded-[32px] p-3 shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-white/10 flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center justify-between px-8 py-4 bg-white/5 rounded-[24px] border border-white/5">
                  <div>
                    <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Rapid Sync</div>
                    <div className="text-sm font-black text-white uppercase tracking-tight">Under 60 Mins</div>
                  </div>
                  <Clock size={20} className="text-amber-500" />
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex-[1.5] py-5 px-10 bg-emerald-600 hover:bg-white hover:text-gray-950 text-white rounded-[24px] font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-xl shadow-emerald-600/20 active:scale-95 flex items-center justify-center gap-4 cursor-pointer"
                >
                  Book appliance care <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={title} 
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 900;
          color: inherit;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
          text-transform: uppercase;
        }
        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 900;
          color: inherit;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
          color: #6b7280;
          line-height: 1.8;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
          font-weight: 600;
        }
        .blog-content ul {
          margin-bottom: 2rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
          color: #9ca3af;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
      `}} />
    </div>
  );
};

export default ServiceLayout;
