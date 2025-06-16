import React, { useState } from 'react';

const TeslaFooterModern = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const footerStyle = {
    // marginTop: '40px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    color: '#e2e8f0',
    padding: '60px 0 40px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '48px',
    marginBottom: '40px'
  };

  const sectionStyle = {
    position: 'relative'
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '24px',
    color: '#f8fafc',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const linkStyle = {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '16px',
    lineHeight: '1.6',
    transition: 'all 0.3s ease',
    display: 'block',
    padding: '8px 0',
    borderRadius: '6px',
    paddingLeft: '16px',
    position: 'relative'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
    padding: '12px 16px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: 'white',
    fontSize: '12px'
  };

  const courseOptionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    marginBottom: '8px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.03)'
  };

  const radioStyle = {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    border: '2px solid #64748b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    marginTop: '24px',
    width: '100%'
  };

  const dividerStyle = {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    margin: '40px 0 20px'
  };

  const copyrightStyle = {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px'
  };

  const courses = [
    { id: 'cbse', label: 'CBSE', emoji: '📚' },
    { id: 'icse', label: 'ICSE', emoji: '📖' },
    { id: 'igcse', label: 'IGCSE', emoji: '🌍' },
    { id: 'matric', label: 'Matric', emoji: '🎓' },
    { id: 'neet', label: 'NEET', emoji: '🏥' },
    { id: 'ib', label: 'IB', emoji: '🌟' }
  ];

  const locations = [
    { name: "Tesla's Academy", address: "Sheriff Colony", icon: '🏛️' },
    { name: "Tesla 2.0", address: "Avinashi Road", icon: '🏢' },
    { name: "Tesla 3.0", address: "ABT Road", icon: '🏫' }
  ];

  const exploreLinks = [
    { name: 'Home', icon: '🏠' },
    { name: 'About us', icon: '👥' },
    { name: 'Courses', icon: '📚' },
    { name: 'Photo Gallery', icon: '📸' },
    { name: 'Video Gallery', icon: '🎥' },
    { name: 'Contact us', icon: '📞' }
  ];

  return (
    <footer style={footerStyle}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        // marginTop: '60px',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)'
      }} />
      
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Company Info Section */}
          <div style={sectionStyle}>
            <h3 style={headingStyle}>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                borderRadius: '12px',
                padding: '8px',
                fontSize: '20px'
              }}>
                🚀
              </div>
              TESLA'S
            </h3>
            
            {locations.map((location, index) => (
              <div 
                key={index}
                style={{
                  ...contactItemStyle,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={iconStyle}>{location.icon}</div>
                <div>
                  <div style={{ fontWeight: '600', color: '#f8fafc' }}>{location.name}</div>
                  <div style={{ fontSize: '14px', color: '#cbd5e1' }}>{location.address}</div>
                </div>
              </div>
            ))}

            {/* Contact Info */}
            <div style={{ marginTop: '24px' }}>
              <div style={{...contactItemStyle, cursor: 'pointer'}}
                   onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'}
                   onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}>
                <div style={{...iconStyle, background: 'linear-gradient(135deg, #22c55e, #16a34a)'}}>📞</div>
                <div>
                  <div style={{ fontWeight: '600', color: '#f8fafc' }}>96291 37666</div>
                  <div style={{ fontWeight: '600', color: '#f8fafc' }}>88255 38408</div>
                </div>
              </div>
              
              <div style={{...contactItemStyle, cursor: 'pointer'}}
                   onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
                   onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}>
                <div style={{...iconStyle, background: 'linear-gradient(135deg, #ef4444, #dc2626)'}}>✉️</div>
                <div>
                  <div style={{ fontWeight: '600', color: '#f8fafc' }}>info@teslasacademy.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div style={{...sectionStyle, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <h3 style={headingStyle}>
    <div style={{
      background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      borderRadius: '12px',
      padding: '8px',
      fontSize: '20px'
    }}>
      🧭
    </div>
    Explore
  </h3>
            
            <div>
              {exploreLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#3b82f6';
                    e.target.style.paddingLeft = '24px';
                    e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#cbd5e1';
                    e.target.style.paddingLeft = '16px';
                    e.target.style.background = 'transparent';
                  }}
                >
                  <span style={{ marginRight: '8px' }}>{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Courses Section */}
          <div style={sectionStyle}>
            <h3 style={headingStyle}>
              <div style={{
                background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
                borderRadius: '12px',
                padding: '8px',
                fontSize: '20px'
              }}>
                🎓
              </div>
              Courses
            </h3>
            
            <div>
              <div style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '20px', 
                color: '#f8fafc' 
              }}>
                Enquire now!
              </div>
              
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  style={{
                    ...courseOptionStyle,
                    background: selectedCourse === course.id 
                      ? 'rgba(59, 130, 246, 0.2)' 
                      : 'rgba(255, 255, 255, 0.03)',
                    border: selectedCourse === course.id 
                      ? '1px solid #3b82f6' 
                      : '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onClick={() => setSelectedCourse(course.id)}
                  onMouseEnter={(e) => {
                    if (selectedCourse !== course.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCourse !== course.id) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <div style={{
                    ...radioStyle,
                    borderColor: selectedCourse === course.id ? '#3b82f6' : '#64748b',
                    background: selectedCourse === course.id ? '#3b82f6' : 'transparent'
                  }}>
                    {selectedCourse === course.id && (
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'white'
                      }} />
                    )}
                  </div>
                  <span style={{ marginRight: '8px', fontSize: '18px' }}>{course.emoji}</span>
                  <span style={{ fontSize: '16px', fontWeight: '500' }}>{course.label}</span>
                </div>
              ))}
              
              <button 
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)';
                }}
              >
                🚀 Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div style={dividerStyle} />
        
        <div style={copyrightStyle}>
          <span style={{ fontSize: '18px' }}>🏆</span>
          <span>© 2024 Tesla's Academy. All rights reserved.</span>
          <span style={{ fontSize: '18px' }}>⚡</span>
        </div>
      </div>
    </footer>
  );
};

export default TeslaFooterModern;