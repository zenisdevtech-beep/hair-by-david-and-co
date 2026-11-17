import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileQuickBar from './components/MobileQuickBar';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LookbookPage from './pages/LookbookPage';
import QuizPage from './pages/QuizPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  const handleOpenBooking = () => {
    setSelectedServiceForModal(null);
    setIsBookingOpen(true);
  };

  const handleSelectServiceForBooking = (serviceName) => {
    setSelectedServiceForModal(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-noir-950 text-sand-100 flex flex-col font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <ScrollToTop />

      {/* Global Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Multi-Page Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onSelectServiceForBooking={handleSelectServiceForBooking}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectServiceForBooking={handleSelectServiceForBooking}
              />
            }
          />
          <Route
            path="/lookbook"
            element={
              <LookbookPage
                onSelectServiceForBooking={handleSelectServiceForBooking}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <QuizPage
                onSelectServiceForBooking={handleSelectServiceForBooking}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenBooking={handleOpenBooking} />}
          />
          <Route
            path="/reviews"
            element={<ReviewsPage onOpenBooking={handleOpenBooking} />}
          />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedServiceForModal}
      />

      {/* Mobile Sticky Quick-Action Bar */}
      <MobileQuickBar onOpenBooking={handleOpenBooking} />

      {/* Global Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}
