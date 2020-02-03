// testando codesandbox com github
const express = require("express");

const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
const engine = require("express-react-views").createEngine();
app.engine("jsx", engine);

const routes = require("./routes");

app.get("/hello", (req, res) => {
  return res.send({ msg: "Hello world!" });
});

app.get("/form", routes.form);

app.listen(process.env.PORT || 3000);
