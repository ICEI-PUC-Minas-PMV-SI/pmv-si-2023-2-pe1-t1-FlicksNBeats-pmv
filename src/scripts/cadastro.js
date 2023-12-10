// Login in the application
async function cadastrar() {
  const newUser = {
    name: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    passwordConf: document.getElementById("passwordConf").value,
  };

  if (newUser.password === newUser.passwordConf) {
    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const { status } = res;

      if (status === 401) {
        throw new Error("Invalid credentials!");
      }

      const data = await res.json();

      const { access_token } = data;
      localStorage.setItem("access_token", access_token);

       window.location.href = "login.html";
       window.alert("Cadastro realizado com sucesso.");
      //  location.href = "http://localhost:5500";
    } catch (e) {
      window.alert(e);
    }
  } else {
    window.alert("Senhas diferentes!");
  }
}
