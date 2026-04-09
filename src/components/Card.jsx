import axios from "axios";
import React, { useState } from "react";
import RepoCard from "./RepoCard";

function Card({ user }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.github.com/users/${user.login}/repos`,
      );

      //   console.log(res);
      setRepos(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("unable to find the repo.");
    }
  };

  return (
    <div className="flex flex-col  items-center p-2 sm:p-6 mt-6 text-sm w-full">
      <img
        src={`${user.avatar_url}`}
        alt={`${user.login}'s avatar`}
        title="click to show repos"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-md border-2 border-white mb-4 cursor-pointer hover:opacity-90 transition-opacity"
        onClick={handleClick}
      />
      <h2 className="text-lg sm:text-xl  text-slate-800 font-semibold">
        @{user.login}
      </h2>

      <div>
        <a
          href={user.html_url}
          target="_blank"
          className="text-blue-500 hover:text-blue-600 text-sm mt-2 font-medium hover:underline"
        >
          Visit Profile
        </a>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-4 font-medium ">{error}</p>
      )}
      {loading && <p className="mt-4 text-slate-500">Loading repos...</p>}
      <div className="w-full">
        {repos.length > 0 && <RepoCard repos={repos} />}
      </div>
    </div>
  );
}

export default Card;
