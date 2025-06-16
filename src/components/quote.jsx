import React, { useEffect, useState } from 'react';

// Enhanced quotes with categories and authors
const quotes = [
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    category: "Education",
    bgColor: "#2c3e50",
    accentColor: "#3498db",
  },
  {
    text: "The beautiful thing about learning is nobody can take it away from you.",
    author: "B.B. King",
    category: "Learning",
    bgColor: "#8e44ad",
    accentColor: "#e74c3c",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
    category: "Success",
    bgColor: "#27ae60",
    accentColor: "#f39c12",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Motivation",
    bgColor: "#e67e22",
    accentColor: "#1abc9c",
  },
  {
    text: "Don't limit a child to your own learning, for he was born in another time.",
    author: "Rabindranath Tagore",
    category: "Growth",
    bgColor: "#34495e",
    accentColor: "#9b59b6",
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
    category: "Progress",
    bgColor: "#16a085",
    accentColor: "#f1c40f",
  }
];

const EnhancedQuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const quoteDuration = 4000; // 4 seconds per quote
  const fadeTimeout = 600;

  useEffect(() => {
    let interval;
    let progressInterval;
    
    if (isPlaying) {
      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + (100 / (quoteDuration / 100));
        });
      }, 100);

      // Quote transition
      interval = setInterval(() => {
        setShowQuote(false);
        setProgress(0);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % quotes.length);
          setShowQuote(true);
        }, fadeTimeout);
      }, quoteDuration);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, currentIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      setProgress(0);
    }
  };

  const handleNext = () => {
    setShowQuote(false);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
      setShowQuote(true);
    }, fadeTimeout / 2);
  };

  const handlePrevious = () => {
    setShowQuote(false);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
      setShowQuote(true);
    }, fadeTimeout / 2);
  };

  const currentQuote = quotes[currentIndex];

  const containerStyle = {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 15px 12px rgba(0,0,0,0.08)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
          backgroundColor: "#f8f9fa",

  };

  const progressBarStyle = {
    height: '4px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    position: 'relative',
    overflow: 'hidden',
  };

  const progressFillStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: currentQuote.accentColor,
    transition: 'none',
  };

  const mainContentStyle = {
    minHeight: '320px',
    background: `linear-gradient(135deg, ${currentQuote.bgColor} 0%, ${currentQuote.bgColor}dd 100%)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '40px 20px',
  };

  const quoteIconStyle = {
    fontSize: '48px',
    color: currentQuote.accentColor,
    opacity: 0.3,
    position: 'absolute',
    top: '20px',
    left: '30px',
    fontFamily: 'Georgia, serif',
  };

  const categoryChipStyle = {
    backgroundColor: currentQuote.accentColor,
    color: 'white',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    marginBottom: '24px',
    opacity: showQuote ? 1 : 0,
    transform: showQuote ? 'translateY(0)' : 'translateY(10px)',
    transition: `all ${fadeTimeout}ms ease`,
  };

  const quoteTextStyle = {
    color: 'white',
    fontWeight: '400',
    padding: '0 32px',
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
    lineHeight: '1.4',
    marginBottom: '24px',
    fontSize: window.innerWidth < 768 ? '1.5rem' : '2rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    opacity: showQuote ? 1 : 0,
    transform: showQuote ? 'translateY(0)' : 'translateY(20px)',
    transition: `all ${fadeTimeout}ms ease`,
  };

  const authorStyle = {
    color: currentQuote.accentColor,
    fontWeight: '300',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '1.1rem',
    opacity: showQuote ? 0.9 : 0,
    transform: showQuote ? 'translateY(0)' : 'translateY(10px)',
    transition: `all ${fadeTimeout + 200}ms ease`,
  };

  const counterStyle = {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.875rem',
    fontWeight: '500',
  };

  const controlPanelStyle = {
    backgroundColor: 'rgba(0,0,0,0.9)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px',
    gap: '8px',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    fontSize: '18px',
  };

  const playButtonStyle = {
    ...buttonStyle,
    color: currentQuote.accentColor,
    backgroundColor: 'rgba(255,255,255,0.1)',
    margin: '0 8px',
  };

  const indicatorContainerStyle = {
    position: 'absolute',
    bottom: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  };

  return (
    <div style={containerStyle}>
      {/* Progress Bar */}
      <div style={progressBarStyle}>
        <div style={progressFillStyle}></div>
      </div>

      {/* Main Content Area */}
      <div style={mainContentStyle}>
        {/* Quote Icon */}
        <div style={quoteIconStyle}>"</div>

        {/* Category Chip */}
        <div style={categoryChipStyle}>
          {currentQuote.category}
        </div>

        {/* Quote Text */}
        <div style={quoteTextStyle}>
          "{currentQuote.text}"
        </div>

        {/* Author */}
        <div style={authorStyle}>
          — {currentQuote.author}
        </div>

        {/* Quote Counter */}
        <div style={counterStyle}>
          {currentIndex + 1} / {quotes.length}
        </div>
      </div>

      {/* Control Panel */}
      <div style={controlPanelStyle}>
        <button
          style={buttonStyle}
          onClick={handlePrevious}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ⏮
        </button>

        <button
          style={playButtonStyle}
          onClick={handlePlayPause}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <button
          style={buttonStyle}
          onClick={handleNext}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ⏭
        </button>
      </div>

      {/* Indicator Dots */}
      <div style={indicatorContainerStyle}>
        {quotes.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setShowQuote(false);
              setProgress(0);
              setTimeout(() => {
                setCurrentIndex(index);
                setShowQuote(true);
              }, fadeTimeout / 2);
            }}
            style={{
              width: index === currentIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: index === currentIndex 
                ? currentQuote.accentColor 
                : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = index === currentIndex 
                ? currentQuote.accentColor 
                : 'rgba(255,255,255,0.7)';
              e.target.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = index === currentIndex 
                ? currentQuote.accentColor 
                : 'rgba(255,255,255,0.4)';
              e.target.style.transform = 'scale(1)';
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedQuoteCarousel;