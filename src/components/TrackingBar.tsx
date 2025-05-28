import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const TrackingBar: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/tracking?number=${encodeURIComponent(trackingNumber)}`);
    }
  };

  return (
    <div className="bg-primary-600 text-white py-2">
      <div className="container mx-auto px-4 lg:px-8">
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter tracking number"
              className="w-full bg-primary-700 border border-primary-400 rounded-md py-1 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 placeholder-primary-300"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-primary-300 hover:text-white"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackingBar;