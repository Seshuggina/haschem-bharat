import "./FooterBand.scss";

const FooterBand = () => {
  return (
    <section className="py-1 contact-final-notes-wrapper">
      <div className="container mx-auto px-4 contact-final-notes rounded-lg">
        <div className="flex flex-col md:flex-row items-center p-8 gap-8">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">
              Expert Scientists Conducting Precise Product Testing
            </h2>
          </div>

          {/* Right Section - Buttons */}
          <div className="flex-1 flex justify-center md:justify-end gap-4">
            <button className="hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700">
              View Services
            </button>
            <button className="hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBand;
