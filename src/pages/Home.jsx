import Hero from '../components/Hero';
import AboutSection from '../components/Aboutsection';
import WhatWeDo from '../components/WhatWeDo';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <WhatWeDo />
    </div>
  );
}

export default Home;