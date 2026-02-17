import ServiceLayout from '../../components/ServiceLayout';
import { Fan } from 'lucide-react';

const KitchenChimneyPage = () => (
  <ServiceLayout 
    title="Kitchen Chimney"
    desc="Deep cleaning & motor fix"
    longDesc="Keep your kitchen air fresh and smoke-free. We provide deep chemical cleaning, suction motor repairs, and control panel fixes for baffle filter and filter-less chimneys."
    icon={<Fan size={24} />}
    image="/Kitchen.jpg"
    extraContent={
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Breathe Fresh While You Cook</h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            An efficient kitchen chimney is vital for maintaining air quality and preventing grease buildup on your walls and cabinets. Over time, heavy oil and soot can clog filters and strain the motor. Our comprehensive service ensures your chimney operates at its maximum suction capacity.
          </p>
        </section>

        <section className="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
          <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Our Specialized Cleaning Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div className="space-y-4">
                <div className="text-blue-600 font-black text-xs uppercase tracking-widest">Chemical Degreasing</div>
                <p className="text-gray-500 text-sm font-bold leading-relaxed">We use food-safe industrial solvents to dissolve stubborn grease from baffle filters and internal blowers.</p>
             </div>
             <div className="space-y-4">
                <div className="text-blue-600 font-black text-xs uppercase tracking-widest">Motor Overhauling</div>
                <p className="text-gray-500 text-sm font-bold leading-relaxed">Cleaning the motor housing and lubricating bearings to reduce noise and vibration.</p>
             </div>
             <div className="space-y-4">
                <div className="text-blue-600 font-black text-xs uppercase tracking-widest">Duct Inspection</div>
                <p className="text-gray-500 text-sm font-bold leading-relaxed">Checking for leaks or blockages in the exhaust pipe to ensure smooth airflow.</p>
             </div>
             <div className="space-y-4">
                <div className="text-blue-600 font-black text-xs uppercase tracking-widest">PCB & Sensor Fix</div>
                <p className="text-gray-500 text-sm font-bold leading-relaxed">Repairing touch panels and auto-clean sensors for modern smart chimneys.</p>
             </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Maintenance Tips</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-8">
            Regularly cleaning your filters every 15-20 days can significantly extend the life of your chimney motor. For heavy Indian cooking, a professional deep cleaning every 6 months is highly recommended.
          </p>
          <div className="flex gap-4">
             {["Baffle Filter", "Charcoal Filter", "Filter-less"].map((tag, i) => (
               <div key={i} className="px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm font-black text-[10px] text-blue-600 uppercase tracking-widest">
                  {tag} Specialist
               </div>
             ))}
          </div>
        </section>
      </div>
    }
  />
);

export default KitchenChimneyPage;

