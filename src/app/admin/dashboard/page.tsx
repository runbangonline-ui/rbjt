"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contact");
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchContacts();
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="font-oswald text-xl font-bold text-white">
            JBJT Global Admin
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-source-sans text-zinc-400 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <div className="font-oswald text-3xl font-bold text-orange-500 mb-1">
              {contacts.length}
            </div>
            <div className="font-source-sans text-zinc-400 text-sm">
              Total Contacts
            </div>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <div className="font-oswald text-3xl font-bold text-orange-500 mb-1">
              {contacts.filter((c) => c.status === "new").length}
            </div>
            <div className="font-source-sans text-zinc-400 text-sm">New</div>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <div className="font-oswald text-3xl font-bold text-orange-500 mb-1">
              {contacts.filter((c) => c.status === "replied").length}
            </div>
            <div className="font-source-sans text-zinc-400 text-sm">
              Replied
            </div>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <div className="font-oswald text-3xl font-bold text-orange-500 mb-1">
              {contacts.filter((c) => c.status === "closed").length}
            </div>
            <div className="font-source-sans text-zinc-400 text-sm">
              Closed
            </div>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-zinc-800">
            <h2 className="font-oswald text-lg font-semibold text-white">
              Recent Contacts
            </h2>
          </div>

          {isLoading ? (
            <div className="p-8 text-center">
              <p className="font-source-sans text-zinc-400">Loading...</p>
            </div>
          ) : contacts.length === 0 ? (
            <div className="p-8 text-center">
              <p className="font-source-sans text-zinc-400">
                No contacts yet
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-800/50">
                  <tr>
                    <th className="px-6 py-3 text-left font-source-sans text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left font-source-sans text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left font-source-sans text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left font-source-sans text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left font-source-sans text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left font-source-sans text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-zinc-800/30">
                      <td className="px-6 py-4 font-source-sans text-sm text-zinc-300">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 font-source-sans text-sm text-white">
                        {contact.name}
                      </td>
                      <td className="px-6 py-4 font-source-sans text-sm text-zinc-300">
                        {contact.email}
                      </td>
                      <td className="px-6 py-4 font-source-sans text-sm text-zinc-300">
                        {contact.subject}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-source-sans rounded ${
                            contact.status === "new"
                              ? "bg-orange-500/20 text-orange-500"
                              : contact.status === "replied"
                              ? "bg-blue-500/20 text-blue-500"
                              : "bg-zinc-700 text-zinc-400"
                          }`}
                        >
                          {contact.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={contact.status}
                          onChange={(e) =>
                            updateStatus(contact.id, e.target.value)
                          }
                          className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs font-source-sans text-zinc-300 focus:outline-none"
                        >
                          <option value="new">New</option>
                          <option value="replied">Replied</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
