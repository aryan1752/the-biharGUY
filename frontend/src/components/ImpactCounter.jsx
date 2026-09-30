import React from 'react';
import { ShieldAlert, Users, Award, Heart, CheckCircle } from 'lucide-react';

export default function ImpactCounter() {
  const stats = [
    {
      number: "21+",
      label: "Wildlife Rescues",
      desc: "Owls, Cobras, Pythons, Deer & Parrots saved",
      icon: ShieldAlert,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      number: "100%",
      label: "Ground Commitment",
      desc: "24/7 Rapid response across Bihar villages",
      icon: Heart,
      color: "text-emerald-700",
      bg: "bg-emerald-50"
    },
    {
      number: "4+",
      label: "Key Alliances",
      desc: "WTI, Bihar Govt & Sarpanch Network",
      icon: Award,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      number: "50+",
      label: "Awareness Drives",
      desc: "Schools, Colleges & Local Panchayats",
      icon: Users,
      color: "text-emerald-700",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="bg-white border-y border-emerald-100 py-12 relative -mt-8 z-20 max-w-6xl mx-auto rounded-2xl shadow-xl px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="text-center space-y-2 group">
              <div className={`w-12 h-12 mx-auto rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                {stat.number}
              </div>
              <div className="font-bold text-sm text-emerald-800">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 max-w-[180px] mx-auto leading-tight">
                {stat.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
