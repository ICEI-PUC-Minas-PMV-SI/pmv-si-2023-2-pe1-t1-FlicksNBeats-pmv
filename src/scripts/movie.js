const movieId = localStorage.getItem("selectedMovieId");
const token = localStorage.getItem("access_token");

const movieToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDQzMzgzZWIxNTlmY2MxM2UwMDNhODk2Y2Y5ZDI0MiIsInN1YiI6IjY1NTBmNjcyMDgxNmM3MDExYTA5NmJlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.760w9_XlhviKBTx_t8D_y_n5oTM1TKFyICrD2DkYK8g";

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
      const movieInfo = document.getElementById("movieInfo");
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

      const body = document.body;

      body.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${response.backdrop_path}')`;
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundSize = "cover"; // Adjust based on your preference

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

async function fetchReviews() {
  const reviewPlaceholder = document.getElementById("reviewPlaceholder");

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=pt-BR&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${movieToken}`,
        },
      }
    ).then((response) => response.json());

    const localRes = await fetch(`http://localhost:3000/reviews`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());

    const reviewsRes = [...localRes, ...res.results];

    if (reviewsRes.length) {
      const reviewsContainer = document.getElementById("reviewsContainer");

      const reviews = reviewsRes.reduce((acc, review) => {
        const rating = (Number(review.author_details.rating) / 2).toFixed();

        const reviewCard = `
        <div class="review-card">
          <div class="review-card-user">
            <img 
            src="${
              review.author_details?.avatar_path
                ? `https://image.tmdb.org/t/p/original${review.author_details?.avatar_path}`
                : "/src/assets/user/useravatar.png"
            }" alt="" />
            <p>${
              review.author_details?.name?.length
                ? review.author_details?.name
                : "Anônimo(a)"
            }</p>
          </div>
          <div class="review-card-rating">
            <div class="Stars" style="--rating: ${rating}.0;"></div>
            <i class="fa-solid fa-comment"></i>
          </div>
          <div class="review-card-content">
          ${review.content}
          </div>
        </div>
        `;

        acc += reviewCard;

        return acc;
      }, "");

      reviewsContainer.innerHTML = reviews;

      reviewPlaceholder.remove();
    } else {
      reviewPlaceholder.innerHTML =
        "Nenhuma review disponível para esse filme.";
    }
  } catch (e) {
    reviewPlaceholder.innerHTML = "Não foi possível carregar as reviews =(";
  }
}

function bindReviewForm() {
  const postBtn = document.getElementById("postReview");

  postBtn.addEventListener("click", async () => {
    const content = document.getElementById("reviewContent")?.value;

    if (content.length) {
      try {
        const { name } = await fetch("http://localhost:3000/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ access_token: token }),
        }).then((response) => response.json());

        const author_details = {
          rating: 10,
          name,
        };

        await fetch("http://localhost:3000/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ author_details, content }),
        });
      } catch (e) {
        window.alert("Não foi possível enviar o formulário!");
      }
    } else {
      window.alert("Preencha o formulário!");
    }
  });
}

fetchMovie();
fetchFavorite();
fetchReviews();
bindReviewForm();
