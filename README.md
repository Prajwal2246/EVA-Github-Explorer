# 🌐 GitHub Explorer

A responsive React application that allows users to search for GitHub profiles and explore their repositories in real-time. Built as a coding assignment using the GitHub REST API.

## ✨ Features

- **Real-Time User Search:** Instantly search for any GitHub user.
- **Search Optimization:** Implemented a 500ms debounce to minimize unnecessary API calls while typing.
- **Profile Overview:** Displays the user's avatar, username, and a direct link to their GitHub profile.
- **Repository Viewer:** Fetches and displays the user's public repositories including descriptions, star counts, and fork counts.
- **Advanced Filtering & Sorting:**
  - Filter repositories dynamically by **Language**.
  - Sort repositories by **Stars** (High to Low) or **Forks** (High to Low).
- **Graceful State Handling:** Includes polished UI states for Empty, Loading, and Error conditions.
- **Fully Responsive:** Clean, modern UI that works flawlessly on mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Frontend:** React.js (Functional Components, Hooks)
- **Styling:** Tailwind CSS
- **Data Fetching:** Axios
- **API:** GitHub REST API

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prajwal2246/EVA-Github-Explorer.git