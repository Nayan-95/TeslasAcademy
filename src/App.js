import logo from './logo.svg';
import './App.css';
import Vanbar from './components/navbar';
import AboutSection from './components/about';
import EnhancedQuoteCarousel from './components/quote';
import BoardMarquee from './components/cources';
import TeslaAcademyModern from './components/janatana';
import TeslaFooterModern from './components/footer';
import WhatWeDoSection from './components/whatwedo';
import TeslaCourses from './components/teslaCourses';
import TestimonialsSection from './components/testimonial';

function App() {
  return (
    <div className="App">
      <Vanbar />
      <AboutSection/>
      <BoardMarquee />
      {/* <EnhancedQuoteCarousel /> */}
      <TeslaAcademyModern/>
      {/* <div>      Manish</div> */}
      <WhatWeDoSection/>
      <TeslaCourses/>
      <TestimonialsSection/>
      <TeslaFooterModern/>
    </div>
  );
}

export default App;
