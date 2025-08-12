"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/", // After login, go to homepage
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSignIn}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign In
      </button>
    </div>
  );
}
