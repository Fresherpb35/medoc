import { useState } from 'react';

const Authenticity = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState(''); // Optional: feedback after verify

  const handleVerify = (e) => {
    e.preventDefault();
    // Placeholder logic — replace with real API call later
    if (code.trim().length > 0) {
      setMessage('Verification in progress... (Demo)');
    } else {
      setMessage('Please enter a valid code');
    }
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 mb-8 uppercase text-center lg:text-left">
          Product Authenticity
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl order-1 lg:order-none">
            <img
              src="image.png"
              alt="High-security hologram sticker on pharmaceutical packaging for authenticity verification"
              className="w-full h-auto object-cover lg:h-[500px]"
              loading="lazy"
            />
            {/* Optional overlay for emphasis */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-lg lg:text-xl font-semibold drop-shadow-lg">
                Verify Genuine BULLPHARMA Products
              </p>
            </div>
          </div>

          {/* Right Side - Form & Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 order-2 lg:order-none">
            <p className="text-lg text-gray-700 font-body leading-relaxed mb-6">
              Ensure your BULLPHARMA product is 100% authentic. Our advanced verification system checks security features like holograms, batch codes, and tamper-evident seals.
            </p>

            <p className="text-lg text-gray-700 font-body leading-relaxed mb-8">
              Enter the unique verification code found on your product packaging to confirm authenticity and protect against counterfeits.
            </p>

            <form onSubmit={handleVerify} className="space-y-6">
              <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6">
                <h3 className="text-xl font-display font-bold text-navy-900 mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Verification Code
                </h3>

                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="Enter your code (e.g. ADN-XXXX-XXXX)"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body text-lg uppercase tracking-wide"
                  maxLength={20}
                  required
                />

                <button
                  type="submit"
                  className="btn-primary w-full mt-6 text-lg px-8 py-3 font-semibold shadow-md hover:shadow-lg transition"
                >
                  Verify Product
                </button>

                {message && (
                  <p className={`mt-4 text-center font-medium ${message.includes('in progress') ? 'text-teal-700' : 'text-red-600'}`}>
                    {message}
                  </p>
                )}
              </div>
            </form>

            <div className="mt-8 text-sm text-gray-600">
              <p className="mb-2">• Look for hologram stickers, QR codes, or scratch-off panels on original packaging.</p>
              <p>• Genuine products include batch number, expiry date, and our official seal.</p>
              <p>• Contact support if verification fails or for bulk checks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenticity;