import { X, Send, ShieldCheck, Clock, Award, User, Phone, MessageSquare, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const BookingModal = ({ isOpen, onClose, serviceTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      body: encode({ "form-name": "booking", ...data, serviceTitle })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        
        {/* Simple Side Info */}
        <div className="md:w-1/3 bg-emerald-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
              <Sparkles size={24} />
            </div>
            <h2 className="text-3xl font-black leading-tight mb-6 uppercase tracking-tighter">
              Elite <br /> Appliance <br /> Care.
            </h2>
            <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest leading-relaxed">
              Our master appliance repairs are ready to restore your appliance to peak performance.
            </p>
          </div>

          <div className="relative z-10 space-y-6 pt-12">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Clock size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">60 Min Response</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <ShieldCheck size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">90 Day Warranty</span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 p-8 md:p-12 relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all active:scale-90"
          >
            <X size={18} />
          </button>

          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-950 uppercase tracking-tight">Booking Received</h3>
              <p className="text-gray-500 text-sm font-medium mt-2">A coordinator will contact you shortly.</p>
            </div>
          ) : (
            <div>
              <div className="mb-10">
                <h3 className="text-2xl font-black text-gray-950 uppercase tracking-tighter mb-1">Request Service</h3>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">For: <span className="text-emerald-600">{serviceTitle}</span></p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                      <User size={16} className="text-gray-300" />
                      <input required name="fullName" type="text" className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-gray-900 placeholder:text-gray-300" placeholder="John Smith" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile Number</label>
                    <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                      <Phone size={16} className="text-gray-300" />
                      <input required name="phone" type="tel" className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-gray-900 placeholder:text-gray-300" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                    <Mail size={16} className="text-gray-300" />
                    <input required name="email" type="email" className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-gray-900 placeholder:text-gray-300" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Describe Issue</label>
                  <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                    <MessageSquare size={16} className="text-gray-300 mt-1" />
                    <textarea required name="issue" rows="3" className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-gray-900 placeholder:text-gray-300 resize-none" placeholder="What's the problem?"></textarea>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : <>Confirm Appliance Care <Send size={14} /></>}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
