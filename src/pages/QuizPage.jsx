import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle, 
  Clock, 
  UserCheck, 
  Calendar,
  Scissors
} from 'lucide-react';
import { QUIZ_QUESTIONS, SERVICES } from '../data/salonData';
import confetti from 'canvas-confetti';

export default function QuizPage({ onSelectServiceForBooking }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelectOption = (questionId, value) => {
    const updatedAnswers = { ...answers, [questionId]: value };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate Recommendation
      calculateRecommendation(updatedAnswers);
    }
  };

  const calculateRecommendation = (ans) => {
    let serviceName = "Signature Balayage & French Foilayage";
    let matchedStylist = "Valerie - Senior Colour Director";
    let estDuration = "3 Hours";
    let homeTip = "Incorporate Olaplex No. 3 weekly to protect lipid bonds and book a gloss refresh at 10 weeks.";

    const goal = ans[2]; // question 2 is goal
    const cond = ans[3]; // condition
    const len = ans[1]; // length

    if (goal === 'cut') {
      serviceName = len === 'short' || len === 'medium'
        ? "Short to Medium Length Haircut Specialist"
        : "Medium To Long Haircut & Layering";
      matchedStylist = "David - Founder & Master Hairdresser";
      estDuration = "60 Minutes";
      homeTip = "Use light styling cream and round ceramic brush; David's precision cut will maintain shape for 8–10 weeks.";
    } else if (goal === 'keratin') {
      serviceName = "Cezanne Keratin Smoothing Treatment";
      matchedStylist = "Julian - Keratin & Texture Restructuring Artisan";
      estDuration = "2.5 Hours";
      homeTip = "Use sulfate-free Cezanne Perfect Moisture shampoo to extend smoothing benefits up to 5 full months.";
    } else if (goal === 'bridal') {
      serviceName = "Bridal Hair & Veil Placement";
      matchedStylist = "Maya - Lead Bridal & Red Carpet Stylist";
      estDuration = "90 Minutes";
      homeTip = "Schedule a trial 4-6 weeks prior; wash hair the evening before with zero heavy silicones for optimal grip.";
    } else {
      if (cond === 'damaged') {
        serviceName = "Base Colour With Highlights + Olaplex Repair";
        matchedStylist = "Valerie - Senior Colour Director";
        estDuration = "3.5 Hours";
        homeTip = "We'll apply a gentle bond-building glaze to replenish cuticle protein while lifting dimension.";
      }
    }

    setResult({
      serviceName,
      matchedStylist,
      estDuration,
      homeTip
    });

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#dfba73', '#e8d4a6']
    });
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
            Personalized Salon Consultation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-sand-50 font-normal tracking-tight">
            Find Your Signature Look
          </h1>
          <p className="text-sand-300 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            Answer 4 quick questions to receive a tailored salon recommendation matched to David & Co.'s 23-year cutting & colouring expertise.
          </p>
        </div>

        {!result ? (
          /* QUIZ QUESTIONS STEPPER */
          <div className="bg-noir-900 border border-gold-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Progress indicators */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex gap-1.5">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentStep
                        ? 'w-8 bg-gold-400'
                        : i < currentStep
                        ? 'w-4 bg-gold-600'
                        : 'w-4 bg-noir-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Question Title */}
            <h2 className="font-serif text-2xl sm:text-3xl text-sand-50 font-medium mb-6">
              {QUIZ_QUESTIONS[currentStep].question}
            </h2>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {QUIZ_QUESTIONS[currentStep].options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelectOption(QUIZ_QUESTIONS[currentStep].id, option.value)}
                  className="p-4 rounded-xl bg-noir-950 border border-white/5 hover:border-gold-400/80 hover:bg-gold-500/10 text-left transition-all duration-200 flex items-center gap-3.5 group"
                >
                  <span className="text-2xl p-2 rounded-lg bg-noir-900 border border-white/5 group-hover:scale-110 transition-transform">
                    {option.icon}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-sand-100 group-hover:text-gold-300 block">
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Back button */}
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs text-sand-400 hover:text-white transition-colors"
              >
                ← Previous question
              </button>
            )}
          </div>
        ) : (
          /* RESULT CARD */
          <div className="bg-gradient-to-b from-noir-900 via-noir-950 to-noir-900 border border-gold-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl animate-fade-in space-y-6">
            <div className="text-center pb-4 border-b border-white/10">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400 mb-1 block">
                Your Customized Formula Match
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-sand-50 font-bold">
                {result.serviceName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-noir-900 border border-gold-500/20 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-gold-400 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-sand-400 block uppercase font-medium">Recommended Specialist</span>
                  <strong className="text-sm text-sand-100 font-semibold">{result.matchedStylist}</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-noir-900 border border-gold-500/20 flex items-center gap-3">
                <Clock className="w-6 h-6 text-gold-400 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-sand-400 block uppercase font-medium">Estimated Studio Time</span>
                  <strong className="text-sm text-sand-100 font-semibold">{result.estDuration} in Suite 501</strong>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gold-300">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>David's Long-Term Maintenance Tip:</span>
              </div>
              <p className="text-xs text-sand-300 leading-relaxed">
                {result.homeTip}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onSelectServiceForBooking(result.serviceName)}
                className="flex-grow py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 text-noir-950 font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Reserve This Session Online
              </button>
              <button
                onClick={restartQuiz}
                className="py-3.5 px-5 rounded-xl bg-noir-900 border border-white/10 text-sand-300 text-xs font-semibold flex items-center justify-center gap-1.5 hover:text-white hover:bg-white/5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

