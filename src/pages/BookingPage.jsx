import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Scissors, 
  CheckCircle, 
  Phone, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Download,
  AlertCircle
} from 'lucide-react';
import { SALON_INFO, SERVICES, TEAM_MEMBERS } from '../data/salonData';
import confetti from 'canvas-confetti';

export default function BookingPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const [selectedStylist, setSelectedStylist] = useState('any');
  const [selectedDate, setSelectedDate] = useState(() => {
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    return tmrw.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const availableTimes = [
    '10:30 AM', '11:15 AM', '12:00 PM', '1:30 PM', '2:45 PM', '4:00 PM', '5:15 PM', '6:30 PM'
  ];

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const handleBook = (e) => {
    e.preventDefault();
    const refCode = 'HBD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setIsBooked(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#dfba73', '#e8d4a6', '#ffffff']
    });
  };

  const downloadCalendarEvent = () => {
    const event = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:Hair Appointment - Hair By David & Co.`,
      `DESCRIPTION:Appointment for ${currentService.name} with ${selectedStylist} at Hair By David & Co. Reference: ${bookingRef}`,
      `LOCATION:477 Richmond St W #501, Toronto, ON M5V 3E7`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `HairByDavid-Appointment-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
          Suite 501 • 477 Richmond St West
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-sand-50 font-normal tracking-tight">
          Reserve Your Salon Experience
        </h1>
        <p className="text-sand-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Book online with zero cancellation fee up to 24 hours prior. Relax with boutique espresso in our Fashion District heritage loft.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isBooked ? (
          <form onSubmit={handleBook} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Form Details */}
            <div className="lg:col-span-7 space-y-8 bg-noir-900 border border-gold-500/25 p-6 sm:p-8 rounded-2xl shadow-xl">
              {/* 1. Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-sand-200 mb-3 flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-gold-400" />
                  1. Select Service
                </label>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedServiceId === srv.id
                          ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                          : 'bg-noir-950 border-white/5 text-sand-300 hover:border-gold-500/40'
                      }`}
                    >
                      <div>
                        <span className="text-sm font-semibold text-sand-100 block">{srv.name}</span>
                        <span className="text-[11px] text-sand-400">{srv.category} • {srv.duration}</span>
                      </div>
                      <span className="text-sm font-bold text-sand-100">${srv.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Stylist Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-sand-200 mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-gold-400" />
                  2. Choose Stylist
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedStylist('any')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedStylist === 'any'
                        ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                        : 'bg-noir-950 border-white/5 text-sand-300 hover:border-white/20'
                    }`}
                  >
                    <span className="font-semibold text-xs block text-sand-100">First Available Artist</span>
                    <span className="text-[11px] text-sand-400">Fastest appointment</span>
                  </button>

                  {TEAM_MEMBERS.map((tm) => (
                    <button
                      key={tm.name}
                      type="button"
                      onClick={() => setSelectedStylist(tm.name)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedStylist === tm.name
                          ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                          : 'bg-noir-950 border-white/5 text-sand-300 hover:border-white/20'
                      }`}
                    >
                      <span className="font-semibold text-xs block text-sand-100">{tm.name}</span>
                      <span className="text-[11px] text-gold-400 truncate block">{tm.role}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Date & Time */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-sand-200 mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  3. Date & Available Time (Opens 10:30 am)
                </label>
                <div className="space-y-3">
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-sm focus:outline-none focus:border-gold-400"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableTimes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 rounded-lg text-xs font-semibold text-center transition-all ${
                          selectedTime === t
                            ? 'bg-gold-500 text-noir-950 font-bold shadow'
                            : 'bg-noir-950 text-sand-300 border border-white/5 hover:border-gold-500/40'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Contact Information */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-wider text-sand-200 mb-1">
                  4. Your Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Phone (for SMS) *"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                />
                <textarea
                  rows={2}
                  placeholder="Hair history, previous dye, notes for stylist..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-noir-950 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 text-noir-950 font-bold text-xs uppercase tracking-widest hover:opacity-95 shadow-xl transition-all"
              >
                Confirm Reservation
              </button>
            </div>

            {/* Right Column: Appointment Summary & Direct Phone Options */}
            <div className="lg:col-span-5 space-y-6">
              {/* Summary Card */}
              <div className="p-6 rounded-2xl bg-noir-900 border border-gold-500/30 shadow-xl space-y-4">
                <span className="text-xs uppercase font-bold text-gold-400 tracking-wider block">
                  Appointment Overview
                </span>

                <div className="space-y-3 text-xs border-b border-white/10 pb-4">
                  <div className="flex justify-between">
                    <span className="text-sand-400">Service:</span>
                    <strong className="text-sand-100 text-right">{currentService.name}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sand-400">Stylist:</span>
                    <span className="text-sand-100 font-medium">
                      {selectedStylist === 'any' ? 'First Available Senior Artist' : selectedStylist}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sand-400">Date:</span>
                    <span className="text-gold-300 font-semibold">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sand-400">Time:</span>
                    <span className="text-gold-300 font-semibold">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sand-400">Duration:</span>
                    <span className="text-sand-200">{currentService.duration}</span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-xs text-sand-400">Starting Price</span>
                  <span className="font-serif text-3xl font-bold text-sand-50">${currentService.price} CAD</span>
                </div>

                <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20 text-[11px] text-gold-300 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>No card required now. Payment is taken in the studio loft after your service.</span>
                </div>
              </div>

              {/* Direct Booking Link Option */}
              <div className="p-6 rounded-2xl bg-noir-950 border border-white/10 space-y-3 text-xs">
                <h4 className="font-serif text-base text-sand-100 font-semibold">
                  Prefer our external booking portal?
                </h4>
                <p className="text-sand-400">
                  You can also use our direct Google Reserve integration or official online system:
                </p>
                <a
                  href={SALON_INFO.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-noir-900 border border-gold-500/30 text-gold-300 font-semibold flex items-center justify-center gap-1.5 hover:bg-gold-500/10 transition-colors"
                >
                  <span>Open HairByDavidAndCo.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Telephone Consultation */}
              <div className="p-6 rounded-2xl bg-noir-950 border border-white/10 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-gold-400">
                  <Phone className="w-4 h-4" />
                  <strong className="text-sand-100">Need Immediate Assistance?</strong>
                </div>
                <p className="text-sand-400">
                  Our front desk is happy to answer questions regarding hair extensions, color corrections, or bridal party bookings.
                </p>
                <a
                  href={SALON_INFO.phones.telLink}
                  className="text-gold-300 font-bold block text-sm hover:underline"
                >
                  Call: {SALON_INFO.phones.primaryDisplay}
                </a>
              </div>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <div className="max-w-xl mx-auto bg-noir-900 border border-gold-500/40 p-8 sm:p-12 rounded-2xl text-center space-y-6 shadow-2xl animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400 block mb-1">
                Booking Reference: {bookingRef}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-sand-50 font-bold">
                Reservation Confirmed!
              </h2>
              <p className="text-xs text-sand-400 mt-2">
                We have reserved your appointment for <strong>{clientName || 'Valued Guest'}</strong>. An SMS confirmation was sent to {clientPhone || 'your mobile'}.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-noir-950 border border-gold-500/20 text-xs text-left space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-sand-400">Service:</span>
                <span className="text-sand-100 font-semibold">{currentService.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-sand-400">Artist:</span>
                <span className="text-sand-100">{selectedStylist === 'any' ? 'First Available Master Artist' : selectedStylist}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-sand-400">Date & Time:</span>
                <span className="text-gold-300 font-bold">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-400">Address:</span>
                <span className="text-sand-100">477 Richmond St W #501, Toronto</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={downloadCalendarEvent}
                className="py-3 px-5 rounded-lg bg-noir-950 border border-gold-500/40 text-gold-300 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-gold-500/10 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Add to Calendar (.ics)
              </button>
              <button
                onClick={() => setIsBooked(false)}
                className="py-3 px-6 rounded-lg bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

