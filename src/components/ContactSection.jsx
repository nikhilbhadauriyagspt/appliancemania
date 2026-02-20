import { Mail, Send, ArrowRight, Sparkles, MapPin, Globe, CheckCircle2, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      e.target.reset();
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="contact-hub">
      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/30 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      {/* Success Toast */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-950 text-white px-8 py-6 rounded-[32px] shadow-2xl flex items-center gap-6 border border-white/10 backdrop-blur-2xl">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
            <CheckCircle2 size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-widest">Message Dispatched!</span>
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mt-1">Our coordinators will call you soon.</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase mb-8 shadow-sm">
            <Sparkles size={14} /> Communication Hub
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter uppercase">
            Get in <span className="text-emerald-500 italic">Touch.</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm md:text-base uppercase tracking-widest mt-8 leading-relaxed">
            Have a question or need assistance? Our team is standing by to provide you with the support you deserve.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Info Side (Left) */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="p-10 rounded-[48px] bg-gray-50 border border-gray-100 group transition-all duration-700 hover:bg-white hover:shadow-2xl">
               <div className="w-16 h-16 rounded-[24px] bg-gray-950 flex items-center justify-center text-white mb-8 shadow-xl shadow-gray-950/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                 <Mail size={28} className="text-emerald-500" />
               </div>
               <h3 className="text-xl font-black text-gray-950 mb-2 uppercase tracking-tight">Digital Mail</h3>
               <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-6">Expect our response within 2 business hours.</p>
               <a href="mailto:info@appliancemania.shop" className="text-xl font-black text-emerald-600 hover:text-amber-600 transition-colors leading-none">info@appliancemania.shop</a>
            </div>

            <div className="p-10 rounded-[48px] bg-gray-50 border border-gray-100 group transition-all duration-700 hover:bg-white hover:shadow-2xl">
               <div className="w-16 h-16 rounded-[24px] bg-white shadow-xl flex items-center justify-center text-emerald-600 mb-8 border border-gray-100 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                 <MapPin size={28} />
               </div>
               <h3 className="text-xl font-black text-gray-950 mb-2 uppercase tracking-tight">Main HQ</h3>
               <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-6">Visit our central diagnostic facility.</p>
               <span className="text-sm font-black text-gray-950 leading-tight block uppercase">B. W. Cooper, New Orleans,<br />LA, USA</span>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="w-full lg:w-2/3 bg-white border border-gray-100 rounded-[64px] p-8 md:p-16 lg:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.08)] relative overflow-hidden group">
             <div className="relative z-10">
                <form className="space-y-12" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="relative group/input">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 mb-3 block group-focus-within/input:text-emerald-600 transition-colors">Full Name</label>
                      <input 
                        required
                        name="fullName"
                        type="text" 
                        className="w-full bg-gray-50 border-none px-8 py-5 rounded-[24px] focus:bg-white focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-black text-gray-950 shadow-inner placeholder:text-gray-300" 
                        placeholder="John Smith" 
                      />
                    </div>
                    <div className="relative group/input">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 mb-3 block group-focus-within/input:text-emerald-600 transition-colors">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        className="w-full bg-gray-50 border-none px-8 py-5 rounded-[24px] focus:bg-white focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-black text-gray-950 shadow-inner placeholder:text-gray-300" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div className="relative group/input">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 mb-3 block group-focus-within/input:text-emerald-600 transition-colors">Mobile Number</label>
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        className="w-full bg-gray-50 border-none px-8 py-5 rounded-[24px] focus:bg-white focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-black text-gray-950 shadow-inner placeholder:text-gray-300" 
                        placeholder="+1 (555) 000-0000" 
                      />
                    </div>
                  </div>

                  <div className="relative group/input">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 mb-3 block group-focus-within/input:text-emerald-600 transition-colors">Describe Your Issue</label>
                    <textarea 
                      required
                      name="message"
                      rows="5" 
                      className="w-full bg-gray-50 border-none px-8 py-5 rounded-[24px] focus:bg-white focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all font-black text-gray-950 shadow-inner resize-none placeholder:text-gray-300" 
                      placeholder="Briefly explain the appliance problem..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-4 text-left">
                       <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-emerald-500 border border-gray-100 shadow-sm">
                         <Globe size={18} />
                       </div>
                       <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-relaxed">
                        Data encrypted & secured <br /> via SSL/TLS protocol
                       </p>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto py-6 px-16 bg-gray-950 text-white rounded-[24px] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group/btn disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
