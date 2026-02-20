import ServiceLayout from '../../components/ServiceLayout';
import { Monitor } from 'lucide-react';

const TelevisionPage = () => (
  <ServiceLayout 
    title="Television"
    desc="Advanced Display & Logic Board Repair"
    longDesc="Precision Appliance for high-resolution entertainment. We specialize in LED/OLED panel restoration, backlight synchronization, and complex motherboard circuit repairs for all premium smart TV brands."
    icon={<Monitor size={24} />}
    image="/tv.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Crystal Clear Appliance</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            Your TV is a complex processing unit. Whether it's a distorted panel or a complete power failure, our appliance repairs utilize infrared BGA rework stations to restore your visual experience to its original factory clarity.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">Display Specializations:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Optical Systems</h4>
              <ul className="space-y-4">
                {[
                  "Backlight Array Restoration",
                  "Panel Refresh Diagnostics",
                  "Color Calibration Optimization",
                  "Filter & Diffuser Alignment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Logic & Input</h4>
              <ul className="space-y-4">
                {[
                  "Motherboard Component Rework",
                  "HDMI & Input Node Repair",
                  "Software Kernel Restoration",
                  "Power Supply Unit Tuning"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Precision Handling</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            Fragile display panels require absolute atmospheric control and specialized vacuum tools. We ensure your television is processed in a lint-free care environment to prevent internal pixel contamination.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "OLED/QLED", val: "Expertise" },
              { label: "4K / 8K", val: "Diagnostics" },
              { label: "Original", val: "Components" },
              { label: "Safe Transport", val: "Protocol" }
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

export default TelevisionPage;
