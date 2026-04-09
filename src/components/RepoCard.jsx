import React, { useState } from "react";
import { filterAndSortRepos, getUniqueLanguages } from "../utils/repoUtlis";

function RepoCard({ repos }) {
  const [sortby, setSortBy] = useState("");
  const [filterLang, setFilterLang] = useState("");

  //   console.log(repos);

  const languages = getUniqueLanguages(repos);
  const repoCopy = filterAndSortRepos(repos, filterLang, sortby);

  return (
    <div className="mt-6 w-full">
      <div>
        <h3 className="text-slate-700 font-bold  pb-1 mb-2 border-b">
          Repositories:
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="lang"
              className="text-sm font-medium text-slate-600"
            >
              Language:
            </label>
            <select
              id="lang"
              value={filterLang}
              className="text-sm border border-slate-200 rounded px-2 py-1 outline-none w-full sm:w-auto"
              onChange={(e) => setFilterLang(e.target.value)}
            >
              <option value="">All Languages</option>
              {languages.map((item) => {
                return (
                  <option name="" id="" key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sortby">Sort By:</label>
            <select
              id="sortby"
              value={sortby}
              className="text-sm border border-slate-200 rounded px-2 py-1 outline-none w-full sm:w-auto"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Default</option>
              <option value="stars">Stars (High to Low) </option>
              <option value="forks">Forks (High to Low)</option>
            </select>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2">
        {repoCopy.map((repo) => (
          <li
            key={repo.id}
            className="text-left bg-slate-50 p-2 rounded border border-slate-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel=""
                className="text-blue-600 font-medium hover:underline"
              >
                {repo.name}
              </a>
              <div className="flex items-center gap-3 text-sm shrink-0 text-slate-600">
                <span> ⭐ {repo.stargazers_count}</span>
                <svg
                  className="w-4 h-4 text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 4.5V7c0 1.5-.94 2.8-2.25 3.36v3.28c1.31.56 2.25 1.86 2.25 3.36 0 2.07-1.68 3.75-3.75 3.75S7.5 19.07 7.5 17c0-1.5.94-2.8 2.25-3.36v-3.28C8.44 9.8 7.5 8.5 7.5 7V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v2.33c0 .38.31.67.69.67h1.62c.38 0 .69-.29.69-.67V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
                </svg>
                <span>{repo.forks_count}</span>
              </div>
            </div>
            {repo.description && (
              <p className="text-xs text-slate-500 truncate mt-1 flex-wrap">
                {repo.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoCard;
