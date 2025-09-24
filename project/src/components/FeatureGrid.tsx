import React from 'react';
import { Scan, Zap, Eye, Database, Shield, Smartphone, Globe, Clock } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: Scan,
      title: 'Shape Analysis',
      description: 'AI analyzes layout geometry, seal positions, text blocks, and logo placement to detect structural anomalies.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Morph Hashing',
      description: 'Generates unique digital fingerprints from visual structure, metadata, and embedded security features.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Forgery Heatmap',
      description: 'Highlights suspicious zones with confidence ratings using advanced anomaly detection algorithms.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Database,
      title: 'Offline Mode',
      description: 'Run validation locally without internet connectivity, perfect for rural institutions and field work.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Legacy Compatible',
      description: 'Works with scanned images, PDFs, and mobile photos. No special equipment required.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Optimized for mobile devices with responsive design and touch-friendly interface.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Globe,
      title: 'Institution Network',
      description: 'Connected to global database of verified institutions and their certificate templates.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Fast validation with results in seconds. Batch processing for multiple certificates.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Advanced Features for Modern Validation
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          CertiMorph combines cutting-edge AI with practical usability to deliver 
          the most comprehensive certificate validation solution available.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {feature.title}
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Validation Process?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join institutions worldwide who trust CertiMorph for secure, accurate, and efficient certificate validation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;