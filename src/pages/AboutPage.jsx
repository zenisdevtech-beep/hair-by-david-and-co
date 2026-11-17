import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Sparkles, 
  Clock, 
  MapPin, 
  Award, 
  ShieldCheck, 
  Heart, 
  Star,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { SALON_INFO, TEAM_MEMBERS } from '../data/salonData';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Story Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-semibold text-gold-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Established 2003 • Toronto Fashion District</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-sand-50 font-normal tracking-tight">
          Celebrating 23 Years of Hair Mastery
        </h1>
        <p className="text-sand-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          For more than two decades, <strong>Hair By David & Co.</strong> has quietly anchored the artistic hair scene in Toronto's Fashion District from Suite 501 at 477 Richmond Street West.
        </p>
      </div>

      {/* The Story & Heritage Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
              The Studio Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-sand-50 font-normal leading-snug">
              Crafted in Suite 501: An Unhurried Toronto Loft
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-sand-300 leading-relaxed font-light">
              <p>
                In 2003, David opened our studio doors with a singular conviction: haircuts and hair colour should never be hurried through a factory conveyor belt. Hair is deeply intimate, personal, and architectural.
              </p>
              <p>
                Tucked away on the fifth floor of the landmark <strong>477 Richmond Street West</strong> building—a historic center of Toronto garment design and contemporary galleries—Hair By David & Co. was conceived as an urban refuge. Soaring post-and-beam ceilings, oversized windows washed in authentic daylight, and an atmosphere free of blaring music or retail pressure.
              </p>
              <p>
                Over the past 23 years, David has refined a specialty in <em>short to medium haircut lengths</em>—including precision French bobs, Italian textured lobs, and lived-in layers—that work with your natural head shape and effortless home routine.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-noir-900 border border-gold-500/20">
                <span className="font-serif text-2xl font-bold text-gold-300 block mb-0.5">23 Years</span>
                <span className="text-xs text-sand-400">Serving downtown Toronto clients & creative directors</span>
              </div>
              <div className="p-4 rounded-xl bg-noir-900 border border-gold-500/20">
                <span className="font-serif text-2xl font-bold text-sand-50 block mb-0.5">4.8 Rating</span>
                <span className="text-xs text-sand-400">From 511+ verified Google reviews</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                alt="Hair By David & Co loft atmosphere"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-noir-950/85 backdrop-blur-md border border-gold-500/30">
                <p className="font-serif text-base text-sand-100 italic">
                  "Our goal is for you to look in the mirror two months after your appointment and still love how effortlessly your hair falls into place."
                </p>
                <span className="text-xs text-gold-400 font-semibold block mt-1">— David, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEET THE ARTISANS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
            The Co-Artisan Collective
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-sand-50 font-normal">
            Meet Our Senior Stylists & Colourists
          </h2>
          <p className="text-sand-400 text-xs sm:text-sm mt-2">
            Every team member brings specialized mastery across precision scissor geometry, dimensional foilayage, and non-toxic hair restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl bg-noir-900 border border-gold-500/20 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-gold-400/60 transition-all duration-300"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-noir-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold text-gold-300 border border-gold-500/30">
                    {member.experience}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif text-xl text-sand-50 font-semibold">{member.name}</h3>
                    <span className="text-xs text-gold-400 block font-medium">{member.role}</span>
                  </div>

                  <p className="text-xs text-sand-400 leading-relaxed font-light">
                    {member.bio}
                  </p>

                  <div className="pt-2 border-t border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-sand-400 tracking-wider block">Signature Forte:</span>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((spec) => (
                        <span key={spec} className="text-[10px] px-2 py-0.5 rounded bg-noir-950 text-sand-300 border border-white/5">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider hover:bg-gold-500 hover:text-noir-950 transition-all"
                >
                  Book with {member.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMMITMENTS TO CLEAN LUXURY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-2xl bg-noir-900 border border-gold-500/30">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
              Ethical & Health Standards
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-sand-50 font-medium">
              Zero Formaldehyde. Zero Harsh Fumes.
            </h2>
            <p className="text-sand-400 text-xs sm:text-sm mt-2">
              We operate inside a heritage creative building where air quality and client wellness are paramount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-noir-950 border border-white/5 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h4 className="font-serif text-base text-sand-100 font-semibold">Cezanne Keratin Certified</h4>
              <p className="text-xs text-sand-400 leading-relaxed">
                100% formaldehyde-free smoothing. Uses sericin silk protein and botanical keratin without toxic aldehydes or respiratory irritation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-noir-950 border border-white/5 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h4 className="font-serif text-base text-sand-100 font-semibold">Bond Multiplying Science</h4>
              <p className="text-xs text-sand-400 leading-relaxed">
                Every lightening service includes active bis-aminopropyl diglycol dimaleate (Olaplex) to relink broken disulfide bonds during lifting.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-noir-950 border border-white/5 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <h4 className="font-serif text-base text-sand-100 font-semibold">Cruelty-Free Formulations</h4>
              <p className="text-xs text-sand-400 leading-relaxed">
                All shampoos, deep conditioners, and styling balms are never tested on animals and free of drying sulfates and harsh parabens.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 font-medium">
          Experience Suite 501 at 477 Richmond St West
        </h3>
        <p className="text-xs sm:text-sm text-sand-400 max-w-xl mx-auto">
          We invite you to experience why Hair By David & Co. has remained one of Toronto's most celebrated boutique hairdressers for 23 years.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-widest shadow-lg"
          >
            Book Your Consultation
          </button>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-noir-900 border border-gold-500/30 text-sand-200 text-xs font-semibold uppercase tracking-wider"
          >
            Visit Studio Location
          </Link>
        </div>
      </div>
    </div>
  );
}

