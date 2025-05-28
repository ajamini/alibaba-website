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

      {/* Contact Information Only (Full Page) */}
      <section className="py-16 bg-gray-50 flex items-center min-h-[60vh]">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <div className="bg-white rounded-lg shadow-card p-12 w-full max-w-2xl">
            <h2 className="text-3xl font-bold text-primary-500 mb-8 text-center">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-7 w-7 text-accent-500" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Headquarters</h3>
                  <p className="text-gray-600 text-lg">
                    American Shipping and Logistics Inc<br />
                    5030 Firestone Blvd<br />
                    South Gate, CA 90280<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-7 w-7 text-accent-500" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600 text-lg">Main: (925) 570-3835</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-7 w-7 text-accent-500" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600 text-lg">General: info@americanshippingandlogistics.com</p>
                  <p className="text-gray-600 text-lg">Towing: towing@americanshippingandlogistics.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-7 w-7 text-accent-500" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Business Hours</h3>
                  <p className="text-gray-600 text-lg">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-lg">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600 text-lg">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;