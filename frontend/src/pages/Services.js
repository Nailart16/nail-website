import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      img: "/images/gelpolish.jpeg",
      title: "Gel Polish",
      price: "₹299"
    },
    {
      img: "/images/extensions.jpeg",
      title: "Extensions",
      price: "₹999"
    },
    {
      img: "/images/cate_eye.jpeg",
      title: "Cat Eye",
      price: "₹399"
    },
    {
      img: "/images/3dart.jpeg",
      title: "3D Art",
      price: "₹599"
    },
    {
      img: "/images/marble.jpeg",
      title: "Marble Art",
      price: "₹399"
    },
    {
      img: "/images/removal.jpeg",
      title: "Nail Removal",
      price: "₹199"
    }
  ];

  return (
    <div>

      {/* TOP BANNER */}
      <section
        className="service-banner"
        style={{
          backgroundImage: "url('/images/service.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="service-overlay"></div>

        <motion.div
          className="service-text"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Services</h1>
          <p>Luxury Care • Elegant Designs • Affordable Beauty</p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="services-page">

        {services.map((item, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={item.title} />

            <h3>{item.title}</h3>
            <p>{item.price}</p>

            <Link to="/booking">
              <button className="book-btn">Book Now</button>
            </Link>
          </motion.div>
        ))}

      </section>

    </div>
  );
}

export default Services;