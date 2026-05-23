function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-text">
          <h1>KYC Nail Art</h1>
          <p>Luxury Nail Designs • Elegant • Trendy</p>

          <a href="/booking">
            <button className="hero-btn">Book Now</button>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About KYC Nail Art</h2>

        <p>
          High-End Art, Affordable Prices. Your beauty deserves the best
          without a heavy price tag. We specialize in bringing the latest
          nail trends to life, ensuring every customer walks out feeling
          confident and pampered.
        </p>

        <p>
          Whether you're looking for durable extensions or a simple refresh,
          we value your time and trust.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio">
        <h2>Our Work</h2>

        <div className="grid">

          <div className="work-card">
            <img src="/images/diwalioff.jpg" alt="work1" />
          </div>

          <div className="work-card">
            <img src="/images/acrylicimg.jpg" alt="work2" />
          </div>

          <div className="work-card">
            <img src="/images/gel-ext2.jpg" alt="work3" />
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;