import create from "zustand";
import { devtools } from "zustand/middleware";

let store = (set) => ({
  pokemonList: [],
  pokemonsCount: 0,

  addPokemons: (newPokemon) =>
    set((state) => ({ pokemonList: [...new Set([...state.pokemonList, newPokemon])].sort((a, b) => a.id - b.id) })),
  filterPokemons: (q) => set((state) => ({ pokemonList: state.pokemonList.filter((pokemon) =>
    pokemon.types?.map((t) => t.type.name).includes(q.toLowerCase())
  ) })),
  setPokemonsCount: (count) => set({ pokemonsCount: count }),
});

store = devtools(store);

const usePokemonStore = create(store);

export default usePokemonStore;
