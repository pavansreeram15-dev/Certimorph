import React from 'react';
import { Shield, Wifi, WifiOff, Settings } from 'lucide-react';

interface HeaderProps {
  offlineMode: boolean;
  onToggleOffline: () => void;
}

const Header: React.FC<HeaderProps> = ({ offlineMode, onToggleOffline }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="w-10 h-10 text-blue-600" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CertiMorph
              </h1>
              <p className="text-sm text-slate-600">Shape-Shifting Certificate Validator</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleOffline}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                offlineMode 
                  ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {offlineMode ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {offlineMode ? 'Offline Mode' : 'Online Mode'}
              </span>
            </button>
            
            <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;