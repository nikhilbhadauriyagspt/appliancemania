import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import { ArrowLeft, Clock, User, Calendar, Share2, Sparkles, CheckCircle2, ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-44 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-black text-gray-950 uppercase tracking-tighter mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.2em] hover:underline flex items-center gap-2">
          <ArrowLeft size={14} /> Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
      
      {/* Success Toast */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${copied ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
        <div className="bg-gray-950 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
            <CheckCircle2 size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest">Link Copied</span>
            <span className="text-[9px] font-medium text-gray-400 uppercase tracking-widest">Share with friends</span>
          </div>
        </div>
      </div>

      {/* 1. Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-600 transition-colors font-black text-[10px] uppercase tracking-[0.2em] mb-12">
          <ChevronLeft size={14} /> Back to Journal
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-emerald-100/50">
            {post.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-200" />
          <span className="text-gray-400 text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
            <Clock size={12} className="text-amber-500" /> {post.readTime} Read
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tighter leading-[1.1] uppercase mb-12">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-8 border-y border-gray-100 py-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 overflow-hidden border border-gray-100 shadow-sm p-0.5">
              <img loading="lazy" src={`https://i.pravatar.cc/150?u=${post.author.split(' ')[0]}`} alt={post.author} className="w-full h-full object-cover rounded-[14px] grayscale" />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-950 uppercase tracking-widest mb-1">{post.author}</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Calendar size={10} className="text-amber-500" /> {post.date}
              </p>
            </div>
          </div>
          <button 
            onClick={handleShare}
            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100 cursor-pointer shadow-sm"
          >
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* 2. Hero Image Stage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-[60px] overflow-hidden shadow-2xl h-[400px] md:h-[600px] relative border-8 border-gray-50 group">
          <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent" />
        </div>
      </div>

      {/* 3. Content Area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-medium blog-content uppercase tracking-wide text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Post Footer */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <div className="bg-gray-50 rounded-[48px] p-10 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 blur-[80px] -mr-20 -mt-20 transition-all duration-700 group-hover:bg-emerald-200/50" />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center text-emerald-600 mx-auto mb-8">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-gray-950 tracking-tighter uppercase mb-6">Did this insight <span className="text-emerald-500 italic">help?</span></h3>
              <p className="text-gray-500 mb-12 max-w-md mx-auto text-sm md:text-base font-medium uppercase tracking-widest leading-relaxed">Subscribe to our care journal for the latest maintenance strategies and appliance care tips.</p>
              <div className="flex justify-center">
                <Link to="/blog" className="px-12 py-6 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] hover:bg-emerald-600 transition-all shadow-xl active:scale-95">
                  Back to All Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS for Blog Content */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 900;
          color: #030712;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
          text-transform: uppercase;
        }
        .blog-content p {
          margin-bottom: 2rem;
          line-height: 1.8;
        }
        .blog-content ul {
          margin-bottom: 2rem;
          list-style-type: none;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .blog-content li::before {
          content: "•";
          color: #10b981;
          font-weight: 900;
          position: absolute;
          left: 0;
        }
      `}} />
    </div>
  );
};

export default BlogDetail;
