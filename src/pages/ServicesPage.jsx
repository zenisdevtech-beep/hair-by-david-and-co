import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Scissors, 
  Clock, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  HelpCircle, 
  Calendar,
  Filter,
  Download,
  Info,
  ArrowRight,
  Star
} from 'lucide-react';
import { SERVICES, CATEGORIES, SALON_INFO } from '../data/salonData';
import PriceEstimator from '../components/PriceEstimator';

export default function ServicesPage({ onSelectServiceForBooking }) {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(initialCat || 'All Services');
  const [searchQuery, setSearchQuery] = useState('');
  const [menuViewMode, setMenuViewMode] = useState('detailed'); // 'detailed' | 'compact'

  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam && CATEGORIES.includes(catParam)) {
      setSelectedCategory(catParam);
    }
  }, [searchParams]);

  const filteredServices = useMemo(() => {
    return SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
      const matchesSearch = 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20">
      {/* Editorial Menu Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-semibold text-gold-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Toronto Fashion District • 23 Years of Scissor & Colour Mastery</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-sand-50 font-normal tracking-tight">
          The Salon Menu & Pricing
        </h1>
        <p className="text-sand-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-light">
          Every session at <strong>Hair By David & Co.</strong> includes our thorough diagnostic consultation, aromatherapy botanical wash, stress-relief scalp massage, and custom finishing blow-dry in Suite 501.
        </p>

        {/* 3 Pillars of Pricing Transparency */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-sand-300 border-y border-gold-500/15 py-3.5 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Non-Toxic Formaldehyde-Free Cezanne</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Olaplex & Kérastase Bond Weld Included</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>7-Day Complimentary Adjustment Policy</span>
          </div>
        </div>
      </div>

      {/* Filter, Search & View Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-noir-900 border border-gold-500/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All Services' 
                ? SERVICES.length 
                : SERVICES.filter(s => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-gold-400 to-amber-300 text-noir-950 font-bold shadow-md'
                      : 'bg-noir-950 text-sand-300 hover:text-white border border-white/5 hover:border-gold-500/30'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat ? 'bg-noir-950/20 text-noir-950' : 'bg-noir-800 text-sand-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Controls: Search & Layout Toggle */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gold-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search balayage, cut, keratin..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-noir-950 border border-gold-500/30 text-sand-100 text-xs placeholder-sand-500 focus:outline-none focus:border-gold-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-sand-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center rounded-xl bg-noir-950 border border-white/5 p-1 text-xs">
              <button
                onClick={() => setMenuViewMode('detailed')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  menuViewMode === 'detailed'
                    ? 'bg-gold-500/20 text-gold-300 font-bold'
                    : 'text-sand-400 hover:text-sand-200'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setMenuViewMode('compact')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  menuViewMode === 'compact'
                    ? 'bg-gold-500/20 text-gold-300 font-bold'
                    : 'text-sand-400 hover:text-sand-200'
                }`}
              >
                Menu List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-noir-900 rounded-2xl border border-white/10">
            <p className="text-sand-400 text-sm">No services matched your query "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Services'); }}
              className="mt-3 text-xs text-gold-400 font-semibold underline"
            >
              Reset all filters
            </button>
          </div>
        ) : menuViewMode === 'detailed' ? (
          /* DETAILED CARDS VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl overflow-hidden bg-noir-900 border border-gold-500/20 hover:border-gold-400/70 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-noir-950/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] uppercase font-bold text-gold-300 border border-gold-500/30">
                      {service.category}
                    </div>
                    {service.popular && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-gold-400 to-amber-300 text-noir-950 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow">
                        Client Favorite
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[11px] text-sand-400 uppercase tracking-wider">From</span>
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-sand-50">${service.price}</span>
                        <span className="text-[10px] text-sand-500">CAD</span>
                      </div>
                      <span className="text-xs text-sand-300 flex items-center gap-1.5 font-medium bg-noir-950 px-3 py-1 rounded-full border border-white/5">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        {service.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-sand-100 font-semibold mb-2 group-hover:text-gold-300 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs text-sand-400 leading-relaxed mb-4 line-clamp-3 font-light">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-noir-950 text-sand-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectServiceForBooking(service.name)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 text-noir-950 text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Reserve This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* COMPACT EDITORIAL PRICE LIST VIEW */
          <div className="bg-noir-900 border border-gold-500/25 rounded-2xl p-6 sm:p-8 shadow-xl divide-y divide-white/10">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] px-3 rounded-xl transition-colors"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                      {service.category}
                    </span>
                    {service.popular && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-gold-500/20 text-gold-300 font-bold uppercase">
                        Most Loved
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-lg text-sand-50 font-semibold">{service.name}</h4>
                  <p className="text-xs text-sand-400 leading-relaxed font-light">{service.description}</p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 flex-shrink-0">
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-sand-100 block">${service.price}</span>
                    <span className="text-[11px] text-sand-400">{service.duration}</span>
                  </div>
                  <button
                    onClick={() => onSelectServiceForBooking(service.name)}
                    className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Price Estimator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <PriceEstimator onBookWithOptions={(opts) => onSelectServiceForBooking(opts.service)} />
      </div>

      {/* Salon Guarantee & Consultation Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-noir-950 via-noir-900 to-noir-950 border border-gold-500/30 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg text-sand-100 font-semibold">
              7-Day Adjustment Policy
            </h4>
            <p className="text-xs text-sand-400 leading-relaxed">
              If your haircut, toner, or balayage needs fine-tuning after living in it for a week, return for a complimentary touch-up in Suite 501.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg text-sand-100 font-semibold">
              Non-Toxic Cezanne Keratin
            </h4>
            <p className="text-xs text-sand-400 leading-relaxed">
              100% formaldehyde-free smoothing. No toxic fumes, eliminates frizz for up to 5 months, and preserves your natural body.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg text-sand-100 font-semibold">
              Personalized Consultation
            </h4>
            <p className="text-xs text-sand-400 leading-relaxed">
              Unsure which blonde tone or cut matches your lifestyle? Call us at <strong className="text-gold-300">(416) 913-2146</strong> or take our 60s quiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
