import React, { useState, useEffect } from 'react';

const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Enquiry', href: '#enquiry' },
    { name: 'Contact Us', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo Section */}
          <div className="nav-logo">
            <div className="logo-icon">
              <span className="logo-text">T</span>
              <div className="logo-spark"></div>
            </div>
            <div className="logo-content">
              <span className="brand-name">Tesla's Academy</span>
              <span className="brand-tagline">Excellence in Education</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeLink === item.name ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.name)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="link-underline"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="nav-cta">
            <button className="cta-button">
              <span>Get Started</span>
              <div className="button-glow"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`mobile-link ${activeLink === item.name ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.name)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            <button className="mobile-cta-button">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.scrolled {
          background: rgba(0, 0, 0, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          animation: slideInLeft 0.8s ease-out;
        }

        .logo-icon {
          position: relative;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
        }

        .logo-icon:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .logo-spark {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 12px;
          height: 12px;
          background: #FFD700;
          border-radius: 50%;
          animation: sparkle 2s ease-in-out infinite;
        }

        .logo-content {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.4rem;
          font-weight: bold;
          color: white;
          line-height: 1;
        }

        .brand-tagline {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 300;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          animation: slideInDown 0.8s ease-out;
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .nav-link:hover {
          color: #667eea;
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: #667eea;
        }

        .link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.3s ease;
          border-radius: 1px;
        }

        .nav-link:hover .link-underline,
        .nav-link.active .link-underline {
          width: 100%;
        }

        .nav-cta {
          animation: slideInRight 0.8s ease-out;
        }

        .cta-button {
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        .button-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: rotate(45deg);
          transition: all 0.5s ease;
          opacity: 0;
        }

        .cta-button:hover .button-glow {
          animation: shine 0.5s ease-in-out;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          gap: 4px;
        }

        .mobile-menu-btn span {
          width: 25px;
          height: 3px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          animation: slideInLeft 0.5s ease-out forwards;
          opacity: 0;
          transform: translateX(-20px);
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: #667eea;
          padding-left: 1rem;
        }

        .mobile-cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 1rem;
          transition: all 0.3s ease;
        }

        .mobile-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
            height: 70px;
          }

          .nav-links,
          .nav-cta {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .brand-name {
            font-size: 1.2rem;
          }

          .brand-tagline {
            font-size: 0.7rem;
          }

          .logo-icon {
            width: 40px;
            height: 40px;
          }

          .logo-text {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            height: 60px;
          }

          .brand-tagline {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default EnhancedNavbar;