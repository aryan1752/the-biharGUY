import React, { useState } from 'react';
import { Play, ExternalLink, Youtube, X } from 'lucide-react';

const YOUTUBE_VIDEOS = [
  {
    id: 'm37-gf0w44s',
    title: 'This parrot has been locked in a small cage for many years. I am training it to go to the jungle',
    channel: '@THEBIHARGUY',
    url: 'https://youtu.be/m37-gf0w44s',
    thumbnail: 'https://img.youtube.com/vi/m37-gf0w44s/hqdefault.jpg',
    description: 'Years of illegal cage captivity left this parrot unable to fly. Watch the dedicated step-by-step wild flight training and jungle rehabilitation process.',
    badge: 'YOUTUBE VIDEO'
  },
  {
    id: '4xfsR15lhx4',
    title: 'Bandar Aakhir insanon ko kyon katata hai',
    channel: '@THEBIHARGUY',
    url: 'https://youtu.be/4xfsR15lhx4',
    thumbnail: 'https://img.youtube.com/vi/4xfsR15lhx4/hqdefault.jpg',
    description: 'Understanding monkey conflict behavior, territorial instincts, and practical ground safety tips to prevent bites during wildlife encounters in Bihar.',
    badge: 'YOUTUBE VIDEO'
  }
];

export default function YoutubeVideoCards() {
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  return (
    <section className="py-16 sm:py-20 bg-[#07111e] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/50 text-red-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Youtube className="w-4 h-4 text-red-500 fill-current" />
            <span>Official Channel Videos</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Watch Official YouTube Channel Videos
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore ground rescue operations & wildlife documentaries on our official YouTube channel.
          </p>
        </div>

        {/* 2 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {YOUTUBE_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-[#0f1d30] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div
                className="relative aspect-video w-full overflow-hidden cursor-pointer bg-slate-900"
                onClick={() => setActiveModalVideo(video.id)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                {/* Top Red Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider shadow-lg flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping mr-1 inline-block" />
                  <span>{video.badge}</span>
                </div>

                {/* Center YouTube Red Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 block mb-1.5">
                    {video.channel}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Bottom Link Row */}
                <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-bold transition-colors"
                  >
                    <span>Visit YouTube Channel</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveModalVideo(video.id)}
                    className="text-xs text-slate-400 hover:text-white font-medium transition-colors"
                  >
                    Play Inline ▶
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Embedded Video Modal Popup */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-slate-800/90 border-b border-slate-700">
              <div className="flex items-center space-x-2 text-white font-bold text-sm">
                <Youtube className="w-5 h-5 text-red-500 fill-current" />
                <span>The Bihar Guy - YouTube Player</span>
              </div>
              <button
                onClick={() => setActiveModalVideo(null)}
                className="p-1.5 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Iframe Container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeModalVideo}?autoplay=1`}
                title="YouTube Video Player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
