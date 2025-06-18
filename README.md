## 🚀 30-Day Coding Challenge: Day 10

This project is the tenth entry in my 30-day coding challenge. Today's goal was to build an interactive media search application that connects to a live external API, with a focus on creating a great user experience through features like real-time search suggestions.

### 📖 Project Overview

This is a sleek, dark-themed movie information finder that allows users to search for any movie and retrieve detailed information. As a user types in the search bar, the application fetches and displays a list of relevant suggestions in real-time. Selecting a movie or performing a full search presents a detailed card with the movie's poster, plot, ratings, genre, director, and more.

The application is built using vanilla JavaScript and demonstrates proficiency in handling asynchronous API calls, DOM manipulation, and creating a responsive, user-friendly interface.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's interface.
![Jun-17-2025 20-26-12](https://github.com/user-attachments/assets/e5127353-e5e1-4fe7-9332-cf593eb6c7d0)



### 🌟 Key Features

* **Live Search Suggestions:** Fetches and displays a list of movie suggestions as the user types, providing a fast and intuitive search experience.
* **Debounced API Calls:** Implements a debounce mechanism on the search input to prevent excessive API requests while the user is typing, improving performance and efficiency.
* **Detailed Movie Information:** Retrieves and displays comprehensive movie details from the OMDB API, including plot, ratings, runtime, genre, director, and actors.
* **Dynamic UI Rendering:** The entire movie details card is generated dynamically in JavaScript based on the API response.
* **Cinematic Dark Theme:** A visually appealing dark-mode UI designed to be perfect for a media-browsing application.
* **Robust Error Handling:** Provides clear user feedback if a movie cannot be found or if there is a network error.
* **Fully Responsive:** The layout is optimized for a seamless experience across all devices.

### 💻 Technologies Used

This project was built entirely with vanilla front-end technologies.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **OMDB API:** The source of all movie data.
* **Google Fonts:** For the 'Lato' font family.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these steps:

1.  **Get a free API Key** from [OMDB](http://www.omdbapi.com/apikey.aspx).
2.  **Clone the repository (or download the code):**
    ```bash
    git clone https://github.com/timothy-agboada/movie-info-app.git
    ```
3.  **Navigate to the project directory:**
    ```bash
    cd movie-info-app
    ```
4.  **Add your API Key:**
    * Open the `script.js` file.
    * Replace the placeholder `'API_KEY'` with your actual key from OMDB.
    ```javascript
    const apiKey = 'API_KEY'; // Replace with your key
    ```
5.  **Open the `index.html` file in your web browser.**

### 🎯 Learning Objectives

This project was an excellent opportunity to practice several important front-end development skills:

* **Asynchronous JavaScript:** Managing multiple types of API calls (`?s=` for search and `?t=` for details) and handling their responses.
* **Advanced User Experience:** Implementing a debounced search suggestion feature to create a more interactive and professional application.
* **DOM Manipulation:** Dynamically creating and managing multiple parts of the UI, including the suggestion list and the final results card.
* **Event Handling:** Managing a variety of user events, including `input`, `click`, and clicks outside of a specific element to control UI state.
* **Problem Solving:** Structuring the code to handle a more complex user flow with multiple states (initial, searching, suggestions, result, error).
