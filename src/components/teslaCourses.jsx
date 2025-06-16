import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  height: 400,
  flexShrink: 0,
  borderRadius: 12,
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  position: 'relative',
  cursor: 'pointer',
  margin: '0 10px',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  },
}));

const GradientOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: 20,
  color: 'white',
});

const CarouselContainer = styled(Box)({
  display: 'flex',
  overflowX: 'hidden',
  position: 'relative',
  padding: '20px 0',
  width: '100%',
});

const CarouselTrack = styled(Box)({
  display: 'flex',
  transition: 'transform 0.5s ease',
});

const courses = [
  // Your existing course data
  {
    id: 1,
    title: 'CBSE',
    description: 'Comprehensive preparation for CBSE board examinations with expert guidance and structured learning.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: '#1976d2',
    students: '15K+ Students',
    duration: '10-12 Months'
  },
  {
    id: 2,
    title: 'IGCSE',
    description: 'International General Certificate of Secondary Education programs designed for global standards.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: '#388e3c',
    students: '8K+ Students',
    duration: '12-18 Months'
  },
  {
    id: 3,
    title: 'NEET',
    description: 'Medical entrance exam preparation with focused coaching and practice sessions.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: '#d32f2f',
    students: '25K+ Students',
    duration: '12-24 Months'
  },
  {
    id: 4,
    title: 'ICSE',
    description: 'Indian Certificate of Secondary Education curriculum with personalized attention.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: '#7b1fa2',
    students: '12K+ Students',
    duration: '10-12 Months'
  },
  {
    id: 5,
    title: 'IB',
    description: 'International Baccalaureate program for globally minded students seeking excellence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: '#f57c00',
    students: '5K+ Students',
    duration: '18-24 Months'
  },
  {
    id: 6,
    title: 'MathC',
    description: 'Advanced mathematics courses for competitive exams and higher education preparation.',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    color: '#00796b',
    students: '20K+ Students',
    duration: '6-12 Months'
  }
];

// Duplicate courses for infinite effect
const duplicatedCourses = [...courses, ...courses, ...courses];

const TeslaCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % courses.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll, courses.length]);

  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = 320; // 300px width + 20px margin
      trackRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setAutoScroll(false);
    setCurrentIndex(prev => (prev - 1 + courses.length) % courses.length);
  };

  const handleNext = () => {
    setAutoScroll(false);
    setCurrentIndex(prev => (prev + 1) % courses.length);
  };

  const handleEnquire = (courseTitle) => {
    console.log(`Enquiry for ${courseTitle} course`);
  };

  return (
    <Box sx={{ 
      py: 8,
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        <Typography 
  variant="h4" 
  component="h1" 
  align="center" 
  gutterBottom 
  sx={{ 
    fontWeight: 700,
    color: 'black', // Set text color to black
    background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    mb: 4,
    textShadow: '0 0 0 black' // This helps maintain readability
  }}
>
  Tesla's Courses
</Typography>

        <Box sx={{ position: 'relative' }}>
          <IconButton 
            onClick={handlePrev}
            sx={{ 
              position: 'absolute', 
              left: 0, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              zIndex: 2,
              backgroundColor: 'rgba(255,255,255,0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,1)',
              }
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>

          <CarouselContainer ref={carouselRef}>
            <CarouselTrack ref={trackRef}>
              {duplicatedCourses.map((course, index) => (
                <StyledCard key={`${course.id}-${index}`}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={course.image}
                    alt={course.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <GradientOverlay>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                        <Chip 
                          label={course.students} 
                          size="small" 
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.2)', 
                            color: 'white',
                            fontSize: '0.7rem'
                          }} 
                        />
                        <Chip 
                          label={course.duration} 
                          size="small" 
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.2)', 
                            color: 'white',
                            fontSize: '0.7rem'
                          }} 
                        />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {course.description}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      onClick={() => handleEnquire(course.title)}
                      sx={{
                        backgroundColor: course.color,
                        color: 'white',
                        borderRadius: 20,
                        padding: '8px 16px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        '&:hover': {
                          backgroundColor: course.color,
                          filter: 'brightness(1.1)',
                        },
                      }}
                    >
                      Enquire Now
                    </Button>
                  </GradientOverlay>
                </StyledCard>
              ))}
            </CarouselTrack>
          </CarouselContainer>

          <IconButton 
            onClick={handleNext}
            sx={{ 
              position: 'absolute', 
              right: 0, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              zIndex: 2,
              backgroundColor: 'rgba(255,255,255,0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,1)',
              }
            }}
          >
            <ChevronRight fontSize="large" />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              color: 'white',
              borderRadius: 25,
              padding: '12px 24px',
              fontWeight: 600,
              '&:hover': {
                transform: 'scale(1.03)',
              }
            }}
          >
            View All Courses
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TeslaCourses;