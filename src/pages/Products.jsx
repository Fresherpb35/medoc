import { useState, useEffect } from 'react';

const Products = () => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'oral', name: 'Oral – Blisters' },
    { id: '1ml-injectable', name: '1ml Injectable – Ampoules' },
    { id: '10ml-injectable', name: '10ml Injectables - Multidose Vials' },
    { id: 'peptides', name: 'Peptides – Premium Range' },
    { id: 'sarms', name: 'SARMs (Androgenic) – Luxury Range' },
  ];

  // Your products (update images and add more as needed)
  const allProducts = [
    // 1ml Injectable – Ampoules
    {
      name: 'T-JET 100',
      description: 'Testosterone Propionate 100 mg/ml\nFast-acting testosterone. Strength & mass. Perfect for beginners.\nPotency: 100 mg/ml\nDosage: 100-200 mg/day\nPacking: 1 ml × 5 ampoules, sealed packed box',
      category: '1ml-injectable',
      image: '/stana-product.jpeg',
    },
    {
      name: 'DECA-250',
      description: 'Nandrolone Decanoate 250 mg/ml\nPromotes muscle growth & recovery.\nPotency: 250 mg/ml\nDosage: 200-600 mg/week\nPacking: 1 ml × 5 ampoules, sealed packed box',
      category: '1ml-injectable',
      image: '/stana-product.jpeg',
    },
    {
      name: 'EQUIPOISE',
      description: 'Boldenone Undecylenate 300 mg/ml\nIncreases appetite, vascularity & lean mass.\nPotency: 300 mg/ml\nDosage: 300-600 mg/week\nPacking: 1 ml × 5 ampoules, sealed packed box',
      category: '1ml-injectable',
      image: '/stana-product.jpeg',
    },
    {
      name: 'WINSTROL',
      description: 'Super Micronized Stanozolol 100 mg/ml\nHard, dry muscle. No liver toxicity.\nPotency: 100 mg/ml\nDosage: 100-200 mg/day\nPacking: 1 ml × 5 ampoules, sealed packed box',
      category: '1ml-injectable',
      image: '/stana-product.jpeg',
    },

    // 10ml Injectables - Multidose Vials
    {
      name: 'TESTO ENANTHATE 300',
      description: 'Testosterone Enanthate 300 mg/ml\nLong-acting testosterone for steady gains & strength.\nPotency: 300 mg/ml\nDosage: 300-600 mg/week\nPacking: 10 ml multidose vial',
      category: '10ml-injectable',
      image: '/stana-product.jpeg',
    },
    {
      name: 'DECA-DURABOLIN 300',
      description: 'Nandrolone Decanoate 300 mg/ml\nJoint support, mass builder & recovery.\nPotency: 300 mg/ml\nDosage: 300-600 mg/week\nPacking: 10 ml multidose vial',
      category: '10ml-injectable',
      image: '/stana-product.jpeg',
    },
    {
      name: 'TREN E 200',
      description: 'Trenbolone Enanthate 200 mg/ml\nExtreme strength, hardness & vascularity.\nPotency: 200 mg/ml\nDosage: 200-400 mg/week\nPacking: 10 ml multidose vial',
      category: '10ml-injectable',
      image: '/stana-product.jpeg',
    },
    {
      name: 'MASTERON 200',
      description: 'Drostanolone Propionate 200 mg/ml\nHardening & cutting compound. Anti-estrogenic.\nPotency: 200 mg/ml\nDosage: 300-500 mg/week\nPacking: 10 ml multidose vial',
      category: '10ml-injectable',
      image: '/stana-product.jpeg',
    },

    // Peptides – Premium Range
    {
      name: 'SOMA-GROWTH',
      description: 'Soma-Growth (191AA Human Growth Hormone)\nStimulates HGH growth, cell reproduction. Restores cartilage, tendons & joints. Increases libido & energy.\nIncreases muscle mass, strength, protein synthesis. Speeds muscle recovery. Accelerated fat loss, Anti-Ageing, better sleep.\nPotency: 16 iu / vial\nDosage: 2–4 iu / day empty stomach (max 6 iu/day)\nHalf Life: 2.5 Hours\nPacking: 16 iu × 5 vials (80 iu) + Bacteriostatic Sterile Water 2 ml × 5 ampoules\nSealed magnetic thermotech box with icepack',
      category: 'peptides',
      image: '/stana-product.jpeg',
    },
    {
      name: 'FRAG-AOD',
      description: 'Frag AOD (Tyr-Hgh Fragment 177-191AA / AOD9604)\nIncreases appetite suppressant effect. 12.5× faster fat loss than HGH. Improves skin quality, tightens loose skin.\nSome users report muscle & strength gains.\nPotency: 2.5 mg / vial\nDosage: 5 mcg / kg once or twice daily, empty stomach (max 7 mcg/kg)\nHalf Life: 30 Minutes\nPacking: 2.5 mg × 5 vials (12.5 mg) + Bacteriostatic Sterile Water 2 ml × 5 ampoules\nSealed magnetic thermotech box with icepack',
      category: 'peptides',
      image: '/stana-product.jpeg',
    },

    // SARMs (Androgenic) – Luxury Range
    {
      name: 'BULLPHARMAUM',
      description: 'BULLPHARMAum (LGD-4033 / Ligandrol)\nIncreases lean muscle mass & strength. Heals muscle loss. Improves metabolism & vascularity.\nEffective in treating Class I, II and III obesity.\nPotency: 10 mg / capsule\nDosage: 20-30 mg / day\nHalf Life: 24 Hours\nPacking: 60 capsules / sealed pharma-grade luxury bottle',
      category: 'sarms',
      image: '/stana-product.jpeg',
    },
    {
      name: 'TESTOLIC',
      description: 'Testolic (RAD-140 / Testolone)\nEffective in treating obesity, Muscular Dystrophy & Anti-Ageing.\nBoosts quality muscle mass, strength, helps fat loss.\nPotency: 10 mg / capsule\nDosage: 10-20 mg / day\nHalf Life: 24-36 Hours\nPacking: 60 capsules / sealed pharma-grade luxury bottle',
      category: 'sarms',
      image: '/stana-product.jpeg',
    },

    // Oral – Blisters (example)
    {
      name: 'StanoBol',
      description: 'Stanozolol 10 mg – Oral Blister\nHard & dry gains, vascularity, strength.\nNo estrogen conversion.',
      category: 'oral',
      image: '/stana-product.jpeg',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter((p) => p.category === selectedCategory);

  const selectedCategoryName =
    selectedCategory === 'all' ? 'All Products' :
    categories.find((c) => c.id === selectedCategory)?.name || 'Products';

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

  // Auto-slide with pause
  useEffect(() => {
    if (filteredProducts.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredProducts.length, isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24 bg-gray-50 pb-12 sm:pb-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-navy-900 mb-4 sm:mb-6 uppercase text-center tracking-tight">
          Our Products
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-body text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
          Premium pharmaceutical-grade formulations
        </p>

        {/* Category Dropdown – more touch-friendly */}
        <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <div className="relative inline-block text-left w-full max-w-[320px] sm:max-w-xs">
            <button
              type="button"
              className="inline-flex w-full justify-between items-center gap-x-3 rounded-xl bg-white px-5 py-4 sm:py-3.5 text-base sm:text-lg font-semibold text-navy-900 shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCategoryName}
              <svg
                className={`h-6 w-6 sm:h-5 sm:w-5 text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.04 1.08l-4.25 4.25a.75.75 0 01-1.04 0L5.21 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 z-20 mt-2 w-full origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black/10 focus:outline-none overflow-hidden">
                <div className="py-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`block w-full px-5 py-3.5 text-left text-base sm:text-sm font-medium ${
                        selectedCategory === category.id
                          ? 'bg-teal-50 text-teal-800 font-semibold'
                          : 'text-gray-800 hover:bg-gray-100 active:bg-gray-200'
                      } transition-colors duration-150`}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Slider */}
        {filteredProducts.length > 0 ? (
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-orange-600 uppercase tracking-wide text-center">
              {selectedCategoryName}
            </h2>

            <div
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl bg-gradient-to-b from-orange-50/80 to-white/60 backdrop-blur-sm"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {filteredProducts.map((prod, idx) => (
                  <div
                    key={idx}
                    className="min-w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-16 flex flex-col items-center"
                  >
                    <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md lg:max-w-lg xl:max-w-xl mb-6 sm:mb-8 md:mb-10">
                      <img
                        src={prod.image || `https://via.placeholder.com/600x420?text=${encodeURIComponent(prod.name)}`}
                        alt={prod.name}
                        className="w-full h-auto object-contain rounded-lg shadow-lg drop-shadow-xl"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900 mb-3 sm:mb-4 text-center leading-tight">
                      {prod.name}
                    </h3>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium text-center max-w-2xl lg:max-w-3xl whitespace-pre-line leading-relaxed px-2 sm:px-4">
                      {prod.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Arrows – bigger on mobile */}
              <button
                onClick={() => goToSlide((currentSlide - 1 + filteredProducts.length) % filteredProducts.length)}
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-orange-600/90 text-white p-3 sm:p-4 md:p-5 rounded-full shadow-2xl hover:bg-orange-700 focus:bg-orange-700 transition-all z-20 text-2xl sm:text-3xl"
                aria-label="Previous product"
              >
                ←
              </button>
              <button
                onClick={() => goToSlide((currentSlide + 1) % filteredProducts.length)}
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-orange-600/90 text-white p-3 sm:p-4 md:p-5 rounded-full shadow-2xl hover:bg-orange-700 focus:bg-orange-700 transition-all z-20 text-2xl sm:text-3xl"
                aria-label="Next product"
              >
                →
              </button>

              {/* Dots – more visible on mobile */}
              <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
                {filteredProducts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 shadow-sm ${
                      currentSlide === idx
                        ? 'bg-orange-600 scale-125 ring-2 ring-orange-400/50'
                        : 'bg-gray-400 hover:bg-orange-400 active:bg-orange-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-12 sm:mt-16 text-lg sm:text-xl font-medium">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;