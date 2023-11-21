function fetchMovie() {
  const movieToken = "";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${movieToken}`,
    },
  };

  const movieId = localStorage.getItem("selectedMovieId");

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

  const token = localStorage.getItem("access_token");

  fetch("http://localhost:3000/favorites", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(async (data) => {
    const favoriteMovies = await data.json();
    const findMovie = favoriteMovies.find((movie) => movie.id == movieId);

    const favoriteBtnIcon = document.getElementById("favoriteBtnIcon");

    if (findMovie) {
      favoriteBtnIcon.classList.remove("fa-heart");
      favoriteBtnIcon.classList.add("fa-check");
    } else {
      favoriteBtnIcon.classList.remove("fa-check");
      favoriteBtnIcon.classList.add("fa-heart");
    }

    const favoriteBtn = document.getElementById("favoriteBtn");

    favoriteBtn.addEventListener("click", async () => {
      if (favoriteBtnIcon.classList.contains("fa-check")) {
        await fetch(`http://localhost:3000/favorites/${movieId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });

        favoriteBtnIcon.classList.remove("fa-check");
        favoriteBtnIcon.classList.add("fa-heart");
      } else {
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
          options
        )
          .then((response) => response.json())
          .then(async (response) => {
            const { poster_path, id } = response;

            const res = await fetch("http://localhost:3000/favorites", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ poster_path, id }),
            });

            // favoriteBtnIcon.classList.remove("fa-heart");
            // favoriteBtnIcon.classList.add("fa-check");
          })
          .catch((err) => console.error(err));
      }
    });
  });
}

fetchMovie();
