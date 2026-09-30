import React, { useState, useEffect } from 'react';
import { ShieldCheck, Plus, Inbox, CheckCircle2, Phone, MapPin, Calendar, Image as ImageIcon } from 'lucide-react';
import { INITIAL_RESCUES } from '../data/rescueData';

export default function AdminPage({ onShowToast }) {
  const [messages, setMessages] = useState([]);
  const [rescuesList, setRescuesList] = useState(INITIAL_RESCUES);
  const [activeTab, setActiveTab] = useState('messages');

  // New rescue form state
  const [newRescue, setNewRescue] = useState({
    title: '',
    species: '',
    category: 'Birds',
    rescueDate: '',
    location: '',
    sourceThreat: '',
    story: '',
    image: '/images/wetland_bird_rescue.jpg',
    status: 'Rehabilitated & Released'
  });

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (Array.isArray(data)) setMessages(data);
    } catch (err) {
      console.warn('Could not fetch remote messages');
    }
  };

  const handleAddRescue = (e) => {
    e.preventDefault();
    if (!newRescue.title || !newRescue.species || !newRescue.story) return;

    const itemToAdd = {
      ...newRescue,
      id: Date.now().toString(),
      rescueDate: newRescue.rescueDate || new Date().toLocaleDateString('en-GB')
    };

    setRescuesList([itemToAdd, ...rescuesList]);
    if (onShowToast) onShowToast('Nayi Wildlife Rescue Story safaltapurvak add ho gayi!');
    setNewRescue({
      title: '',
      species: '',
      category: 'Birds',
      rescueDate: '',
      location: '',
      sourceThreat: '',
      story: '',
      image: '/images/wetland_bird_rescue.jpg',
      status: 'Rehabilitated & Released'
    });
    setActiveTab('rescues');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Admin Dashboard Desk</span>
            </div>
            <h1 className="text-2xl font-extrabold text-white">BIHAR GUY Control Panel</h1>
          </div>

          <div className="flex items-center space-x-2 bg-slate-800 p-1.5 rounded-2xl border border-slate-700">
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'messages' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              Emergency Alerts ({messages.length})
            </button>

            <button
              onClick={() => setActiveTab('add')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'add' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              + Add New Rescue Story
            </button>
          </div>
        </div>

        {/* Tab 1: Reported Emergency Messages */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="font-bold text-xl text-slate-900 flex items-center space-x-2">
              <Inbox className="w-5 h-5 text-emerald-600" />
              <span>Submitted Emergency Calls & Contact Alerts</span>
            </h2>

            {messages.length > 0 ? (
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-slate-900 text-sm">{msg.name}</span>
                        <span className="ml-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                          {msg.type}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">
                        {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : 'Just now'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600 flex flex-wrap gap-4 pt-1">
                      <span className="flex items-center space-x-1 font-semibold text-slate-800">
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{msg.phone}</span>
                      </span>
                      {msg.location && (
                        <span className="flex items-center space-x-1 font-semibold text-slate-800">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{msg.location}</span>
                        </span>
                      )}
                    </div>

                    <p className="text-slate-700 text-xs bg-white p-3 rounded-xl border border-slate-200 mt-2">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-xs italic py-6 text-center">
                Abhi tak koi naya emergency message submit nahi hua hai. Contact form submit karke check karein.
              </p>
            )}
          </div>
        )}

        {/* Tab 2: Add New Rescue Story Form */}
        {activeTab === 'add' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="font-bold text-xl text-slate-900 flex items-center space-x-2">
              <Plus className="w-5 h-5 text-emerald-600" />
              <span>Add New Wildlife Rescue Story</span>
            </h2>

            <form onSubmit={handleAddRescue} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Rescue Title *</label>
                  <input
                    type="text"
                    required
                    value={newRescue.title}
                    onChange={(e) => setNewRescue({ ...newRescue, title: e.target.value })}
                    placeholder="E.g. Scops Owl Rescue from Hunter"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Species Name *</label>
                  <input
                    type="text"
                    required
                    value={newRescue.species}
                    onChange={(e) => setNewRescue({ ...newRescue, species: e.target.value })}
                    placeholder="E.g. Scops Owl / Cobra / Deer"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={newRescue.category}
                    onChange={(e) => setNewRescue({ ...newRescue, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold"
                  >
                    <option value="Owls">Owls</option>
                    <option value="Birds">Birds</option>
                    <option value="Snakes & Reptiles">Snakes & Reptiles</option>
                    <option value="Mammals">Mammals</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Rescue Date</label>
                  <input
                    type="text"
                    value={newRescue.rescueDate}
                    onChange={(e) => setNewRescue({ ...newRescue, rescueDate: e.target.value })}
                    placeholder="E.g. 15 Oct 2025"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={newRescue.location}
                    onChange={(e) => setNewRescue({ ...newRescue, location: e.target.value })}
                    placeholder="E.g. Sarai Ranjan, Bihar"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Source Threat / Circumstance</label>
                <input
                  type="text"
                  value={newRescue.sourceThreat}
                  onChange={(e) => setNewRescue({ ...newRescue, sourceThreat: e.target.value })}
                  placeholder="E.g. Trapped in poacher mist net in wetland"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Rescue Story Details *</label>
                <textarea
                  rows={4}
                  required
                  value={newRescue.story}
                  onChange={(e) => setNewRescue({ ...newRescue, story: e.target.value })}
                  placeholder="Ground rescue operations story..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs"
                />
              </div>

              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-colors"
              >
                + Publish Rescue Story
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
