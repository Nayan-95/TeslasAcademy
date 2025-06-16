import React from 'react';

const TeslaAcademyModern = () => {
  const cardStyle = {
    borderRadius: '16px',
    padding: '32px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const aboutCardStyle = {
    ...cardStyle,
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    color: 'white',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  };

  const courseCardStyle = {
    ...cardStyle,
    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
    color: 'white',
    boxShadow: '0 20px 60px rgba(25, 118, 210, 0.3)',
  };

  const buttonStyle = {
    padding: '12px 32px',
    borderRadius: '25px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#1976d2',
    color: 'white',
    boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
  };

  const whiteButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'white',
    color: '#1976d2',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
  };

  const chipStyle = {
    display: 'inline-block',
    padding: '6px 16px',
    borderRadius: '16px',
    fontSize: '12px',
    fontWeight: '500',
    marginBottom: '16px'
  };

  const iconStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    fontSize: '28px'
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '48px 24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: "#f8f9fa",

    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '32px',
        alignItems: 'stretch'
      }}>
        {/* About Tesla Card */}
        <div 
          style={aboutCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
          }}
        >
          {/* Top gradient line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #1976d2, #42a5f5)'
          }} />

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{
              ...iconStyle,
              backgroundColor: '#1976d2',
              boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)'
            }}>
              📚
            </div>
            <h2 style={{ 
              margin: 0, 
              fontSize: '32px', 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              About Tesla
            </h2>
          </div>

          <div style={{
            ...chipStyle,
            backgroundColor: 'rgba(25, 118, 210, 0.2)',
            color: '#90caf9'
          }}>
            Leading Institution
          </div>

          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.7', 
            marginBottom: 'auto',
            color: 'rgba(255, 255, 255, 0.9)',
            flexGrow: 1
          }}>
            Tesla Academy is a leading educational institution committed to shaping the future of students through quality coaching. We focus on delivering personalized learning experiences across various academic boards, ensuring success in exams and beyond.
          </p>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '24px',
            marginTop: '16px'
          }}>
            <span style={{ color: '#ffd700', marginRight: '8px', fontSize: '20px' }}>⭐</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
              Trusted by 10,000+ students
            </span>
          </div>

          <button 
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1565c0';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 35px rgba(25, 118, 210, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1976d2';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(25, 118, 210, 0.3)';
            }}
          >
            📈 Know More
          </button>
        </div>

        {/* Course Details Card */}
        <div 
          style={courseCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(25, 118, 210, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(25, 118, 210, 0.3)';
          }}
        >
          {/* Top gradient line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #ffffff, #e3f2fd)'
          }} />

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{
              ...iconStyle,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)'
            }}>
              📖
            </div>
            <h2 style={{ 
              margin: 0, 
              fontSize: '32px', 
              fontWeight: 'bold',
              color: 'white'
            }}>
              Course Details
            </h2>
          </div>

          <div style={{
            ...chipStyle,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            backdropFilter: 'blur(10px)'
          }}>
            Expert Trainers
          </div>

          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.7', 
            marginBottom: 'auto',
            color: 'rgba(255, 255, 255, 0.95)',
            flexGrow: 1
          }}>
            We offer a wide range of courses tailored to different educational boards and competitive exams. Our expert trainers provide focused, structured lessons to help students achieve academic excellence and prepare for future success.
          </p>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '24px',
            marginTop: '16px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4caf50',
              marginRight: '8px',
              boxShadow: '0 0 10px rgba(76, 175, 80, 0.5)'
            }} />
            <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
              15+ Subject specializations available
            </span>
          </div>

          <button 
            style={whiteButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f5f5f5';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
          >
            📖 View Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeslaAcademyModern;