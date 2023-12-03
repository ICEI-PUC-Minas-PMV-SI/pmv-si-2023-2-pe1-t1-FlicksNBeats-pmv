const movieToken = "";

let currentOptions = [];

function fulfillFilterIds() {
  const filterOptions = document.querySelectorAll(".filter-option");

  filterOptions.forEach((elem) => {
    currentOptions.push(elem.id);

    elem.addEventListener("click", (e) => {
      const elem = e.target;

      if (elem.dataset.value === "true") {
        elem.dataset.value = false;
        currentOptions = currentOptions.filter((option) => option !== elem.id);
      } else {
        elem.dataset.value = true;

        if (!currentOptions.includes(elem.id)) {
          currentOptions.push(elem.id);
        }
      }
    });
  });
}

async function getSearchResults() {
  const searchedMovie = localStorage.getItem("searchedMovie");

  if (searchedMovie) {
    const searchInput = document.getElementById("searchInput");
    const loadingPlaceholder = document.getElementById("loadingPlaceholder");

    searchInput.value = searchedMovie;

    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${movieToken}`,
        },
      };

      await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&include_adult=false&language=pt-BR&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          const filterOptions = currentOptions.map((option) => Number(option));

          const movies = response.results.filter(
            (movie) =>
              movie.backdrop_path &&
              movie.genre_ids.some((genreId) => filterOptions.includes(genreId))
          );

          const htmlList = movies.reduce((acc, movie) => {
            acc += `<img src="https://image.tmdb.org/t/p/original${movie.poster_path}" id="${movie.id}"/>`;

            return acc;
          }, "");

          const foundItems = document.getElementById("foundItems");

          loadingPlaceholder?.remove();

          foundItems.innerHTML = htmlList;

          movies.forEach((movie) => {
            document.getElementById(movie.id).addEventListener("click", () => {
              localStorage.setItem("selectedMovieId", movie.id);

              location.href = "http://localhost:5500/src/pages/movie.html";
            });
          });
        })
        .catch((err) => console.error(err));
    } catch (e) {
      loadingPlaceholder.innerHTML = "Nenhum filme encontrado!";
    }
  }
}

async function initialize() {
  fulfillFilterIds();
  await getSearchResults();
}

initialize();
