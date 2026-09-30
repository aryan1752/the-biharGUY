import React, { useState } from 'react';
import RescueCard from '../components/RescueCard';
import RescueModal from '../components/RescueModal';
import { INITIAL_RESCUES } from '../data/rescueData';
import { Search, Filter, ShieldCheck, Feather, Heart } from 'lucide-react';

export default function RescuesPage() {
  const [selectedRescue, setSelectedRescue] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Owls', 'Birds', 'Snakes & Reptiles', 'Mammals'];

  const filteredRescues = INITIAL_RESCUES.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.story.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Title Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Complete Wildlife Log ({INITIAL_RESCUES.length} Rescues)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Animals Rescued With Dates & Stories
          </h1>

          <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
            Mushkil waqt mein fance janwaron aur durlabh pakshiyon ki ground rescue stories. Owls, snakes, fox babies, deer, rollar birds aur pythons ke saath har rescue operation ki puri jaankari.
          </p>

          {/* Filter Bar & Search Input */}
          <div className="pt-4 flex flex-col md:flex-row gap-4 justify-between items-center border-t border-slate-100">
            
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search animal, date, story..."
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-slate-400"
              />
            </div>

          </div>

        </div>

        {/* Rescues Grid */}
        {filteredRescues.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRescues.map((rescue) => (
              <RescueCard
                key={rescue.id}
                rescue={rescue}
                onSelect={(item) => setSelectedRescue(item)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <Feather className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-lg text-slate-800">Koi rescue story nahi mili</h3>
            <p className="text-slate-500 text-xs">Kripya keyword badlein ya filters clear karein.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}
              className="bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-xl mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Modal Popup for Details */}
      {selectedRescue && (
        <RescueModal
          rescue={selectedRescue}
          onClose={() => setSelectedRescue(null)}
        />
      )}
    </div>
  );
}
