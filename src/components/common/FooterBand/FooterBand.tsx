import "./FooterBand.scss";

const FooterBand = () => {
  return (
    <section className="py-1 contact-final-notes-wrapper">
      <div className="container mx-auto px-4 md:px-1 contact-final-notes rounded-lg">
        <div className="flex flex-col md:flex-row items-center p-8 gap-8">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-lg font-semibold text-white">
              Expert Scientists Conducting Precise Product Testing
            </h2>
          </div>

          {/* Right Section - Buttons */}
          <div className="flex-1 flex justify-center md:justify-end gap-4">
            <button
              data-content="View Services"
              className="hb-btn hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700"
            >
              <span className="hb-btn-text">View Services</span>
            </button>
            <button
              data-content="Get in Touch"
              className="hb-btn hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700"
            >
              <span className="hb-btn-text">Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBand;
