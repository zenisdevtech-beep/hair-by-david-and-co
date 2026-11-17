import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Scissors, 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  Star, 
  MapPin, 
  Sparkles, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import HoursStatusBadge from './HoursStatusBadge';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(true); // Open by default on mobile so it's clearly visible!
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesSubmenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesSubmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceSubmenuItems = [
    {
      label: 'All Services & Full Menu',
      path: '/services',
      desc: 'Complete catalog of 20+ services & prices',
      icon: '✨',
      badge: 'View All'
    },
    {
      label: 'Precision Haircuts & Styling',
      path: '/services?category=Haircuts+%26+Styling',
      desc: 'David’s 23-yr specialty in bobs, lobs & curls',
      icon: '✂️'
    },
    {
      label: 'Hair Colour & Balayage',
      path: '/services?category=Hair+Colour+%26+Balayage',
      desc: 'French balayage, foils & blonde melts',
      icon: '🎨'
    },
    {
      label: 'Cezanne Keratin Smoothing',
      path: '/services?category=Cezanne+Keratin+%26+Treatments',
      desc: '100% Formaldehyde-free frizz defense',
      icon: '💧'
    },
    {
      label: 'Blowouts & Bridal Couture',
      path: '/services?category=Blowouts+%26+Special+Events',
      desc: 'Red carpet updos, TIFF styles & extensions',
      icon: '🥂'
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Thin Announcement Strip */}
      <div className="bg-noir-1000 text-sand-300 text-xs py-1.5 px-4 sm:px-6 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="text-gold-400 font-semibold tracking-wider uppercase text-[10px] px-1.5 py-0.5 rounded bg-gold-500/15 border border-gold-500/30 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> 23 Years
            </span>
            <span className="truncate text-sand-200">
              Toronto Fashion District • 477 Richmond St W #501
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-5 text-xs text-sand-300">
            <Link 
              to="/reviews" 
              className="flex items-center gap-1.5 text-gold-300 hover:text-gold-200 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              <span className="font-semibold text-sand-100">4.8</span>
              <span className="text-sand-400 text-[11px]">(511 Reviews)</span>
            </Link>
            <a
              href={SALON_INFO.phones.telLink}
              className="flex items-center gap-1.5 text-sand-200 hover:text-gold-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{SALON_INFO.phones.primaryDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Header Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-noir-950/98 backdrop-blur-xl shadow-2xl py-3 border-b border-gold-500/25'
            : 'bg-noir-950/90 backdrop-blur-md py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/40 bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:border-gold-300 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(197,160,89,0.2)]">
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-sand-50 block leading-tight group-hover:text-gold-300 transition-colors">
                Hair By David & Co.
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-gold-400 block -mt-0.5">
                Fashion District • Suite 501
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Minimal, Elegant, with High-Contrast Sub-Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-200 py-2 relative ${
                location.pathname === '/'
                  ? 'text-gold-300 font-bold'
                  : 'text-sand-300 hover:text-sand-50'
              }`}
            >
              Home
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-300 rounded-full" />
              )}
            </Link>

            {/* SERVICES WITH HIGH-VISIBILITY SUB MENU */}
            <div
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={() => setServicesSubmenuOpen(true)}
              onMouseLeave={() => setServicesSubmenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)}
                className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-200 flex items-center gap-1.5 focus:outline-none ${
                  location.pathname === '/services' || servicesSubmenuOpen
                    ? 'text-gold-300 font-bold'
                    : 'text-sand-300 hover:text-sand-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gold-400 transition-transform duration-200 ${servicesSubmenuOpen ? 'rotate-180' : ''}`} />
                {location.pathname === '/services' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-300 rounded-full" />
                )}
              </button>

              {/* High-Contrast Luxury Dropdown Sub-Menu (NO HOVER GAP) */}
              {servicesSubmenuOpen && (
                <div className="absolute top-full -left-10 pt-2 z-50 animate-fade-in">
                  <div className="w-80 bg-[#14141a] border-2 border-gold-400/80 rounded-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_25px_rgba(197,160,89,0.3)] relative">
                    {/* Top Triangle Caret */}
                    <div className="absolute -top-2 left-16 w-3.5 h-3.5 bg-[#14141a] border-t-2 border-l-2 border-gold-400/80 transform rotate-45 pointer-events-none" />

                    {/* Sub Menu Header */}
                    <div className="px-2 pb-2 mb-2 border-b border-gold-500/20 flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-sand-50 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Scissors className="w-3.5 h-3.5 text-gold-400" /> Salon Menu
                      </span>
                      <span className="text-[10px] text-gold-400 font-semibold">20+ Services</span>
                    </div>

                    {/* Sub Menu Links */}
                    <div className="space-y-1">
                      {serviceSubmenuItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setServicesSubmenuOpen(false)}
                          className="p-2 rounded-xl flex items-center gap-3 bg-noir-900/60 hover:bg-gold-500/20 border border-white/5 hover:border-gold-400/60 transition-all duration-150 group"
                        >
                          <span className="text-base p-1.5 rounded-lg bg-noir-950 border border-gold-500/20 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </span>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white group-hover:text-gold-200 transition-colors">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-gold-400 text-noir-950 font-bold">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.desc && (
                              <p className="text-[10px] text-sand-300 line-clamp-1 mt-0.5 font-light">
                                {item.desc}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Sub Menu Footer */}
                    <div className="pt-2.5 mt-2 border-t border-gold-500/20 px-2 flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" /> 7-Day Guarantee
                      </span>
                      <Link
                        to="/quiz"
                        onClick={() => setServicesSubmenuOpen(false)}
                        className="text-gold-300 hover:text-gold-100 font-bold underline"
                      >
                        Hair Quiz (60s) →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/lookbook"
              className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-200 py-2 relative ${
                location.pathname === '/lookbook'
                  ? 'text-gold-300 font-bold'
                  : 'text-sand-300 hover:text-sand-50'
              }`}
            >
              Lookbook
              {location.pathname === '/lookbook' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-300 rounded-full" />
              )}
            </Link>

            <Link
              to="/about"
              className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-200 py-2 relative ${
                location.pathname === '/about'
                  ? 'text-gold-300 font-bold'
                  : 'text-sand-300 hover:text-sand-50'
              }`}
            >
              About
              {location.pathname === '/about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-300 rounded-full" />
              )}
            </Link>

            <Link
              to="/contact"
              className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-200 py-2 relative ${
                location.pathname === '/contact'
                  ? 'text-gold-300 font-bold'
                  : 'text-sand-300 hover:text-sand-50'
              }`}
            >
              Contact
              {location.pathname === '/contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-300 rounded-full" />
              )}
            </Link>
          </div>

          {/* Right Action: Clean Status & Book Button */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <div className="hidden xl:block">
              <HoursStatusBadge />
            </div>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-noir-950 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 rounded-lg shadow-md hover:shadow-gold-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-noir-950" />
              Book Online
            </button>
          </div>

          {/* Mobile Right Icons (Hamburger & Mini Book) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-bold uppercase bg-gradient-to-r from-gold-400 to-amber-300 text-noir-950 rounded-lg shadow"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-noir-900 border border-gold-500/30 text-gold-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Clearly Visible Mobile Slide-Down Drawer with Featured Sub-Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121216] border-b-2 border-gold-500/30 backdrop-blur-2xl animate-fade-in px-5 py-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <HoursStatusBadge showDetails={true} />
            <div className="flex items-center gap-1 text-gold-400 text-xs">
              <Star className="w-3.5 h-3.5 fill-gold-400" />
              <span className="font-bold">4.8</span>
              <span className="text-sand-400">(511)</span>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold tracking-wide ${
                location.pathname === '/'
                  ? 'bg-gold-500/15 text-gold-300 border-l-2 border-gold-400 font-bold'
                  : 'text-sand-100 hover:bg-white/5'
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-gold-400/60" />
            </Link>

            {/* HIGH-VISIBILITY MOBILE SERVICES & SUB-MENU BLOCK */}
            <div className="rounded-xl bg-noir-900 border border-gold-500/30 overflow-hidden p-2.5 space-y-2">
              <div
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="flex items-center justify-between px-1.5 py-1 text-sm font-bold text-gold-300 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-gold-400" />
                  <span>Salon Services Sub-Menu</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-180' : ''}`} />
              </div>

              {mobileSubmenuOpen && (
                <div className="space-y-1.5 pt-1 text-xs">
                  {serviceSubmenuItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-noir-950/80 border border-white/5 hover:border-gold-400/50 hover:bg-gold-500/15 text-sand-100 transition-colors"
                    >
                      <span className="text-sm">{item.icon}</span>
                      <div className="flex-grow">
                        <span className="font-semibold block text-white">{item.label}</span>
                        {item.desc && (
                          <span className="text-[10px] text-sand-400 block font-light">{item.desc}</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/lookbook"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold tracking-wide ${
                location.pathname === '/lookbook'
                  ? 'bg-gold-500/15 text-gold-300 border-l-2 border-gold-400 font-bold'
                  : 'text-sand-100 hover:bg-white/5'
              }`}
            >
              <span>Lookbook & Transformations</span>
              <ArrowRight className="w-4 h-4 text-gold-400/60" />
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold tracking-wide ${
                location.pathname === '/about'
                  ? 'bg-gold-500/15 text-gold-300 border-l-2 border-gold-400 font-bold'
                  : 'text-sand-100 hover:bg-white/5'
              }`}
            >
              <span>Our Story (23 Years)</span>
              <ArrowRight className="w-4 h-4 text-gold-400/60" />
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold tracking-wide ${
                location.pathname === '/contact'
                  ? 'bg-gold-500/15 text-gold-300 border-l-2 border-gold-400 font-bold'
                  : 'text-sand-100 hover:bg-white/5'
              }`}
            >
              <span>Contact & Map</span>
              <ArrowRight className="w-4 h-4 text-gold-400/60" />
            </Link>

            {/* Quick Diagnostic Quiz & Reviews Links */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                to="/quiz"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-gold-500/15 border border-gold-500/30 text-center"
              >
                <span className="text-[11px] font-bold text-gold-300 block">Hair Quiz</span>
                <span className="text-[9px] text-sand-400">60s Consultation</span>
              </Link>
              <Link
                to="/reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-noir-900 border border-white/10 text-center"
              >
                <span className="text-[11px] font-bold text-sand-100 block">511 Reviews</span>
                <span className="text-[9px] text-gold-400">4.8 ★ Google</span>
              </Link>
            </div>
          </div>

          {/* Action Buttons in Mobile Menu */}
          <div className="pt-5 mt-4 border-t border-white/10 grid grid-cols-2 gap-2.5">
            <a
              href={SALON_INFO.phones.telLink}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-noir-900 border border-gold-500/40 text-sand-100 text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              Call Studio
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 text-xs font-bold uppercase shadow"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Online
            </button>
          </div>

          <div className="text-[11px] text-sand-400 flex items-center justify-center gap-1.5 pt-3">
            <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>477 Richmond St W #501, Toronto</span>
          </div>
        </div>
      )}
    </header>
  );
}
