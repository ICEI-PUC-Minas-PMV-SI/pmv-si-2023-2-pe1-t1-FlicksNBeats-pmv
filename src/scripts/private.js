async function setupUser() {
  const token = localStorage.getItem("access_token");
  const headerLoginBtn = document.getElementById("headerLoginBtn");
  const headerLoginBtnTitle = document.getElementById("headerLoginBtnTitle");

  const createAccountBtn = document.getElementById("createAccountBtn");
  const description = document.getElementById("description");

  if (token) {
    if (headerLoginBtn && headerLoginBtnTitle) {
      headerLoginBtnTitle.innerHTML = "Meu Perfil";
      headerLoginBtn.href = "./pages/perfil.html";
    }

    if (createAccountBtn && description) {
      createAccountBtn.remove();

      const res = await fetch("http://localhost:3000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token: token }),
      });

      const data = await res.json();

      description.innerHTML = `Bem-vindo de volta, ${data.name.split(" ")[0]}!`;
      description.classList.add("description-welcome");
      leaveBtn.style.display = '';
      perfiljs.style.display = '';
    }

    return;
  }
}

setupUser();
