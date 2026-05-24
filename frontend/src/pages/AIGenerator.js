import { useState } from "react";
import { motion } from "framer-motion";

function AiGenerator() {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [msg, setMsg] = useState("");

  const generateDesign = async () => {
    const text = prompt.toLowerCase().trim();

    if (!text) {
      setMsg("Please enter design type");
      return;
    }

    // BRIDAL
    if (
      text.includes("bridal") ||
      text.includes("bride")
    ) {
      setImages([
        "/images/bridal.jpeg",
        "/images/bridal1.jpeg",
        "/images/bridal2.jpeg"
      ]);
      setMsg("");
      return;
    }

    // 3D
    if (
      text.includes("3d") ||
      text.includes("flower")
    ) {
      setImages([
        "/images/3d.jpeg",
        "/images/3d1.jpeg",
        "/images/3d2.jpeg"
      ]);
      setMsg("");
      return;
    }

    try {
      setMsg("Loading...");
      setImages([]);

      const res = await fetch("http://nail-website-2.onrender.com/generate-design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();

      if (data.images && data.images.length > 0) {
        setImages(data.images.slice(0, 3));
        setMsg("");
      } else {
        setMsg("No designs found");
      }

    } catch (error) {
      setMsg("Server error. Check backend.");
    }
  };

  return (
    <div className="ai-banner">

      {/* Banner */}
      <div className="ai-banner-text">
        <h1>Nails Design Suggestion</h1>
        <p>Creative • Stylish • Trendy Nail Ideas</p>
      </div>
    
      

    {/* HERO BANNER */}
      <section
        className="Aigenerator-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/creative&unique.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <motion.div
          className="Aigenerato-hero-text"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
      
        </motion.div>
      </section>


      {/* Box */}
      <div className="ai-box">

        <input
          type="text"
          placeholder="bridal, 3d, chrome..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button onClick={generateDesign}>
          Generate
        </button>

        <p>{msg}</p>

      </div>

      {/* Images */}
     <div className="ai-grid">
       {images.map((img, index) => (
       <div className="ai-card" key={index}>
       <img src={img} alt="" className="ai-img" />
    </div>
  ))}
</div>

    </div>
  );
}

export default AiGenerator;


