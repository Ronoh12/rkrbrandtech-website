import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ScrollToTop />   {/* ⭐ ADD THIS */}

      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
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
