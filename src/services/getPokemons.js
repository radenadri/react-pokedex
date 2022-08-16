import { getPokeByIdUrl, getPokeType } from "./baseUrl";

export async function getPokemonList(nextPokemonsUrl) {
  try {
    const response = await fetch(nextPokemonsUrl);
    const pokemons = await response.json();
    return pokemons;
  } catch (err) {
    console.error(err);
  }
}

export async function getPokemonType() {
  try {
    const response = await fetch(getPokeType);
    const pokemonTypes = await response.json();

    return pokemonTypes;
  } catch (err) {
    console.log(err);
  }
}

export async function getPokemonsDetail(pokemonList, addPokemon) {
  try {
    pokemonList.forEach(async (pokemon) => {
      const response = await fetch(getPokeByIdUrl + pokemon.name);
      const data = await response.json();
      addPokemon(data);
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemonDetailById(id, setState) {
  try {
    const response = await fetch(getPokeByIdUrl + id);
    const data = await response.json();
    setState(data);
  } catch (error) {
    console.error(error);
  }
}
