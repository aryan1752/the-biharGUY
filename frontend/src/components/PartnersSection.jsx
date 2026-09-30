import React from 'react';
import { ShieldCheck, Landmark, Users, GraduationCap, Sparkles } from 'lucide-react';
import { COLLABORATION_PARTNERS } from '../data/rescueData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Landmark: Landmark,
  Users: Users,
  GraduationCap: GraduationCap,
};

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Collaboration Partners & Ground Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Together For Bihar's Wildlife & Environment
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Sarkari vibhag, antarrashtriya sansthaon, gram panchayat aur educational institutes ke saath milkar ground level par badlav.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLABORATION_PARTNERS.map((partner) => {
            const Icon = iconMap[partner.icon] || ShieldCheck;
            return (
              <div
                key={partner.id}
                className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100/80 hover:bg-white hover:shadow-xl hover:border-emerald-300 transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/60 px-2.5 py-1 rounded-md">
                    {partner.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-emerald-700 font-semibold block mb-0.5">
                    {partner.category}
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {partner.name}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {partner.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Seminar & Workshop Highlight Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-800 via-forest to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10 pointer-events-none">
            <GraduationCap className="w-80 h-80 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-emerald-700/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold px-3.5 py-1 rounded-full">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Seminars & Workshops Nationwide</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              School, Coaching Centre & College Awareness Drives
            </h3>
            
            <p className="text-slate-200 text-sm leading-relaxed">
              Attended seminars and conducted interactive workshops and awareness programs in different schools, coaching centers, and colleges across Bihar to educate students about migratory birds, snake bite safety, wildlife protection laws, and nature preservation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
