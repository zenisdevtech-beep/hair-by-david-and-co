import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Navigation, 
  ExternalLink, 
  CheckCircle, 
  Send, 
  Car, 
  Train,
  Sparkles
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import HoursStatusBadge from '../components/HoursStatusBadge';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Consultation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#c5a059', '#dfba73', '#e8d4a6']
    });
  };

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
          Toronto Fashion District
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-sand-50 font-normal tracking-tight">
          Find Suite 501 & Get in Touch
        </h1>
        <p className="text-sand-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Located inside the landmark 477 Richmond Street West heritage loft building. We are easily reachable by TTC streetcar, subway, or car.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Status Card */}
            <div className="p-6 rounded-2xl bg-noir-900 border border-gold-500/30 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <HoursStatusBadge />
                <span className="text-xs text-gold-400 font-medium">Suite 501</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-sand-100 block">Hair By David & Co.</strong>
                    <p className="text-xs text-sand-300">477 Richmond St W #501</p>
                    <p className="text-xs text-sand-400">Toronto, ON M5V 3E7, Canada</p>
                    <p className="text-[11px] text-sand-500 mt-0.5">Take the elevators to the 5th floor.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-sand-100 block">Telephone Hotline</strong>
                    <a href={SALON_INFO.phones.telLink} className="text-xs text-gold-300 hover:underline block font-semibold">
                      {SALON_INFO.phones.primaryDisplay}
                    </a>
                    <a href={`tel:${SALON_INFO.phones.secondary.replace(/[^0-9+]/g, '')}`} className="text-xs text-sand-400 hover:underline block">
                      {SALON_INFO.phones.secondaryDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-sand-100 block">Email Inquiries</strong>
                    <a href={`mailto:${SALON_INFO.email}`} className="text-xs text-sand-300 hover:text-gold-300">
                      {SALON_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Google Maps Directions
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="p-6 rounded-2xl bg-noir-900 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-gold-400" />
                <h3 className="font-serif text-lg text-sand-100 font-semibold">
                  Weekly Operating Schedule
                </h3>
              </div>
              <p className="text-[11px] text-amber-300">
                Closed · Opens 10:30 am on Tuesdays through Fridays
              </p>

              <div className="space-y-1.5 pt-1 text-xs">
                {SALON_INFO.hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between py-1.5 border-b border-white/5"
                  >
                    <span className={item.isOpen ? 'text-sand-200 font-medium' : 'text-sand-500'}>
                      {item.day}
                    </span>
                    <span className={item.isOpen ? 'text-gold-300 font-semibold' : 'text-sand-500 italic'}>
                      {item.isOpen ? `${item.open} – ${item.close}` : 'Closed (Education/Private)'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transit & Parking Details */}
            <div className="p-6 rounded-2xl bg-noir-950 border border-white/10 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Train className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-sand-100 block">TTC Public Transit:</strong>
                  <p className="text-sand-400">
                    501 Queen Streetcar (stop at Spadina or Peter St), 504 King Streetcar, or 510 Spadina line. 8–10 minute walk from Osgoode Subway Station.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-sand-100 block">Parking:</strong>
                  <p className="text-sand-400">
                    Metered street parking on Richmond St W & Camden St. Green P parking structures located 200m away at Richmond & Augusta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form & Studio Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-noir-900 border border-gold-500/25 shadow-2xl">
              <span className="text-xs uppercase font-bold text-gold-400 tracking-wider block mb-1">
                Consultation & Booking Support
              </span>
              <h3 className="font-serif text-2xl text-sand-50 font-semibold mb-2">
                Send David & Co. a Message
              </h3>
              <p className="text-xs text-sand-400 mb-6">
                Have questions about Cezanne Keratin, complex balayage color corrections, or bridal party bookings? Fill in the form below.
              </p>

              {!formSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-sand-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcella V."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-sand-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-sand-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(416) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-sand-300 mb-1">Subject / Inquiry</label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                      >
                        <option>Balayage & Hair Colour Consultation</option>
                        <option>David's Short & Medium Cuts</option>
                        <option>Cezanne Keratin Treatment Inquiry</option>
                        <option>Bridal & Wedding Party Services</option>
                        <option>General Studio Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sand-300 mb-1">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your current hair condition, past chemical treatments, or dates you prefer..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Inquiry
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-sand-50 font-semibold">Message Delivered!</h4>
                  <p className="text-xs text-sand-300 max-w-sm mx-auto">
                    Thank you {formData.name}. Our salon concierge will review your note and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs text-gold-400 underline font-semibold pt-2"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>

            {/* Interactive Map Card */}
            <div className="p-6 rounded-2xl bg-noir-900 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif text-base text-sand-100 font-semibold">
                  Studio Location on Richmond St West
                </span>
                <span className="text-[11px] text-sand-400">Historic Fashion Building</span>
              </div>

              <div className="w-full h-64 rounded-xl overflow-hidden border border-gold-500/20 relative">
                <iframe
                  title="Hair By David and Co Location"
                  src="https://maps.google.com/maps?q=477+Richmond+St+W+%23501,+Toronto,+ON+M5V+3E7,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

