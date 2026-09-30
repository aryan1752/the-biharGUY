import React from 'react';
import { X, Calendar, MapPin, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';

export default function RescueModal({ rescue, onClose }) {
  if (!rescue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-100 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900">
          <img
            src={rescue.image}
            alt={rescue.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/wetland_bird_rescue.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full inline-block mb-2">
              {rescue.species}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {rescue.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 text-xs font-semibold text-slate-700">
            <div className="space-y-1">
              <span className="text-slate-400 block font-normal">Rescue Date</span>
              <div className="flex items-center space-x-1 font-bold text-slate-900">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>{rescue.rescueDate}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 block font-normal">Location</span>
              <div className="flex items-center space-x-1 font-bold text-slate-900">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>{rescue.location}</span>
              </div>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <span className="text-slate-400 block font-normal">Status</span>
              <div className="flex items-center space-x-1 font-bold text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{rescue.status}</span>
              </div>
            </div>
          </div>

          {/* Threat Source */}
          <div className="bg-amber-50 border border-amber-200/70 p-4 rounded-xl flex items-start space-x-3 text-amber-900 text-xs font-medium">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-950 block">Threat / Rescue Circumstance:</span>
              <p className="mt-0.5">{rescue.sourceThreat}</p>
            </div>
          </div>

          {/* Full Story */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
              <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Rescue Story & Ground Action</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {rescue.story}
            </p>
          </div>

          {/* Action footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400 italic">BIHAR GUY Wildlife Log ID: #{rescue.id || rescue._id}</span>
            <button
              onClick={onClose}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
            >
              Close Story
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
