import ServiceLayout from '../../components/ServiceLayout';
import { Wind } from 'lucide-react';

const ClothesDryerPage = () => (
  <ServiceLayout 
    title="Clothes Dryer"
    desc="Thermal Regulation & Drum Belt Restoration"
    longDesc="Engineered drying performance for all weather conditions. Our technicians specialize in high-temperature sensor calibration, drive belt restoration, and multi-stage heating element repairs for vented and heat-pump dryer systems."
    icon={<Wind size={24} />}
    image="/clothes.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Precision Thermal Cycle</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            A dryer is a high-energy appliance that requires absolute technical precision to prevent fabric damage or fire risks. We utilize digital thermal probes to ensure your unit reaches and maintains optimal technical drying temperatures.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">What We Resolve:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Heating Systems</h4>
              <ul className="space-y-4">
                {[
                  "Heating Element Restoration",
                  "Thermal Fuse Replacement",
                  "High-Limit Thermostat Check",
                  "Airflow Duct De-linting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Drive & Logic</h4>
              <ul className="space-y-4">
                {[
                  "Drum Belt & Roller Tuning",
                  "Idler Pulley Realignment",
                  "Moisture Sensor Calibration",
                  "Control Board (PCB) Repair"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Safety Certification</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            Dryers are responsible for a significant number of home fire incidents due to lint buildup and thermal failures. Every repair includes a comprehensive safety check of the internal chassis and exhaust ventilation system.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Vent Care", val: "Engineering" },
              { label: "Heat Pump", val: "Diagnostics" },
              { label: "OEM Belt", val: "Guaranteed" },
              { label: "Safe Run", val: "Deployment" }
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

export default ClothesDryerPage;
