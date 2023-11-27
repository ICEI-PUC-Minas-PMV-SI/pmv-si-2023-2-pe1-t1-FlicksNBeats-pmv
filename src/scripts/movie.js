const movieId = localStorage.getItem("selectedMovieId");
const token = localStorage.getItem("access_token");

const movieToken = "";

async function fetchMovieDetails() {}

function fetchMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${movieToken}`,
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`, options)
    .then((response) => response.json())
    .then((response) => {
      const movieBackdrop = document.getElementById("movieBackdrop");
      const moviePoster = document.getElementById("moviePoster");
      const movieDescription = document.getElementById("movieDescription");
      const movieTitle = document.getElementById("movieTitle");
      const movieGenres = document.getElementById("movieGenres");
      const movieVoteAverage = document.getElementById("movieVoteAverage");
      const movieVoteCount = document.getElementById("movieVoteCount");

      const genres = response.genres.reduce((acc, genre, index) => {
        if (index > 0) {
          acc += `, ${genre.name}`;
        }
        return acc;
      }, response.genres[0].name);

      movieBackdrop.src = `https://image.tmdb.org/t/p/original/${response.backdrop_path}`;
      moviePoster.src = `https://image.tmdb.org/t/p/original/${response.poster_path}`;
      movieDescription.innerHTML = response.overview;
      movieTitle.innerHTML = response.title;
      movieGenres.innerHTML = genres;
      movieVoteAverage.innerHTML = response.vote_average.toFixed(1);
      movieVoteCount.innerHTML = `${(response.vote_count / 1000).toFixed(1)}k`;
    })
    .catch((err) => console.error(err));

  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const movieDirector = document.getElementById("movieDirector");
      const director = response.crew.find(({ job }) => job === "Director");

      movieDirector.innerHTML = director.name;
    })
    .catch((err) => console.error(err));
}

async function removeFavorite(id) {
  await fetch(`http://localhost:3000/favorites/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  const favoriteBtn = document.getElementById("favoriteBtn");
  const favoriteBtnIcon = document.getElementById("favoriteBtnIcon");

  favoriteBtnIcon.classList.remove("fa-check");
  favoriteBtnIcon.classList.add("fa-heart");
  favoriteBtn.classList.remove("enabled");
}

async function addFavorite(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${movieToken}`,
    },
  };

  const { poster_path } = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
    options
  ).then((response) => response.json());

  await fetch("http://localhost:3000/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ poster_path, id }),
  });

  const favoriteBtn = document.getElementById("favoriteBtn");
  const favoriteBtnIcon = document.getElementById("favoriteBtnIcon");

  favoriteBtnIcon.classList.remove("fa-heart");
  favoriteBtnIcon.classList.add("fa-check");
  favoriteBtn.classList.add("enabled");
}

async function handleFavorite() {
  const favoriteBtnIcon = document.getElementById("favoriteBtnIcon");

  if (favoriteBtnIcon.classList.contains("fa-check")) {
    await removeFavorite(movieId);
  } else {
    await addFavorite(movieId);
  }
}

function fetchFavorite() {
  fetch("http://localhost:3000/favorites", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((favorites) => {
      const findMovie = favorites.find((movie) => movie.id === movieId);
      const favoriteBtn = document.getElementById("favoriteBtn");
      const favoriteBtnIcon = document.getElementById("favoriteBtnIcon");

      if (findMovie) {
        favoriteBtnIcon.classList.remove("fa-heart");
        favoriteBtnIcon.classList.add("fa-check");
      } else {
        favoriteBtnIcon.classList.remove("fa-check");
        favoriteBtnIcon.classList.add("fa-heart");
        favoriteBtn.classList.add("enabled");
      }

      favoriteBtn.addEventListener("click", handleFavorite);
    });
}

fetchMovie();
fetchFavorite();
