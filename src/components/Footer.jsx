const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-950 border-t border-white/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white text-sm sm:text-base font-medium tracking-wide">
            ©{currentYear} BULLPHARMA. Proudly powered by BULLPHARMA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
