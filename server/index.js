const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const app = express();

app.use(cors())

let posts = []

app.listen(PORT, async () => {
  console.log(`Server listening on ${PORT}`);

  posts = await fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json())
});

app.get("/posts", (req, res) => {
  const { page = 1, perPage = 10 } = req.query

  res.json(posts.slice((page - 1) * perPage, page * perPage));
});