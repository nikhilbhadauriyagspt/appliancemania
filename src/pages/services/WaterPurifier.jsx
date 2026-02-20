import ServiceLayout from '../../components/ServiceLayout';
import { Droplets } from 'lucide-react';

const WaterPurifierPage = () => (
  <ServiceLayout 
    title="Water Purifier"
    desc="RO Filtration & Membrane Engineering"
    longDesc="Ensure absolute molecular purity for your drinking water. We provide specialized RO membrane restoration, multi-stage filter replacement, and precision booster pump repairs for all leading purification brands."
    icon={<Droplets size={24} />}
    image="/water.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Molecular Level Restoration</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            Your purifier is the primary defense against water-borne biological and chemical contaminants. Our master technicians utilize digital TDS meters and pressure sensors to ensure your system meets clinical safety standards.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">Technical Maintenance:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Filtration Cycle</h4>
              <ul className="space-y-4">
                {[
                  "RO Membrane Pore Cleaning",
                  "Sediment Filter Replacement",
                  "Activated Carbon Restoration",
                  "Mineral Cartridge Balancing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Hydraulic Power</h4>
              <ul className="space-y-4">
                {[
                  "Booster Pump Torque Test",
                  "Solenoid Valve Diagnostics",
                  "Automatic Cut-off Calibration",
                  "Flow Restrictor Normalization"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">TDS Precision Control</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            Total Dissolved Solids (TDS) management is an engineering task. We calibrate your membranes based on your local water source source profile, ensuring the perfect biological balance for safe and healthy consumption.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "TDS Check", val: "Engineering" },
              { label: "UV Logic", val: "Diagnostics" },
              { label: "OEM Filter", val: "Guaranteed" },
              { label: "Pure H2O", val: "Deployment" }
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

export default WaterPurifierPage;
