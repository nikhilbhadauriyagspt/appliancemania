import { Zap, Mail, MapPin, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Latest Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Washing Machine', path: '/service/washing-machine' },
      { name: 'Refrigerator', path: '/service/refrigerator' },
      { name: 'Air Conditioner', path: '/service/air-conditioner' },
      { name: 'Television', path: '/service/television' },
      { name: 'Water Purifier', path: '/service/water-purifier' },
      { name: 'Kitchen Chimney', path: '/service/kitchen-chimney' },
    ],
    support: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Refund Policy', path: '/refund-policy' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ]
  };

  return (
    <footer className="relative bg-white pt-16 pb-8 overflow-hidden border-t border-gray-50 w-full">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-950 w-12 h-12 rounded-[18px] flex items-center justify-center transform group-hover:-rotate-6 transition-transform duration-500 shadow-2xl">
                  <Zap className="text-emerald-500" size={22} fill="currentColor" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <h2 className="text-xl font-black tracking-tighter text-gray-950 uppercase">
                  APPLIANCE<span className="text-emerald-600">MANIA</span>
                </h2>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-5 h-[2px] bg-amber-500 rounded-full" />
                  <span className="text-[7px] font-black tracking-[0.3em] text-gray-400 uppercase">Repair Services</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm uppercase tracking-widest text-[11px]">
              Your trusted partner for high-end appliance repairs. Delivering precision and reliability since 2026.
            </p>
            <div className="pt-4 flex flex-col gap-4 border-t border-gray-50">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <a href="mailto:info@appliancemania.shop" className="text-xs font-black text-gray-950 hover:text-emerald-600 transition-colors">info@appliancemania.shop</a>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                  <MapPin size={16} />
                </div>
                <p className="text-xs font-black text-gray-950 uppercase tracking-tighter leading-tight pt-1">
                  B. W. Cooper, New Orleans, LA, USA
                </p>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-emerald-600 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-1 group">
                      {link.name} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-emerald-600 font-bold text-xs uppercase tracking-widest transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-500 hover:text-emerald-600 font-bold text-xs uppercase tracking-widest transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 blur-[40px]" />
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-4">
                   <Sparkles size={16} className="text-emerald-600" />
                   <h3 className="text-gray-950 text-sm font-black uppercase tracking-tight">care Journal</h3>
                 </div>
                 <form onSubmit={handleSubscribe} className="space-y-3">
                   <div className="relative">
                     <input 
                       required
                       type="email" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="email@example.com" 
                       className="w-full bg-white border border-gray-100 rounded-xl px-5 py-3 text-gray-950 text-xs font-black uppercase tracking-widest outline-none focus:border-emerald-500 transition-all shadow-sm placeholder:text-gray-300"
                     />
                   </div>
                   <button 
                     disabled={isSubmitting}
                     className="w-full bg-gray-950 hover:bg-emerald-600 text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 group/btn shadow-lg shadow-gray-950/10"
                   >
                     {isSubmitting ? '...' : <>Join <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" /></>}
                   </button>
                 </form>
                 {isSuccess && (
                   <p className="mt-4 text-[9px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                     <CheckCircle2 size={12} /> Successfully Enrolled
                   </p>
                 )}
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 gap-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full">
               <ShieldCheck size={14} className="text-emerald-600" />
               <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em]">SSL SECURED</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full">
               <CheckCircle2 size={14} className="text-amber-500" />
               <span className="text-[9px] font-black text-gray-950 uppercase tracking-[0.2em]">MASTER CERTIFIED</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              &copy; {currentYear} APPLIANCEMANIA. Built with Precision.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
