import React from 'react';
import { Calendar, MapPin, ShieldAlert, ArrowRight } from 'lucide-react';

export default function RescueCard({ rescue, onSelect }) {
  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
      
      {/* Thumbnail */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <img
          src={rescue.image}
          alt={rescue.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/wetland_bird_rescue.jpg";
          }}
        />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
          {rescue.category}
        </div>

        {/* Date Pill */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center space-x-1">
          <Calendar className="w-3 h-3 text-emerald-600" />
          <span>{rescue.rescueDate}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          
          <div className="flex items-center space-x-1.5 text-xs text-emerald-700 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>{rescue.location}</span>
          </div>

          <h3 className="font-bold text-base text-slate-900 line-clamp-1 group-hover:text-emerald-700 transition-colors">
            {rescue.title}
          </h3>

          <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
            {rescue.story}
          </p>

        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            {rescue.status}
          </span>

          <button
            onClick={() => onSelect(rescue)}
            className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-0.5 transition-all"
          >
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
