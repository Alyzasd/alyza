function HomePage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h2
            className="text-5xl font-extrabold text-blue-800"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Discover the Best Deals at Alyza's Shop
          </h2>
          <p
            className="mt-4 text-lg text-blue-600"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
           
          </p>
          <a
            href="/products"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition"
            style={{
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Shop Now
          </a>
        </section>
      </div>
    );
  }
  
  export default HomePage;
  