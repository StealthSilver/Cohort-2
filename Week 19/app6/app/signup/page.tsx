'use client'

import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    if (!username || !password) {
      setMessage("Please enter username and password");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const res = await axios.post("http://localhost:3000/api/v1/signup", {
        username,
        password,
      });
      setMessage(res.data.message || "Signed up successfully!");
      setUsername("");
      setPassword("");
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Signup failed. Try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
      <div className="border p-6 rounded-lg shadow-md bg-white w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full p-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition disabled:bg-green-300"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {message && (
          <p className="mt-3 text-sm text-center text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}
