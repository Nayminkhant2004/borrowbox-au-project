import { useState } from "react";
import { locations } from "../data/locations";
import { users } from "../data/users";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Neighborhood() {
  const [selected, setSelected] = useState("");

  const filteredUsers = users.filter(
    (u) => u.location === selected
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Find Neighbors</h1>

      <select
        className="border p-2 mt-4"
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Select Area</option>
        {locations.map((loc) => (
          <option key={loc}>{loc}</option>
        ))}
      </select>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            className="border p-4 rounded shadow hover:shadow-lg"
          >
            <img
              src={user.avatar}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h2 className="font-bold">{user.name}</h2>
            <p>{user.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}