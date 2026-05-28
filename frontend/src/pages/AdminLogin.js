import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const login = () => {
    if (user === "nails" && pass === "1619") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Wrong Login");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Admin ID"
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;