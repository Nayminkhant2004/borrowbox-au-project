"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [itemName, setItemName] = useState("");
  const [requestName, setRequestName] = useState("");
  const [items, setItems] = useState([]);
  const [requests, setRequests] = useState([]);

  // Fetch all data from MongoDB
  const fetchData = async () => {
    try {
      const itemsRes = await fetch("/api/auth/items");
      const requestsRes = await fetch("/api/auth/requests");
      if (itemsRes.ok) setItems(await itemsRes.ok ? await itemsRes.json() : []);
      if (requestsRes.ok) setRequests(await requestsRes.ok ? await requestsRes.json() : []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: itemName }),
    });
    if (res.ok) {
      alert(`Success! ${itemName} added.`);
      setItemName("");
      fetchData(); // Refresh list
    }
  };

  const handleRequestTool = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ toolName: requestName }),
    });
    if (res.ok) {
      alert(`Request for ${requestName} sent!`);
      setRequestName("");
      fetchData(); // Refresh list
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-black font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border">
          <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">BorrowBox</h1>
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium transition" onClick={() => window.location.href = '/login'}>
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Entity #2 Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-bold mb-4 text-gray-800">List a New Tool</h2>
            <form onSubmit={handleAddItem} className="flex flex-col gap-4">
              <input className="border p-3 rounded-xl bg-gray-50" type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
              <button className="bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700">Add to Inventory</button>
            </form>
          </div>

          {/* Entity #3 Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Borrow a Tool</h2>
            <form onSubmit={handleRequestTool} className="flex flex-col gap-4">
              <input className="border p-3 rounded-xl bg-gray-50" type="text" placeholder="What do you need?" value={requestName} onChange={(e) => setRequestName(e.target.value)} required />
              <button className="bg-green-600 text-white p-3 rounded-xl font-bold hover:bg-green-700">Send Request</button>
            </form>
          </div>
        </div>

        {/* LIVE DATABASE FEED */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-lg font-bold mb-4 text-blue-600 uppercase tracking-wider">Available in Inventory</h2>
            <ul className="divide-y">
              {items.length > 0 ? items.map((item, i) => (
                <li key={i} className="py-3 flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs text-gray-400">Available</span>
                </li>
              )) : <p className="text-gray-400">No items found.</p>}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h2 className="text-lg font-bold mb-4 text-green-600 uppercase tracking-wider">Recent Borrow Requests</h2>
            <ul className="divide-y">
              {requests.length > 0 ? requests.map((req, i) => (
                <li key={i} className="py-3 flex justify-between items-center">
                  <span className="font-medium">{req.toolName}</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-lg font-bold">{req.status}</span>
                </li>
              )) : <p className="text-gray-400">No requests yet.</p>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}