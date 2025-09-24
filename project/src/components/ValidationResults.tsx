import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Eye, Hash, Calendar, Building, FileText, MapPin } from 'lucide-react';
import { ValidationResult } from '../App';

interface ValidationResultsProps {
  results: ValidationResult[];
}

const ValidationResults: React.FC<ValidationResultsProps> = ({ results }) => {
  const getStatusIcon = (status: ValidationResult['status']) => {
    switch (status) {
      case 'authentic':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'suspicious':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
      case 'fake':
        return <XCircle className="w-6 h-6 text-red-500" />;
    }
  };

  const getStatusColor = (status: ValidationResult['status']) => {
    switch (status) {
      case 'authentic':
        return 'from-green-500 to-emerald-500';
      case 'suspicious':
        return 'from-yellow-500 to-orange-500';
      case 'fake':
        return 'from-red-500 to-pink-500';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Validation Results</h2>
        <p className="text-slate-600">AI-powered certificate analysis complete</p>
      </div>

      <div className="grid gap-6">
        {results.map((result) => (
          <div key={result.id} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Header */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(result.status)}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{result.fileName}</h3>
                    <p className="text-sm text-slate-600">
                      Validated on {new Date(result.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-slate-600">Forgery Score</span>
                    <div className={`text-3xl font-bold ${getScoreColor(result.forgeryScore)}`}>
                      {result.forgeryScore}
                    </div>
                  </div>
                  <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${getStatusColor(result.status)} transition-all duration-500`}
                      style={{ width: `${result.forgeryScore}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Shape Analysis */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  Shape Analysis
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-sm text-slate-600 mb-1">Layout Score</div>
                    <div className="text-lg font-bold text-slate-900">{result.shapeAnalysis.layoutScore}%</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-sm text-slate-600 mb-1">Seal Position</div>
                    <div className="text-sm font-medium text-slate-900">{result.shapeAnalysis.sealPosition}</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-sm text-slate-600 mb-1">Text Alignment</div>
                    <div className="text-sm font-medium text-slate-900">{result.shapeAnalysis.textAlignment}</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-sm text-slate-600 mb-1">Logo Integrity</div>
                    <div className="text-sm font-medium text-slate-900">{result.shapeAnalysis.logoIntegrity}</div>
                  </div>
                </div>
              </div>

              {/* Morph Hash */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <Hash className="w-5 h-5 mr-2 text-purple-600" />
                  Morphological Hash
                </h4>
                <div className="bg-slate-50 rounded-lg p-4">
                  <code className="text-sm font-mono text-slate-700 break-all">{result.morphHash}</code>
                </div>
              </div>

              {/* Suspicious Zones */}
              {result.suspiciousZones.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-red-600" />
                    Suspicious Zones
                  </h4>
                  <div className="space-y-2">
                    {result.suspiciousZones.map((zone, index) => (
                      <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-red-900">{zone.area}</span>
                          <span className="text-sm text-red-700">{zone.confidence}% confidence</span>
                        </div>
                        <p className="text-sm text-red-700">{zone.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Metadata */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  Certificate Metadata
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-4 h-4 text-slate-500" />
                    <div>
                      <div className="text-sm text-slate-600">Institution</div>
                      <div className="font-medium text-slate-900">{result.metadata.institution}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <div>
                      <div className="text-sm text-slate-600">Issue Date</div>
                      <div className="font-medium text-slate-900">{result.metadata.issueDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <div>
                      <div className="text-sm text-slate-600">Type</div>
                      <div className="font-medium text-slate-900">{result.metadata.certificateType}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-slate-500" />
                    <div>
                      <div className="text-sm text-slate-600">Verification</div>
                      <div className="font-medium text-slate-900">{result.metadata.verificationMethod}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValidationResults;