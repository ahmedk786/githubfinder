import { useState } from "react";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSearch(username);
    setUsername("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 w-full max-w-xl bg-gray-800 p-3 rounded-2xl shadow-lg"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username..."
        className="flex-1 p-3 rounded-xl bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition px-6 py-3 rounded-xl font-semibold shadow-md"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
