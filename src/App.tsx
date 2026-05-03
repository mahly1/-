/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider, ScrollToTop } from './lib/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingHelpButton from './components/FloatingHelpButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhyListeningMatters from './pages/WhyListeningMatters';
import RisksOfIgnoring from './pages/RisksOfIgnoring';
import Benefits from './pages/Benefits';
import Tips from './pages/Tips';
import ParentGuide from './pages/ParentGuide';
import ChildFeelings from './pages/ChildFeelings';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/why-listening" element={<WhyListeningMatters />} />
                <Route path="/risks" element={<RisksOfIgnoring />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route path="/tips" element={<Tips />} />
                <Route path="/parent-guide" element={<ParentGuide />} />
                <Route path="/child-feelings" element={<ChildFeelings />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <FloatingHelpButton />
        </div>
      </ThemeProvider>
    </Router>
  );
}
