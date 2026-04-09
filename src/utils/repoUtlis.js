export const getUniqueLanguages = (repos) => {
  const languages = Array.from(new Set(repos.map((item) => item.language)));
  return languages.filter(Boolean);
};

export const filterAndSortRepos = (repos, filterLang, sortby) => {
  let repoCopy = [...repos];

  let languages = Array.from(new Set(repos.map((item) => item.language)));
  languages = languages.filter((lang) => lang != null);

  if (filterLang) {
    repoCopy = repoCopy.filter((repo) => repo.language === filterLang);
  }

  if (sortby === "stars") {
    repoCopy.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } else if (sortby === "forks") {
    repoCopy.sort((a, b) => b.forks_count - a.forks_count);
  }

  return repoCopy;
};
