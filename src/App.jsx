import React, { useState } from "react";
import "./App.css"; // keep your CSS file for UI

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username) return;
    try {
      setError("");
      setUserData(null);

      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <h1 className="title">GitHub Profile Finder</h1>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUser}>Search</button>
      </div>

      {/* Error */}
      {error && <p className="error">{error}</p>}

      {/* Profile Card */}
      {userData && (
        <div className="profile-card">
          <img src={userData.avatar_url} alt="Profile Avatar" />
          <div>
            <h2>{userData.name || "No Name Available"}</h2>
            <p className="username">@{userData.login}</p>
            <p className="bio">{userData.bio || "No bio available."}</p>
            <div className="stats">
              <span>Followers: {userData.followers}</span>
              <span>Following: {userData.following}</span>
              <span>Repos: {userData.public_repos}</span>
            </div>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              View Profile
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">Made by Sardar Ahmed Ali</footer>
    </div>
  );
}

export default App;
