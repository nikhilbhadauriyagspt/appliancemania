import ServiceLayout from '../../components/ServiceLayout';
import { WashingMachine } from 'lucide-react';

const WashingMachinePage = () => (
  <ServiceLayout 
    title="Washing Machine"
    desc="Precision Drum & Motor Appliance"
    longDesc="Our master appliance repairs specialize in complete restoration for both front-load and top-load systems. From complex logic board failures to mechanical drum vibrations, we ensure factory-grade performance with every fix."
    icon={<WashingMachine size={24} />}
    image="/washing.png"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Expert Laundry Solutions</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            A malfunctioning washing machine disrupts the essential rhythm of your home. Our diagnostic process identifies the root cause of leaks, motor failures, and drainage issues across all premium models, including top-load and high-efficiency front-load units.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">What We Resolve:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Mechanical Systems</h4>
              <ul className="space-y-4">
                {[
                  "Drum & Bearing Restoration",
                  "Vibration & Suspension Tuning",
                  "Seal & Gasket Replacement",
                  "Transmission & Belt Repair"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Control & Electronics</h4>
              <ul className="space-y-4">
                {[
                  "logic board (PCB) Diagnostics",
                  "Pressure Switch Calibration",
                  "Drainage Pump Extraction",
                  "Thermal Regulation Repair"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">care Quality Assurance</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            Every component we use is a 100% original manufacturer spare. Our appliance repairs undergo rigorous multi-point training to maintain care superiority across brands like Samsung, LG, and Bosch.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Top Load", val: "Appliance" },
              { label: "Front Load", val: "Diagnostics" },
              { label: "OEM Parts", val: "Guaranteed" },
              { label: "Rapid Sync", val: "Deployment" }
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

export default WashingMachinePage;
