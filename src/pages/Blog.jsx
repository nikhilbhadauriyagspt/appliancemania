import { ArrowRight, Clock, User, Sparkles, TrendingUp, ChevronRight, Bookmark, CheckCircle2, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase mb-6">
              <Sparkles size={14} /> The Journal
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tighter uppercase leading-none">
              Insights for the <span className="text-emerald-500 italic">Modern Home.</span>
            </h1>
          </div>
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] border-l-2 border-amber-500 pl-6 mb-2 max-w-[200px]">
            care Expertise and maintenance strategies.
          </p>
        </div>

        {/* 2. Unified Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col bg-white rounded-[32px] p-5 border border-gray-100 hover:border-emerald-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6">
                <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase text-emerald-600 border border-white/50">
                  {post.category}
                </div>
              </div>
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-3 text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">
                  <Calendar size={12} className="text-amber-500" /> {post.date}
                </div>
                <h3 className="text-lg font-black text-gray-950 mb-4 leading-tight uppercase tracking-tight group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  <span>{post.readTime} Read</span>
                  <div className="flex items-center gap-2 text-gray-950 group-hover:text-amber-600 transition-colors">
                    Read More <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. Minimal Newsletter */}
        <div className="bg-gray-950 rounded-[40px] p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px]" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-8">
              Join the <span className="text-emerald-500 italic">Journal.</span>
            </h2>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com" 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-xs font-black uppercase tracking-widest focus:bg-white/10 focus:border-emerald-500 outline-none transition-all"
              />
              <button 
                disabled={isSubmitting}
                className="bg-emerald-600 hover:bg-white hover:text-gray-950 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all disabled:opacity-50 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {isSuccess && <p className="mt-4 text-[9px] font-black text-emerald-600 uppercase tracking-widest">Successfully Enrolled</p>}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
