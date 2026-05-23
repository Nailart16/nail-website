function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-box">
          <h2>KYC Nail Art</h2>
          <p>
            Luxury nail services with trendy designs, premium care
            and affordable beauty.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/booking">Booking</a>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact</h3>

          <p>📍 Surat, Gujarat</p>
          <p>📞 +91 8140374657</p>
          <p>📧 kycnailart@gmail.com</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-box">
          <h3>Follow Us</h3>

          <a href="https://www.instagram.com/kycnailart">Instagram</a>
          <a href="/">pinterest</a>
          <a href="/">Facebook</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 KYC Nail Art | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;