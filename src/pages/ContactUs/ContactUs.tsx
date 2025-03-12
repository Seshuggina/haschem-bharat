import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <>
      <section className="flex contactus-banner relative py-16 hb-h-350 items-center text-white">
        <div className="absolute inset-0 bg-cover bg-center contactus-banner"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="pb-8">
              <span className="inline-flex items-center rounded-full bg-yellow-50 px-5 py-2 text-sm font-medium text-orange ring-1 ring-yellow-600/20 ring-inset">
                CONTACT INFO
              </span>
            </p>
            <h2 className="text-2xl font-bold pb-8">Reach Us Immediately</h2>
            <div className="flex justify-center items-stretch mt-16 gap-x-8">
              {[
                {
                  title: "Our Location",
                  text: "Ameerpet, Hyderabad, Telangana, India - 5000032",
                  icon: <i className="fa-solid fa-location-dot"></i>,
                },
                {
                  title: "Email Address",
                  text: (
                    <a href="mailto:contactus@haschembharat.com">
                      contactus@haschembharat.com
                    </a>
                  ),
                  icon: <i className="fa-regular fa-envelope"></i>,
                },
                {
                  title: "Phone Numbers",
                  text: (
                    <>
                      <a href="tel:+917032925939">+91 7032925939</a>
                      <a className="mt-2" href="tel:+918121333007">
                        +91 8121333007
                      </a>
                    </>
                  ),
                  icon: <i className="fa-solid fa-phone-volume"></i>,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center flex-1 hb-contact-tile"
                >
                  <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex-1 h-full flex flex-col justify-center">
                    <div className="flex justify-center">
                      <div className="hexagon text-center">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mt-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-md font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-1 hb-contact-form">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-8">
            <div className="md:col-span-2 bg-white p-8 shadow-lg rounded-lg">
              <p className="pb-8 text-center">
                <span className="inline-flex items-center rounded-full bg-yellow-50 px-5 py-2 text-sm font-medium text-orange ring-1 ring-yellow-600/20 ring-inset">
                  CONTACT INFO
                </span>
              </p>
              <h2 className="text-xl font-semibold text-center mb-6">
                Send a Message
              </h2>
              <form>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border p-3 w-full rounded-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border p-3 w-full rounded-full"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="border p-3 w-full rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border p-3 w-full rounded-full"
                  />
                </div>
                <textarea
                  placeholder="Write a message here..."
                  rows={5}
                  className="border p-3 w-full rounded-lg	 mb-4"
                ></textarea>
                <div className="flex justify-center items-center">
                  <button className="hb-bg-brand text-white py-3 px-8 rounded hover:bg-blue-700">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        {/* <div className="container mx-auto px-4"> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.881254474824!2d78.38439269999999!3d17.513181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ff87d2ff8b%3A0x5d24e1360d47efff!2sRamesh%20Towers!5e0!3m2!1sen!2sin!4v1741797893002!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* </div> */}
      </section>

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
    </>
  );
};

export default ContactUs;
