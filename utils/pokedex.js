"use strict";
const request = require("postman-request");

const url = "https://pogoapi.net";
const allPokemonUrl = `${url}/api/v1/pokemon_names.json`;
const allShinyPokemonUrl = `${url}/api/v1/shiny_pokemon.json`;
const allDittoPokemonUrl = `${url}/api/v1/possible_ditto_pokemon.json`;

const makePokemonRequest = (url) => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: url,
        json: true,
      },
      (error, { body }) => (!error ? resolve(body) : reject(error))
    );
  });
};

const getAllPokemon = async () => {
  try {
    return await makePokemonRequest(allPokemonUrl);
  } catch (error) {
    return error;
  }
};

const getPokemonById = async (id) => {
  try {
    const pokemon = await makePokemonRequest(allPokemonUrl);
    return pokemon[id];
  } catch (error) {
    return error;
  }
};

const getShinyInformation = async (id) => {
  try {
    const pokemon = await makePokemonRequest(allShinyPokemonUrl);
    return pokemon[id];
  } catch (error) {
    return error;
  }
};
//console.log(getAllPokemon())



module.exports = {
  getAllPokemon: getAllPokemon,
  getPokemonById: getPokemonById,
  getShinyInformation: getShinyInformation
};
