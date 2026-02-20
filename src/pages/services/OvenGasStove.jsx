import ServiceLayout from '../../components/ServiceLayout';
import { Flame } from 'lucide-react';

const OvenGasStovePage = () => (
  <ServiceLayout 
    title="Oven & Gas Stove"
    desc="Thermal Calibration & Safety Appliance"
    longDesc="Precision heat management for the professional home kitchen. We specialize in digital thermostat calibration, high-performance burner cleaning, and leak-proof gas line restoration for all premium cooking ranges."
    icon={<Flame size={24} />}
    image="/Ove.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Controlled Combustion Expertise</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            Cooking appliances require absolute safety protocols. Whether it's an uneven flame or a digital oven control failure, our master appliance repairs utilize electronic gas sniffers and thermal probes to ensure your kitchen remains a safe high-performance environment.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 blur-[60px]" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">What We Resolve:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Gas & Burner Systems</h4>
              <ul className="space-y-4">
                {[
                  "Burner Port Micro-Cleaning",
                  "Igniter Electrode Sync",
                  "Gas Valve Leak Diagnostics",
                  "Regulator Flow Normalization"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Oven Logic & Heat</h4>
              <ul className="space-y-4">
                {[
                  "Thermostat Sensor Calibration",
                  "Heating Element Restoration",
                  "Control Board (PCB) Fix",
                  "Door Seal & Hinge Tuning"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">The Safety Shield</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            We exclusively use original manufacturer seals and thermal-resistant components. Every service includes a mandatory 5-point gas safety check to ensure zero PPM leakage at all connection nodes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Gas Range", val: "Appliance" },
              { label: "Built-in Oven", val: "Diagnostics" },
              { label: "OEM Parts", val: "Guaranteed" },
              { label: "Safety Run", val: "Deployment" }
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

export default OvenGasStovePage;
