import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-emerald-900 text-white p-4 rounded-2xl shadow-2xl border border-emerald-500 flex items-start space-x-3 animate-slideUp">
      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
      <div className="flex-1">
        <h5 className="font-bold text-sm text-emerald-200">System Notification</h5>
        <p className="text-xs text-emerald-100 mt-1 leading-relaxed">{message}</p>
      </div>
      <button onClick={onClose} className="text-emerald-300 hover:text-white transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
