import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Quote, 
  ExternalLink, 
  Calendar, 
  ThumbsUp, 
  MessageSquare,
  Scissors
} from 'lucide-react';
import { SALON_INFO, REVIEWS } from '../data/salonData';

export default function ReviewsPage({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const ratingBreakdown = [
    { stars: 5, percentage: 91, count: 465 },
    { stars: 4, percentage: 7, count: 36 },
    { stars: 3, percentage: 1, count: 6 },
    { stars: 2, percentage: 0.5, count: 2 },
    { stars: 1, percentage: 0.5, count: 2 },
  ];

  const filterTags = ['All', 'Balayage', 'Haircuts', 'Cezanne Keratin', 'Bridal'];

  const filteredReviews = activeFilter === 'All'
    ? REVIEWS
    : REVIEWS.filter(r => r.service.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-2">
          Verified Google Feedback
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-sand-50 font-normal tracking-tight">
          Client Reviews & Testimonials
        </h1>
        <p className="text-sand-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          With an overall rating of <strong>4.8 stars from 511 verified reviews</strong>, discover why clients across Toronto and the Fashion District trust David & Co. for their hair journey.
        </p>
      </div>

      {/* Google Review Score Summary Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-10 rounded-2xl bg-noir-900 border border-gold-500/30 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Big Score Box */}
          <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Google Business</span>
            </div>

            <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
              <span className="font-serif text-5xl sm:text-6xl font-bold text-sand-50">
                {SALON_INFO.rating}
              </span>
              <span className="text-lg text-sand-400 font-medium">/ 5.0</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-1 text-gold-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400" />
              ))}
            </div>

            <p className="text-xs text-sand-300">
              Based on <strong className="text-gold-300">{SALON_INFO.reviewCount} authentic Google ratings</strong>.
            </p>

            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 underline"
            >
              <span>View Original Google Listing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Rating Distribution Bars */}
          <div className="md:col-span-7 space-y-2.5">
            {ratingBreakdown.map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs">
                <span className="w-12 text-sand-300 font-medium flex items-center gap-1">
                  {row.stars} <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                </span>
                <div className="flex-grow bg-noir-950 h-2.5 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="bg-gradient-to-r from-gold-500 to-amber-300 h-full rounded-full transition-all duration-500"
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sand-400 font-mono text-[11px]">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Authentic Quotes Highlight Banner from User Request */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-noir-950 border border-gold-500/25 shadow-lg relative">
            <Quote className="w-8 h-8 text-gold-500/20 mb-2" />
            <p className="font-serif text-lg text-sand-50 italic mb-3">
              "Great service, location and staff!"
            </p>
            <span className="text-xs text-gold-400 font-medium block">— Elena R., Balayage Client</span>
          </div>

          <div className="p-6 rounded-2xl bg-noir-950 border border-gold-500/25 shadow-lg relative">
            <Quote className="w-8 h-8 text-gold-500/20 mb-2" />
            <p className="font-serif text-lg text-sand-50 italic mb-3">
              "She gave me a suggestion to tweek my regular style a bit and it was perfect."
            </p>
            <span className="text-xs text-gold-400 font-medium block">— Marcella V., Bob Haircut Client</span>
          </div>

          <div className="p-6 rounded-2xl bg-noir-950 border border-gold-500/25 shadow-lg relative">
            <Quote className="w-8 h-8 text-gold-500/20 mb-2" />
            <p className="font-serif text-lg text-sand-50 italic mb-3">
              "It’s so clean and prices are right for the quality of services offered."
            </p>
            <span className="text-xs text-gold-400 font-medium block">— Chloe D., Cezanne Keratin Client</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === tag
                  ? 'bg-gold-500 text-noir-950 font-bold shadow'
                  : 'bg-noir-900 text-sand-300 hover:text-white border border-white/5'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <a
          href={SALON_INFO.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-noir-900 border border-gold-500/30 text-xs font-semibold text-gold-300 hover:bg-gold-500/10 flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
          <span>Write a Google Review</span>
        </a>
      </div>

      {/* Reviews Cards List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-noir-900 border border-gold-500/20 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-sand-500">{review.date}</span>
                </div>

                <h3 className="font-serif text-lg text-sand-50 font-semibold mb-2">
                  "{review.quote}"
                </h3>

                <p className="text-xs text-sand-400 leading-relaxed font-light mb-6">
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

                {review.verified && (
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 font-medium">
          Ready to experience 5-star hair care in Toronto?
        </h3>
        <p className="text-xs sm:text-sm text-sand-400 max-w-lg mx-auto">
          Reserve your session in Suite 501 at 477 Richmond St West with David & our master stylists.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-widest shadow-xl"
        >
          Book Your Appointment
        </button>
      </div>
    </div>
  );
}

