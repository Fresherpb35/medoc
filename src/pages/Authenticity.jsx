import { useState } from 'react';

const Authenticity = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    serialNumber: '',
    code: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Auto uppercase for code & serial
    if (name === 'code' || name === 'serialNumber') {
      formattedValue = value.toUpperCase();
    }

    // Basic mobile number formatting (only digits)
    if (name === 'mobile') {
      formattedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    // Basic frontend validation
    if (!formData.name.trim()) {
      setMessage('Please enter your name');
      setIsSubmitting(false);
      return;
    }
    if (!formData.mobile || formData.mobile.length !== 10) {
      setMessage('Please enter a valid 10-digit mobile number');
      setIsSubmitting(false);
      return;
    }
    if (!formData.serialNumber.trim()) {
      setMessage('Please enter the serial number');
      setIsSubmitting(false);
      return;
    }
    if (!formData.code.trim()) {
      setMessage('Please enter the verification code');
      setIsSubmitting(false);
      return;
    }

    // Demo / placeholder result — replace with real API call
    setTimeout(() => {
      setMessage('Verification in progress... (Demo mode)');
      setIsSubmitting(false);

      // Example of how real response might look:
      // setMessage('✅ Product verified successfully!');
      // or
      // setMessage('❌ Invalid code. Please check and try again.');
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 sm:mb-10 uppercase text-center">
          Product Authenticity Check
        </h1>

        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center sm:text-left">
            Verify your BULLPHARMA product is 100% genuine. Please fill in the details from your product packaging.
          </p>

          <form onSubmit={handleVerify} className="space-y-6">
            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit number (e.g. 9876543210)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition"
                  maxLength={10}
                  required
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Serial Number / Batch Number *
                </label>
                <input
                  type="text"
                  id="serialNumber"
                  name="serialNumber"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  placeholder="Enter serial / batch number (e.g. BP2025-XXXX)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition uppercase tracking-wide"
                  required
                />
              </div>

              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Verification Code / Scratch Code *
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="Enter verification code (e.g. ADN-XXXX-XXXX)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition uppercase tracking-wide"
                  maxLength={20}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-4 sm:mt-6 py-3.5 px-8 text-lg font-semibold rounded-lg shadow-md transition-all
                ${isSubmitting 
                  ? 'bg-teal-400 cursor-not-allowed' 
                  : 'bg-teal-600 hover:bg-teal-700 text-white hover:shadow-lg'}`}
            >
              {isSubmitting ? 'Verifying...' : 'Verify Product'}
            </button>

            {message && (
              <p
                className={`mt-5 text-center font-medium text-base ${
                  message.includes('success') || message.includes('progress')
                    ? 'text-teal-700'
                    : 'text-red-600'
                }`}
              >
                {message}
              </p>
            )}
          </form>

          <div className="mt-8 sm:mt-10 text-sm text-gray-600 space-y-2">
            <p>• Make sure to enter details exactly as printed on the packaging.</p>
            <p>• Genuine products have hologram, batch number, expiry & official seal.</p>
            <p>• For any issues or bulk verification, contact support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenticity;