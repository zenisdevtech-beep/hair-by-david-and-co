import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Sparkles, 
  Star, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Heart, 
  ShieldCheck, 
  ChevronDown,
  Quote,
  Check
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { SALON_INFO, SERVICES, REVIEWS, INSTAGRAM_POSTS, FAQS } from '../data/salonData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PriceEstimator from '../components/PriceEstimator';
import HoursStatusBadge from '../components/HoursStatusBadge';

export default function HomePage({ onOpenBooking, onSelectServiceForBooking }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeMenuTab, setActiveMenuTab] = useState('Hair Colour & Balayage');

  const menuTabCategories = [
    'Hair Colour & Balayage',
    'Haircuts & Styling',
    'Cezanne Keratin & Treatments',
    'Blowouts & Special Events'
  ];

  const currentTabServices = SERVICES.filter(s => s.category === activeMenuTab).slice(0, 4);

  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-12 lg:py-20">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[420px] h-[420px] bg-rose-500/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badges bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/35 text-xs font-semibold text-gold-300 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Celebrating 23 Years in Toronto's Fashion District</span>
                </div>
                <Link to="/reviews" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-noir-900 border border-white/10 text-xs text-sand-300 hover:border-gold-500/40 transition-colors">
                  <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  <strong className="text-gold-300">4.8</strong>
                  <span>(511 Google Reviews)</span>
                </Link>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-sand-50 leading-[1.08]">
                Where Precision <br />
                <span className="font-serif italic text-gold-300 font-light">Hair Artistry</span> Meets <br />
                Toronto Luxury.
              </h1>

              {/* Subheadline */}
              <p className="text-sand-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Personalized haircuts, bespoke French balayage, and non-toxic formaldehyde-free Cezanne keratin treatments in our sunlit 5th-floor heritage loft at <strong>477 Richmond St West</strong>.
              </p>

              {/* Live Status Pill */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-1">
                <HoursStatusBadge showDetails={true} />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 text-noir-950 font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(197,160,89,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-xl"
                >
                  <Calendar className="w-4 h-4 text-noir-950" />
                  Book Appointment Online
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/quiz"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-noir-900 border border-gold-500/35 text-sand-100 font-semibold text-xs uppercase tracking-wider hover:bg-gold-500/10 hover:border-gold-400 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  Take 60s Hair Quiz
                </Link>
              </div>

              {/* Verified Trust stats */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-sand-50 block">23</span>
                  <span className="text-[11px] text-sand-400 uppercase tracking-wider">Years in Fashion Dist.</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-300 block">511+</span>
                  <span className="text-[11px] text-sand-400 uppercase tracking-wider">Google 5-Star Reviews</span>
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-sand-50 block">100%</span>
                  <span className="text-[11px] text-sand-400 uppercase tracking-wider">Formaldehyde Free</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80"
                    alt="Hair By David & Co. Balayage Artistry"
                    className="w-full h-[480px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-black/30" />

                  {/* Overlay Badges */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-noir-950/85 backdrop-blur-md border border-gold-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                        Signature Specialty
                      </span>
                      <div className="flex items-center gap-1 text-gold-400 text-xs">
                        <Star className="w-3.5 h-3.5 fill-gold-400" />
                        <span className="font-bold">4.8</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-lg text-sand-50 font-semibold">
                      Short to Medium Haircuts & Master Balayage
                    </h3>
                    <p className="text-[11px] text-sand-400">
                      Suite 501, 477 Richmond St West • Downtown Toronto
                    </p>
                  </div>
                </div>

                {/* Floating Award Chip */}
                <div className="absolute top-4 left-4 bg-noir-950/90 border border-gold-500/40 p-2.5 sm:p-3 rounded-xl shadow-xl flex items-center gap-2.5 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                    <Scissors className="w-4 h-4 -rotate-45" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gold-400 tracking-widest block">
                      Toronto Fashion District
                    </span>
                    <span className="text-xs font-semibold text-sand-100">
                      Celebrating 23 Years
                    </span>
                  </div>
                </div>

                {/* Floating Quote Chip */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-noir-900/95 border border-emerald-500/30 p-3 sm:p-4 rounded-2xl shadow-xl max-w-xs backdrop-blur-sm hidden sm:block">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Google Review</span>
                  </div>
                  <p className="text-xs text-sand-200 italic">
                    "Great service, location and staff! My bob sits perfectly."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK STATS & PROOF STRIP */}
      <section className="py-12 bg-noir-950 border-y border-gold-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-noir-900/50 border border-white/5">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 block mb-1">2003</span>
              <span className="text-xs text-sand-400 uppercase tracking-wider font-medium">Established in Fashion District</span>
            </div>
            <div className="p-4 rounded-xl bg-noir-900/50 border border-white/5">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-sand-50 block mb-1">4.8 ★</span>
              <span className="text-xs text-sand-400 uppercase tracking-wider font-medium">511 Google Reviews</span>
            </div>
            <div className="p-4 rounded-xl bg-noir-900/50 border border-white/5">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 block mb-1">#501</span>
              <span className="text-xs text-sand-400 uppercase tracking-wider font-medium">Sunlit Heritage Loft Suite</span>
            </div>
            <div className="p-4 rounded-xl bg-noir-900/50 border border-white/5">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-sand-50 block mb-1">Cezanne</span>
              <span className="text-xs text-sand-400 uppercase tracking-wider font-medium">Certified Formaldehyde-Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUCTURED SALON MENU AT A GLANCE (REDESIGNED) */}
      <section className="py-20 bg-noir-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
              The Salon Menu at a Glance
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-sand-50 font-normal">
              Curated Services & Transparent Pricing
            </h2>
            <p className="text-sand-400 text-xs sm:text-sm mt-3 font-light">
              Explore our core disciplines. Every session is executed with bespoke formulations and high-precision scissor geometry.
            </p>

            {/* Menu Category Switcher Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {menuTabCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveMenuTab(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeMenuTab === cat
                      ? 'bg-gradient-to-r from-gold-400 to-amber-300 text-noir-950 font-bold shadow-lg scale-105'
                      : 'bg-noir-950 text-sand-300 border border-white/5 hover:border-gold-500/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tabbed Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentTabServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl overflow-hidden bg-noir-950 border border-gold-500/20 hover:border-gold-400/70 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-noir-950/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold text-gold-300 border border-gold-500/30">
                      {service.category.split(' & ')[0]}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-serif text-2xl font-bold text-sand-50">${service.price}</span>
                      <span className="text-xs text-sand-400 flex items-center gap-1 font-medium bg-noir-900 px-2 py-0.5 rounded border border-white/5">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        {service.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg text-sand-100 font-semibold mb-2 group-hover:text-gold-300 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs text-sand-400 line-clamp-2 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      if (onSelectServiceForBooking) {
                        onSelectServiceForBooking(service.name);
                      } else {
                        onOpenBooking();
                      }
                    }}
                    className="w-full py-2.5 rounded-lg bg-noir-900 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-wider hover:bg-gold-500 hover:text-noir-950 transition-all flex items-center justify-center gap-1.5 shadow"
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500/15 border border-gold-500/40 text-gold-300 font-bold text-xs uppercase tracking-wider hover:bg-gold-500 hover:text-noir-950 transition-all"
            >
              <span>Explore Complete Salon Menu (All 20+ Services & Add-Ons)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE BEFORE & AFTER SLIDER SECTION */}
      <section className="py-20 bg-noir-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider onBookService={(title) => onSelectServiceForBooking && onSelectServiceForBooking(title)} />
        </div>
      </section>

      {/* 5. THE FOUR PILLARS OF CRAFT */}
      <section className="py-20 bg-noir-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
              Our Core Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-sand-50 font-normal">
              Master Craftsmanship Built Over 23 Years
            </h2>
            <p className="text-sand-400 text-sm sm:text-base mt-3 font-light">
              Every appointment at Hair By David & Co. begins with an honest, consultative dialogue about your bone structure, hair lifestyle, and long-term hair health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-noir-950 border border-gold-500/20 hover:border-gold-400 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Scissors className="w-6 h-6 -rotate-45" />
                </div>
                <h3 className="font-serif text-xl text-sand-50 font-semibold mb-2">
                  Short & Medium Precision Cuts
                </h3>
                <p className="text-xs text-sand-400 leading-relaxed font-light">
                  David's renowned specialty: French bobs, Italian textured lobs, curtain fringe, and effortless wash-and-wear silhouettes crafted to grow out gracefully.
                </p>
              </div>
              <Link
                to="/services"
                className="mt-6 text-xs text-gold-400 font-semibold flex items-center gap-1 group-hover:text-gold-300"
              >
                Explore Cuts & Pricing →
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-noir-950 border border-gold-500/20 hover:border-gold-400 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-sand-50 font-semibold mb-2">
                  Dimensional Balayage & Blondes
                </h3>
                <p className="text-xs text-sand-400 leading-relaxed font-light">
                  Hand-painted French foilayage, sun-kissed ribboning, root melting, and platinum double processes with Olaplex bond repair for luminous shine.
                </p>
              </div>
              <Link
                to="/services"
                className="mt-6 text-xs text-gold-400 font-semibold flex items-center gap-1 group-hover:text-gold-300"
              >
                View Colour Services →
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-noir-950 border border-gold-500/20 hover:border-gold-400 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-sand-50 font-semibold mb-2">
                  Cezanne Keratin Smoothing
                </h3>
                <p className="text-xs text-sand-400 leading-relaxed font-light">
                  100% Formaldehyde-free, non-toxic smoothing treatment. Eliminates stubborn humidity frizz and halves daily blow-dry time for up to 5 months.
                </p>
              </div>
              <Link
                to="/services"
                className="mt-6 text-xs text-gold-400 font-semibold flex items-center gap-1 group-hover:text-gold-300"
              >
                Learn About Cezanne →
              </Link>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-noir-950 border border-gold-500/20 hover:border-gold-400 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-sand-50 font-semibold mb-2">
                  Bridal & TIFF Red Carpet
                </h3>
                <p className="text-xs text-sand-400 leading-relaxed font-light">
                  From romantic textured updos to Hollywood waves and luxury blowout styles, designed for Toronto weddings, galas, and film festival premieres.
                </p>
              </div>
              <Link
                to="/services"
                className="mt-6 text-xs text-gold-400 font-semibold flex items-center gap-1 group-hover:text-gold-300"
              >
                Event Styling Menu →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE PRICE ESTIMATOR */}
      <section className="py-20 bg-noir-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceEstimator
            onBookWithOptions={(opts) => {
              if (onSelectServiceForBooking) {
                onSelectServiceForBooking(opts.service);
              } else {
                onOpenBooking();
              }
            }}
          />
        </div>
      </section>

      {/* 7. REAL GOOGLE REVIEWS SHOWCASE */}
      <section className="py-20 bg-noir-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-sand-50">4.8 / 5.0 Rating</span>
                <span className="text-xs text-sand-400">(511 Google Reviews)</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-sand-50 font-normal">
                What Toronto Clients Are Saying
              </h2>
            </div>
            <Link
              to="/reviews"
              className="text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300"
            >
              Read All 511 Reviews →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-noir-950 border border-gold-500/20 flex flex-col justify-between shadow-xl relative"
              >
                <div>
                  <Quote className="w-8 h-8 text-gold-500/20 mb-3" />
                  <p className="font-serif text-lg text-sand-50 italic mb-3 font-medium">
                    "{review.quote}"
                  </p>
                  <p className="text-xs text-sand-400 leading-relaxed mb-6 font-light">
                    {review.content}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover border border-gold-500/30"
                    />
                    <div>
                      <span className="text-xs font-semibold text-sand-100 block">{review.author}</span>
                      <span className="text-[10px] text-gold-400">{review.service}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-sand-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic quotes strip from user request */}
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-noir-950 via-gold-950/20 to-noir-950 border border-gold-500/30 text-center">
            <p className="text-xs sm:text-sm text-sand-200">
              <strong className="text-gold-300">"It’s so clean and prices are right for the quality of services offered."</strong>
              <span className="text-sand-400 ml-2">— Chloe Desjardins, Verified Google Review</span>
            </p>
          </div>
        </div>
      </section>

      {/* 8. THE 477 RICHMOND LOFT EXPERIENCE */}
      <section className="py-20 bg-noir-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-semibold text-gold-300">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>477 Richmond St W #501, Toronto</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-sand-50 font-normal leading-tight">
                An Urban Sanctuary in Toronto's Fashion District
              </h2>

              <p className="text-sand-300 text-sm sm:text-base leading-relaxed font-light">
                Step away from bustling downtown Toronto into Suite 501. Housed within the landmark 477 Richmond West historic warehouse, our studio features soaring timber beams, expansive natural daylight windows, and an intimate, unhurried atmosphere.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-noir-900 border border-white/5 space-y-1">
                  <strong className="text-xs text-sand-100 block">Natural Loft Lighting</strong>
                  <p className="text-[11px] text-sand-400">Essential for accurate blonde formulation & true-to-life tones.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-noir-900 border border-white/5 space-y-1">
                  <strong className="text-xs text-sand-100 block">One-on-One Attention</strong>
                  <p className="text-[11px] text-sand-400">No rushed assembly line styling. Your stylist is dedicated to you.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-noir-900 border border-white/5 space-y-1">
                  <strong className="text-xs text-sand-100 block">Non-Toxic Formulations</strong>
                  <p className="text-[11px] text-sand-400">Formaldehyde-free Cezanne, ammonia-free glazes & vegan rituals.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-noir-900 border border-white/5 space-y-1">
                  <strong className="text-xs text-sand-100 block">Artisan Hospitality</strong>
                  <p className="text-[11px] text-sand-400">Complimentary espresso, sparkling water, and artisanal teas.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-lg bg-gold-500 text-noir-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Our 23-Year Legacy
                </Link>
                <Link
                  to="/contact"
                  className="text-xs font-semibold text-sand-300 hover:text-gold-300 underline"
                >
                  Transit & Parking Guide →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80"
                alt="Studio interior"
                className="rounded-2xl h-64 sm:h-80 w-full object-cover border border-gold-500/20"
              />
              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80"
                alt="Hair colouring in progress"
                className="rounded-2xl h-64 sm:h-80 w-full object-cover border border-gold-500/20 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM LOOKBOOK FEED */}
      <section className="py-20 bg-noir-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5 mb-1">
                <InstagramIcon className="w-3.5 h-3.5" /> Follow Our Daily Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-sand-50 font-normal">
                @hairbydavidandco
              </h2>
            </div>
            <a
              href={SALON_INFO.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-noir-850 border border-gold-500/30 text-gold-300 text-xs font-semibold hover:bg-gold-500/10 transition-colors"
            >
              <span>Follow on Instagram (1.8K+)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={SALON_INFO.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="relative rounded-xl overflow-hidden aspect-square group border border-white/5"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-noir-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                  <Heart className="w-5 h-5 text-rose-400 fill-rose-400 mb-1" />
                  <span className="text-[11px] font-bold text-sand-50">{post.likes} likes</span>
                  <p className="text-[10px] text-sand-300 line-clamp-2 mt-1">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-20 bg-noir-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-sand-50 font-normal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-noir-900 border border-gold-500/20 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-sand-100 font-medium"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-sand-400 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. BOTTOM BOOKING CALL TO ACTION STRIP */}
      <section className="py-16 bg-gradient-to-r from-noir-950 via-gold-950/40 to-noir-950 border-t border-gold-500/30 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
            Suite 501 • 477 Richmond St West, Toronto
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-sand-50 font-normal">
            Ready to Experience Toronto's Premier Hair Studio?
          </h2>
          <p className="text-sand-300 text-sm sm:text-base max-w-xl mx-auto">
            Book online in under 60 seconds or call our front desk directly at <strong>(416) 913-2146</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 text-noir-950 font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Online Appointment
            </button>
            <a
              href={SALON_INFO.phones.telLink}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-noir-900 border border-gold-500/40 text-sand-100 font-semibold text-xs uppercase tracking-wider hover:bg-gold-500/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              Call {SALON_INFO.phones.primaryDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
