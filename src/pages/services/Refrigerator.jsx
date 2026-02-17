import ServiceLayout from '../../components/ServiceLayout';
import { Refrigerator } from 'lucide-react';

const RefrigeratorPage = () => (
  <ServiceLayout 
    title="Refrigerator"
    desc="Cooling & compressor fix"
    longDesc="Expert cooling solutions for all major brands. We fix compressor issues, gas leaks, thermostat failures, and seal replacements with 100% genuine parts."
    icon={<Refrigerator size={24} />}
    image="/refrigerator.png"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Preserving Your Freshness</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            Your refrigerator is the heart of your kitchen, working 24/7 to keep your food fresh and safe. When it stops cooling or starts making strange noises, you need immediate professional attention. Our experts specialize in both single-door and double-door refrigerators, as well as side-by-side premium models.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Not Cooling", desc: "Most common issue caused by gas leakage or compressor failure." },
            { title: "Water Leakage", desc: "Often due to a blocked defrost drain or cracked drain pan." },
            { title: "Noise Issues", desc: "Usually caused by a faulty fan motor or compressor vibrations." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-[32px] bg-blue-50/30 border border-blue-100/50">
              <h4 className="font-black text-blue-600 uppercase text-xs mb-3 tracking-widest">{item.title}</h4>
              <p className="text-gray-500 text-sm font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Professional Diagnostics</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-10">
            We use advanced thermal imaging and pressure gauges to detect leaks and electrical faults that might be missed by a standard visual inspection. This ensures a long-lasting fix rather than a temporary patch.
          </p>
          <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 flex flex-wrap gap-8 justify-between">
            <div className="flex-1 min-w-[200px]">
              <h5 className="font-black text-gray-900 text-sm uppercase mb-2">Compressor Repair</h5>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[90%]" />
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <h5 className="font-black text-gray-900 text-sm uppercase mb-2">Gas Charging</h5>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[95%]" />
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <h5 className="font-black text-gray-900 text-sm uppercase mb-2">Thermostat Fix</h5>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[85%]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    }
  />
);

export default RefrigeratorPage;

