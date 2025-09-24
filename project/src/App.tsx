import React, { useState, useCallback } from 'react';
import { Upload, Shield, Scan, AlertTriangle, CheckCircle, FileText, Zap, Eye, Database, Wifi, WifiOff } from 'lucide-react';
import Header from './components/Header';
import UploadZone from './components/UploadZone';
import ValidationResults from './components/ValidationResults';
import FeatureGrid from './components/FeatureGrid';
import HeroSection from './components/HeroSection';

export interface ValidationResult {
  id: string;
  fileName: string;
  forgeryScore: number;
  status: 'authentic' | 'suspicious' | 'fake';
  shapeAnalysis: {
    layoutScore: number;
    sealPosition: string;
    textAlignment: string;
    logoIntegrity: string;
  };
  morphHash: string;
  suspiciousZones: Array<{
    area: string;
    confidence: number;
    reason: string;
  }>;
  metadata: {
    institution: string;
    issueDate: string;
    certificateType: string;
    verificationMethod: string;
  };
  timestamp: string;
}

function App() {
  const [validationResults, setValidationResults] = useState<ValidationResult[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  const handleFileUpload = useCallback(async (files: FileList) => {
    setIsValidating(true);
    
    // Simulate validation process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const newResults: ValidationResult[] = Array.from(files).map((file, index) => {
      const forgeryScore = Math.floor(Math.random() * 100);
      const status: ValidationResult['status'] = 
        forgeryScore >= 85 ? 'authentic' : 
        forgeryScore >= 50 ? 'suspicious' : 'fake';
      
      return {
        id: `cert-${Date.now()}-${index}`,
        fileName: file.name,
        forgeryScore,
        status,
        shapeAnalysis: {
          layoutScore: Math.floor(Math.random() * 100),
          sealPosition: ['Top-right', 'Bottom-left', 'Center'][Math.floor(Math.random() * 3)],
          textAlignment: ['Justified', 'Left-aligned', 'Center-aligned'][Math.floor(Math.random() * 3)],
          logoIntegrity: ['Intact', 'Partially damaged', 'Suspicious'][Math.floor(Math.random() * 3)]
        },
        morphHash: `0x${Math.random().toString(16).substr(2, 16)}`,
        suspiciousZones: forgeryScore < 70 ? [
          {
            area: 'Signature region',
            confidence: Math.floor(Math.random() * 40) + 60,
            reason: 'Inconsistent pen pressure detected'
          },
          {
            area: 'Date field',
            confidence: Math.floor(Math.random() * 30) + 70,
            reason: 'Font mismatch with template'
          }
        ] : [],
        metadata: {
          institution: ['MIT', 'Stanford University', 'Harvard', 'Oxford'][Math.floor(Math.random() * 4)],
          issueDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          certificateType: ['Degree', 'Diploma', 'Certificate'][Math.floor(Math.random() * 3)],
          verificationMethod: offlineMode ? 'Local Database' : 'Institution API'
        },
        timestamp: new Date().toISOString()
      };
    });
    
    setValidationResults(prev => [...newResults, ...prev]);
    setIsValidating(false);
  }, [offlineMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header offlineMode={offlineMode} onToggleOffline={() => setOfflineMode(!offlineMode)} />
      
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        
        <div className="max-w-4xl mx-auto space-y-12">
          <UploadZone 
            onFileUpload={handleFileUpload} 
            isValidating={isValidating}
            offlineMode={offlineMode}
          />
          
          {validationResults.length > 0 && (
            <ValidationResults results={validationResults} />
          )}
          
          <FeatureGrid />
        </div>
      </main>
      
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-blue-400 mr-3" />
            <span className="text-2xl font-bold">CertiMorph</span>
          </div>
          <p className="text-slate-400 mb-6">
            Advanced certificate validation through AI-powered shape analysis and morphological hashing
          </p>
          <div className="flex justify-center space-x-8 text-sm text-slate-500">
            <span>© 2025 CertiMorph</span>
            <span>•</span>
            <span>Enterprise Ready</span>
            <span>•</span>
            <span>Offline Capable</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;