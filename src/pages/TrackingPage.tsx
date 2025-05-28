import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Package, CheckCircle, Clock, AlertTriangle, Truck, Ship, MapPin } from 'lucide-react';

interface ShipmentStatus {
  status: 'delivered' | 'in-transit' | 'pending' | 'delayed';
  trackingNumber: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  lastUpdated: string;
  currentLocation: string;
  history: {
    date: string;
    location: string;
    status: string;
    details: string;
  }[];
}

const TrackingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTrackingNumber = searchParams.get('number') || '';
  
  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber);
  const [searchedTrackingNumber, setSearchedTrackingNumber] = useState(initialTrackingNumber);
  const [isLoading, setIsLoading] = useState(false);
  const [shipmentData, setShipmentData] = useState<ShipmentStatus | null>(null);

  // Mock tracking data for demonstration
  const mockShipmentData: ShipmentStatus = {
    status: 'in-transit',
    trackingNumber: searchedTrackingNumber || 'OCW123456789',
    origin: 'Shanghai, China',
    destination: 'Long Beach, USA',
    estimatedDelivery: '2023-10-15',
    lastUpdated: '2023-10-02 14:35 UTC',
    currentLocation: 'Pacific Ocean',
    history: [
      {
        date: '2023-09-25 08:15 UTC',
        location: 'Shanghai, China',
        status: 'Shipment Received',
        details: 'Cargo received at origin port'
      },
      {
        date: '2023-09-27 10:30 UTC',
        location: 'Shanghai, China',
        status: 'Departed Origin Port',
        details: 'Vessel MSC ISABELLA departed from Shanghai'
      },
      {
        date: '2023-10-02 14:35 UTC',
        location: 'Pacific Ocean',
        status: 'In Transit',
        details: 'Vessel is currently in transit'
      }
    ]
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setIsLoading(true);
    setSearchedTrackingNumber(trackingNumber);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      setShipmentData(mockShipmentData);
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-success-500';
      case 'in-transit':
        return 'text-secondary-500';
      case 'pending':
        return 'text-accent-500';
      case 'delayed':
        return 'text-error-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-6 w-6 text-success-500" />;
      case 'in-transit':
        return <Truck className="h-6 w-6 text-secondary-500" />;
      case 'pending':
        return <Clock className="h-6 w-6 text-accent-500" />;
      case 'delayed':
        return <AlertTriangle className="h-6 w-6 text-error-500" />;
      default:
        return <Package className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Track Your Shipment</h1>
            <p className="text-xl text-primary-100 mb-8">
              Enter your tracking number to get real-time updates on your shipment's status and location.
            </p>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="flex-grow py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
              >
                Track Shipment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500 mb-4"></div>
              <p className="text-gray-600">Searching for your shipment...</p>
            </div>
          ) : searchedTrackingNumber && !shipmentData ? (
            <div className="bg-white rounded-lg shadow-card p-8 text-center max-w-2xl mx-auto">
              <AlertTriangle className="h-16 w-16 text-warning-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tracking Information Not Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any information for tracking number <span className="font-semibold">{searchedTrackingNumber}</span>.
                Please verify the tracking number and try again.
              </p>
              <p className="text-gray-500 text-sm">
                Note: It may take up to 24 hours for new shipments to appear in our system.
              </p>
            </div>
          ) : shipmentData ? (
            <div className="max-w-4xl mx-auto">
              {/* Shipment Summary */}
              <div className="bg-white rounded-lg shadow-card p-8 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Shipment Status</h2>
                  <div className="flex items-center">
                    {getStatusIcon(shipmentData.status)}
                    <span className={`ml-2 font-semibold ${getStatusColor(shipmentData.status)}`}>
                      {shipmentData.status === 'delivered' ? 'Delivered' : 
                       shipmentData.status === 'in-transit' ? 'In Transit' : 
                       shipmentData.status === 'pending' ? 'Pending' : 'Delayed'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Tracking Number</p>
                    <p className="font-semibold text-gray-800">{shipmentData.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                    <p className="font-semibold text-gray-800">{shipmentData.lastUpdated}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Origin</p>
                    <p className="font-semibold text-gray-800">{shipmentData.origin}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Destination</p>
                    <p className="font-semibold text-gray-800">{shipmentData.destination}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Current Location</p>
                    <p className="font-semibold text-gray-800">{shipmentData.currentLocation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                    <p className="font-semibold text-gray-800">{shipmentData.estimatedDelivery}</p>
                  </div>
                </div>

                {/* Shipment Progress */}
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="relative">
                    <div className="absolute left-6 top-0 h-full w-1 bg-gray-200"></div>
                    
                    <div className="space-y-8 relative">
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-secondary-500 text-white z-10">
                            <Ship className="h-6 w-6" />
                          </div>
                          <div className="h-full w-1 bg-secondary-500"></div>
                        </div>
                        <div className="pt-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">Current Status</h3>
                          <p className="text-gray-600 mb-1">{shipmentData.history[shipmentData.history.length - 1].status}</p>
                          <p className="text-sm text-gray-500">{shipmentData.history[shipmentData.history.length - 1].details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tracking History */}
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Tracking History</h2>
                
                <div className="relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-3.5 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-8 relative">
                    {shipmentData.history.map((event, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="rounded-full h-7 w-7 flex items-center justify-center bg-secondary-500 text-white z-10">
                            <MapPin className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="font-semibold text-gray-800">{event.status}</h3>
                            <p className="text-sm text-gray-500">{event.date}</p>
                          </div>
                          <p className="text-gray-600 mb-1">{event.location}</p>
                          <p className="text-sm text-gray-500">{event.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about tracking your shipments with OceanWay.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I track my shipment?</h3>
                <p className="text-gray-600">
                  Enter your tracking number in the search field above. You'll receive detailed information about your shipment's current status, location, and estimated delivery date.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How often is tracking information updated?</h3>
                <p className="text-gray-600">
                  Tracking information is updated in real-time as your shipment moves through our logistics network. Updates typically occur at each major checkpoint along the shipping route.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What if my tracking number doesn't work?</h3>
                <p className="text-gray-600">
                  If your tracking number isn't recognized, please verify that you've entered it correctly. New shipments may take up to 24 hours to appear in our system. If you're still having issues, please contact our customer service team.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I receive notifications about my shipment?</h3>
                <p className="text-gray-600">
                  Yes! Register for an account on our website or contact your shipping representative to set up email or SMS notifications for your shipments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackingPage;