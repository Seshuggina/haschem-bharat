const ContactUs = () => {
  return (
    <>
      <section className="relative bg-gray-900 text-white py-16">
        <div className="absolute inset-0 bg-cover bg-center contactus-banner"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg uppercase">Get in Touch!</h3>
            <h2 className="text-2xl font-bold">Have A Question? Drop Us A Line!</h2>
            <p className="text-gray-600 mt-2">
              We take great pride in everything that we do, ensuring customers receive the best service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold text-center mb-6">Send a Message</h2>
              <form>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Your Name" className="border p-3 w-full rounded" />
                  <input type="email" placeholder="Email" className="border p-3 w-full rounded" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Phone Number" className="border p-3 w-full rounded" />
                  <input type="text" placeholder="Subject" className="border p-3 w-full rounded" />
                </div>
                <textarea placeholder="Write a message here..." rows={5} className="border p-3 w-full rounded mb-4"></textarea>
                <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">SEND</button>
              </form>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold text-center mb-6">Reach Us Directly</h2>
              <div className="mb-6">
                <h4 className="text-lg font-semibold">Let's Call or Email</h4>
                <p className="text-gray-600 mt-2">
                  <i className="fas fa-phone-alt text-blue-500"></i> <a href="tel:+917816003510" className="text-blue-600">+91 7816 00 3510</a>
                  <br />
                  <i className="fas fa-envelope text-blue-500"></i> <a href="mailto:contactus@haschembharat.com" className="text-blue-600">contactus@haschembharat.com</a>
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold"><i className="fas fa-map-marker-alt text-red-500"></i> We Reached Here</h4>
                <p className="text-gray-600">#Storey Ave, San Francisco, CA 94129</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold"><i className="fab fa-whatsapp text-green-500"></i> Chat on WhatsApp</h4>
                <a href="https://wa.me/9885500044?text=Hi!" target="_blank" className="text-blue-600">Start Chat</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12609.732281738927!2d-122.47286700000001!3d37.803324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1713025871058!5m2!1sen!2sus"
          width="100%"
          height="450"
          className="border-0"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default ContactUs;
