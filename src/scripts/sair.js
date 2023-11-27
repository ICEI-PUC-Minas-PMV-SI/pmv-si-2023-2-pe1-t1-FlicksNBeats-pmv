const leaveBtn = document.getElementById("leaveBtn");

leaveBtn.addEventListener("click", () => {
  localStorage.removeItem("access_token");
  location.href = "http://localhost:5500/src";
});
