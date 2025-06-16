import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Paper,
  useTheme,
  alpha
} from '@mui/material';
import { FormatQuote as QuoteIcon } from '@mui/icons-material';

const TestimonialsSection = () => {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Shri Surya",
      role: "Student",
      text: "An awesome place to learn and level up. This place shapes ur character and also the prospective of life to achievement and succes.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 2,
      name: "Shree Hari Prashanth",
      role: "Student",
      text: "Great experience and easy learning at Tesla's academy. Friendly atmosphere.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 3,
      name: "Ananya Sharma",
      role: "Student",
      text: "The teaching methodology here is exceptional. Faculty members are highly supportive and the learning environment motivates you to achieve your best.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 4,
      name: "Rahul Verma",
      role: "Parent",
      text: "My child has shown remarkable improvement since joining Tesla Academy. The personalized attention is commendable.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Student",
      text: "The curriculum is well-structured and the teachers are extremely knowledgeable. I've grown both academically and personally here.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone all cards for infinite scroll effect
    const originalChildren = Array.from(carousel.children);
    originalChildren.forEach(child => {
      const clone = child.cloneNode(true);
      carousel.appendChild(clone);
    });

    let animationFrameId;
    let isPaused = false;
    const speed = 0.5; // pixels per frame

    const scroll = () => {
      if (!isPaused) {
        carousel.scrollLeft += speed;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        py: 8,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Hear from Our Students
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            At Tesla Academy, we take pride in creating a positive and inspiring learning environment. 
            Don't just take our word for it—hear what our students and parents have to say about their journey with us.
          </Typography>
        </Box>

        {/* Carousel */}
        <Box
          ref={carouselRef}
          sx={{
            display: 'flex',
            overflowX: 'hidden',
            py: 2,
            gap: 4,
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={testimonial.id}
              sx={{
                flex: '0 0 auto',
                width: { xs: '80%', sm: '50%', md: '33%' },
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  minHeight: 350,
                  position: 'relative',
                  background: index % 2 === 0 ? '#000' : '#0d47a1',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  }
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -15,
                    left: 20,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <QuoteIcon fontSize="small" />
                </Box>

                <CardContent sx={{ pt: 4, pb: 3, height: '100%' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontStyle: 'italic',
                      lineHeight: 1.8,
                      mb: 3,
                      minHeight: 100
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>

                  {/* Student Info */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        mr: 2,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                      }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: 'white', mb: 0.5 }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: alpha('#ffffff', 0.8),
                          textTransform: 'uppercase',
                          letterSpacing: 1,
                          fontSize: '0.75rem'
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Rating */}
                  <Box sx={{ mt: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Box
                        key={i}
                        component="span"
                        sx={{ color: '#FFD700', fontSize: '1.2rem', mr: 0.5 }}
                      >
                        ★
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Bottom CTA */}
        {/* <Box textAlign="center" mt={6}>
          <Paper
            sx={{
              display: 'inline-block',
              px: 4,
              py: 2,
              borderRadius: 2,
              background: alpha(theme.palette.primary.main, 0.1),
              backdropFilter: 'blur(10px)',
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 500
              }}
            >
              Join thousands of successful students at Tesla Academy
            </Typography>
          </Paper>
        </Box> */}
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
