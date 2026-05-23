import { useState } from "react";
import { motion } from "framer-motion";



function Gallery() {
  const images = [
    "/images/polygel1.jpg",
    "/images/gelpolish1.jpg",
    "/images/gelpolish2.jpg",
    "/images/acrylicimg2.jpg",
    "/images/cat eye.jpg",
    "/images/polygel2.jpg",
    "/images/toe 1.jpg",
    "/images/toe 2.jpg"
  ];

  return (
    <div>

      {/* TOP BANNER */}
      <section className="gallery-banner">
        
        <div className="gallery-overlay"></div>

        <motion.div
          className="gallery-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Nail Gallery</h1>
          <p>Creative Designs • Premium Finish • Trendy Looks</p>
        </motion.div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-page">

        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={img} alt="Nail Art" />
          </motion.div>
        ))}

      </section>

    </div>
  );
}

export default Gallery;