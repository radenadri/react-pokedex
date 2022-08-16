import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import DescriptionSection from "../components/DescriptionSection";
import StatsSection from "../components/StatsSection";
import EvolutionSection from "../components/EvolutionSection";
import { getEvoDetail, getEvolutionList } from "../services/getEvolutions";
import { getPokemonDetailById } from "../services/getPokemons";
import { getPokemonSpecies } from "../services/getSpecies";
import handlePokemonCard from "../utils/handlePokemonCard";

const Detail = () => {
  const params = useParams();
  const { id } = params;

  const [pokemonSpecies, setPokemonSpecies] = useState({});
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [evolutionChain, setEvoChain] = useState([]);
  const [evolutionDetail, setEvoDetail] = useState([]);
  const [speciesFetched, setSpeciesFetched] = useState(false);
  const [evolutionChainFetched, setEvoChainFetched] = useState(false);
  const [hasMultipleEvo, setHasMultipleEvo] = useState(false);
  const pokemonPrimaryType = pokemonDetail?.types?.[0]?.type.name;
  const pokemonTypesArray = pokemonDetail?.types?.map((type) => type?.type?.name);
  const pokemonImg = pokemonDetail?.sprites?.other["official-artwork"].front_default;

  useEffect(() => {
    getPokemonDetailById(id, setPokemonDetail);
    getPokemonSpecies(id, setPokemonSpecies, setSpeciesFetched);
  }, []);

  useEffect(() => {
    if (speciesFetched) {
      getEvolutionList(pokemonSpecies.evolution_chain.url, setEvoChain, setEvoChainFetched);
    }
  }, [speciesFetched]);

  useEffect(() => {
    if (evolutionChainFetched) {
      getEvoDetail(evolutionChain, setEvoDetail);
    }
  }, [evolutionChainFetched]);

  useEffect(() => {
    if (evolutionChain.length > 2) setHasMultipleEvo(true);
  }, [evolutionChain.length]);

  return (
    <Layout>
      <Link to="/" className="hover:underline">&larr; Back to homepage</Link>
      <div className="rounded-lg border border-neutral-100" style={{ backgroundColor: handlePokemonCard(pokemonPrimaryType) }}>
        <div className="p-6">
          <DescriptionSection pokemonDetail={pokemonDetail} pokemonTypesArray={pokemonTypesArray} pokemonImg={pokemonImg} />
        </div>
        <div className="bg-white rounded-t-2xl shadow-md p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <AboutSection pokemonSpecies={pokemonSpecies} pokemonDetail={pokemonDetail} />
          </div>
          <div className="flex flex-col gap-4">
            <StatsSection pokemonDetail={pokemonDetail} />
          </div>
          <div className="flex flex-col gap-4">
            <EvolutionSection evolutionDetail={evolutionDetail} hasMultipleEvo={hasMultipleEvo} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
