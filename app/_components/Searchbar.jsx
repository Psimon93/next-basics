"use client";
import { useState } from "react";
export default function Searchbar() {
  const [search, setSearch] = useState("Search");
  return (
    <main>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </main>
  );
}
