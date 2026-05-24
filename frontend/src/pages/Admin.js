import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // 🔒 LOGIN CHECK (IMPORTANT)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");

    if (!isLoggedIn) {
      navigate("/admin-login");
    }
  }, []);

  // 📦 FETCH DATA SAFELY
  const fetchBookings = async () => {
    try {
      const res = await fetch("https://nail-website-2.onrender.com/bookings");

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setBookings(data || []);
    } catch (error) {
      console.log("Fetch error:", error);
      setBookings([]);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // 🗑 DELETE
  const deleteBooking = async (id) => {
    try {
      await fetch(`https://nail-website-2.onrender.com/booking/${id}`, {
        method: "DELETE",
      });

      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.service}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>
                  <button onClick={() => deleteBooking(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;