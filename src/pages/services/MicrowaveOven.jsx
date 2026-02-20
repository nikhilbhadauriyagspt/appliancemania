import ServiceLayout from '../../components/ServiceLayout';
import { Microwave } from 'lucide-react';

const MicrowaveOvenPage = () => (
  <ServiceLayout 
    title="Microwave Oven"
    desc="Magnetron & High-Voltage Circuitry Fix"
    longDesc="Precision microwave engineering for the modern kitchen. We specialize in high-voltage transformer restoration, magnetron diagnostics, and sophisticated touch-panel circuit repairs for all countertop and built-in convection models."
    icon={<Microwave size={24} />}
    image="/micro.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Radiation Safe Restoration</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            A malfunctioning microwave requires extreme technical caution. Our engineers utilize electromagnetic leak detectors and high-voltage discharge protocols to ensure your unit is technically sound and perfectly safe for culinary use.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">Technical Diagnostics:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Wave Systems</h4>
              <ul className="space-y-4">
                {[
                  "Magnetron Output Restoration",
                  "High-Voltage Diode Analysis",
                  "Capacitor Safety Discharge",
                  "Waveguide Cover Replacement"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Mechanical & Logic</h4>
              <ul className="space-y-4">
                {[
                  "Touch Panel Kernel Repair",
                  "Turntable Motor Alignment",
                  "Door Safety Switch Sync",
                  "Convection Fan Restoration"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Safety-First Protocol</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            Microwaves contain high-voltage components that can be lethal even when unplugged. Our master technicians follow strict ISO safety standards, ensuring every unit passes a rigorous radiation leak test before being cleared for operation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Convection", val: "Engineering" },
              { label: "Solo Micro", val: "Diagnostics" },
              { label: "OEM Parts", val: "Guaranteed" },
              { label: "Leak Test", val: "Deployment" }
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

export default MicrowaveOvenPage;
