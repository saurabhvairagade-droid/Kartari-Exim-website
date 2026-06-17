import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AlertTriangle } from 'lucide-react';

const Error400Page = () => {
  return (
    <div className="min-h-screen bg-midnight-900 flex items-center justify-center p-4">
      <Helmet>
        <title>Bad Request - 400 | Kartari Exim</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="max-w-md w-full bg-midnight-800 rounded-2xl p-8 text-center shadow-xl border border-midnight-700">
        <div className="flex justify-center mb-6">
          <div className="bg-orange-500/10 p-4 rounded-full">
            <AlertTriangle className="w-16 h-16 text-orange-500" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-4">400</h1>
        <h2 className="text-2xl font-semibold text-champagne-400 mb-4">Bad Request</h2>
        
        <p className="text-platinum-300 mb-8">
          There was an issue processing your request. Please try again or return to the homepage.
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

export default Error400Page;
