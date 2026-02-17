import { HelpCircle, MessageSquare, ArrowRight, Sparkles, Globe, Shield, Clock } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="pt-12 bg-white min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/20 blur-[120px] rounded-full -z-10" />
      
      {/* Redesigned Contact Section Integration */}
      <ContactSection />

      {/* Post-Form Support Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2 uppercase">Alternative Channels</h3>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Connect with us on your preferred platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SupportCard 
            icon={<HelpCircle size={28} className="text-blue-600" />}
            title="Knowledge Base"
            desc="Find quick answers to common appliance issues in our detailed documentation."
            linkText="Browse FAQ"
          />
          <SupportCard 
            icon={<MessageSquare size={28} className="text-purple-600" />}
            title="Live Concierge"
            desc="Chat in real-time with our service coordinators for immediate assistance."
            linkText="Start Chat"
          />
          <SupportCard 
            icon={<Globe size={28} className="text-emerald-600" />}
            title="Global Support"
            desc="International service inquiries and parts sourcing across different regions."
            linkText="Regions"
          />
        </div>

        {/* Brand Promise Banner */}
        <div className="mt-32 p-12 lg:p-20 rounded-[64px] bg-gray-950 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-blue-600/20" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black tracking-[0.3em] text-blue-400 uppercase mb-8">
                <Shield size={12} /> The FixMyGear Guarantee
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-8">
                Your Trust is Our <br /><span className="text-blue-500 italic">Greatest Asset.</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
                We guarantee that every interaction with our team will be professional, transparent, and focused on solving your problem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                <Clock className="text-blue-500 mb-4" size={24} />
                <h4 className="text-white font-black text-sm uppercase tracking-tight mb-1">On-Time</h4>
                <p className="text-gray-500 text-[10px] font-bold">Punctuality is our priority</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                <Shield className="text-blue-500 mb-4" size={24} />
                <h4 className="text-white font-black text-sm uppercase tracking-tight mb-1">Secure</h4>
                <p className="text-gray-500 text-[10px] font-bold">Insured & Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportCard = ({ icon, title, desc, linkText }) => (
  <div className="bg-gray-50/50 border border-gray-100 rounded-[48px] p-10 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className="w-20 h-20 rounded-[32px] bg-white shadow-xl border border-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h4 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">{title}</h4>
    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
      {desc}
    </p>
    <button className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest group/btn">
      {linkText} <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
    </button>
  </div>
);

export default Contact;
