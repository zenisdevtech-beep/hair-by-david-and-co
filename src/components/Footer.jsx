import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, MapPin, Phone, Mail, Star, Clock, CheckCircle, ArrowRight, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { SALON_INFO } from '../data/salonData';
import confetti from 'canvas-confetti';

export default function Footer({ onOpenBooking }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.9 },
        colors: ['#c5a059', '#dfba73', '#f5e3ba']
      });
    }
  };

  return (
    <footer className="bg-noir-1000 border-t border-gold-500/20 text-sand-300 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* VIP Welcome Banner */}
      <div className="border-b border-white/5 bg-gradient-to-r from-noir-950 via-noir-900 to-noir-950 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1 block">
              Toronto Fashion District Salon
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 font-medium">
              Join the Hair By David & Co. VIP List
            </h3>
            <p className="text-sand-400 text-sm mt-1">
              Receive seasonal hair trend previews, private booking windows, and 10% off your first Cezanne or Balayage ritual.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gold-500/10 border border-gold-500/40 text-gold-300 text-sm">
                <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span>Thank you! Your 10% privilege code is sent to your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address..."
                  className="px-4 py-3 rounded-lg bg-noir-900 border border-gold-500/30 text-sand-100 text-sm placeholder-sand-500 focus:outline-none focus:border-gold-400 flex-grow"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-lg bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
                >
                  Join VIP
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Heritage */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-gold-500/40 bg-gold-500/10 flex items-center justify-center text-gold-400">
                <Scissors className="w-4 h-4 -rotate-45" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-sand-50 block leading-tight">
                  Hair By David & Co.
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-400 block">
                  Est. 2003 • Toronto
                </span>
              </div>
            </Link>

            <p className="text-sand-400 text-sm leading-relaxed">
              Celebrating 23 years in Toronto's Fashion District. Professional hair studio specializing in personalized haircuts, master balayage, Cezanne keratin treatments, and custom hair colour in a sunlit 5th-floor loft.
            </p>

            {/* Google Reviews Badge */}
            <div className="p-3.5 rounded-xl bg-noir-900/90 border border-gold-500/20 space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-gold-400">
                  <Star className="w-4 h-4 fill-gold-400" />
                  <span className="font-bold text-sand-50 text-base">{SALON_INFO.rating}</span>
                  <span className="text-sand-400 text-xs">/ 5.0</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">
                  Google Verified
                </span>
              </div>
              <p className="text-xs text-sand-300">
                Over <strong className="text-gold-300">{SALON_INFO.reviewCount} five-star reviews</strong> from Toronto clients.
              </p>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-gold-400 hover:text-gold-300 underline block pt-1"
              >
                Read reviews on Google Maps →
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_INFO.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-noir-900 border border-white/10 flex items-center justify-center text-sand-300 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span className="text-xs text-sand-400">
                Follow {SALON_INFO.instagram.handle} ({SALON_INFO.instagram.followers})
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h4 className="font-serif text-lg text-sand-50 font-semibold mb-4 border-b border-gold-500/20 pb-2">
              Services & Signature Craft
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-sand-400 hover:text-gold-300 transition-colors">
                  Signature Balayage & Foilayage
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sand-400 hover:text-gold-300 transition-colors">
                  David's Short & Medium Cuts
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sand-400 hover:text-gold-300 transition-colors">
                  Cezanne Keratin Smoothing (Formaldehyde-Free)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sand-400 hover:text-gold-300 transition-colors">
                  Curly Haircuts & Texture Shaping
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sand-400 hover:text-gold-300 transition-colors">
                  Bleach & Tone Platinum Blondes
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sand-400 hover:text-gold-300 transition-colors">
                  Bridal Hair & TIFF Red Carpet Updos
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gold-400 hover:text-gold-300 transition-colors font-medium flex items-center gap-1">
                  Take Hair Consultation Quiz →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours of Operation */}
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-gold-500/20 pb-2">
              <Clock className="w-4 h-4 text-gold-400" />
              <h4 className="font-serif text-lg text-sand-50 font-semibold">
                Salon Hours
              </h4>
            </div>
            <ul className="space-y-2 text-xs">
              {SALON_INFO.hours.map((item) => (
                <li key={item.day} className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className={`font-medium ${item.isOpen ? 'text-sand-200' : 'text-sand-500'}`}>
                    {item.day}
                  </span>
                  <span className={item.isOpen ? 'text-gold-300 font-medium' : 'text-sand-500 italic'}>
                    {item.isOpen ? `${item.open} – ${item.close}` : 'Closed'}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-2.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300 text-center">
              Closed · Opens 10:30 am on weekdays
            </div>
          </div>

          {/* Column 4: Studio Location & Contact */}
          <div>
            <h4 className="font-serif text-lg text-sand-50 font-semibold mb-4 border-b border-gold-500/20 pb-2">
              Fashion District Studio
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sand-100 font-medium">{SALON_INFO.address.building}</p>
                  <p className="text-sand-400 text-xs">{SALON_INFO.address.street}</p>
                  <p className="text-sand-400 text-xs">{SALON_INFO.address.city}, {SALON_INFO.address.province} {SALON_INFO.address.postalCode}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div>
                  <a href={SALON_INFO.phones.telLink} className="text-sand-200 hover:text-gold-300 block font-medium">
                    {SALON_INFO.phones.primaryDisplay}
                  </a>
                  <a href={`tel:${SALON_INFO.phones.secondary.replace(/[^0-9+]/g, '')}`} className="text-sand-400 text-xs hover:text-gold-300 block">
                    {SALON_INFO.phones.secondaryDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="text-sand-400 hover:text-gold-300 text-xs truncate">
                  {SALON_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all text-center shadow"
                >
                  Book Online Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-500 gap-4">
          <p>© {new Date().getFullYear()} Hair By David & Co. All rights reserved. 23 Years in Toronto's Fashion District.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-gold-400 transition-colors">Our 23-Year Story</Link>
            <Link to="/reviews" className="hover:text-gold-400 transition-colors">511 Google Reviews</Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Studio Directions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
