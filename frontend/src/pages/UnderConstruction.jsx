import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowLeft, Phone, ShieldAlert, Sparkles } from 'lucide-react';

export default function UnderConstruction({ pageName = "This Page" }) {
  return (
    <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
        
        {/* Animated Icon Badge */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-lg">
            <Wrench className="w-9 h-9 stroke-[2.2]" />
          </div>
        </div>

        {/* Header Tag */}
        <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>UNDER CONSTRUCTION</span>
        </div>

        {/* Main Title & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {pageName} is Currently Under Construction 🚧
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Hamari team is page par ground field data, wildlife rescues, aur documentaries tayyar kar rahi hai. Ye section bohot jaldi live hoga!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Page</span>
          </Link>

          <a
            href="tel:+918851284861"
            className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            <span>Call Rescue Helpline</span>
          </a>
        </div>

      </div>
    </div>
  );
}
