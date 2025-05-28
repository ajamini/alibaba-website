import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100">
              Get in touch with our team for inquiries, quotes, or support. We're here to help with all your shipping and logistics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-card p-8 h-full">
                <h2 className="text-2xl font-bold text-primary-500 mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-accent-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Headquarters</h3>
                      <p className="text-gray-600">
                        123 Shipping Lane<br />
                        Harbor District<br />
                        Port City, PC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-accent-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">Main: +1 (555) 123-4567</p>
                      <p className="text-gray-600">Support: +1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-accent-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">General: info@oceanway.com</p>
                      <p className="text-gray-600">Support: support@oceanway.com</p>
                      <p className="text-gray-600">Sales: sales@oceanway.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-6 w-6 text-accent-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold text-primary-500 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-success-500/10 border border-success-500/30 rounded-lg p-6 text-center"
                  >
                    <div className="mx-auto w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mb-4">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting OceanWay. We've received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Your Name <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                          Subject <span className="text-error-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Shipping Quote">Shipping Quote</option>
                          <option value="Tracking Assistance">Tracking Assistance</option>
                          <option value="Business Partnership">Business Partnership</option>
                          <option value="Customer Support">Customer Support</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Message <span className="text-error-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      ></textarea>
                    </div>

                    {error && (
                      <div className="bg-error-500/10 border border-error-500/30 text-error-500 p-3 rounded-md">
                        {error}
                      </div>
                    )}

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⟳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Global Offices</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With offices strategically located around the world, we provide local expertise with global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-card transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">North America</h3>
              <p className="text-gray-600 mb-4">
                123 Shipping Lane<br />
                Harbor District<br />
                Port City, PC 12345<br />
                United States
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> na@oceanway.com
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-card transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Europe</h3>
              <p className="text-gray-600 mb-4">
                45 Harbor Street<br />
                Maritime Quarter<br />
                Rotterdam, 3001 AB<br />
                Netherlands
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +31 10 123 4567
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> eu@oceanway.com
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-card transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Asia Pacific</h3>
              <p className="text-gray-600 mb-4">
                789 Ocean Tower<br />
                Shipping District<br />
                Singapore, 049535<br />
                Singapore
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +65 6123 4567
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> apac@oceanway.com
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-card transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Middle East</h3>
              <p className="text-gray-600 mb-4">
                567 Trade Center<br />
                Business Bay<br />
                Dubai, 12345<br />
                United Arab Emirates
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +971 4 123 4567
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> me@oceanway.com
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-card transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Latin America</h3>
              <p className="text-gray-600 mb-4">
                234 Puerto Avenue<br />
                Marina District<br />
                Panama City, 0816-03568<br />
                Panama
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +507 123 4567
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> latam@oceanway.com
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-card transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Africa</h3>
              <p className="text-gray-600 mb-4">
                678 Harbor Road<br />
                Port District<br />
                Cape Town, 8001<br />
                South Africa
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +27 21 123 4567
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> africa@oceanway.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-card p-4">
            <div className="relative w-full h-96 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;