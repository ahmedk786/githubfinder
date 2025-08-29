function ProfileCard({ user }) {
  return (
    <div className="mt-8 w-full max-w-xl bg-gray-800 p-8 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
        />
        <h2 className="mt-4 text-3xl font-bold text-blue-400">{user.name || "No Name"}</h2>
        <p className="text-gray-400 text-lg">@{user.login}</p>
        <p className="mt-3 text-center text-gray-300">{user.bio || "No bio available"}</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6 text-center">
        <div className="bg-gray-900 p-4 rounded-xl shadow">
          <span className="text-2xl font-bold text-blue-400">{user.followers}</span>
          <p className="text-gray-400">Followers</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl shadow">
          <span className="text-2xl font-bold text-purple-400">{user.following}</span>
          <p className="text-gray-400">Following</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl shadow">
          <span className="text-2xl font-bold text-green-400">{user.public_repos}</span>
          <p className="text-gray-400">Repos</p>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition px-8 py-3 rounded-xl font-semibold shadow-md"
      >
        Visit Profile
      </a>
    </div>
  );
}

export default ProfileCard;
