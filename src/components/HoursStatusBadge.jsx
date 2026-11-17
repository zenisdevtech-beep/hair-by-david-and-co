import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function HoursStatusBadge({ showDetails = false }) {
  // Salon opens at 10:30 am
  const [isOpen, setIsOpen] = useState(false);
  const [currentTimeText, setCurrentTimeText] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      // Evaluate based on current local day & time
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1 is Monday, 2 is Tuesday, etc.
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentDecimal = hours + minutes / 60;

      // Tuesday to Friday: 10:30 (10.5) to 19:30 (19.5)
      // Saturday: 9:30 (9.5) to 18:00 (18.0)
      // Sunday (0) and Monday (1): Closed
      let open = false;
      if (day >= 2 && day <= 5) {
        if (currentDecimal >= 10.5 && currentDecimal < 19.5) {
          open = true;
        }
      } else if (day === 6) {
        if (currentDecimal >= 9.5 && currentDecimal < 18.0) {
          open = true;
        }
      }

      setIsOpen(open);
      setCurrentTimeText(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-noir-900/80 border border-gold-500/20 text-xs font-medium tracking-wide">
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpen ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
      </span>
      <span className={isOpen ? 'text-emerald-300' : 'text-amber-300'}>
        {isOpen ? 'Open Now Until 7:30 PM' : 'Closed · Opens 10:30 am'}
      </span>
      {showDetails && (
        <span className="text-sand-400 hidden sm:inline border-l border-white/10 pl-2">
          Fashion District Loft #501
        </span>
      )}
    </div>
  );
}

