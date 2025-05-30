import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TrackingBar from './TrackingBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <TrackingBar /> */}
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;