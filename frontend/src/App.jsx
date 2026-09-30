import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import UnderConstruction from './pages/UnderConstruction';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  const handleSubscribe = async (email) => {
    try {
      const res = await fetch('/api/subscribers/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      setToastMessage(data.message || 'Subscribe karne ke liye dhanyawad!');
    } catch (err) {
      setToastMessage('Subscribe karne ke liye dhanyawad! BIHAR GUY Wildlife Mission se judne ke liye aabhar.');
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
        
        {/* Navigation Header */}
        <Navbar />

        {/* Main Route Views */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onSubscribe={handleSubscribe} />} />
            <Route path="/about" element={<UnderConstruction pageName="About Section" />} />
            <Route path="/rescues" element={<UnderConstruction pageName="Rescues Log" />} />
            <Route path="/contact" element={<UnderConstruction pageName="Contact Page" />} />
            <Route path="/admin" element={<UnderConstruction pageName="Admin Dashboard" />} />
            <Route path="*" element={<UnderConstruction pageName="Page" />} />
          </Routes>
        </main>

        {/* Toast Feedback Notification */}
        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage('')} />
        )}

        {/* Footer */}
        <Footer onSubscribe={handleSubscribe} />

      </div>
    </Router>
  );
}
