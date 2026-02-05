// src/App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

import { pageview } from "./utils/analytics";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ManagedIT from "./pages/ManagedIT";
import Portfolio from "./pages/Portfolio";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import InsightPost from "./pages/InsightPost";
import Pricing from "./pages/Pricing";

export default function App() {
  const location = useLocation();

  // ✅ GA pageview on route change
  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* ✅ always scroll top on route change */}
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/managed-it" element={<ManagedIT />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
