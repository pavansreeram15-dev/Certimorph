import React from 'react';
import { Scan, Zap, Eye, Database } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Transform Certificates into
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
            Digital DNA
          </span>
        </h2>
        
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Advanced AI-powered validation that analyzes document structure, content, and metadata 
          to generate unique morphological fingerprints. Detect forgeries with unprecedented accuracy.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
              <Scan className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Shape Analysis</h3>
            <p className="text-sm text-slate-600 text-center">Layout geometry detection</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Morph Hashing</h3>
            <p className="text-sm text-slate-600 text-center">Unique digital fingerprints</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-3">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Forgery Heatmap</h3>
            <p className="text-sm text-slate-600 text-center">Suspicious zone detection</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Offline Ready</h3>
            <p className="text-sm text-slate-600 text-center">Local validation capability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;