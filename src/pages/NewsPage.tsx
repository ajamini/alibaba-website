import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, User, ArrowRight } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsPosts = [
    {
      id: 1,
      title: 'OceanWay Expands Fleet with Five New Eco-Friendly Vessels',
      excerpt: 'We are proud to announce the addition of five new eco-friendly vessels to our fleet, reducing carbon emissions by up to 40% compared to conventional ships.',
      date: 'June 15, 2023',
      author: 'James Wilson',
      category: 'Company News',
      image: 'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'New Direct Route Between Singapore and Los Angeles Launched',
      excerpt: 'OceanWay is excited to announce a new direct shipping route between Singapore and Los Angeles, reducing transit time by up to 5 days.',
      date: 'May 22, 2023',
      author: 'Sarah Johnson',
      category: 'Services',
      image: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'OceanWay Receives Excellence in Logistics Award 2023',
      excerpt: 'We are honored to be recognized with the Excellence in Logistics Award 2023 for our innovative approach to supply chain management and customer service.',
      date: 'April 10, 2023',
      author: 'Michael Chen',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Implementing Blockchain Technology for Enhanced Shipment Tracking',
      excerpt: 'OceanWay is implementing blockchain technology to provide unprecedented transparency and security in shipment tracking and documentation.',
      date: 'March 5, 2023',
      author: 'Lisa Peterson',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'OceanWay Partners with GreenShip Initiative for Carbon-Neutral Shipping',
      excerpt: 'We are proud to announce our partnership with the GreenShip Initiative, committing to carbon-neutral shipping options for our customers by 2025.',
      date: 'February 18, 2023',
      author: 'Robert Taylor',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      title: 'New Warehousing Facility Opens in Rotterdam',
      excerpt: 'OceanWay has expanded its European operations with a new state-of-the-art warehousing facility in Rotterdam, adding 50,000 square meters of storage capacity.',
      date: 'January 25, 2023',
      author: 'Emma Rodriguez',
      category: 'Expansion',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">News & Updates</h1>
            <p className="text-xl text-primary-100">
              Stay informed about the latest developments at OceanWay, including company news, service updates, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="OceanWay's Commitment to Sustainable Shipping" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium">Featured</span>
                  <span className="mx-2">•</span>
                  <span>July 10, 2023</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">OceanWay's Commitment to Sustainable Shipping: Our 2030 Vision</h2>
                <p className="text-gray-600 mb-6">
                  OceanWay announces its comprehensive sustainability strategy with ambitious goals to reduce carbon emissions by 50% by 2030 and achieve carbon neutrality by 2045. Learn about our innovative initiatives and partnerships driving this transformation.
                </p>
                <Link
                  to="/news/sustainability-vision-2030"
                  className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
                >
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4 md:mb-0">Latest News</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Filter by:</span>
              <select className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="all">All Categories</option>
                <option value="company">Company News</option>
                <option value="services">Services</option>
                <option value="technology">Technology</option>
                <option value="sustainability">Sustainability</option>
                <option value="awards">Awards</option>
                <option value="expansion">Expansion</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>By {post.author}</span>
                    </div>
                    <Link
                      to={`/news/${post.id}`}
                      className="text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-secondary-100 mb-8">
              Stay up-to-date with the latest news, insights, and updates from OceanWay. Subscribe to our newsletter to receive monthly updates directly in your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-gray-800"
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-secondary-200 mt-4">
              By subscribing, you agree to receive marketing emails from OceanWay. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;