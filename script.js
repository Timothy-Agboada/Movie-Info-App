document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.getElementById('movieSearchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultContainer = document.getElementById('resultContainer');
    const suggestionsContainer = document.getElementById('suggestionsContainer');

    // Replace 'API_KEY' with the API key from OMDB
    const apiKey = 'API-KEY';
    const OMDB_API_URL = 'https://www.omdbapi.com/';

    let debounceTimer;

    // Fetch detailed movie data by title
    async function fetchMovieData(movieTitle) {
        resultContainer.innerHTML = '<p class="intro-message">Searching...</p>';
        try {
            const response = await fetch(`${OMDB_API_URL}?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`);
            const data = await response.json();
            if (data.Response === "True") {
                displayMovieData(data);
            } else {
                displayError(data.Error);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            displayError("An error occurred. Please try again.");
        }
    }
    
    // Fetch suggestions based on search term
    async function fetchSuggestions(searchTerm) {
        if (searchTerm.length < 3) {
            suggestionsContainer.innerHTML = '';
            return;
        }
        try {
            const response = await fetch(`${OMDB_API_URL}?s=${encodeURIComponent(searchTerm)}&apikey=${apiKey}`);
            const data = await response.json();
            if (data.Response === "True") {
                displaySuggestions(data.Search);
            } else {
                suggestionsContainer.innerHTML = '';
            }
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    }
    
    // Display suggestions in the dropdown
    function displaySuggestions(movies) {
        suggestionsContainer.innerHTML = '';
        movies.slice(0, 5).forEach(movie => { // Show up to 5 suggestions
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = movie.Title;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = movie.Title;
                suggestionsContainer.innerHTML = '';
                fetchMovieData(movie.Title);
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }

    // Display the full movie data card
    function displayMovieData(data) {
        let ratingsHTML = '';
        data.Ratings.forEach(rating => {
            ratingsHTML += `
                <div class="rating-item">
                    <p><strong>${rating.Source}:</strong> ${rating.Value}</p>
                </div>
            `;
        });

        const movieCardHTML = `
            <div class="movie-card">
                <div class="movie-poster">
                    <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://placehold.co/300x450/1e2742/a0a0a0?text=No+Image'}" alt="${data.Title} Poster">
                </div>
                <div class="movie-details">
                    <h2>${data.Title}</h2>
                    <div class="movie-meta">
                        <span>${data.Year}</span>
                        <span>•</span>
                        <span>${data.Rated}</span>
                        <span>•</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="movie-plot">
                        <p>${data.Plot}</p>
                    </div>
                    <div class="movie-info-list">
                        <p><strong>Genre:</strong> ${data.Genre}</p>
                        <p><strong>Director:</strong> ${data.Director}</p>
                        <p><strong>Actors:</strong> ${data.Actors}</p>
                    </div>
                    <div class="ratings">
                        ${ratingsHTML}
                    </div>
                </div>
            </div>
        `;
        resultContainer.innerHTML = movieCardHTML;
    }

    // Display an error message
    function displayError(message) {
        resultContainer.innerHTML = `
            <div class="error-message">
                <h2>${message}</h2>
            </div>
        `;
    }

    // --- Event Listeners ---
    
    // Search button click
    searchBtn.addEventListener('click', () => {
        const movieTitle = searchInput.value.trim();
        if (movieTitle) {
            suggestionsContainer.innerHTML = '';
            fetchMovieData(movieTitle);
        }
    });
    
    // Typing in the search input
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        const searchTerm = searchInput.value.trim();
        debounceTimer = setTimeout(() => {
            fetchSuggestions(searchTerm);
        }, 300); // Debounce for 300ms
    });
    
    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            suggestionsContainer.innerHTML = '';
        }
    });
});