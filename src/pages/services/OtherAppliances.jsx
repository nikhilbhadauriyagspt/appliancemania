import ServiceLayout from '../../components/ServiceLayout';
import { Cpu } from 'lucide-react';

const OtherAppliancesPage = () => (
  <ServiceLayout 
    title="Other Appliances"
    desc="Specialized Multi-Device Technical Support"
    longDesc="Expert engineering for your entire appliance ecosystem. From precision mixer motor restoration to sophisticated digital iron circuitry, we provide certified technical solutions for all essential household machines."
    icon={<Cpu size={24} />}
    image="/others.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Universal Engineering Support</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            Every device in your home deserves master-level attention. Our laboratory is equipped to handle specialized repairs for smaller but critical household units, ensuring they return to their original technical operational standards.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 blur-[60px]" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">What We Resolve:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Small Motor Systems</h4>
              <ul className="space-y-4">
                {[
                  "Mixer/Grinder Motor Rewinding",
                  "Vacuum Suction Optimization",
                  "Air Purifier Filter Restoration",
                  "Fan Bearing High-Speed Tuning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Heating & Control</h4>
              <ul className="space-y-4">
                {[
                  "Steam Iron Thermal Logic",
                  "Electric Kettle Auto-Off Fix",
                  "Toaster Element Synchronization",
                  "Induction Cooktop PCB Repair"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Certified Multi-Brand Lab</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            We maintain an extensive inventory of specialized micro-components and original spare parts for hundreds of models. Our goal is to extend the lifecycle of your entire appliance portfolio through sustainable technical maintenance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Multi-Fix", val: "Engineering" },
              { label: "Micro-Logic", val: "Diagnostics" },
              { label: "OEM Spares", val: "Guaranteed" },
              { label: "Eco-Repair", val: "Deployment" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-[28px] bg-gray-50 border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="text-emerald-600 font-black text-[9px] uppercase mb-2 tracking-[0.2em]">{item.label}</div>
                <div className="text-gray-950 font-black text-[10px] uppercase tracking-tighter">{item.val}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    }
  />
);

export default OtherAppliancesPage;
