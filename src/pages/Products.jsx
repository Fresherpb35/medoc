import { useState } from 'react';

const Products = () => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'oral', name: 'Oral – Blisters' },
    { id: '1ml-injectable', name: '1ml Injectable – Ampoules' },
    { id: '10ml-injectable', name: '10ml Injectables - Multidose Vials' },
    { id: 'peptides', name: 'Peptides – Premium Range' },
    { id: 'sarms', name: 'SARMs (Androgenic) – Luxury Range' },
  ];

  // Dummy products with category assignment (you can update real data later)
  const allProducts = [
    { name: 'TestoRapid', description: 'Testosterone Propionate – Injectable', category: '1ml-injectable' },
    { name: 'MastEnate-200', description: 'Drostanolone Enanthate – Injectable', category: '10ml-injectable' },
    { name: 'DecaBolin-250', description: 'Nandrolone Decanoate – Injectable', category: '10ml-injectable' },
    { name: 'TrestoBol', description: 'Trenbolone Acetate – Injectable', category: '1ml-injectable' },
    { name: 'TestoRapid2', description: 'Testosterone Blend – Injectable', category: '1ml-injectable' },
    { name: 'StanoBol', description: 'Stanozolol – Oral Blister', category: 'oral' },
    { name: 'EquiMxCal', description: 'Boldenone Undecylenate – Injectable', category: '10ml-injectable' },
    { name: 'MastEnCal', description: 'Drostanolone Propionate – Injectable', category: '1ml-injectable' },
    // Add more real products with correct category ids later
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const selectedCategoryName =
    categories.find((c) => c.id === selectedCategory)?.name || 'All Products';

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 mb-4 uppercase text-center">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 font-body text-center mb-8 lg:mb-12">
          Premium pharmaceutical-grade formulations
        </p>

        {/* Category Dropdown */}
        <div className="flex justify-center mb-10 lg:mb-16">
          <div className="relative inline-block text-left w-full max-w-xs">
            <button
              type="button"
              className="inline-flex w-full justify-between items-center gap-x-3 rounded-lg bg-white px-5 py-3.5 text-base font-semibold text-navy-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCategoryName}
              <svg
                className={`h-5 w-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.04 1.08l-4.25 4.25a.75.75 0 01-1.04 0L5.21 8.29a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`block w-full px-4 py-2.5 text-left text-sm ${
                        selectedCategory === category.id
                          ? 'bg-teal-50 text-teal-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                      role="menuitem"
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 sm:h-56 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                <div className="w-20 h-28 bg-gradient-to-b from-teal-400 to-teal-600 rounded-lg shadow-xl flex items-center justify-center">
                  <div className="w-16 h-20 bg-white/20 rounded flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 font-body text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;