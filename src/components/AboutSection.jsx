const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 opacity-0 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-navy-900 uppercase tracking-tight leading-tight">
            Anabolic DNA Formulations LLC
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-body leading-relaxed px-4">
            is focused on producing high-purity pharmaceutical-grade formulations using instadems manufacturing standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;