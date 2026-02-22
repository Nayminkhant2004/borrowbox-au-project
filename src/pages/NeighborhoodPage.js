import { useState } from "react";
import { users } from "../data/users";
import { locations } from "../data/locations";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function NeighborhoodPage() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const filtered = users.filter(u => u.location === selected);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Find Neighbors</h2>

      <select onChange={e => setSelected(e.target.value)}>
        <option value="">Select Area</option>
        {locations.map(loc => (
          <option key={loc}>{loc}</option>
        ))}
      </select>

      <div style={{ marginTop: "20px" }}>
        {filtered.map(user => (
          <div
            key={user.id}
            style={styles.card}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <img src={user.avatar} style={styles.avatar} />
            <div>
              <h4>{user.name}</h4>
              <p>{user.skills.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: "10px",
    background: "white",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
    cursor: "pointer"
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  }
};