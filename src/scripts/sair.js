const leaveBtn = document.getElementById("leaveBtn");
const loginjs = document.getElementById("login")
const perfiljs = document.getElementById("perfil")
loginjs.style.display = 'none';
leaveBtn.style.display = 'none';
perfiljs.style.display = 'none';

leaveBtn.addEventListener("click", () => {
   localStorage.removeItem("access_token");
  //  location.href = "http://localhost:5500/src";
  leaveBtn.style.display = 'none';
  loginjs.style.display = '';
  perfiljs.style.display = 'none';
});

// Mobile
const leaveBtn2 = document.getElementById("leaveBtn2");
const loginjs2 = document.getElementById("login2")
const perfiljs2 = document.getElementById("perfil2")
// loginjs2.style.display = 'none';
// leaveBtn2.style.display = 'none';
// perfiljs2.style.display = 'none';

leaveBtn2.addEventListener("click", () => {
   localStorage.removeItem("access_token");
  //  location.href = "http://localhost:5500/src";
  leaveBtn2.style.display = 'none';
  loginjs2.style.display = '';
  perfiljs2.style.display = 'none';
});