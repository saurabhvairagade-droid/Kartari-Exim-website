import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DefaultSeo = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const currentUrl = `https://kartariexim.com${isHome ? '/' : (location.pathname.endsWith('/') ? location.pathname : location.pathname + '/')}`;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>Kartari Exim | Agricultural Exporter India</title>
      <meta name="description" content="Trusted agricultural exporter from India supplying premium spices, soybean meal, basmati rice, and vegetables worldwide." />
      <meta name="keywords" content="agricultural exporter India, soybean meal exporter, soya DOC supplier, Indian spices export, basmati rice exporter, Kartari Exim" />
      <meta name="author" content="Kartari Exim" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:title" content="Kartari Exim - Premium Agricultural Exports from India" />
      <meta property="og:description" content="Trusted agricultural exporter from India supplying soybean meal, Soya DOC, spices, basmati rice and more to buyers worldwide." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kartari Exim" />
      <meta property="og:image" content="https://kartariexim.com/soyaDOC.png" />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kartari Exim - Premium Agricultural Exports" />
      <meta name="twitter:description" content="Leading exporter of premium Indian agricultural products to global markets with 25+ years of expertise." />
      <meta name="twitter:image" content="https://kartariexim.com/soyaDOC.png" />
    </Helmet>
  );
};

export default DefaultSeo;
