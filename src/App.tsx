import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AnimalFeedPage from './Pages/AnimalFeedPage';
import SpicesPage from './Pages/SpicesPage';
import VegetablesPage from './Pages/VegetablesPage';
import FruitsPage from './Pages/FruitsPage';
import BasmatiRicePage from './Pages/BasmatiRicePage';
import ProcessedFoodPage from './Pages/ProcessedFoodPage';
import BlogPage from './Pages/BlogPage';
import BlogPostPage from './Pages/BlogPostPage';
import DehydratedOnionFlakesPage from './Pages/DehydratedOnionFlakesPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-midnight-900 text-white">
        <Header />

        <main className="flex-grow">
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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
