const fs = require("fs");
const jwt = require("jsonwebtoken");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const userdb = JSON.parse(fs.readFileSync("./users.json"));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

const SECRET_KEY = "123456789";

function isAuthenticated({ email, password }) {
  return userdb.users.find(
    (user) => user.email === email && user.password === password
  );
}

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY);
}

// Get bearer token
server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const isAuth = isAuthenticated({ email, password });

  if (isAuth) {
    const access_token = createToken({ email, password, name: isAuth.name });

    res.status(200).json({ access_token });
  } else {
    const status = 401;
    const message = "Incorrect email or password";

    res.status(status).json({ status, message });
  }
});

server.post("/verify", (req, res) => {
  const { access_token } = req.body;

  const validation = jwt.verify(access_token, SECRET_KEY);

  if (validation) {
    res.status(200).json(validation);
  } else {
    const status = 401;
    const message = "Incorrect information";

    res.status(status).json({ status, message });
  }
});

server.post("/auth/register", (req, res) => {
  const newUser = req.body;

  if (newUser.name && newUser.email && newUser.password) {
    userdb.users.push(newUser);
    const updatedData = JSON.stringify(userdb, null, 2);
    fs.writeFileSync("./users.json", updatedData);

    const access_token = createToken({
      email: newUser.email,
      password: newUser.password,
      name: newUser.name,
    });

    res.status(200).json({ access_token });
  } else {
    const status = 401;
    const message = "Wrong data";

    res.status(status).json({ status, message });
  }
});

server.use((req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, SECRET_KEY);
      next();
    } catch (e) {
      const status = 401;
      const message = "Error access_token is revoked";
      res.status(status).json({ status, message });
    }
  } else {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running 😎");
});
