import { 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  { 
    id: "washing-machine",
    idx: "01",
    title: "Washing Machine", 
    desc: "Drum & motor repair", 
    icon: <WashingMachine size={24} />, 
    image: "/washing.png" 
  },
  { 
    id: "refrigerator",
    idx: "02",
    title: "Refrigerator", 
    desc: "Cooling & compressor fix", 
    icon: <Refrigerator size={24} />, 
    image: "/refrigerator.png" 
  },
  { 
    id: "dishwasher",
    idx: "03",
    title: "Dishwasher", 
    desc: "Pump & leakage repair", 
    icon: <Waves size={24} />, 
    image: "/dish.png" 
  },
  { 
    id: "television",
    idx: "04",
    title: "Television", 
    desc: "Display & audio fix", 
    icon: <Monitor size={24} />, 
    image: "/tv.jpg" 
  },
  { 
    id: "coffee-maker", 
    idx: "05",
    title: "Coffee Maker", 
    desc: "Heater & pump service", 
    icon: <Coffee size={24} />, 
    image: "/coffee.jpg" 
  },
  { 
    id: "air-conditioner", 
    idx: "06",
    title: "Air Conditioner", 
    desc: "Gas refilling & PCB fix", 
    icon: <Snowflake size={24} />, 
    image: "/air.jpg" 
  },
  { 
    id: "microwave-oven", 
    idx: "07",
    title: "Microwave Oven", 
    desc: "Magnetron & panel fix", 
    icon: <Microwave size={24} />, 
    image: "/micro.jpg" 
  },
  { 
    id: "oven-stove", 
    idx: "08",
    title: "Oven & Gas Stove", 
    desc: "Burner & ignition repair", 
    icon: <Flame size={24} />, 
    image: "/Ove.jpg" 
  },
  { 
    id: "water-purifier", 
    idx: "09",
    title: "Water Purifier", 
    desc: "RO filter replacement", 
    icon: <Droplets size={24} />, 
    image: "/water.jpg" 
  },
  { 
    id: "clothes-dryer", 
    idx: "10",
    title: "Clothes Dryer", 
    desc: "Heating & belt repair", 
    icon: <Wind size={24} />, 
    image: "/clothes.jpg" 
  },
  { 
    id: "kitchen-chimney", 
    idx: "11",
    title: "Kitchen Chimney", 
    desc: "Deep cleaning & motor fix", 
    icon: <Fan size={24} />, 
    image: "/Kitchen.jpg" 
  },
  { 
    id: "other-appliances",
    idx: "12",
    title: "Other Appliances", 
    desc: "Mixers, irons & more", 
    icon: <Cpu size={24} />, 
    image: "/others.jpg" 
  }
];

const RepairSolutions = () => {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden" id="repair-solutions">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/30 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-100 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase mb-8 shadow-sm">
              <Sparkles size={14} /> Premium Catalog
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter uppercase mb-6">
              Expert <span className="text-emerald-500 italic">Repair</span> Solutions.
            </h2>
          </div>
          <div className="max-w-xs pb-4">
             <p className="text-gray-400 font-bold text-xs md:text-sm border-l-4 border-amber-500 pl-8 uppercase tracking-widest leading-relaxed">
              Precision engineering for every household appliance. We restore performance using 100% genuine parts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12 mt-20">
          {solutions.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Floating ID Marker */}
              <div className="absolute -top-16 left-8 text-6xl font-black text-gray-50 group-hover:text-emerald-50/50 transition-colors duration-700 italic select-none">
                {item.idx}
              </div>

              {/* Card Container */}
              <div className="relative">
                {/* Main Image Stage */}
                <div className="relative h-[400px] rounded-[60px] overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
                  <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-8 left-8 w-16 h-16 rounded-[24px] bg-white/90 backdrop-blur-xl flex items-center justify-center text-gray-950 shadow-xl border border-white/50 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-12">
                    {item.icon}
                  </div>
                </div>

                {/* Floating Glass Content Panel */}
                <div className="absolute -bottom-16 left-6 right-6 bg-white/95 backdrop-blur-2xl p-8 rounded-[40px] shadow-2xl border border-white transform transition-all duration-700 ease-out group-hover:-translate-y-6">
                  <div className="flex flex-col gap-1 mb-6">
                    <h3 className="text-xl font-black text-gray-950 uppercase tracking-tighter leading-none group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/service/${item.id}`} 
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-gray-950 group/link"
                    >
                      Explore Details
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-amber-500 group-hover/link:bg-emerald-600 group-hover/link:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                    <div className="w-2 h-2 rounded-full bg-gray-100 group-hover:bg-emerald-500 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default RepairSolutions;


