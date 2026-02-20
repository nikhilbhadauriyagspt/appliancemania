import { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How quickly can you repair my appliance?",
    answer: "Most repairs are completed within 60-90 minutes of the technician's arrival. We carry common spare parts to ensure same-day resolution for over 90% of service calls."
  },
  {
    question: "Are the spare parts genuine?",
    answer: "Yes, we exclusively use 100% genuine OEM parts sourced directly from manufacturers like Samsung, LG, Bosch, and Whirlpool to guarantee long-lasting performance."
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer: "Absolutely. We provide a comprehensive 90-day warranty on both the spare parts we replace and the labor performed, giving you complete peace of mind."
  },
  {
    question: "Is emergency service available?",
    answer: "Yes, we offer priority emergency booking. Requests made before 12:00 PM are guaranteed a technician visit by the evening of the same day."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 blur-[100px] rounded-full -z-10 -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/40 blur-[100px] rounded-full -z-10 -ml-48 -mb-48" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase mb-6 shadow-sm">
            <Sparkles size={14} /> Common Queries
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tighter leading-none mb-6">
            Frequently Asked <span className="text-emerald-500 italic">Questions.</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto text-sm md:text-base uppercase tracking-widest">
            Everything you need to know about our premium repair process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group rounded-[32px] transition-all duration-500 overflow-hidden border ${
                openIndex === idx 
                  ? 'bg-white border-emerald-100 shadow-[0_20px_40px_rgba(16,185,129,0.06)]' 
                  : 'bg-white/50 border-transparent hover:border-gray-200 hover:bg-white'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
              >
                <span className={`text-base md:text-lg font-black tracking-tight transition-colors duration-300 ${
                  openIndex === idx ? 'text-emerald-600' : 'text-gray-950'
                }`}>
                  {faq.question}
                </span>
                
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                  openIndex === idx ? 'bg-emerald-600 text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-600'
                }`}>
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden px-8">
                  <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl border-l-2 border-amber-500/30 pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-20 p-10 rounded-[40px] bg-gray-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-gray-950/20">
           {/* Decorative */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[80px] -mr-20 -mt-20 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-[80px] -ml-20 -mb-20 pointer-events-none" />

           <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-500 backdrop-blur-md border border-white/10">
                <MessageSquare size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-1">Still have questions?</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Our support team is online 24/7.</p>
              </div>
           </div>
           
           <Link 
             to="/contact" 
             className="relative z-10 px-10 py-5 bg-white text-gray-950 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 hover:text-white transition-all shadow-xl active:scale-95"
           >
              Contact Support
           </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
