import React, { useState } from 'react';
import { Sparkles, Eye, Scissors, Heart, X, Check, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { SALON_INFO } from '../data/salonData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const LOOKS = [
  {
    id: 1,
    title: "Dimensional Honey Balayage & Face-Framing",
    category: "Balayage & Blondes",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80",
    stylist: "Valerie",
    time: "3.5 hrs",
    formula: "Level 9 French Balayage with warm beige glaze & shadow root",
    tags: ["Balayage", "Honey Blonde", "Lived In"]
  },
  {
    id: 2,
    title: "Architectural French Bob with Air Bangs",
    category: "Precision Bobs & Pixies",
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1000&q=80",
    stylist: "David",
    time: "1 hr",
    formula: "Dry scissor carve with interior weight removal for effortless wash & wear",
    tags: ["French Bob", "Air Bangs", "David Signature"]
  },
  {
    id: 3,
    title: "Glass Finish Cezanne Keratin Smoothing",
    category: "Cezanne Smoothing",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    stylist: "Julian",
    time: "2.5 hrs",
    formula: "100% Formaldehyde-Free Cezanne Classic silk protein infusion",
    tags: ["Cezanne", "Zero Frizz", "High Shine"]
  },
  {
    id: 4,
    title: "Romantic Textured Low Chignon with Floral Pins",
    category: "Bridal & Updos",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    stylist: "Maya",
    time: "1.5 hrs",
    formula: "Air-spun backcombing, flexible ceramic curling & all-day humidity lock",
    tags: ["Bridal Hair", "Wedding", "TIFF Gala"]
  },
  {
    id: 5,
    title: "Icy Platinum Babylights & Tone",
    category: "Balayage & Blondes",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
    stylist: "Valerie",
    time: "4 hrs",
    formula: "Micro-woven babylights, violet ice toner & Olaplex intensive bond weld",
    tags: ["Platinum", "Babylights", "Cool Blonde"]
  },
  {
    id: 6,
    title: "Defined Curly Lob with Hydration Steam Wash",
    category: "Curly & Textured",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1000&q=80",
    stylist: "David",
    time: "1.25 hrs",
    formula: "Curl-by-curl dimensional cut, botanical moisture rinse & diffuser set",
    tags: ["Curly Hair", "Type 3A/3B", "Bounce"]
  },
  {
    id: 7,
    title: "Caramel Ribbons on Deep Espresso Brunette",
    category: "Balayage & Blondes",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    stylist: "Valerie",
    time: "3 hrs",
    formula: "Hand-painted caramel babylights melted into espresso base",
    tags: ["Brunette", "Caramel Balayage", "Subtle"]
  },
  {
    id: 8,
    title: "Italian Textured Lob with Curtain Bangs",
    category: "Precision Bobs & Pixies",
    image: "https://images.unsplash.com/photo-1519742866993-661304602f06?auto=format&fit=crop&w=1000&q=80",
    stylist: "David",
    time: "1.15 hrs",
    formula: "Collarbone grazing lob with razor-softened edges and butterfly layers",
    tags: ["Lob", "Curtain Bangs", "Movement"]
  }
];

export default function LookbookPage({ onSelectServiceForBooking }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeLook, setActiveLook] = useState(null);

  const categories = ['All', 'Balayage & Blondes', 'Precision Bobs & Pixies', 'Cezanne Smoothing', 'Bridal & Updos', 'Curly & Textured'];

  const filteredLooks = selectedTag === 'All'
    ? LOOKS
    : LOOKS.filter(look => look.category === selectedTag);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
          Portfolio & Editorial Showcase
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-sand-50 font-normal tracking-tight">
          The Suite 501 Lookbook
        </h1>
        <p className="text-sand-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Explore signature styles crafted inside our Toronto Fashion District loft. Click on any photo to inspect color recipes, stylist notes, and book that specific transformation.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTag(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedTag === cat
                  ? 'bg-gold-500 text-noir-950 font-bold shadow-md'
                  : 'bg-noir-900 text-sand-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Looks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              onClick={() => setActiveLook(look)}
              className="rounded-2xl overflow-hidden bg-noir-900 border border-gold-500/20 group cursor-pointer hover:border-gold-400/70 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-3 left-3 bg-noir-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold text-gold-300 border border-gold-500/30">
                  {look.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-4 py-2 rounded-full bg-noir-950/90 text-gold-300 text-xs font-semibold flex items-center gap-1.5 border border-gold-400 shadow-xl">
                    <Eye className="w-3.5 h-3.5" /> View Look Details
                  </span>
                </div>
              </div>

              <div className="p-4">
                <span className="text-[10px] uppercase tracking-wider text-gold-400 block font-semibold mb-1">
                  Artist: {look.stylist} • {look.time}
                </span>
                <h3 className="font-serif text-base text-sand-100 font-semibold group-hover:text-gold-300 transition-colors">
                  {look.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Before & After Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <BeforeAfterSlider onBookService={(service) => onSelectServiceForBooking(service)} />
      </div>

      {/* Look Detail Lightbox Modal */}
      {activeLook && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-noir-1000/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-noir-950 border border-gold-500/40 rounded-2xl max-w-3xl w-full shadow-2xl relative overflow-hidden animate-fade-in">
            <button
              onClick={() => setActiveLook(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-noir-900/80 text-sand-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-72 md:h-full relative">
                <img
                  src={activeLook.image}
                  alt={activeLook.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 border border-gold-500/30">
                      {activeLook.category}
                    </span>
                    <span className="text-xs text-sand-400">Time: {activeLook.time}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-sand-50 font-bold mb-3">
                    {activeLook.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-noir-900 border border-white/5 space-y-2 mb-4">
                    <span className="text-[11px] uppercase font-bold text-gold-400 tracking-wider block">
                      Formula & Craft Breakdown:
                    </span>
                    <p className="text-xs text-sand-300 leading-relaxed">
                      {activeLook.formula}
                    </p>
                  </div>

                  <div className="text-xs text-sand-400 space-y-1">
                    <p>Created by: <strong className="text-sand-100">{activeLook.stylist}</strong> (Hair By David & Co.)</p>
                    <p>Location: Suite 501, 477 Richmond St W, Toronto</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <button
                    onClick={() => {
                      const serviceTitle = activeLook.title;
                      setActiveLook(null);
                      onSelectServiceForBooking(serviceTitle);
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 text-noir-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    Book This Signature Style
                  </button>
                  <p className="text-[11px] text-center text-sand-500">
                    Bring this exact look or photo reference to your consultation!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
