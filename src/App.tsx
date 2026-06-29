import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { LenisProvider } from './hooks';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DefaultSeo from './components/DefaultSeo';

// Lazy load pages for better performance and smaller initial bundle size
const AnimalFeedPage = lazy(() => import('./Pages/AnimalFeedPage'));
const SpicesPage = lazy(() => import('./Pages/SpicesPage'));
const VegetablesPage = lazy(() => import('./Pages/VegetablesPage'));
const FruitsPage = lazy(() => import('./Pages/FruitsPage'));
const BasmatiRicePage = lazy(() => import('./Pages/BasmatiRicePage'));
const ProcessedFoodPage = lazy(() => import('./Pages/ProcessedFoodPage'));
const BlogPage = lazy(() => import('./Pages/BlogPage'));
const BlogPostPage = lazy(() => import('./Pages/BlogPostPage'));
const DehydratedOnionFlakesPage = lazy(() => import('./Pages/DehydratedOnionFlakesPage'));
const Error404Page = lazy(() => import('./Pages/Error404Page'));
const Error400Page = lazy(() => import('./Pages/Error400Page'));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-midnight-900">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-champagne-400"></div>
  </div>
);

import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DynamicCanonical = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const canonicalUrl = `https://kartariexim.com${isHome ? '/' : (location.pathname.endsWith('/') ? location.pathname : location.pathname + '/')}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

/**
 * PrerenderTrigger — polls until the lazy-loaded page content and Helmet
 * title tag have been injected into the DOM, THEN fires the custom event
 * that tells @prerenderer/rollup-plugin to snapshot.
 *
 * Safety timeout: 8 seconds (fires the event regardless).
 */
const PrerenderTrigger = () => {
  const location = useLocation();
  React.useEffect(() => {
    let cancelled = false;

    const isPageReady = () => {
      // Check 1: Page content has loaded (lazy chunk resolved)
      // The Suspense fallback is a simple spinner div; real pages have <h1> or <article> tags
      const hasContent = document.querySelector('main h1, main article, main h2');

      // Check 2: Helmet has injected a page-specific <title> (not the fallback one from index.html)
      const title = document.querySelector('title');
      const hasDynamicTitle = title && title.textContent && !title.textContent.includes('Soya DOC, Spices, Basmati Rice');

      // For the homepage, the Hero h1 is eager-loaded; also check Helmet has processed
      const isHome = location.pathname === '/';
      const helmetProcessed = document.querySelector('[data-rh="true"]');
      if (isHome) return !!hasContent && !!helmetProcessed;

      return hasContent && hasDynamicTitle;
    };

    // Poll every 200ms, max 8 seconds
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += 200;
      if (cancelled) { clearInterval(interval); return; }

      if (isPageReady() || elapsed >= 8000) {
        clearInterval(interval);
        // Small extra delay for Helmet to flush any remaining mutations
        setTimeout(() => {
          if (!cancelled) {
            document.dispatchEvent(new Event('custom-render-trigger'));
          }
        }, 300);
      }
    }, 200);

    return () => { cancelled = true; clearInterval(interval); };
  }, [location]);
  return null;
};

function App() {
  return (
    <LenisProvider>
      <Router>
        <DefaultSeo />
        <DynamicCanonical />
        <PrerenderTrigger />
        <div className="min-h-screen flex flex-col bg-midnight-900 text-white">
          <Header />

          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Homepage */}
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <About />
                      <Products />
                      <WhyChooseUs />
                      <Contact />
                    </>
                  }
                />

                {/* Static product collection pages */}
                <Route path="/products/soybean-meal" element={<AnimalFeedPage />} />
                <Route path="/products/spices" element={<SpicesPage />} />
                <Route path="/products/vegetables" element={<VegetablesPage />} />
                <Route path="/products/fruits" element={<FruitsPage />} />
                <Route path="/products/basmati-rice" element={<BasmatiRicePage />} />
                <Route path="/products/gourmet-processed-foods" element={<ProcessedFoodPage />} />

                {/* Blog */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />

                {/* Individual product pages */}
                <Route path="/products/dehydrated-onion-flakes" element={<DehydratedOnionFlakesPage />} />

                {/* Error Pages */}
                <Route path="/400" element={<Error400Page />} />
                <Route path="*" element={<Error404Page />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </LenisProvider>
  );
}

export default App;
