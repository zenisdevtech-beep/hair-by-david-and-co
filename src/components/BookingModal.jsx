import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Scissors, CheckCircle, Sparkles, Phone, ShieldCheck, Download, ChevronRight, ChevronLeft } from 'lucide-react';
import { SALON_INFO, SERVICES, TEAM_MEMBERS } from '../data/salonData';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialService = null, initialDetails = null }) {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('any');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientInfo, setClientInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    hairLength: 'Medium'
  });
  const [bookingRef, setBookingRef] = useState('');

  // Prepopulate if provided
  useEffect(() => {
    if (initialService) {
      const match = SERVICES.find(s => s.name.toLowerCase().includes(initialService.toLowerCase()));
      if (match) setSelectedServiceId(match.id);
    } else if (SERVICES.length > 0 && !selectedServiceId) {
      setSelectedServiceId(SERVICES[0].id);
    }

    // Default to tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const availableTimes = [
    '10:30 AM', '11:15 AM', '12:00 PM', '1:30 PM', '2:45 PM', '4:00 PM', '5:15 PM', '6:30 PM'
  ];

  const handleNext = () => {
    if (step === 1 && !selectedServiceId) return;
    if (step === 3 && (!selectedDate || !selectedTime)) return;
    if (step === 4) {
      // Complete booking
      const refCode = 'HBD-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(refCode);
      setStep(5);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c5a059', '#dfba73', '#e8d4a6', '#ffffff']
      });
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const downloadCalendarEvent = () => {
    const event = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:Hair Appointment - Hair By David & Co.`,
      `DESCRIPTION:Appointment for ${currentService.name} with ${selectedStylist === 'any' ? 'Senior Stylist' : selectedStylist} at Hair By David & Co. Reference: ${bookingRef}`,
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-noir-1000/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-noir-950 border border-gold-500/30 rounded-2xl max-w-2xl w-full shadow-2xl relative overflow-hidden animate-fade-in flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-noir-900">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30">
                Suite 501 Booking
              </span>
              <span className="text-xs text-sand-400">Step {step} of 5</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-sand-50 font-semibold mt-1">
              Reserve Your Salon Experience
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-sand-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-noir-900 h-1">
          <div
            className="bg-gradient-to-r from-gold-500 to-amber-300 h-1 transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-grow">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-sand-100 uppercase tracking-wider mb-1">
                  1. Choose Your Signature Service
                </h4>
                <p className="text-xs text-sand-400">
                  Select a tailored service from our 23-year Toronto portfolio.
                </p>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {SERVICES.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      selectedServiceId === s.id
                        ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                        : 'bg-noir-900 border-white/5 text-sand-300 hover:border-gold-500/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-sand-50">{s.name}</span>
                        {s.popular && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-400 font-bold uppercase">
                            Most Loved
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-sand-400 line-clamp-1 mt-0.5">{s.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-3">
                      <span className="text-sm font-bold text-sand-100 block">${s.price}</span>
                      <span className="text-[11px] text-sand-400">{s.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Stylist */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-sand-100 uppercase tracking-wider mb-1">
                  2. Select Your Hairdresser
                </h4>
                <p className="text-xs text-sand-400">
                  Choose David or one of our certified senior hair artisans.
                </p>
              </div>

              <div className="space-y-2">
                <div
                  onClick={() => setSelectedStylist('any')}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedStylist === 'any'
                      ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                      : 'bg-noir-900 border-white/5 text-sand-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-sand-100 block">First Available Master Artist</span>
                      <span className="text-xs text-sand-400">Fastest appointment availability</span>
                    </div>
                  </div>
                </div>

                {TEAM_MEMBERS.map((member) => (
                  <div
                    key={member.name}
                    onClick={() => setSelectedStylist(member.name)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      selectedStylist === member.name
                        ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                        : 'bg-noir-900 border-white/5 text-sand-300 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover border border-gold-500/30"
                      />
                      <div>
                        <span className="font-semibold text-sm text-sand-100 block">{member.name}</span>
                        <span className="text-xs text-gold-400">{member.role}</span>
                      </div>
                    </div>
                    <span className="text-xs text-sand-400 font-medium">{member.experience}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-sand-100 uppercase tracking-wider mb-1">
                  3. Select Date & Arrival Time
                </h4>
                <p className="text-xs text-sand-400">
                  Salon opens 10:30 am Tue–Fri, 9:30 am Sat. Suite 501, 477 Richmond St W.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-sand-300 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-noir-900 border border-gold-500/30 text-sand-100 text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-sand-300 mb-2">Available Time Slots</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2.5 rounded-lg text-xs font-semibold text-center transition-all ${
                        selectedTime === time
                          ? 'bg-gold-500 text-noir-950 font-bold border-gold-400 shadow-md'
                          : 'bg-noir-900 text-sand-300 border border-white/5 hover:border-gold-500/40'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Client Details */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-sand-100 uppercase tracking-wider mb-1">
                  4. Guest Details & Consultation Notes
                </h4>
                <p className="text-xs text-sand-400">
                  We prepare our color bowls and stations prior to your arrival.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-sand-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={clientInfo.fullName}
                    onChange={(e) => setClientInfo({ ...clientInfo, fullName: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3 py-2 rounded-lg bg-noir-900 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-sand-300 mb-1">Phone Number (for SMS) *</label>
                  <input
                    type="tel"
                    required
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                    placeholder="(416) 000-0000"
                    className="w-full px-3 py-2 rounded-lg bg-noir-900 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-sand-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-noir-900 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-sand-300 mb-1">Hair History / Inspiration Notes</label>
                <textarea
                  rows={2}
                  value={clientInfo.notes}
                  onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                  placeholder="Tell us about previous color, box dye, desired blonde tone, or link to inspiration photos..."
                  className="w-full px-3 py-2 rounded-lg bg-noir-900 border border-gold-500/30 text-sand-100 text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20 text-[11px] text-gold-300 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Zero pre-payment required today. Pay at the salon loft in Suite 501 after your service.</span>
              </div>
            </div>
          )}

          {/* STEP 5: Confirmation */}
          {step === 5 && (
            <div className="text-center py-4 space-y-4 animate-scale-up">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-gold-400 block mb-1">
                  Appointment Confirmed!
                </span>
                <h4 className="font-serif text-2xl text-sand-50 font-semibold">
                  We look forward to seeing you, {clientInfo.fullName || 'Valued Guest'}!
                </h4>
                <p className="text-xs text-sand-400 mt-1">
                  Booking Reference: <strong className="text-gold-300 font-mono text-sm">{bookingRef}</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-noir-900 border border-gold-500/30 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-sand-400">Service:</span>
                  <span className="text-sand-100 font-medium">{currentService.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-sand-400">Stylist:</span>
                  <span className="text-sand-100 font-medium">{selectedStylist === 'any' ? 'First Available Master Artist' : selectedStylist}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-sand-400">Date & Time:</span>
                  <span className="text-gold-300 font-semibold">{selectedDate} at {selectedTime || '10:30 AM'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sand-400">Location:</span>
                  <span className="text-sand-100">477 Richmond St W #501, Toronto</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                <button
                  onClick={downloadCalendarEvent}
                  className="px-4 py-2.5 rounded-lg bg-noir-900 border border-gold-500/40 text-gold-300 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-gold-500/10 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Add to Calendar (.ics)
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {step < 5 && (
          <div className="p-4 border-t border-white/10 bg-noir-900 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="px-4 py-2 rounded-lg text-xs font-medium text-sand-400 hover:text-white flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <a
                href={SALON_INFO.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-gold-400 hover:underline"
              >
                Or open official booking portal →
              </a>
            )}

            <button
              onClick={handleNext}
              disabled={step === 3 && (!selectedDate || !selectedTime)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md disabled:opacity-50"
            >
              <span>{step === 4 ? 'Confirm Reservation' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

