import React from 'react';
import { Microscope, HeartHandshake, Megaphone, Compass, Sparkles } from 'lucide-react';
import { CORE_PILLARS } from '../data/rescueData';

const iconMap = {
  Microscope: Microscope,
  HeartHandshake: HeartHandshake,
  Megaphone: Megaphone,
  Compass: Compass,
};

export default function Pillars() {
  return (
    <section className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Hamare 4 Mukhya Stambh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Is Channel & Website Par Aapko Kya Dekhne Ko Milega?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Bihar ki natural beauty aur helpless wild animals ko bachane ke liye hamare 4 samarpit kshetr.
          </p>
        </div>

        {/* 4 Pillars Grid (Original Clean Icon Card Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Microscope;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-7 border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  {/* Titles */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                      {pillar.hindiTitle}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Preserving Bihar's Nature</span>
                  <span className="ml-auto text-lg leading-none">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
