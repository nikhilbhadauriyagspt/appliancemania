import { ShieldCheck, Clock, Award, Users, CheckCircle2, ArrowRight, ChevronDown, Search, Sparkles, Zap, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-emerald-500 selection:text-white">
      
      {/* 1. Avant-Garde Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gray-50 rounded-bl-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900">Since 2026</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-gray-950 leading-[0.9] tracking-tighter mb-8">
                Restoring <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Harmony</span> To <br />
                Your Home.
              </h1>
              
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl mb-10 border-l-4 border-amber-500 pl-6">
                Founded in 2026, APPLIANCEMANIA has redefined appliance care. We believe in quality, transparency, and the long-term reliability of your home equipment.
              </p>

              <div className="flex items-center gap-6">
                <Link to="/contact" className="group px-8 py-4 bg-gray-950 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl active:scale-95 flex items-center gap-3">
                  Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl group">
                <img loading="lazy" src="/about-main.jpg" alt="Team" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-3xl font-black mb-1">9+ Years</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-80">Of Mastery</div>
                    </div>
                    <Award size={32} className="text-amber-400" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Dark Mode Values Section */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        {/* Giant Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-900 select-none pointer-events-none">
          VALUES
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">The Pillars of <br /> <span className="text-emerald-500">Excellence.</span></h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-medium leading-relaxed uppercase tracking-wide text-right">
              Our commitment is reflected in every repair we perform and every client we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DarkValueCard 
              icon={<ShieldCheck size={32} />}
              title="Guaranteed Quality"
              desc="We use only 100% genuine parts sourced directly from manufacturers."
              accent="emerald"
            />
            <DarkValueCard 
              icon={<Clock size={32} />}
              title="Timely Response"
              desc="Technicians aim to reach your doorstep within 60 minutes of booking."
              accent="amber"
            />
            <DarkValueCard 
              icon={<Zap size={32} />}
              title="Expert Knowledge"
              desc="Continuous training to stay updated with smart home technologies."
              accent="emerald"
            />
          </div>
        </div>
      </section>

      {/* 3. Commitment "Strip" Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[60px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            
            <div className="w-full lg:w-1/2 relative z-10">
              <span className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Our Promise</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-950 mb-8 tracking-tight">Commitment to <br /> Technical Excellence.</h2>
              
              <div className="space-y-6">
                {[
                  'Direct access to original OEM parts', 
                  'Transparent upfront pricing model', 
                  '90-Day comprehensive service warranty', 
                  'Fully background-checked technicians'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-sm font-bold text-gray-700 uppercase tracking-wide pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-[400px]">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 transform rotate-3 scale-95">
                <div className="space-y-4 -mt-8">
                  <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-64">
                    <img src="/about-child1.jpg" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-64">
                    <img src="/about-main.jpg" className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-64">
                    <img src="/about-child2.jpg" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-64">
                    <img src="/hero-washing.jpg" className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Vertical Timeline Process */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">The Workflow</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter">Our Repair Journey.</h2>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />

            <TimelineItem 
              step="01"
              title="Initial Diagnostics"
              desc="Our technicians use precision tools to identify the root cause of the issue, ensuring we don't just fix symptoms but solve the real problem."
              side="left"
            />
            <TimelineItem 
              step="02"
              title="Genuine Parts Sourcing"
              desc="We exclusively use original manufacturer parts. This stage ensures that every component replaced meets the exact specifications of your appliance."
              side="right"
            />
            <TimelineItem 
              step="03"
              title="Precision Repair"
              desc="The actual repair is performed in a controlled manner, following strict safety protocols and technical guidelines for your specific brand."
              side="left"
            />
            <TimelineItem 
              step="04"
              title="Quality Assurance"
              desc="Before we leave, we perform a multi-point test to verify that the appliance is working at peak efficiency and is safe for your family."
              side="right"
            />
          </div>
        </div>
      </section>

      {/* 5. Refined Final CTA */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-950 rounded-[60px] p-12 md:p-24 overflow-hidden text-center group shadow-2xl">
            {/* Decorative background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 blur-[100px] -mr-48 -mt-48 transition-all duration-1000 group-hover:bg-emerald-600/30" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-[80px] -ml-32 -mb-32" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
                <zap size={14} className="text-amber-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/70">Instant Response Available</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
                Need a <span className="text-emerald-500 italic">Professional</span> Fix?
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base font-medium mb-12 max-w-xl mx-auto uppercase tracking-widest leading-relaxed">
                Join thousands of happy customers who trust APPLIANCEMANIA for their home appliance maintenance and technical support.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto bg-emerald-600 text-white px-12 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-gray-950 transition-all shadow-xl shadow-emerald-600/20 active:scale-95 cursor-pointer">
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const DarkValueCard = ({ icon, title, desc, accent }) => (
  <div className={`p-10 rounded-[32px] bg-gray-900 border border-gray-800 transition-all duration-500 hover:-translate-y-2 group ${accent === 'emerald' ? 'hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)]' : 'hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.3)]'}`}>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors ${accent === 'emerald' ? 'bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white' : 'bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white'}`}>
      {icon}
    </div>
    <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wide">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TimelineItem = ({ step, title, desc, side }) => (
  <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 relative ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
    {/* Dot */}
    <div className="absolute left-[11px] md:left-1/2 top-0 md:top-1/2 w-[18px] h-[18px] rounded-full bg-white border-4 border-emerald-500 z-10 md:-translate-y-1/2 md:-translate-x-1/2 shadow-[0_0_0_4px_rgba(255,255,255,1)]" />
    
    <div className={`md:w-1/2 pl-12 md:pl-0 ${side === 'right' ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
      <span className="text-6xl font-black text-gray-100 absolute -top-8 -z-10 select-none">{step}</span>
      <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-500 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
    <div className="hidden md:block md:w-1/2" />
  </div>
);

export default About;
