const ServiceCard = ({ icon, title, description, delay = '0', buttonText, showButton = false }) => {
  return (
    <div
      className={`bg-white rounded-lg lg:rounded-xl shadow-lg hover:shadow-2xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-${delay} border border-gray-100`}
    >
      <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg lg:rounded-xl flex items-center justify-center shadow-inner">
          {icon}
        </div>
      </div>
      
      <h3 className="text-base sm:text-lg lg:text-xl font-display font-bold text-navy-900 mb-2 sm:mb-3 uppercase tracking-wide">
        {title}
      </h3>
      
      <p className="text-gray-600 font-body text-xs sm:text-sm leading-relaxed mb-4 min-h-[40px] sm:min-h-[48px]">
        {description}
      </p>

      {showButton && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="inline-flex items-center justify-center gap-2 text-teal-500 hover:text-teal-600 font-body font-semibold text-sm transition-colors group">
            {buttonText}
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;