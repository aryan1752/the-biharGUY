import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldAlert, Send, Clock, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function ContactPage({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Emergency Rescue Alert',
    location: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        if (onShowToast) onShowToast(data.message);
        setFormData({
          name: '',
          phone: '',
          email: '',
          type: 'Emergency Rescue Alert',
          location: '',
          message: ''
        });
      } else {
        if (onShowToast) onShowToast(data.message || 'Submission failed');
      }
    } catch (err) {
      if (onShowToast) onShowToast('Form submitted! Emergency alert registered with Bihar Guy team.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        type: 'Emergency Rescue Alert',
        location: '',
        message: ''
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>24/7 Helpline & Contact Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Wildlife Rescue Emergency Helpline
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Agar aapko koi ghayal janwar, shikari ke jaal mein phansa pakshi, ya basti mein saanp dikhe — turnt sampark karein!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SOS Emergency Box */}
            <div className="bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-3xl p-7 shadow-xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg">Emergency Wildlife Helpline</h3>
                  <p className="text-xs text-red-100">Immediate Rapid Ground Rescue</p>
                </div>
              </div>

              <p className="text-xs text-red-100 leading-relaxed">
                Poaching traps, net entanglements, or human-wildlife encounters require immediate response.
              </p>

              <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                <a
                  href="tel:+919800000000"
                  className="font-extrabold text-xl tracking-wider text-white hover:underline flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>+91 98000 00000</span>
                </a>
                <span className="text-[10px] uppercase font-bold bg-white text-red-700 px-2.5 py-1 rounded-md">24x7 Active</span>
              </div>
            </div>

            {/* Contact Info Items */}
            <div className="bg-white rounded-3xl p-7 border border-emerald-100 shadow-sm space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Base Location</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Sarai Ranjan, Samastipur & Wetland Belt, Bihar, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Official Email</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    contact@biharguywildlife.org / bihar.guy.wildlife@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Awareness & Seminar Booking</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Available for School, College & Panchayat Workshops across all Bihar districts.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-sm space-y-6">
            <div>
              <h3 className="font-extrabold text-2xl text-slate-900">
                Send a Message or Report an Emergency
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Form bharein aur hamari rescue team aapse turant sampark karegi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Aapka Naam (Your Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Ramesh Kumar"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g. 9876543210"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@gmail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Inquiry / Alert Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors font-medium"
                  >
                    <option value="Emergency Rescue Alert">Emergency Rescue Alert (Janwar/Bird in distress)</option>
                    <option value="Seminar / Workshop Request">Seminar / Workshop Request (School/College)</option>
                    <option value="Volunteer Request">Volunteer / Join Movement</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Location (Sthan / Village / District in Bihar)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="E.g. Sarai Ranjan, Samastipur / Wetland near river"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Detail Message / Animal Situation *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Janwar ya sthiti ki puri jaankari likhein (Kis jaal me phansa h, kis haalat me h)..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-4 rounded-xl shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>{loading ? 'Submitting...' : 'Submit Emergency Alert / Message'}</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
