
const ThermoTech = () => {
  const productInfo = [
    { label: 'Product Name', value: 'STANA (Stanozolol)' },
    { label: 'Strength', value: '10 mg' },
    { label: 'Form', value: '100 Tablets' },
    { label: 'Manufacturer', value: 'Bull Pharma' },
  ];

  const precautions = [
    'Keep out of reach of children',
    'Store in a cool, dry place away from direct sunlight',
    'Do not use if seal is broken',
    'Not for use by pregnant or nursing women',
    'Consult healthcare professional before use',
    'Follow recommended dosage guidelines',
    'May cause side effects - read full label before use',
    'For adult use only (18+ years)',
  ];

  const storageConditions = [
    { icon: '🌡️', text: 'Store below 30°C' },
    { icon: '💧', text: 'Keep in dry place' },
    { icon: '☀️', text: 'Protect from light' },
    { icon: '📦', text: 'Original packaging' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16 lg:pt-20 bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-700 text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight">
                Product Information
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-teal-400 font-body font-medium">
                STANA - Stanozolol 10mg Tablets
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Product Overview Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Product Image */}
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
              <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg lg:rounded-xl overflow-hidden relative">
                <img 
                  src="/stana-product.jpeg" 
                  alt="STANA Stanozolol 10mg - Bull Pharma" 
                  className="w-full h-full object-contain p-4 sm:p-6 lg:p-8 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4 font-body">
                STANA (Stanozolol) 10mg - 100 Tablets
              </p>
            </div>

            {/* Product Details */}
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-6 uppercase tracking-tight">
                  Product Details
                </h2>
                <div className="space-y-4">
                  {productInfo.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="text-sm sm:text-base font-body font-semibold text-gray-600">
                        {item.label}:
                      </span>
                      <span className="text-sm sm:text-base font-body font-bold text-navy-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Storage Conditions */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl lg:rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-teal-100">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900 mb-4 sm:mb-6 uppercase">
                  Storage Conditions
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {storageConditions.map((condition, index) => (
                    <div key={index} className="flex items-center space-x-2 sm:space-x-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <span className="text-2xl sm:text-3xl">{condition.icon}</span>
                      <span className="text-xs sm:text-sm font-body font-medium text-gray-700">
                        {condition.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Product */}
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-navy-900 mb-4 sm:mb-6 uppercase tracking-tight">
              About This Product
            </h2>
            <div className="prose max-w-none">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-body leading-relaxed mb-4">
                STANA (Stanozolol) is a pharmaceutical-grade formulation manufactured by Bull Pharma. Each tablet contains 10mg of active ingredient, carefully formulated to meet the highest quality standards.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-body leading-relaxed mb-4">
                Our manufacturing process employs advanced ThermoTech technology to ensure optimal temperature control throughout production, maintaining product integrity and efficacy. Every batch undergoes rigorous quality assurance testing to guarantee purity and potency.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-body leading-relaxed">
                This product is manufactured in compliance with pharmaceutical standards and follows strict quality assurance protocols. Each package contains 100 tablets in blister packaging for maximum protection and convenience.
              </p>
            </div>
          </div>

          {/* Precautions */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl lg:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border-2 border-red-200">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-red-900 uppercase tracking-tight">
                  Important Precautions
                </h2>
                <p className="text-sm sm:text-base text-red-700 font-body mt-2">
                  Please read carefully before use
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {precautions.map((precaution, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm lg:text-base text-gray-800 font-body leading-snug">
                    {precaution}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-red-100 border-l-4 border-red-500 rounded-r-lg">
              <p className="text-xs sm:text-sm lg:text-base text-red-900 font-body font-bold">
                ⚠️ FOR EXPORT ONLY - This product is intended for export and must comply with the regulations of the destination country. Consult with a qualified healthcare professional before use.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 lg:mt-12 bg-gray-100 rounded-lg p-4 sm:p-6 border-l-4 border-navy-700">
            <p className="text-xs sm:text-sm text-gray-600 font-body leading-relaxed">
              <strong className="text-gray-800">Disclaimer:</strong> This information is provided for educational purposes only. Always consult with a qualified healthcare professional before using any pharmaceutical product. Product availability and packaging may vary by region.
            </p>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default ThermoTech;