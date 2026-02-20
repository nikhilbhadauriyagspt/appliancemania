import ServiceLayout from '../../components/ServiceLayout';
import { Refrigerator } from 'lucide-react';

const RefrigeratorPage = () => (
  <ServiceLayout 
    title="Refrigerator"
    desc="Master Cooling & Compressor Diagnostics"
    longDesc="Expert thermal engineering for all major brands. We specialize in compressor restoration, precision gas charging, thermostat calibration, and high-efficiency seal replacements using 100% genuine OEM components."
    icon={<Refrigerator size={24} />}
    image="/refrigerator.png"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Preserving Your Freshness</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            Your refrigerator is the critical center of your kitchen. When cooling fails or strange mechanical noises occur, immediate professional attention is vital. Our engineers specialize in single-door, double-door, and premium side-by-side technical systems.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">What We Resolve:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Cooling Architecture</h4>
              <ul className="space-y-4">
                {[
                  "Compressor Torque Restoration",
                  "Evaporator Coil De-Icing",
                  "Gas Pressure Normalization",
                  "Condenser Fan Tuning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Precision Control</h4>
              <ul className="space-y-4">
                {[
                  "Thermostat Sensor Calibration",
                  "Defrost Cycle Optimization",
                  "Logic Board (PCB) Repair",
                  "Internal Lighting Systems"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Diagnostic Mastery</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            We utilize advanced thermal imaging and pressure gauges to detect micro-leaks and electrical faults that conventional inspections miss. This ensures a permanent engineering fix rather than a temporary patch.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Side-by-Side", val: "Engineering" },
              { label: "Double Door", val: "Diagnostics" },
              { label: "Gas Flow", val: "Guaranteed" },
              { label: "90-Day", val: "Deployment" }
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

export default RefrigeratorPage;
