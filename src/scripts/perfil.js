const userName = document.getElementById("userName");
const token = localStorage.getItem("access_token");

fetch("http://localhost:3000/verify", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ access_token: token }),
}).then(async (data) => {
  const { name } = await data.json();

  userName.innerHTML = name;
});
