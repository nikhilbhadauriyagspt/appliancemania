import { Search, CalendarCheck, Wrench, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const RepairProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Selection",
      desc: "Pick your service.",
      icon: <Search size={20} />,
      color: "emerald"
    },
    {
      id: "02",
      title: "Booking",
      desc: "Instant matching.",
      icon: <CalendarCheck size={20} />,
      color: "amber"
    },
    {
      id: "03",
      title: "Repair",
      desc: "Original parts fix.",
      icon: <Wrench size={20} />,
      color: "emerald"
    },
    {
      id: "04",
      title: "Warranty",
      desc: "90-Day guarantee.",
      icon: <ShieldCheck size={20} />,
      color: "amber"
    }
  ];

  return (
    <section id="repair-process" className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase mb-6">
            <Sparkles size={14} /> The Workflow
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tighter uppercase leading-none">
            How We <span className="text-emerald-500 italic">Restore</span> Order.
          </h2>
        </div>

        {/* Straight Line Process */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-100 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group text-center">
                <div className="flex flex-col items-center">
                  
                  {/* Icon Module */}
                  <div className={`relative z-10 w-20 h-20 rounded-[28px] bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 ${step.color === 'emerald' ? 'text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' : 'text-amber-500 group-hover:bg-amber-500 group-hover:text-white'}`}>
                    {step.icon}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-950 text-white text-[10px] font-black flex items-center justify-center border-4 border-white">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-gray-950 uppercase tracking-tight">{step.title}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed max-w-[150px]">{step.desc}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified CTA */}
        <div className="mt-24 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-12 py-6 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-2xl shadow-gray-900/10 active:scale-95 flex items-center justify-center gap-4 group cursor-pointer"
          >
            Book Specialist Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance Repair" 
      />
    </section>
  );
};

export default RepairProcess;


