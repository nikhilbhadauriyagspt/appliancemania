import { useState, useEffect } from 'react';
import { 
  Zap, Wrench, ChevronDown, Menu, X, 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight, Sparkles, Phone, Clock, Mail, MapPin
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const services = [
    { id: "washing-machine", title: "Washing Machine", desc: "Drum & motor repair", icon: <WashingMachine size={18} /> },
    { id: "refrigerator", title: "Refrigerator", desc: "Cooling & compressor fix", icon: <Refrigerator size={18} /> },
    { id: "air-conditioner", title: "Air Conditioner", desc: "Gas refilling & PCB fix", icon: <Snowflake size={18} /> },
    { id: "television", title: "Television", desc: "Display & audio fix", icon: <Monitor size={18} /> },
    { id: "water-purifier", title: "Water Purifier", desc: "RO filter replacement", icon: <Droplets size={18} /> },
    { id: "microwave-oven", title: "Microwave Oven", desc: "Magnetron & panel fix", icon: <Microwave size={18} /> },
    { id: "kitchen-chimney", title: "Kitchen Chimney", desc: "Deep cleaning & motor fix", icon: <Fan size={18} /> },
    { id: "dishwasher", title: "Dishwasher", desc: "Pump & leakage repair", icon: <Waves size={18} /> },
    { id: "coffee-maker", title: "Coffee Maker", desc: "Heater & pump service", icon: <Coffee size={18} /> },
    { id: "oven-stove", title: "Oven & Gas Stove", desc: "Burner & ignition repair", icon: <Flame size={18} /> },
    { id: "clothes-dryer", title: "Clothes Dryer", desc: "Heating & belt repair", icon: <Wind size={18} /> },
    { id: "other-appliances", title: "Other Appliances", desc: "Mixers, irons & more", icon: <Cpu size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', color: 'emerald' },
    { name: 'About', path: '/about', color: 'emerald' },
    { name: 'Blog', path: '/blog', color: 'amber' },
    { name: 'Contact', path: '/contact', color: 'amber' },
  ];

  const getLinkClass = (path, color) => {
    const isActive = location.pathname === path;
    const activeColor = color === 'emerald' ? 'text-emerald-600' : 'text-amber-600';
    const hoverColor = color === 'emerald' ? 'hover:text-emerald-600' : 'hover:text-amber-600';
    const underlineColor = color === 'emerald' ? 'bg-emerald-600' : 'bg-amber-600';
    
    return {
      className: `relative text-[11px] font-black uppercase tracking-[0.15em] py-2 transition-all duration-300 group ${
        isActive ? activeColor : `text-gray-600 ${hoverColor}`
      }`,
      underline: `absolute bottom-0 left-0 w-full h-[2px] ${underlineColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isActive ? 'scale-x-100' : ''}`
    };
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      {/* Main Navigation Layer */}
      <div className={`transition-all duration-700 ease-in-out w-full pt-0 px-0`}>
        <div className={`w-full mx-auto transition-all duration-700 ease-in-out border-b ${
          isScrolled 
            ? 'bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-gray-100 py-3 px-10' 
            : 'bg-white/98 backdrop-blur-2xl border-gray-100 py-5 px-10 shadow-sm'
        }`}>
          <div className="flex items-center justify-between gap-8">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-950 w-12 h-12 rounded-[18px] flex items-center justify-center transform group-hover:-rotate-6 transition-transform duration-500 shadow-2xl">
                  <Zap className="text-emerald-500" size={22} fill="currentColor" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <h1 className="text-xl font-black tracking-tighter text-gray-950 uppercase">
                  APPLIANCE<span className="text-emerald-600">MANIA</span>
                </h1>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-5 h-[2px] bg-amber-500 rounded-full" />
                  <span className="text-[7px] font-black tracking-[0.3em] text-gray-400 uppercase">Repair Services</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const styles = getLinkClass(link.path, link.color);
                return (
                  <Link key={link.name} to={link.path} className={styles.className}>
                    {link.name}
                    <span className={styles.underline} />
                  </Link>
                );
              })}
              
              {/* Mega Dropdown Trigger */}
              <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] py-2 transition-all duration-300 cursor-pointer ${isDropdownOpen ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}>
                  Services 
                  <ChevronDown size={12} className={`transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-500 ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}>
                  <div className="bg-white rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-gray-100 p-1 w-[880px] flex overflow-hidden">
                    {/* Left: Services Grid */}
                    <div className="flex-1 p-8">
                      <div className="flex items-center justify-between mb-8 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                            <Sparkles size={14} />
                          </div>
                          <h3 className="text-[10px] font-black text-gray-950 uppercase tracking-[0.2em]">Our Specializations</h3>
                        </div>
                        <Link to="/contact" className="text-[9px] font-black text-amber-600 uppercase tracking-widest hover:underline underline-offset-4 transition-all">All Solutions</Link>
                      </div>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                        {services.map((item, idx) => (
                          <Link key={idx} to={`/service/${item.id}`} onClick={() => setIsDropdownOpen(false)} className="group/item flex items-center gap-4 p-3.5 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover/item:bg-white flex items-center justify-center text-gray-400 group-hover/item:text-emerald-600 transition-all shadow-sm group-hover/item:shadow-md border border-transparent group-hover/item:border-emerald-100">
                              {item.icon}
                            </div>
                            <div className="flex flex-col leading-tight">
                              <span className="text-[12px] font-black text-gray-950 group-hover/item:text-emerald-600 transition-colors uppercase tracking-tight">{item.title}</span>
                              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Right: Feature/CTA Card */}
                    <div className="w-[320px] bg-gray-950 p-8 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[100px] -mr-32 -mt-32" />
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white mb-6 shadow-xl shadow-emerald-600/40">
                          <Wrench size={20} />
                        </div>
                        <h4 className="text-xl font-black text-white leading-tight mb-4 tracking-tighter">Emergency <br /> Repair <span className="text-amber-500 italic">24/7.</span></h4>
                        <p className="text-gray-400 text-[10px] font-medium leading-relaxed uppercase tracking-widest mb-8">Certified appliance repairs available for same-day home visits.</p>
                      </div>
                      <button 
                        onClick={() => {
                          setIsModalOpen(true);
                          setIsDropdownOpen(false);
                        }}
                        className="relative z-10 w-full py-4 bg-white text-gray-950 rounded-xl font-black text-[9px] uppercase tracking-[0.25em] hover:bg-emerald-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 group/btn cursor-pointer"
                      >
                        Book Appointment <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:flex py-3 px-8 bg-emerald-600 text-white rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-gray-950 hover:shadow-2xl transition-all duration-300 active:scale-95 shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                Book Now
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 border ${
                  isMenuOpen ? 'bg-gray-950 text-white border-gray-950' : 'bg-gray-50 text-gray-950 border-gray-200'
                }`}
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-x-0 top-[120px] px-4 transition-all duration-500 transform ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible pointer-events-none'}`}>
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_30px_70px_rgba(0,0,0,0.15)] p-8 max-h-[75vh] overflow-y-auto scrollbar-hide">
          <div className="space-y-2 mb-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className={`flex items-center justify-between px-6 py-5 rounded-[24px] transition-all ${
                  location.pathname === link.path 
                    ? (link.color === 'emerald' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/20' : 'bg-amber-500 text-white shadow-xl shadow-amber-500/20')
                    : 'text-gray-950 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">{link.name}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
          
          <div className="mb-6 px-4">
            <h5 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">Popular Services</h5>
            <div className="grid grid-cols-1 gap-2">
              {services.slice(0, 6).map((item, idx) => (
                <Link 
                  key={idx} 
                  to={`/service/${item.id}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="flex items-center gap-5 p-4 rounded-[24px] bg-gray-50 hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-gray-950 uppercase tracking-widest">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
            <button 
              onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              className="w-full py-5 bg-gray-950 text-white rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl"
            >
              Book Appliance Care care
            </button>
            <a href="tel:+15550000000" className="w-full py-5 bg-emerald-50 text-emerald-600 rounded-[24px] font-black text-[10px] uppercase tracking-[0.2em] text-center border border-emerald-100">
              Call Support
            </a>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance Repair" 
      />
    </header>
  );
};

export default Header;


