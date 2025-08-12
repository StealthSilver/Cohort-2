'use client'

import { useState } from "react";
import axios from "axios";

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSignin = async () => {
        if (!username || !password) {
            setMessage("Please enter username and password");
            return;
        }

        try {
            setLoading(true);
            setMessage("");
            const response = await axios.post("http://localhost:3000/api/v1/signin", {
                username,
                password
            });
            setMessage(`Signed up successfully! Welcome ${response.data.username || username}`);
        } catch (error: any) {
            setMessage(error.response?.data?.message || "Sign up failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
            <div className="border p-6 rounded-lg shadow-md bg-black w-80">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign up</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    onClick={handleSignin}
                    disabled={loading}
                    className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition disabled:bg-blue-300"
                >
                    {loading ? "Signing in..." : "Sign In"}
                </button>

                {message && (
                    <p className="mt-3 text-sm text-center text-gray-600">{message}</p>
                )}
            </div>
        </div>
    );
}
