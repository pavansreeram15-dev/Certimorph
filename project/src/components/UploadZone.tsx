import React, { useCallback, useState } from 'react';
import { Upload, FileText, Image, Loader2, Camera, Scan } from 'lucide-react';

interface UploadZoneProps {
  onFileUpload: (files: FileList) => void;
  isValidating: boolean;
  offlineMode: boolean;
}

const UploadZone: React.FC<UploadZoneProps> = ({ onFileUpload, isValidating, offlineMode }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileUpload(files);
    }
  }, [onFileUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileUpload(files);
    }
  }, [onFileUpload]);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          isDragOver
            ? 'border-blue-400 bg-blue-50 scale-105'
            : 'border-slate-300 bg-white/60 backdrop-blur-sm hover:border-blue-300 hover:bg-blue-50/50'
        } ${isValidating ? 'pointer-events-none opacity-75' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isValidating ? (
          <div className="space-y-4">
            <div className="relative">
              <Scan className="w-16 h-16 text-blue-500 mx-auto animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Analyzing Certificate</h3>
            <p className="text-slate-600">
              Performing shape analysis and generating morphological hash...
            </p>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full animate-pulse" style={{ width: '60%' }} />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Upload className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Upload Certificate for Validation
              </h3>
              <p className="text-slate-600 mb-6">
                Drag and drop your certificate files or click to browse. 
                Supports PDF, JPG, PNG, and scanned documents.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-100 rounded-lg">
                <FileText className="w-4 h-4 text-slate-600" />
                <span className="text-sm text-slate-700">PDF</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-100 rounded-lg">
                <Image className="w-4 h-4 text-slate-600" />
                <span className="text-sm text-slate-700">JPG/PNG</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-100 rounded-lg">
                <Camera className="w-4 h-4 text-slate-600" />
                <span className="text-sm text-slate-700">Mobile Photos</span>
              </div>
            </div>

            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            
            <label
              htmlFor="file-upload"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Upload className="w-5 h-5" />
              <span>Choose Files to Validate</span>
            </label>

            {offlineMode && (
              <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>Offline Mode:</strong> Validation will use local database and cached institution records.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadZone;