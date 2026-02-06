import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous testing to ensure the highest purity and potency standards.'
    },
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Utilizing advanced ThermoTech technology and cutting-edge manufacturing processes.'
    },
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Expert Team',
      description: 'Our dedicated professionals bring decades of pharmaceutical expertise and passion.'
    },
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Global Standards',
      description: 'Manufacturing in compliance with international pharmaceutical regulations and standards.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Products' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Quality Rate' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16 lg:pt-20 bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-700 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight">
                About Us
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-teal-400 font-body font-medium max-w-3xl mx-auto">
                Leading the future of pharmaceutical formulations with innovation and integrity
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          
          {/* Company Overview */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-8 lg:mb-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-6 uppercase tracking-tight">
                Who We Are
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed">
                <strong className="text-navy-900">Anabolic DNA Formulations LLC</strong> is a premier pharmaceutical company dedicated to producing high-purity, pharmaceutical-grade formulations that meet and exceed industry standards. Since our inception, we have been at the forefront of pharmaceutical innovation, combining cutting-edge technology with traditional quality assurance practices.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed">
                Our state-of-the-art manufacturing facilities utilize advanced ThermoTech technology, ensuring optimal temperature control throughout every stage of production. This commitment to precision manufacturing guarantees that each product maintains its integrity, potency, and efficacy from production to consumption.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 font-body leading-relaxed">
                We specialize in a comprehensive range of pharmaceutical formulations, including injectables, oral products, tablets, and powders. Each product line is developed with meticulous attention to detail, backed by extensive research and development, and manufactured under strict quality control protocols.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase">Our Mission</h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-body leading-relaxed">
                To deliver the highest quality pharmaceutical formulations through innovative manufacturing processes, rigorous quality control, and unwavering commitment to safety and efficacy. We strive to improve global health outcomes by providing reliable, pure, and effective pharmaceutical products.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase">Our Vision</h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg font-body leading-relaxed">
                To be the global leader in pharmaceutical formulations, recognized for our exceptional quality, innovative solutions, and positive impact on healthcare worldwide. We envision a future where our products are trusted by healthcare professionals and valued by users across the globe.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-center text-navy-900 mb-8 lg:mb-12 uppercase">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-teal-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg font-body text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-center text-navy-900 mb-8 lg:mb-12 uppercase">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-navy-900 text-center mb-3 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-body text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border-2 border-gray-100">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-6 lg:mb-8 uppercase tracking-tight">
              Why Choose Anabolic DNA?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: 'Advanced Manufacturing',
                  description: 'State-of-the-art facilities with ThermoTech temperature control systems ensuring product stability and consistency.'
                },
                {
                  title: 'Rigorous Testing',
                  description: 'Multi-stage quality control processes with comprehensive testing at every production phase.'
                },
                {
                  title: 'Certified Standards',
                  description: 'Full compliance with international pharmaceutical regulations and quality management systems.'
                },
                {
                  title: 'Research & Development',
                  description: 'Continuous innovation backed by scientific research and development expertise.'
                },
                {
                  title: 'Traceability',
                  description: 'Complete product traceability from raw materials to final distribution ensuring authenticity.'
                },
                {
                  title: 'Global Distribution',
                  description: 'Reliable supply chain management serving healthcare professionals worldwide.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 bg-white rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-navy-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Section */}
          <div className="mt-8 lg:mt-12 bg-gradient-to-r from-navy-900 to-navy-700 rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 uppercase">
              Our Commitment
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-body leading-relaxed max-w-4xl mx-auto">
              At Anabolic DNA Formulations LLC, we are committed to excellence in every aspect of our operations. From research and development to manufacturing and distribution, quality is our top priority. We continue to invest in advanced technologies, skilled personnel, and robust quality systems to ensure that every product meets the highest standards of purity, safety, and efficacy.
            </p>
          </div>

        </div>
      </main>
      
    
    </div>
  );
};

export default About;