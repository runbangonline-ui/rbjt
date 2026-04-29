"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="font-oswald text-3xl font-bold text-white mb-2">
            Admin Login
          </h1>
          <p className="font-source-sans text-zinc-400">
            JBJT Global Management Portal
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-zinc-900 p-8 rounded-lg border border-zinc-800"
        >
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500 rounded">
              <p className="font-source-sans text-red-500 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block font-source-sans text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white font-source-sans focus:border-orange-500 focus:outline-none"
                placeholder="admin@rbjtglobal.com"
              />
            </div>

            <div>
              <label className="block font-source-sans text-sm font-medium text-zinc-300 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white font-source-sans focus:border-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-4 bg-orange-500 text-white font-source-sans font-semibold rounded hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
