import ServiceLayout from '../../components/ServiceLayout';
import { Cpu } from 'lucide-react';

const OtherAppliancesPage = () => (
  <ServiceLayout 
    title="Other Appliances"
    desc="Mixers, irons & more"
    longDesc="We repair a wide range of small household appliances including high-speed mixers, steam irons, air fryers, and vacuum cleaners with precision and genuine parts."
    icon={<Cpu size={24} />}
    image="/others.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Small Appliances, Big Care</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            Don't let a faulty small appliance slow you down. From the morning smoothie in your mixer-grinder to the steam iron that keeps your clothes sharp, we provide expert repair services for all those essential household gadgets that make life easier.
          </p>
        </section>

        <section className="bg-gray-900 p-10 rounded-[40px] text-white">
          <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">What We Service</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Mixer Grinders", desc: "Motor carbon replacement, coupler fix, and jar blade sharpening." },
               { title: "Steam Irons", desc: "Thermostat calibration, soleplate cleaning, and cord replacement." },
               { title: "Air Fryers", desc: "Heating coil repair and timer/touch panel troubleshooting." },
               { title: "Vacuum Cleaners", desc: "Motor suction repair and filter/hose replacements." },
               { title: "Induction Cooktops", desc: "Glass replacement and IGBT/motherboard repairs." },
               { title: "Juicers", desc: "Strainer cleaning and high-torque motor servicing." }
             ].map((item, idx) => (
               <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="font-black text-blue-400 uppercase text-xs mb-2 tracking-widest">{item.title}</h4>
                  <p className="text-gray-400 text-xs font-bold leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Genuine Parts Guarantee</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            Even for small appliances, we never compromise on quality. We source original couplers, motors, and heating elements to ensure your gadgets perform like new and remain safe for your family to use.
          </p>
          <div className="flex flex-wrap gap-4">
             {["100% Genuine", "Quick Turnaround", "Safety Tested", "Affordable Rates"].map((badge, idx) => (
               <div key={idx} className="px-5 py-2 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">
                  {badge}
               </div>
             ))}
          </div>
        </section>
      </div>
    }
  />
);

export default OtherAppliancesPage;

