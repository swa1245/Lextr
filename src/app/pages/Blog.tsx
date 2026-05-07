"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, ArrowRight, Calendar, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/lib/constants';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-blue-100">
      <Navbar />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <main className="pt-40 pb-32 relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-lg shadow-sm mb-6">
            <span className="text-[10px] font-bold text-gray-400 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center">
                <Search className="w-2 h-2 text-gray-600" />
              </span>
              Our Blogs
            </span>
          </div>
          <h1 className="text-navy font-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Insights and Inspiration, <br /> Explore Our Blog
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dive into our blog for expert insights, tips, and industry trends to elevate your project management journey.
          </p>

          {/* Search Bar - Matching Image */}
          <div className="mt-12 relative max-w-xl mx-auto group">
            <input
              type="text"
              placeholder="Search for Blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-6 pr-14 py-4 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/20 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all text-gray-600 font-medium"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-xl text-gray-400 group-focus-within:text-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </div>
          </div>

          {/* Category Filter - Matching Image */}
          <div className="mt-16">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Top Picks</p>
            <div className="flex flex-wrap justify-center gap-3">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all border duration-300 cursor-pointer ${activeCategory === cat
                      ? 'bg-navy text-white border-navy shadow-lg shadow-navy/20'
                      : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid - Matching Image Style */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <div key={post.id} className="flex flex-col group animate-fade-up bg-white rounded-[32px] p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/30 transition-all duration-500 cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-6 cursor-pointer">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    {/* Hover Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <button className="px-6 py-2.5 bg-white rounded-full text-navy font-bold text-sm flex items-center gap-2 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 cursor-pointer">
                        Open Blog <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-2 pb-2 flex flex-col flex-1">
                    <h3 className="text-[#1C1C1C] text-xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Footer Info */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 overflow-hidden border border-blue-100 shadow-sm">
                          <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[#1C1C1C] font-bold text-xs">{post.author}</span>
                      </div>
                      <div className="px-3 py-1.5 bg-gray-50 rounded-lg text-gray-400 font-bold text-[10px] uppercase tracking-wider">
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200">
              <p className="text-gray-400 text-lg font-medium">No results found for your selection.</p>
            </div>
          )}
        </div>

        {/* Newsletter Section - Matching Navy Card Style - Commented out as requested
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
          <div className="relative bg-navy rounded-[48px] p-12 md:p-24 overflow-hidden shadow-2xl shadow-navy/20 animate-fade-up">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/2" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <span className="px-4 py-1.5 bg-white/10 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 mb-8 inline-block border border-white/5">
                Weekly Insights
              </span>
              <h2 className="text-white text-4xl md:text-5xl font-black mb-8 leading-tight">
                Subscribe to our <br /> compliance network.
              </h2>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all font-medium"
                />
                <button className="px-10 py-5 bg-white text-navy rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        */}
      </main>

      <Footer />
    </div>
  );
}
