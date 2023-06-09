const express = require("express");
const cors = require("cors");
const chef = require("./data/chef.json");
const recipes = require("./data/recipes.json");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running properly.");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  // this  received id even though it is number but we will get it as string
  console.log(id);

  const chefs = chef.find((c) => c.id == id) || {};
  // we will find an specific chef searching by id
  res.send(chefs);
});

app.get("/recipe", (req, res) => {
  res.send(recipes);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  const recipe = recipes.filter((r) => r.id == id) || {};
  res.send(recipe);
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
