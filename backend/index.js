const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const app = express();

// middleware
app.use(cors({
  origin: "https://nail-website-topaz.vercel.app",
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));
app.use(express.json());

// ================== CONFIG ==================

// ❗ IMPORTANT: apni keys yaha daalo
const PEXELS_API_KEY = "Al53FvFE1c8Cvh2qASmijq3pqJHjhJHXyPWQRTy6pvbvC9RMupFCwp26"; // 🔑


// ================== DB ==================

mongoose.connect("mongodb+srv://kyc16308_db_user:nailweb1@cluster0.85dg7mz.mongodb.net/nailartDB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// schema
const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  service: String,
  date: String,
  time: String
});

// model
const Booking = mongoose.model("Booking", bookingSchema);

// ================== ROUTES ==================

// test
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ================== BOOKING ==================

// save
app.post("/booking", async (req, res) => {
  try {
    const { name, phone, service, date, time } = req.body;

    // Required fields
    if (!name || !phone || !service || !date || !time) {
      return res.status(400).send("Fill all fields");
    }

    // 10 digit validation
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).send("Invalid mobile number");
    }

    // Check same slot
    const existing = await Booking.findOne({ date, time });

    if (existing) {
      return res.status(400).send("Slot already booked");
    }

    const newBooking = new Booking({
      name,
      phone,
      service,
      date,
      time
    });

    await newBooking.save();

    res.send("Booking Successful");

  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.get("/bookings", async (req,res)=>{
 const data = await Booking.find();
 res.json(data);
});

app.get("/bookings", (req, res) => {
  res.send("Bookings route working");
});

app.delete("/booking/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.send("Deleted");
  } catch (error) {
    res.status(500).send("Delete Error");
  }
});
// ================== AI + PEXELS ==================

app.post("/generate-design", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.get(
      "https://api.pexels.com/v1/search",
      {
        headers: {
          Authorization: PEXELS_API_KEY
        },
        params: {
          query: `${prompt} nail art manicure`,
          per_page: 6
        }
      }
    );

    const images = response.data.photos.map(
      photo => photo.src.large
    );

    res.json({ images });

  } catch (error) {
    console.log(error.message);
    res.status(500).send("error");
  }
});
// ================== SERVER ==================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  