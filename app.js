const express = require("express");
const app = express();
const pokedex = require("./utils/pokedex");

app.get("/", (req, res) => {
  res.send("POGO CHECKER");
});

app.get("/api/pokemon/all", async (req, res) => {
  try {
    const pokemon = await pokedex.getAllPokemon();
    return res.send(pokemon)
  } catch (e) {
    return res.send({ e });
  }
});

app.get("/api/pokemon/:id", async (req, res) => {
  const pokemonNumber = req.params;

  try {
    const pokemon = await pokedex.getPokemonById(pokemonNumber.id);
    res.send(pokemon);
  } catch (e) {
    return res.send({ e });
  }
});

app.get("/api/pokemon/:id/shiny", async (req, res) => {
  const pokemonNumber = req.params;

  try {
    const pokemon = await pokedex.getShinyInformation(pokemonNumber.id);
    res.send(pokemon);
  } catch (e) {
    return res.send({ e });
  }
});

app.get("/api/pokemon/ditto", async (req, res) => {
  try {
    const pokemon = await pokedex.getDittoPokemon();
    console.log(pokemon)
    res.send(pokemon)
  } catch (e) {
    return res.send({ e });
  }
});

module.exports = app;
