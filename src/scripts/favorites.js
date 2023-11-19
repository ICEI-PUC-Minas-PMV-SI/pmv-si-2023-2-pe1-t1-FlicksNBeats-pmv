function fetchFavorites() {
  const token = localStorage.getItem("access_token");

  fetch("http://localhost:3000/favorites", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(async (data) => {
    const movies = await data.json();

    const moviesGallery = document.getElementById("moviesGallery");

    const moviesList = movies.reduce((acc, movie) => {
      const movieElement = `
        <div id="${movie.id}" class="favorite-movie">
         <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="" />
        </div>
        `;
      acc = acc + movieElement;
      return acc;
    }, "");

    moviesGallery.innerHTML = moviesList;

    movies.forEach((movie) => {
      const movieElement = document.getElementById(movie.id);
      movieElement.addEventListener("click", () => {
        localStorage.setItem("selectedMovieId", movie.id);

        location.href = "http://localhost:5500/src/pages/movie.html";
      });
    });
  });
}

fetchFavorites();
