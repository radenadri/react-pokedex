import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import shallow from "zustand/shallow";

import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";

import usePokemonStore from "./store/usePokemonStore";
import { getPokemonsDetail, getPokemonList, getPokemonType } from "./services/getPokemons";
import { getPokeListUrl, getPokeType } from "./services/baseUrl";

const App = () => {

  const [pokemonList, addPokemons, filterPokemons, pokemonsCount, setPokemonsCount] = usePokemonStore(
    (state) => [state.pokemonList, state.addPokemons, state.filterPokemons, state.pokemonsCount, state.setPokemonsCount],
    shallow
  );

  const [nextPokemonsUrl, setNextPokemonsUrl] = useState(getPokeListUrl);
  const [pokemonType, setPokemonType] = useState([]);

  const fetchPokemons = async () => {
    try {
      const pokemons = await getPokemonList(nextPokemonsUrl);
      setNextPokemonsUrl(pokemons.next);
      setPokemonsCount(pokemons.count);
      getPokemonsDetail(pokemons.results, addPokemons);

    } catch (err) {
      console.error(err);
    }
  }

  const fetchType = async () => {
    try {
      const pokemonTypes = await getPokemonType(getPokeType);
      setPokemonType(pokemonTypes.results);
    } catch (err) {
      console.error(err);
    }
  }

  const handleTypeChange = async (e) => {
    const { name } = pokemonType.find(type => type.name === e.target.value);

    filterPokemons(name);
  }

  useEffect(() => {
    fetchPokemons();
    fetchType();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Homepage
            allPokemons={pokemonList}
            fetchPokemons={fetchPokemons}
            handleTypeChange={handleTypeChange}
            pokemonsCount={pokemonsCount}
            pokemonType={pokemonType}
          />
        } />
        <Route path="/pokemon/:id" exact element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
