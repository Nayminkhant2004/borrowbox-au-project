"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // This URL handles the connection to your MongoDB backend
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Success! Account created in MongoDB.");
      } else {
        const data = await res.json();
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      alert("Error: Make sure your terminal is still running 'npm run dev'!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <form onSubmit={handleSubmit} className="p-8 border rounded-lg shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <input className="border p-2" type="text" placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} required />
        <input className="border p-2" type="email" placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} required />
        <input className="border p-2" type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} required />
        <button className="bg-blue-500 text-white p-2 rounded font-bold" type="submit">Create Account</button>
      </form>
    </div>
  );
}