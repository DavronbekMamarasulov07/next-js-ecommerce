"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SinglePage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) {
      setUsername(stored);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Single Page</h1>
      <p className="text-lg">
        Salom, <strong>{username}</strong>!
        
      </p>
    </main>
  );
}
