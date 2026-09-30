import React, { useState } from 'react';
import Hero from '../components/Hero';
import { ThreeDRescueCard } from '../components/ThreeDRescueCard';
import RescueModal from '../components/RescueModal';
import YoutubeVideoCards from '../components/YoutubeVideoCards';
import { CanvasText } from '../components/ui/canvas-text';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { INITIAL_RESCUES } from '../data/rescueData';
import { Youtube, Leaf } from 'lucide-react';

export default function Home({ onSubscribe }) {
  const [selectedRescue, setSelectedRescue] = useState(null);

  const aboutText = `We are on a mission to protect and preserve the rich wildlife, biodiversity, and natural heritage of Bihar. Through wildlife research, rescue, rehabilitation, and conservation awareness, we document the incredible species and ecosystems that make Bihar unique. We focus on migratory birds, native wildlife, wetlands, forests, and their habitats, combining field exploration with scientific monitoring and real rescue stories. We also share ground-level information to inspire responsible coexistence between people and nature.`;

  return (
    <div className="space-y-0 bg-white">
      
      {/* 1. TOP HERO SECTION (Full Area Cover Slider) */}
      <Hero />

      {/* 2. ABOUT THE BIHAR GUY SECTION (Side-by-Side Text & Image Alignment) */}
      <section id="about-section" className="py-12 sm:py-20 bg-slate-50 border-b border-emerald-100">
        <div className="w-[92%] md:w-[86%] lg:w-[80%] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column (7 Columns) */}
            <div className="md:col-span-7 space-y-5 text-left">
              
              {/* Header Label */}
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase text-emerald-800">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                <span className="bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">
                  ABOUT THE BIHAR GUY
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-left max-w-full">
                Protecting & Preserving{" "}
                <CanvasText
                  text="Bihar's Natural Heritage"
                  backgroundClassName="bg-emerald-600 dark:bg-emerald-700"
                  colors={[
                    "rgba(16, 185, 129, 1)",
                    "rgba(16, 185, 129, 0.9)",
                    "rgba(16, 185, 129, 0.8)",
                    "rgba(16, 185, 129, 0.7)",
                    "rgba(16, 185, 129, 0.6)",
                    "rgba(52, 211, 153, 0.8)"
                  ]}
                  lineGap={4}
                  animationDuration={15}
                  curveIntensity={20}
                />
              </h2>

              {/* Mobile Image Placement (Visible on small screens < 768px) */}
              <div className="block md:hidden my-4 transform translate-y-[5%]">
                <div className="w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-slate-900">
                  <img
                    src="/images/wildlife_elephant.jpg"
                    alt="Wildlife Elephant in Bihar Forest"
                    className="w-full h-auto object-cover block rounded-2xl"
                  />
                </div>
              </div>

              {/* Paragraph Text */}
              <div className="pt-1">
                <TextGenerateEffect words={aboutText} duration={0.35} />
              </div>

            </div>

            {/* Right Image Column (Aligned Side-by-Side on all screens >= 768px, shifted 5% down on Y-axis) */}
            <div className="hidden md:block md:col-span-5 transform translate-y-[5%]">
              <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/images/wildlife_elephant.jpg"
                  alt="Wildlife Elephant in Bihar Forest"
                  className="w-full h-auto object-cover block rounded-2xl"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. RESCUES SECTION (With Mobile Responsive CanvasText Title & 3D Cards) */}
      <section id="rescues-section" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Title Only */}
          <div className="flex items-center justify-center py-2 px-2 overflow-hidden">
            <h2 className="text-[18px] min-[400px]:text-[21px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 text-center max-w-full">
              <CanvasText
                text="Wildlife Rescues & Field Stories"
                backgroundClassName="bg-slate-900"
                colors={[
                  "#0f172a",
                  "#1e293b",
                  "#059669",
                  "#10b981",
                  "#34d399",
                  "#047857",
                  "#065f46"
                ]}
                lineGap={4}
                animationDuration={15}
                curveIntensity={30}
              />
            </h2>
          </div>

          {/* 3D Rescue Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_RESCUES.map((rescue) => (
              <ThreeDRescueCard
                key={rescue.id}
                rescue={rescue}
                onSelect={(item) => setSelectedRescue(item)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. FEATURED YOUTUBE RESCUE VIDEO CARDS */}
      <YoutubeVideoCards />



      {/* RESCUE MODAL DETAIL */}
      {selectedRescue && (
        <RescueModal
          rescue={selectedRescue}
          onClose={() => setSelectedRescue(null)}
        />
      )}

    </div>
  );
}
