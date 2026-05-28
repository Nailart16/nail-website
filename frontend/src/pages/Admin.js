import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

  const [bookings, setBookings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

  const isAdmin = localStorage.getItem("admin");

  if (isAdmin !== "true") {

    navigate("/admin-login");

    return;
  }

  fetchBookings();

}, []);

  const fetchBookings = async () => {

    try {

      const res = await fetch(
        "https://nail-website-2.onrender.com/bookings"
      );

      const data = await res.json();

      setBookings(data);

    } catch (error) {

      console.log(error);

    }
  };

  const deleteBooking = async (id) => {

    await fetch(
      `https://nail-website-2.onrender.com/booking/${id}`,
      {
        method: "DELETE"
      }
    );

    fetchBookings();
  };

  return (
    <div className="admin-page">

      <h1>Admin Panel 💅</h1>

      {bookings.map((item) => (

        <div key={item._id} className="booking-card">

          <h3>{item.name}</h3>

          <p>{item.phone}</p>

          <p>{item.service}</p>

          <p>{item.date}</p>

          <p>{item.time}</p>

          <button
            onClick={() => deleteBooking(item._id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default Admin;