import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Home, Search, HelpCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Ship className="h-24 w-24 text-primary-500" />
            <div className="absolute -top-2 -right-2 bg-accent-500 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
              ?
            </div>
          </div>
        </div>
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <Home className="mr-2 h-5 w-5" /> Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <HelpCircle className="mr-2 h-5 w-5" /> Contact Support
          </Link>
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Looking for something specific?</h3>
          <form className="flex max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-white px-4 rounded-r-md transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;