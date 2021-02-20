const express = require("express");
const request = require("request");

const app = express();
const dataUrl = "https://fakestoreapi.com/products";

const PORT = 8080;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  
  request({ url: dataUrl }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: error.message });
    }
    res.json(JSON.parse(body));
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
