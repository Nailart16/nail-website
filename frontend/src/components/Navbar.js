import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="premium-nav">

      <div className="nav-logo">
        <img src="/images/logo.jpeg" alt="logo" className="logo-img" />
        <span>KYC Nail Art</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/booking">Booking</Link>
        
       
        <Link to="/ai-generator">AI Design</Link>
      </div>


 






    </nav>
  );
}

export default Navbar;



