"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert(`Welcome back, ${data.user.name}!`);
      router.push("/dashboard"); 
    } else {
      alert(data.error || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black">
      <form onSubmit={handleLogin} className="p-8 bg-white border rounded-xl shadow-lg flex flex-col gap-4 w-80">
        <h1 className="text-2xl font-bold text-center text-blue-600">BorrowBox</h1>
        <p className="text-center text-gray-500">Log in to your account</p>
        <input className="border p-2 rounded" type="email" placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} required />
        <input className="border p-2 rounded" type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} required />
        <button className="bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700 transition" type="submit">LOGIN</button>
      </form>
    </div>
  );
}