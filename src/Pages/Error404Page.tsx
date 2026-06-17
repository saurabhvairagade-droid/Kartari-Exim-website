import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AlertCircle } from 'lucide-react';

const Error404Page = () => {
  return (
    <div className="min-h-screen bg-midnight-900 flex items-center justify-center p-4">
      <Helmet>
        <title>Page Not Found - 404 | Kartari Exim</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="max-w-md w-full bg-midnight-800 rounded-2xl p-8 text-center shadow-xl border border-midnight-700">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/10 p-4 rounded-full">
            <AlertCircle className="w-16 h-16 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-champagne-400 mb-4">Page Not Found</h2>
        
        <p className="text-platinum-300 mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-champagne-500 text-midnight-900 font-semibold rounded-lg hover:bg-champagne-400 transition-colors duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error404Page;
