import React from 'react';
import { Phone, Calendar, Navigation, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function MobileQuickBar({ onOpenBooking }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-noir-950/95 backdrop-blur-xl border-t border-gold-500/25 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 items-center">
        {/* Call */}
        <a
          href={SALON_INFO.phones.telLink}
          className="flex flex-col items-center justify-center py-1 text-sand-300 hover:text-gold-400 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-noir-850 border border-white/10 flex items-center justify-center text-gold-400 mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium tracking-tight">Call</span>
        </a>

        {/* Directions */}
        <a
          href={SALON_INFO.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1 text-sand-300 hover:text-gold-400 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-noir-850 border border-white/10 flex items-center justify-center text-gold-400 mb-0.5">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium tracking-tight">Directions</span>
        </a>

        {/* Hours / Info */}
        <div className="flex flex-col items-center justify-center py-1 text-sand-300">
          <div className="w-8 h-8 rounded-full bg-noir-850 border border-amber-500/20 flex items-center justify-center text-amber-300 mb-0.5">
            <Clock className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium text-amber-300/90 text-center truncate max-w-[65px]">
            10:30 am
          </span>
        </div>

        {/* Book */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1 text-noir-950 active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gold-400 to-amber-300 flex items-center justify-center text-noir-950 shadow-md mb-0.5">
            <Calendar className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-gold-400 uppercase">
            Book
          </span>
        </button>
      </div>
    </div>
  );
}

