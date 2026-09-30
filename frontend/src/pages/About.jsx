import React from 'react';
import { Leaf, ShieldCheck, Heart, Users, GraduationCap, MapPin, Sparkles, CheckCircle2, Award, Camera } from 'lucide-react';
import { COLLABORATION_PARTNERS, CORE_PILLARS } from '../data/rescueData';

export default function About() {
  const galleryImages = [
    {
      url: "/images/indian_roller.jpg",
      title: "Neelkanth (Indian Roller) Rescue",
      desc: "Rescued from poacher net near wetland in Bihar on 9 Aug 2025"
    },
    {
      url: "/images/greater_coucal.jpg",
      title: "Greater Coucal (Kokal) Saved",
      desc: "Freed from illegal captivity due to superstitious asthma cure myth on 10 Dec 2025"
    },
    {
      url: "/images/rescue_bird_net_police.jpg",
      title: "Joint Operation with Bihar Govt & Forest Dept",
      desc: "Collaborative rapid response removing poacher nets in wetland sanctuaries"
    },
    {
      url: "/images/owl_in_net.jpg",
      title: "Owl Extrication from Mist Netting",
      desc: "Carefully untangling delicate feathers from poacher snares"
    },
    {
      url: "/images/wetland_bird_rescue.jpg",
      title: "Wetland Marshland Survey & Rescue",
      desc: "Scientific monitoring of migratory bird habitats across Bihar wetlands"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 via-forest to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-emerald-700/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold px-4 py-1.5 rounded-full">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>About BIHAR GUY Mission</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Bihar Ki Wildlife Aur Nature Ko Preserve Karne Ka Mission
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed pt-2">
              Ek chhoti si shuruaat se lekar bade sankalp tak, Bihar ke unexplored natural habitats, migratory birds, aur endangered animals ki suraksha ke liye dedicated ground-level movement.
            </p>
          </div>
        </div>
      </div>

      {/* Main Mission Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-emerald-700 font-bold text-xs bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hum Kaun Hain & Kya Karte Hain</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Welcome to the BIHAR GUY!
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">Main Bihar ki wildlife aur nature ko preserve karne ke mission par hoon.</strong> Is channel aur platform par aapko dekhne ko milega Bihar ki anokhi natural beauty aur janwaron ki suraksha ki sachhi kahaniyan.
              </p>
              <p>
                Poaching snares mein phanse Barn Owls aur Indian Rollers se lekar, basti mein aane wale venomous Krait aur Cobra snakes, illegal animal traders se chhudaye gaye Fox babies, Porcupines aur Python tak — har jaan ko bachana aur unhe unke prakritik aawas mein wapas chhodna hamara sankalp hai.
              </p>
              <p className="font-semibold text-emerald-800 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                "Ek chhoti si shuruaat se lekar bade sankalp tak, is safar mein mere saath judiye aur hamare Bihar ki natural beauty ko bachane mein madad karein."
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-800">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Rapid Emergency Action</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Superstition Busting Drives</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center space-x-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Scientific Monitoring</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/rescue_bird_net_police.jpg"
                alt="Bihar Guy with Police and Forest Officials during Wildlife Rescue"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
                <span className="bg-emerald-600 text-white px-2.5 py-1 rounded font-bold">Field Action</span>
                <p className="font-semibold">Joint Operation with Bihar Forest & Wildlife Govt Department</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Collaborations & Seminars Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Ground Collaborations & Community Work
          </h2>
          <p className="text-slate-600 text-sm">
            Hum prashasan, NGO aur aam nagrikon ke sath milkar Bihar ke har kona me jagrukta phaila rahe hain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Working with Wildlife Trust of India (WTI) & Bihar Govt
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We work in close coordination with Wildlife Trust of India (WTI) and Bihar Forest & Wildlife Department for technical monitoring, legal confiscations of illegally held species, and safe release of animals back into protected sanctuaries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Gram Panchayat Sarpanch Awareness Drives
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Spreading awareness on a local village basis with Sarpanchs in our own Panchayat in Bihar. We conduct open village meetings to eradicate harmful myths (such as killing Greater Coucals for asthma or capturing owls for superstitious rituals).
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4 md:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Workshops & Seminars in Schools, Coaching Centres & Colleges
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Attended seminars and delivered interactive workshops and environmental awareness sessions across various schools, coaching institutes, and colleges in Bihar. We inspire the young generation to become wildlife protectors, teach first-aid protocols for injured birds, and share live field rescue stories.
            </p>
          </div>

        </div>

      </div>

      {/* Real Ground Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
          <Camera className="w-6 h-6 text-emerald-600" />
          <h2 className="text-2xl font-extrabold text-slate-900">
            Real Rescue Operations & Field Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="h-56 bg-slate-100 overflow-hidden relative">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">{img.title}</h4>
                <p className="text-slate-500 text-xs">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
