import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Profile from "./pages/Profile";
import MyItems from "./pages/MyItems";
import BorrowHistory from "./pages/BorrowHistory";
import TopLenders from "./pages/TopLenders";
import Neighborhood from "./pages/Neighborhood";
import PublicProfile from "./pages/PublicProfile";
import LocationSettings from "./pages/LocationSettings";

import { users } from "./data/users";

function App() {
  const currentUser = users[0];

  // ✅ GLOBAL STATE
  const [items, setItems] = useState([]);
  const [borrowHistory, setBorrowHistory] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* ITEMS */}
        <Route path="/items" element={<Items items={items} />} />
        <Route
          path="/add-item"
          element={<AddItem items={items} setItems={setItems} currentUser={currentUser} />}
        />
        <Route
          path="/my-items"
          element={<MyItems items={items} currentUser={currentUser} />}
        />

        {/* BORROW */}
        <Route
          path="/history"
          element={<BorrowHistory history={borrowHistory} />}
        />

        <Route path="/top-lenders" element={<TopLenders />} />
        <Route path="/neighbors" element={<Neighborhood />} />
        <Route path="/location" element={<LocationSettings />} />

        {/* PROFILE */}
        <Route path="/profile" element={<Profile user={currentUser} />} />
        <Route path="/profile/:id" element={<PublicProfileWrapper />} />
      </Routes>
    </Router>
  );
}

function PublicProfileWrapper() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));
  if (!user) return <h2>User not found</h2>;
  return <PublicProfile user={user} />;
}

export default App;