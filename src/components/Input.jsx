import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Input() {
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchGithubUser = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${username}`,
      );
      //   console.log(res);
      if (res.data.items && res.data.items.length > 0) {
        setUser(res.data.items[0]);
      } else {
        setError("No user found..");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!inputVal.trim()) {
      setUser(null);
      setError("");
      setLoading(false);
      return;
    }

    const debouncedSearch = setTimeout(() => {
      fetchGithubUser(inputVal);
    }, 500);

    return () => clearTimeout(debouncedSearch);
  }, [inputVal]);

  return (
    <div className="flex flex-col items-center max-w-2xl w-full mx-auto sm:mt-10 p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
      <div className="flex flex-row w-full max-w-lg gap-8">
        <input
          type="text"
          placeholder="Search Github user.."
          className="flex-1 rounded-xl outline-none px-4 py-2 bg-slate-100 border border-slate-200 focus:ring-2 focus:ring-blue-200 transition duration-200 w-full"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>

      {error && user === null && (
        <p className="text-red-500 text-sm mt-4 font-medium ">{error}</p>
      )}
      <div>
        {loading && <p className="text-slate-400 mt-4">{"loading...."}</p>}
      </div>

      {user && (
        <div className="w-full">
          <Card user={user} />
        </div>
      )}
    </div>
  );
}

export default Input;
