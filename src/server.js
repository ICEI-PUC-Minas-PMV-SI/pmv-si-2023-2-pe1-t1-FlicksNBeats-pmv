const fs = require("fs");
const jwt = require("jsonwebtoken");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const userdb = JSON.parse(fs.readFileSync("./users.json"));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

const SECRET_KEY = "123456789";
const expiresIn = "1h";

function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY);
}

// Get bearer token
server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (isAuthenticated({ email, password })) {
    const access_token = createToken({ email, password });

    res.status(200).json({ access_token });
  } else {
    const status = 401;
    const message = "Incorrect email or password";

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
