import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Mail, Phone, MapPin, Send, Youtube, Instagram, Facebook, ShieldCheck } from 'lucide-react';

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('');

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      if (onSubscribe) onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-forest-dark text-white pt-16 pb-12 border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                <Leaf className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-black text-2xl tracking-tight text-white">BIHAR</span>
                <span className="font-black text-2xl tracking-tight text-emerald-400 ml-1">GUY</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Main Bihar ki wildlife aur nature ko preserve karne ke mission par hoon. Ek chhoti si shuruaat se lekar bade sankalp tak, is safar mein hamare saath judiye aur Bihar ki natural beauty ko bachayein!
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Working alongside Bihar Govt & WTI</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-emerald-500/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center space-x-2">
                  <span className="text-emerald-500">›</span> <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center space-x-2">
                  <span className="text-emerald-500">›</span> <span>About Bihar Guy</span>
                </Link>
              </li>
              <li>
                <Link to="/rescues" className="hover:text-emerald-400 transition-colors flex items-center space-x-2">
                  <span className="text-emerald-500">›</span> <span>All 20+ Rescue Stories</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center space-x-2">
                  <span className="text-emerald-500">›</span> <span>Emergency Rescue Helpline</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Emergency */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-emerald-500/30 pb-2 inline-block">
              Emergency & Location
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Sarai Ranjan, Samastipur & Wetlands Corridor, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>+91 98000 00000 / 24x7 Helpline</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>contact@biharguywildlife.org</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-emerald-500/30 pb-2 inline-block">
              Subscribe & Join Us
            </h4>
            <p className="text-slate-300 text-xs mb-3">
              Subscribe karein aur Bihar ki Wildlife preservation mission ka hissa banein!
            </p>
            <form onSubmit={handleSubscribeSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Apna email darj karein..."
                  required
                  className="w-full bg-slate-800/90 border border-slate-700 text-white text-xs rounded-xl px-3.5 py-3 focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/40"
              >
                <span>Subscribe Now</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} BIHAR GUY Wildlife & Nature Preservation Mission. All Rights Reserved.</p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>for Bihar's Natural Beauty & Animals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
