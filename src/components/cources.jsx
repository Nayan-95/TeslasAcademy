import React, { useEffect, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import PublicIcon from '@mui/icons-material/Public';

const boards = [
  { 
    label: 'CBSE', 
    icon: <SchoolIcon fontSize="large" />, 
    gradient: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)' 
  },
  { 
    label: 'IGCSE', 
    icon: <PersonPinIcon fontSize="large" />, 
    gradient: 'linear-gradient(135deg, #7b1fa2 0%, #ab47bc 100%)' 
  },
  { 
    label: 'ICSE', 
    icon: <MenuBookIcon fontSize="large" />, 
    gradient: 'linear-gradient(135deg, #388e3c 0%, #66bb6a 100%)' 
  },
  { 
    label: 'IB', 
    icon: <PublicIcon fontSize="large" />, 
    gradient: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)' 
  },
  { 
    label: 'Matric', 
    icon: <CastForEducationIcon fontSize="large" />, 
    gradient: 'linear-gradient(135deg, #c2185b 0%, #f06292 100%)' 
  },
  { 
    label: 'NEET', 
    icon: <MedicalServicesIcon fontSize="large" />, 
    gradient: 'linear-gradient(135deg, #d32f2f 0%, #ef5350 100%)' 
  },
  { 
    label: 'JEE', 
    icon: <ScienceIcon fontSize="large" />, 
    gradient: 'linear-gradient(135deg, #303f9f 0%, #5c6bc0 100%)' 
  },
  { 
    label: 'SAT', 
    icon: <CalculateIcon fontSize="large" />, 
    gradient: 'linear-gradient(135deg, #5d4037 0%, #8d6e63 100%)' 
  },
];

const BoardMarquee = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    const speed = 0.6;
    const cardWidth = 200;
    const totalWidth = cardWidth * boards.length;

    const animate = () => {
      position += speed;
      
      if (position >= totalWidth) {
        position = 0;
      }
      
      container.style.transform = `translateX(-${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    const marqueeContainer = container.parentElement;
    marqueeContainer.addEventListener('mouseenter', handleMouseEnter);
    marqueeContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (marqueeContainer) {
        marqueeContainer.removeEventListener('mouseenter', handleMouseEnter);
        marqueeContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        overflow: 'hidden',
        py: 4,
        backgroundColor: "#f8f9fa",
         position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ 
          mb: 3, 
          color: 'black', 
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Educational Boards */}
      </Typography>
      
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          ref={containerRef}
          sx={{
            display: 'flex',
            width: 'max-content',
          }}
        >
          {[...boards, ...boards, ...boards].map((board, index) => (
            <Paper
              key={index}
              elevation={12}
              sx={{
                background: board.gradient,
                color: 'white',
                width: 160,
                height: 180,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
                mx: 2.5,
                flexShrink: 0,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.8s',
                },
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.08)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.35)',
                  '&::before': {
                    transform: 'translateX(100%)',
                  }
                }
              }}
            >
              <Box
                sx={{
                  transform: 'scale(1.3)',
                  mb: 1.5,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                  transition: 'all 0.3s ease',
                }}
              >
                {board.icon}
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                  letterSpacing: '0.8px',
                  fontSize: '1.1rem'
                }}
              >
                {board.label}
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '0 0 12px 12px',
                }}
              />
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BoardMarquee;