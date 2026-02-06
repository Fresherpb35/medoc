import { useState } from 'react';

const Contact = () => {
  const [topic, setTopic] = useState('Product Support'); // Default to first option

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy-900 mb-6 uppercase text-center">
          Contact Us
        </h1>

        <p className="text-lg text-gray-600 font-body text-center mb-10 lg:mb-12">
          You may contact us by filling in this form any time you need professional support or have any questions. 
          You can also fill in the form to leave your comments or feedback.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <form className="space-y-8">
            {/* Name - First + Last */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition"
                  placeholder="First"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition"
                  placeholder="Last"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                E-mail <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition"
                placeholder="someone@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="tel"
                  className="w-24 px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition text-center"
                  placeholder="Area Code"
                  maxLength={4}
                />
                <span className="text-gray-500">-</span>
                <input
                  type="tel"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                Mobile
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="tel"
                  className="w-24 px-3 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition text-center"
                  placeholder="Area Code"
                  maxLength={4}
                />
                <span className="text-gray-500">-</span>
                <input
                  type="tel"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition"
                placeholder="Your company name"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body transition"
                placeholder="How can we help you?"
              />
            </div>

            {/* Topic Selection */}
            <div>
              <label className="block text-sm font-body font-semibold text-gray-700 mb-3">
                Which topic best describes your question? <span className="text-red-600">*</span>
              </label>
              <div className="space-y-3">
                {[
                  'Product Support',
                  'Suggestions',
                  'Marketing & Sponsorship Opportunities',
                  'Stacking',
                  'Other',
                ].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="topic"
                      value={option}
                      checked={topic === option}
                      onChange={() => setTopic(option)}
                      className="h-5 w-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                      required
                    />
                    <span className="ml-3 text-gray-700 font-body">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Details / Message */}
            <div>
              <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                Details
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 font-body resize-none transition"
                placeholder="Please provide more details about your query..."
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto px-10 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;