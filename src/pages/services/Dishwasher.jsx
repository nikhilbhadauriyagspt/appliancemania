import ServiceLayout from '../../components/ServiceLayout';
import { Waves } from 'lucide-react';

const DishwasherPage = () => (
  <ServiceLayout 
    title="Dishwasher"
    desc="Precision Pump & Drainage Restoration"
    longDesc="Engineered hygiene for your culinary environment. We specialize in high-pressure pump diagnostics, spray arm calibration, and comprehensive thermal sanitation system repairs for all high-end dishwasher units."
    icon={<Waves size={24} />}
    image="/dish.png"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Automated Hygiene Engineering</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            A malfunctioning dishwasher is a breakdown in your kitchen's sanitary protocol. Our technicians address complex water circulation issues and thermal failures to ensure your systems restore items to medical-grade cleanliness.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">What We Resolve:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Hydraulic Power</h4>
              <ul className="space-y-4">
                {[
                  "Circulation Pump Diagnostics",
                  "Spray Arm Node Clearing",
                  "Inlet Valve Synchronization",
                  "Drainage Logic Restoration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Thermal Logic</h4>
              <ul className="space-y-4">
                {[
                  "Heating Element Calibration",
                  "Thermal Sensor Diagnostics",
                  "Control Board (PCB) Repair",
                  "Dispenser Unit Tuning"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Precision Performance</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            Dishwashers utilize complex water-softening units and high-temperature cycles. We utilize digital flow-meters to verify that your unit is consuming optimal resources while delivering maximum technical performance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "High Temp", val: "Engineering" },
              { label: "Auto Cycle", val: "Diagnostics" },
              { label: "OEM Pump", val: "Guaranteed" },
              { label: "Hygiene", val: "Deployment" }
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

export default DishwasherPage;
