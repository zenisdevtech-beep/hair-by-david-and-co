import React, { useState } from 'react';
import { Calculator, Check, Scissors, Sparkles, Clock } from 'lucide-react';

export default function PriceEstimator({ onBookWithOptions }) {
  const [selectedLength, setSelectedLength] = useState('medium');
  const [selectedService, setSelectedService] = useState('balayage');
  const [selectedAddons, setSelectedAddons] = useState(['olaplex']);

  const lengths = [
    { id: 'short', name: 'Short (Pixie/Bob)', modifier: 0, timeMod: 0 },
    { id: 'medium', name: 'Medium (Shoulder)', modifier: 15, timeMod: 15 },
    { id: 'long', name: 'Long (Below Shoulder)', modifier: 30, timeMod: 30 },
    { id: 'extra', name: 'Extra Long / Thick', modifier: 50, timeMod: 45 },
  ];

  const baseServices = [
    { id: 'cut', name: "David's Signature Cut & Style", basePrice: 95, baseTime: 60 },
    { id: 'balayage', name: 'Signature Balayage & French Foilayage', basePrice: 245, baseTime: 180 },
    { id: 'cezanne', name: 'Cezanne Keratin Smoothing (Zero Frizz)', basePrice: 320, baseTime: 180 },
    { id: 'highlights', name: 'Full Head Multi-Dimensional Highlights', basePrice: 230, baseTime: 180 },
    { id: 'bleach-tone', name: 'Global Bleach & Tone Blonde', basePrice: 260, baseTime: 210 },
  ];

  const addonsList = [
    { id: 'olaplex', name: 'Olaplex No. 1 & No. 2 Bond Multiplier', price: 40, time: 15 },
    { id: 'scalp-spa', name: 'Warm Towel Scalp Head Spa Detox', price: 35, time: 20 },
    { id: 'gloss', name: 'High-Gloss Acidic Tone Glaze', price: 45, time: 20 },
    { id: 'extra-hydra', name: 'Deep Peptide Keratin Moisture Bath', price: 30, time: 15 },
  ];

  const currentLengthObj = lengths.find(l => l.id === selectedLength);
  const currentServiceObj = baseServices.find(s => s.id === selectedService);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = addonsList.find(a => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const addonsTimeTotal = selectedAddons.reduce((sum, addonId) => {
    const item = addonsList.find(a => a.id === addonId);
    return sum + (item ? item.time : 0);
  }, 0);

  const calculatedTotal = (currentServiceObj?.basePrice || 0) + (currentLengthObj?.modifier || 0) + addonsTotal;
  const calculatedMinutes = (currentServiceObj?.baseTime || 0) + (currentLengthObj?.timeMod || 0) + addonsTimeTotal;

  const hours = Math.floor(calculatedMinutes / 60);
  const minutes = calculatedMinutes % 60;
  const timeFormatted = `${hours > 0 ? `${hours} hr ` : ''}${minutes > 0 ? `${minutes} min` : ''}`;

  return (
    <div className="bg-noir-900 border border-gold-500/25 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center">
          <Calculator className="w-4 h-4" />
        </div>
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
          Transparent Fashion District Pricing
        </span>
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 font-medium mb-2">
        Interactive Hair Investment Estimator
      </h3>
      <p className="text-sand-400 text-sm mb-6">
        Select your hair length, target transformation, and luxury rituals for an instant upfront investment & duration preview.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Length */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-sand-300 mb-2">
              1. Hair Length & Density
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {lengths.map((len) => (
                <button
                  key={len.id}
                  type="button"
                  onClick={() => setSelectedLength(len.id)}
                  className={`p-2.5 rounded-lg text-xs font-medium text-center transition-all ${
                    selectedLength === len.id
                      ? 'bg-gold-500 text-noir-950 font-bold border-gold-400'
                      : 'bg-noir-800 text-sand-300 border border-white/5 hover:border-gold-500/40'
                  }`}
                >
                  {len.name}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Primary Service */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-sand-300 mb-2">
              2. Core Hair Transformation
            </label>
            <div className="space-y-2">
              {baseServices.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedService === srv.id
                      ? 'bg-gold-500/10 border-gold-400 text-gold-200'
                      : 'bg-noir-800/70 border-white/5 text-sand-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedService === srv.id ? 'border-gold-400 bg-gold-400 text-noir-950' : 'border-white/30'}`}>
                      {selectedService === srv.id && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-sm font-medium">{srv.name}</span>
                  </div>
                  <span className="text-xs font-bold text-sand-100">From ${srv.basePrice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Add-ons */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-sand-300 mb-2">
              3. Luxury Add-On Rituals (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addonsList.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                        : 'bg-noir-800/70 border-white/5 text-sand-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${isSelected ? 'border-gold-400 bg-gold-400 text-noir-950' : 'border-white/30'}`}>
                        {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <span className="truncate max-w-[170px]">{addon.name}</span>
                    </div>
                    <span className="font-semibold text-sand-200">+${addon.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Summary Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-noir-950 via-noir-900 to-noir-950 border border-gold-500/30 shadow-xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              Estimated Investment
            </span>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-sand-50">
                ${calculatedTotal}
              </span>
              <span className="text-xs text-sand-400 font-medium">CAD + tax</span>
            </div>

            <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 mb-6 flex items-center gap-3">
              <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div>
                <span className="text-xs text-sand-300 block">Estimated Studio Time:</span>
                <strong className="text-sm text-gold-200 font-semibold">{timeFormatted}</strong>
              </div>
            </div>

            <div className="space-y-2 text-xs border-t border-white/10 pt-4 text-sand-300">
              <div className="flex justify-between">
                <span>{currentServiceObj?.name}</span>
                <span className="font-semibold text-sand-100">${currentServiceObj?.basePrice}</span>
              </div>
              {currentLengthObj?.modifier > 0 && (
                <div className="flex justify-between text-sand-400">
                  <span>Length adjustment ({currentLengthObj.name})</span>
                  <span>+${currentLengthObj.modifier}</span>
                </div>
              )}
              {selectedAddons.map((aid) => {
                const a = addonsList.find(x => x.id === aid);
                return (
                  <div key={aid} className="flex justify-between text-sand-400">
                    <span className="truncate max-w-[200px]">{a?.name}</span>
                    <span>+${a?.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                if (onBookWithOptions) {
                  onBookWithOptions({
                    service: currentServiceObj?.name,
                    length: currentLengthObj?.name,
                    total: calculatedTotal,
                    duration: timeFormatted
                  });
                }
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 text-noir-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              Book With These Options
            </button>
            <p className="text-[11px] text-center text-sand-500">
              Complimentary tea, espresso & in-depth consultation included in Suite 501.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

