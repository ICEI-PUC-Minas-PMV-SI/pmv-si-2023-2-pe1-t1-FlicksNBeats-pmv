const elem = document.querySelector(".gallery");

const movieToken = "";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${movieToken}`,
  },
};

fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
  .then((response) => response.json())
  .then((response) => {
    const movies = response.results;

    const htmlList = movies.reduce((acc, movie) => {
      acc += `<div class="gallery-cell" id="${movie.id}"><img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" /></div>`;

      return acc;
    }, "");

    elem.innerHTML = htmlList;

    movies.forEach((movie) => {
      document.getElementById(movie.id).addEventListener("click", () => {
        localStorage.setItem("selectedMovieId", movie.id);

        location.href = "http://localhost:5500/src/pages/movie.html";
      });
    });

    const flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      pageDots: false,
    });
  })
  .catch((err) => console.error(err));
