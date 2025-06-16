import { Box, Typography, Container, Grid, Paper, Divider, Chip, Card, CardContent } from "@mui/material"
import { School as SchoolIcon, Psychology as PsychologyIcon, Groups as GroupsIcon, Timeline as TimelineIcon, EmojiEvents as AchievementIcon, Lightbulb as InnovationIcon } from "@mui/icons-material"

export default function AboutSection() {
  const boards = ["CBSE", "IGCSE", "ICSE", "IB", "Matric"]
  
  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: "#3498db" }} />,
      title: "Comprehensive Curriculum",
      description: "Supporting all major educational boards with tailored teaching methodologies"
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: "#e74c3c" }} />,
      title: "Career Counselling",
      description: "Individual guidance to help students discover their potential and career paths"
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: "#27ae60" }} />,
      title: "Holistic Development",
      description: "Focus on discipline, character building, and personal growth beyond academics"
    }
  ]

  const stats = [
    { number: "2016", label: "Established" },
    { number: "500+", label: "Students Coached" },
    { number: "5", label: "Boards Supported" },
    { number: "95%", label: "Success Rate" }
  ]

  return (
    <Box sx={{ 
      py: 8, 
      position: 'relative',
      overflow: 'hidden',
      marginTop: '100px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -50,
        right: -50,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,152,219,0.1) 0%, transparent 70%)',
        zIndex: 0,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -100,
        left: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(46,204,113,0.08) 0%, transparent 70%)',
        zIndex: 0,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "#2c3e50",
              mb: 2,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              background: 'linear-gradient(45deg, #2c3e50, #3498db)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Tesla's Academy
          </Typography>
          <Divider sx={{ 
            width: 100, 
            height: 4, 
            backgroundColor: "#3498db", 
            mx: 'auto',
            mb: 3,
            borderRadius: 2
          }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: "#7f8c8d",
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: "1.2rem", md: "1.4rem" }
            }}
          >
            Transforming education since 2016 with innovative teaching methods and personalized guidance
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Main Content */}
          <Grid item xs={12} lg={8}>
            <Card 
              elevation={0}
              sx={{ 
                mb: 4,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 3
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: "#2c3e50",
                    mb: 3,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    lineHeight: 1.3,
                  }}
                >
                  We make learning an enjoyable journey!
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    color: "#5a6c7d",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Tesla's Academy was founded in 2016 with a vision to transform education. We offer a wide range of
                  coaching classes for all boards, providing comprehensive learning solutions that go beyond traditional
                  teaching methods.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    color: "#5a6c7d",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  Tesla's Academy is committed to grooming its students beyond the prescribed curriculum. We focus on
                  shaping the career of each and every student individually by providing career counselling. We aim to groom
                  them into better individuals by ensuring they are well-disciplined, and we help them discover their
                  natural skills and unleash their potential.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}