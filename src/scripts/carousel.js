const elem = document.querySelector(".gallery");

const movieToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDQzMzgzZWIxNTlmY2MxM2UwMDNhODk2Y2Y5ZDI0MiIsInN1YiI6IjY1NTBmNjcyMDgxNmM3MDExYTA5NmJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.760w9_XlhviKBTx_t8D_y_n5oTM1TKFyICrD2DkYK8g";

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
