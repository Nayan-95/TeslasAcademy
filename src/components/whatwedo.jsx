import React, { useState, useEffect } from 'react';

const WhatWeDoSection = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
          backgroundColor: "#f8f9fa",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    alignItems: 'center',
    marginBottom: '60px'
  };

  const imagesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  };

  const imageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease'
  };

  const contentStyle = {
    padding: '20px'
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '32px',
    lineHeight: '1.2',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #4a5568 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const descriptionStyle = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#4a5568',
    marginBottom: '48px',
    textAlign: 'justify'
  };

  const skillsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  };

  const skillItemStyle = {
    position: 'relative'
  };

  const skillHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  };

  const skillNameStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#2d3748',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const skillPercentageStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#2d3748'
  };

  const progressBarBackgroundStyle = {
    width: '100%',
    height: '12px',
    backgroundColor: '#e2e8f0',
    borderRadius: '6px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const createProgressBarStyle = (percentage, color, isAnimated) => ({
    height: '100%',
    width: isAnimated ? `${percentage}%` : '0%',
    background: `linear-gradient(135deg, ${color}, ${color}dd)`,
    borderRadius: '6px',
    transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      animation: 'shimmer 2s infinite'
    }
  });

  const skills = [
    { name: 'Finance', percentage: 58, color: '#ef4444', icon: '💰' },
    { name: 'Marketing', percentage: 60, color: '#f59e0b', icon: '📈' },
    { name: 'Business', percentage: 85, color: '#10b981', icon: '💼' },
    { name: 'Design', percentage: 87, color: '#06b6d4', icon: '🎨' }
  ];

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr !important;
            }
            .content-section {
              grid-column: 1 !important;
            }
            .heading-responsive {
              font-size: 36px !important;
            }
          }
        `}
      </style>
      
      <div className="grid-container" style={gridStyle}>
        {/* Images Container - Now Vertical */}
        <div style={imagesContainerStyle}>
          {/* First Image */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Students collaborating"
              style={imageStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05) rotate(1deg)';
                e.target.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)';
                e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
              }}
            />
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a1a1a'
            }}>
              🎓 Learning Together
            </div>
          </div>

          {/* Second Image */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              alt="Students in classroom"
              style={imageStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05) rotate(-1deg)';
                e.target.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)';
                e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              background: 'rgba(59, 130, 246, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'white'
            }}>
              📚 Excellence in Education
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section" style={contentStyle}>
          <h1 className="heading-responsive" style={headingStyle}>
            What we do
          </h1>
          
          <p style={descriptionStyle}>
            Along with your plans, you should consider developing an action orientation 
            that will keep you motivated to move forward at all times. This requires a little 
            self-discipline, but is a crucial component to achievement of any kind.
          </p>

          <div style={skillsContainerStyle}>
            {skills.map((skill, index) => (
              <div key={skill.name} style={skillItemStyle}>
                <div style={skillHeaderStyle}>
                  <div style={skillNameStyle}>
                    <span style={{ fontSize: '20px' }}>{skill.icon}</span>
                    {skill.name}
                  </div>
                  <div style={skillPercentageStyle}>
                    {skill.percentage}%
                  </div>
                </div>
                
                <div style={progressBarBackgroundStyle}>
                  <div 
                    style={{
                      ...createProgressBarStyle(skill.percentage, skill.color, animated),
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      animation: animated ? 'shimmer 2s infinite' : 'none',
                      animationDelay: `${index * 0.3}s`
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
        marginTop: '60px',
        padding: '40px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
      }}>
        {[
          { number: '1000+', label: 'Students Enrolled', icon: '👨‍🎓' },
          { number: '50+', label: 'Expert Teachers', icon: '👩‍🏫' },
          { number: '15+', label: 'Course Categories', icon: '📚' },
          { number: '95%', label: 'Success Rate', icon: '🏆' }
        ].map((stat, index) => (
          <div key={index} style={{
            textAlign: 'center',
            padding: '20px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>{stat.icon}</div>
            <div style={{ 
              fontSize: '32px', 
              fontWeight: '800', 
              color: '#1a1a1a',
              marginBottom: '4px'
            }}>
              {stat.number}
            </div>
            <div style={{ 
              fontSize: '14px', 
              color: '#64748b',
              fontWeight: '500'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoSection;