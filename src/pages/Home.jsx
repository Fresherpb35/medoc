import AboutSection from '../components/Aboutsection';
import Hero from '../components/Hero';
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