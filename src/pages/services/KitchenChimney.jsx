import ServiceLayout from '../../components/ServiceLayout';
import { Fan } from 'lucide-react';

const KitchenChimneyPage = () => (
  <ServiceLayout 
    title="Kitchen Chimney"
    desc="High-Suction Motor & Deep Degreasing"
    longDesc="Restore the air purity of your culinary space. We provide specialized high-torque motor diagnostics, advanced centrifugal fan cleaning, and comprehensive chemical degreasing for all wall-mounted and island chimney systems."
    icon={<Fan size={24} />}
    image="/Kitchen.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Aeronautics in the Kitchen</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base uppercase tracking-wide">
            Accumulated grease is the primary cause of chimney failure and fire hazards. Our deep-clean protocol utilizes industrial-grade degreasers and ultrasonic cleaning for filters to restore original suction power and operational safety.
          </p>
        </section>

        <section className="bg-gray-950 p-10 md:p-12 rounded-[48px] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -mr-32 -mt-32" />
          <h3 className="text-2xl font-black mb-10 uppercase tracking-tight text-white relative z-10">What We Resolve:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.3em]">Suction Dynamics</h4>
              <ul className="space-y-4">
                {[
                  "Motor Bearing Restoration",
                  "Centrifugal Fan Balancing",
                  "Baffle Filter Ultrasonic Clean",
                  "Exhaust Duct Obstruction Fix"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em]">Control & Logic</h4>
              <ul className="space-y-4">
                {[
                  "Touch & Gesture Sensor Repair",
                  "LED Lighting Array Fix",
                  "Control Board (PCB) Tuning",
                  "Auto-Clean Logic Diagnostics"
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
          <h3 className="text-2xl font-black text-gray-950 mb-6 uppercase tracking-tighter">Operational Efficiency</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 uppercase tracking-wide text-sm">
            We utilize digital anemometers to measure the exact air-flow velocity at the intake and exhaust nodes. This Appliance approach ensures your chimney maintains the required CFM (Cubic Feet per Minute) for an odor-free kitchen environment.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "High Suction", val: "Appliance" },
              { label: "Deep Clean", val: "Diagnostics" },
              { label: "OEM Motor", val: "Guaranteed" },
              { label: "Odor Free", val: "Deployment" }
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

export default KitchenChimneyPage;
