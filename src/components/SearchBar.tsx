import { useState } from "react";

export default function SearchBar({ data }: any) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((item: any) => (
        <div key={item.id} className="p-2 border mb-2">
          {item.title}
        </div>
      ))}
    </div>
  );
}