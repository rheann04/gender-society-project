import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SideTabs from './components/SideTabs';
import Footer from './components/Footer';
import Home from './pages/Home';
import TheNumbers from './pages/TheNumbers';
import WhyItHappens from './pages/WhyItHappens';
import KnowTheLaw from './pages/KnowTheLaw';
import GetHelp from './pages/GetHelp';
import AboutUs from './pages/AboutUs';
import References from './pages/References';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        const targetId = decodeURIComponent(location.hash.slice(1));
        const target = targetId ? document.getElementById(targetId) : null;

        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'instant' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [location.pathname, location.hash]);

  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <SideTabs />
      <main id="main-content" className="notebook-paper">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/the-numbers" element={<TheNumbers />} />
            <Route path="/why-it-happens" element={<WhyItHappens />} />
            <Route path="/know-the-law" element={<KnowTheLaw />} />
            <Route path="/get-help" element={<GetHelp />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/references" element={<References />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
