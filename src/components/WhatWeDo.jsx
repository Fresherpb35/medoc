import ServiceCard from './ServiceCard';

const WhatWeDo = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Injectables',
      description: 'Strict Pharma-assisted injectable guides reciteem\'s repriming',
      delay: '200',
      buttonText: 'View all',
      showButton: true
    },
    {
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: 'Oral Products',
      description: 'Strict Melt freeze-head raw tableta sealant products',
      delay: '300',
      showButton: false
    },
    {
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Tablets',
      description: 'Pharmactive sea res elit target standardis',
      delay: '400',
      showButton: false
    },
    {
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Powders',
      description: 'Accurate and best flavori-ward fitness seat increases',
      delay: '500',
      buttonText: 'View All Products',
      showButton: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-center text-navy-900 mb-8 sm:mb-12 lg:mb-16 uppercase tracking-tight opacity-0 animate-fadeInUp">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              buttonText={service.buttonText}
              showButton={service.showButton}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;