import React, { useState, useRef } from 'react';
import { TRANSFORMATIONS } from '../data/salonData';
import { Sparkles, Scissors, Clock, UserCheck } from 'lucide-react';

export default function BeforeAfterSlider({ onBookService }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const current = TRANSFORMATIONS[selectedIndex];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-noir-900 border border-gold-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Real Toronto Studio Transformations
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 font-medium">
            Interactive Before & After Showcase
          </h3>
          <p className="text-sand-400 text-sm mt-1">
            Drag the gold divider left or right to inspect the seamless transformation.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2">
          {TRANSFORMATIONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIndex(idx);
                setSliderPos(50);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedIndex === idx
                  ? 'bg-gold-500 text-noir-950 font-bold shadow-md'
                  : 'bg-noir-800 text-sand-300 hover:text-white border border-white/5'
              }`}
            >
              {item.title.split(' to ')[1] || item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Split Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <div
            ref={containerRef}
            className="relative w-full h-[360px] sm:h-[460px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-gold-500/30 shadow-inner group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <img
              src={current.afterImg}
              alt="After transformation"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-noir-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-emerald-500/30 shadow">
              AFTER RESULT
            </div>

            {/* Before Image (Clipped by slider percentage) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={current.beforeImg}
                alt="Before transformation"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%', maxWidth: 'none' }}
              />
              <div className="absolute top-4 left-4 bg-noir-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-300 border border-amber-500/30 shadow">
                BEFORE
              </div>
            </div>

            {/* Slider Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-amber-400 to-gold-500 cursor-ew-resize z-20 shadow-[0_0_15px_rgba(197,160,89,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-noir-950 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-xl group-hover:scale-110 transition-transform">
                <span className="text-[10px] font-bold">◄ ►</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Details & Notes */}
        <div className="lg:col-span-4 space-y-5">
          <div className="p-4 rounded-xl bg-noir-800/80 border border-white/5 space-y-2">
            <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block">
              {current.category}
            </span>
            <h4 className="font-serif text-xl text-sand-50 font-bold">
              {current.title}
            </h4>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
              <span className="text-amber-400 font-semibold block mb-0.5">Starting State:</span>
              <p className="text-sand-300">{current.beforeText}</p>
            </div>

            <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <span className="text-emerald-400 font-semibold block mb-0.5">David & Co. Result:</span>
              <p className="text-sand-300">{current.afterText}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-sand-400 border-t border-white/5 pt-3">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Artist: <strong className="text-sand-200">{current.stylist}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Session: <strong className="text-sand-200">{current.duration}</strong></span>
            </div>
          </div>

          <button
            onClick={() => onBookService && onBookService(current.title)}
            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 shadow"
          >
            <Scissors className="w-3.5 h-3.5" />
            Book This Transformation
          </button>
        </div>
      </div>
    </div>
  );
}

