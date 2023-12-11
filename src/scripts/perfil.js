const userName = document.getElementById("userName");
const token = localStorage.getItem("access_token");
leaveBtn.style.display = '';

fetch("http://localhost:3000/verify", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ access_token: token }),
}).then(async (data) => {
  const { name } = await data.json();

  userName.innerHTML = name;

  const localRes = await fetch(`http://localhost:3000/reviews`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

  const reviewsRes = [...localRes];

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

      if (review.author_details?.name === name) {
        acc += reviewCard;
      }

      return acc;
    }, "");

    reviewsContainer.innerHTML = reviews;

    reviewPlaceholder.remove();
  } else {
    reviewPlaceholder.innerHTML = "Você ainda não postou nenhuma review.";
  }
});
