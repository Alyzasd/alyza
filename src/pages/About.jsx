function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800 px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-800">About Alyza's Shop</h1>
          <p className="mt-4 text-lg text-gray-700">
            Your trusted destination for quality products and exceptional service.
          </p>
        </section>
  
      
  
        {/* Core Values Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Customer First</h3>
              <p className="text-gray-700">
                We prioritize your needs and work tirelessly to exceed your expectations.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-700">
                Every product we offer is carefully inspected to ensure it meets the highest standards.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Integrity</h3>
              <p className="text-gray-700">
                We operate with honesty and transparency in all our dealings.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default About;
  