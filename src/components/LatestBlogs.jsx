import { ArrowRight, Calendar, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const LatestBlogs = () => {
  const posts = blogPosts.slice(0, 3).map((post, idx) => ({
    ...post,
    entry: `0${idx + 1}`,
    read: post.readTime
  }));

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="insights">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] -ml-48 -mt-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-emerald-100 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase mb-8 shadow-sm">
              <Sparkles size={14} /> The Knowledge Base
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter uppercase">
              Latest Repair <span className="text-emerald-500 italic">Insights.</span>
            </h2>
          </div>
          <Link to="/blog" className="group flex items-center gap-4 px-10 py-5 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-emerald-600 shadow-xl active:scale-95">
            View All Posts <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <Link 
              key={idx} 
              to={`/blog/${post.id}`} 
              className="group relative flex flex-col h-full"
            >
              {/* Card Image Stage */}
              <div className="relative h-[300px] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
                
                {/* Float Entry ID */}
                <div className="absolute top-8 left-8 text-3xl font-black text-white/20 italic group-hover:text-white transition-colors">
                  {post.entry}
                </div>
              </div>
              
              {/* Card Content Area */}
              <div className="pt-10 px-6 flex flex-col flex-grow">
                <div className="flex items-center gap-5 text-gray-400 text-[9px] font-black mb-6 uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-2"><Calendar size={12} className="text-amber-500" /> {post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-200" />
                  <span className="flex items-center gap-2"><Clock size={12} className="text-emerald-500" /> {post.read} Read</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-gray-950 mb-6 leading-[1.1] group-hover:text-emerald-600 transition-colors uppercase tracking-tighter">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2 uppercase tracking-wide">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center gap-3 text-gray-950 font-black text-[10px] uppercase tracking-[0.3em] group/link">
                  <span className="relative">
                    Read Article
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </span>
                  <ArrowRight size={16} className="text-amber-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBlogs;

