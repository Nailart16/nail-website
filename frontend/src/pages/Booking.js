import { useState } from "react";
import { motion } from "framer-motion";

function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
  if (!name || !phone || !service || !date || !time) {
    alert("Please fill all details");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Enter valid 10 digit mobile number");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("https://nail-website-2.onrender.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        service,
        date,
        time
      })
    });

    const msg = await res.text();

    if (!res.ok) {
      alert(msg);
      setLoading(false);
      return;
    }

    // WhatsApp first
    const whatsappMessage = `Hello KYC Nail Art 💅

Booking Details:

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
Time: ${time}`;

    window.open(
      `https://wa.me/916355422967?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    // then success
    setTimeout(() => {
      alert("Booking Successful!");
    }, 800);

    setName("");
    setPhone("");
    setService("");
    setDate("");
    setTime("");

  } catch (error) {
    alert("Booking Error");
  }

  setLoading(false);
};
  return (
    <div>

      {/* HERO BANNER */}
      <section
        className="booking-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/images/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <motion.div
          className="booking-hero-text"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Book Appointment</h1>
          <p>Luxury Nails • Easy Booking • Trusted Service</p>
        </motion.div>
      </section>

      {/* FORM */}
      <section className="booking-page">

        <motion.div
          className="booking-box"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Reserve Your Slot 💅</h2>

          <p className="booking-sub">
            Get premium nail services with easy scheduling
          </p>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="10 Digit Mobile Number"
            value={phone}
            maxLength="10"
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option>Gel Polish</option>
            <option>Nail Extensions</option>
            <option>3D Nail Art</option>
            <option>Bridal Nails</option>
            <option>Cat Eye Nails</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button onClick={handleBooking}>
            {loading ? "Please Wait..." : "Confirm Booking"}
          </button>

        </motion.div>

      </section>

    </div>
  );
}

export default Booking;